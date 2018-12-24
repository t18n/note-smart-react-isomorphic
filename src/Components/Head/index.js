import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const isProd = process.env.NODE_ENV === 'production';

const Head = ({
  title, desc, image, children,
}) => (
  <Helmet encodeSpecialCharacters>
    <meta httpEquiv="" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={desc} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={desc} />
    <meta property="og:image" content={image} />
    <link
      rel="shortcut icon"
      type="image/x-icon"
      href="https://i.imgur.com/mMOR6Y7.png"
    />
    <link rel="icon" sizes="192x192" href="https://i.imgur.com/mMOR6Y7.png" />
    <link rel="apple-touch-icon-precomposed" href="https://i.imgur.com/mMOR6Y7.png" />
    <link
      rel="manifest"
      href={`${isProd ? 'https://production/' : 'http://localhost:8080/'}manifest.json`}
    />
    {children && children}
    <title>{title}</title>
  </Helmet>
);

Head.defaultProps = {
  title: 'Brightizen',
  desc: 'Brightizen is the book community',
  image: 'https://i.imgur.com/lvzUVyf.jpg',
  children: undefined,
};

Head.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Head;
