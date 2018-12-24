import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { Helmet } from 'react-helmet';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import serialize from 'serialize-javascript';

import AppWrapper from 'src/App/AppWrapper';
import Markup from 'src/Components/HTML';

import extractLocalesFromReq from 'src/client-locale/extractLocalesFromReq';
import guessLocale from 'src/client-locale/guessLocale';
import { LOCALE_COOKIE_NAME, COOKIE_MAX_AGE } from 'src/client-locale/constants';
import {
  log, error, warning,
} from 'src/Components/Logger';

import routes from 'src/routes';
import Manifest from './manifest';
import Robots from './robots';
import Sitemap from './sitemap';

export default ({ clientStats }) => (req, res) => {
  // Prepare Language
  const userLocales = extractLocalesFromReq(req);
  let lang = guessLocale(['vi', 'en'], userLocales, 'en');

  if (req.originalUrl.substr(1, 2) === 'vi') lang = 'vi';
  if (req.originalUrl.substr(1, 2) === 'en') lang = 'en';

  // Match current route and check if loadData is required
  const currentRoute = routes.find(route => matchPath(req.url, route)) || {};
  const promise = (currentRoute.loadData) ? currentRoute.loadData() : Promise.resolve(null);

  // Prepare out stylesheets and apply to DOM
  const stylesheet = new ServerStyleSheet();

  // TODO: Fetch isomorphic-data
  promise.then((data) => {
    // Prepare data
    const context = { data };
    const routeData = serialize(data);

    const body = renderToString(
      <StaticRouter location={req.originalUrl} context={context}>
        <StyleSheetManager sheet={stylesheet.instance}>
          <AppWrapper lang={lang} />
        </StyleSheetManager>
      </StaticRouter>,
    );
    // Can only be called after your element is rendered
    const styles = stylesheet.getStyleTags(); // Get all the tags from the sheet

    // Inject Head
    const helmet = Helmet.renderStatic();

    // Get hashed chunk from Webpack CodeSpliting
    const { js } = flushChunks(clientStats, {
      chunkNames: flushChunkNames(),
    });

    // If status of request did not return to other than 200
    const status = context.status || 200;

    // If a page doesn't exist, will redirect to 404 on client and log to admin console
    if (context.status === 404) log(error('Error 404: ') + warning(req.originalUrl));

    // If request for a site map
    if (req.url === '/sitemap.xml') {
      return res.header('Content-Type', 'application/xml').status(status).send(Sitemap);
    }

    // If request for Robots.txt file, normally search Bot
    if (req.url === '/robots.txt' || req.url === '/Robots.txt') {
      return res.header('Content-Type', 'text/plain').status(status).send(Robots);
    }

    // If request for manifest.json file
    if (req.url === '/manifest.json' || req.url === '/Manifest.json') {
      return res.header('Content-Type', 'application/manifest+json').status(status).send(Manifest);
    }

    // If request belongs to redirect component (where <RedirectWithStatus/> defined on App/js )
    // Redirect user to the specified page
    if (context.url) {
      const redirectStatus = context.status || 302;
      res.redirect(redirectStatus, context.url);
      return;
    }

    // If all good and Request is a page, go ahead and send it to the client
    res
      .status(status)
      .cookie(LOCALE_COOKIE_NAME, lang, { maxAge: COOKIE_MAX_AGE, httpOnly: false })
      .send(Markup({
        lang,
        pageTitle: helmet.title,
        pageMeta: helmet.meta.toString(),
        pageLink: helmet.link.toString(),
        styles,
        body,
        js,
        routeData,
      }));
  });
};
