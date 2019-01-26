import React from 'react';
import PropTypes from 'prop-types';
// import icon from 'static/images/react-icon.png';
import styled from 'styled-components';

const Component = ({ message, appName }) => (
  <Welcome>
    <h2>
      {appName}
    </h2>
    {message}
  </Welcome>
);

const Welcome = styled.div`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

Component.defaultProps = {
  appName: 'Brightizen',
  message: 'welcome',
};

Component.propTypes = {
  appName: PropTypes.string,
  message: PropTypes.string,
};

export default Component;
