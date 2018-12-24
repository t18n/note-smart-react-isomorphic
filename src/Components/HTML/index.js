const Markup = ({
  lang, pageTitle, pageMeta, pageLink, styles, body, js, routeData,
}) => `
  <!DOCTYPE html>
  <html lang="${lang}">
    <head>
      <title>Brightizen</title>
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#52c41a">

      ${styles}
      ${pageTitle}
      ${pageMeta}
      ${pageLink}

      <meta name="description" content="This is the description of the website." />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      ${styles}
    </head>
    <body>
      <div id="app">${body}</div>
      <script>window.ROUTE_LOADED_DATA=${routeData}</script>
      ${js}
    </body>
  </html>
`;

export default Markup;
