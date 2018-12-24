import React from 'react';
import PropTypes from 'prop-types';
import loadData from 'src/helpers/loadData';

class Posts extends React.Component {
  constructor(props) {
    super(props);

    // Check if staticContext exists
    // because it will be undefined if rendered through a BrowserRouter
    this.state = (props.staticContext && props.staticContext.data) ? {
      data: props.staticContext.data,
    } : { data: [] };
  }

  componentDidMount() {
    setTimeout(() => {
      if (window.ROUTE_LOADED_DATA) {
        this.setState({
          data: window.ROUTE_LOADED_DATA,
        });
        delete window.ROUTE_LOADED_DATA;
      } else {
        loadData('posts').then((data) => {
          this.setState({
            data,
          });
        });
      }
    }, 0);
  }

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <ul>{data.map(post => <li key={post.id}>{post.title}</li>)}</ul>
      </React.Fragment>
    );
  }
}

Posts.propTypes = {
  staticContext: PropTypes.shape({
    data: PropTypes.array,
  }).isRequired,
};

export default Posts;
