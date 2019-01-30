/* eslint react/prop-types: 0 */
import React from 'react';
import styled from 'styled-components';
import Head from 'src/Components/Head';
import Translate from 'src/Components/Languages';

const Welcome = styled.div`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

const Home = ({ match }) => {
  const { lang } = match.params;

  return (
    <React.Fragment>
      <Head title="Home page" />
      <Welcome as="main">
        <h2>{Translate(lang, 'language.title')}</h2>
        Welcome
      </Welcome>
    </React.Fragment>
  );
};

export default Home;
