import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

import { fetchAllBooks } from 'src/utils/loadData';
import Head from 'src/Components/Head';
import FlexBox from 'src/Components/FlexBox';
import { H3 } from 'src/Components/Typo';

const queryBooks = gql`
  {
    books {
      id
      title
      authors {
        id
        username
      }
    }
  }
`;

class Books extends React.Component {
  // Check if staticContext exists
  // because it will be undefined if rendered through a BrowserRouter
  state = {
    books: (this.props.staticContext && this.props.staticContext.data)
      ? this.props.staticContext.data : [],
  };

  async componentDidMount() {
    if (window.ROUTE_LOADED_DATA) {
      console.log('Data preloaded');
      this.setState({
        books: window.ROUTE_LOADED_DATA,
      });
      delete window.ROUTE_LOADED_DATA;
    } else {
      console.log('Data not preloaded. Fetching...');
      await fetchAllBooks().then((data) => {
        this.setState({
          books: data,
        });
      });
    }
  }

  render() {
    const { books } = this.state;
    return (
      <React.Fragment>
        <Head title="Books" />
        <Query query={queryBooks}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return (
              <FlexBox width={1 / 2} mx="auto" flexDirection="column" alignItems="flex-start">
                {
                  data.books.map(book => <H3 key={book.id}>{book.title}</H3>)
                }
              </FlexBox>
            );
          }}
        </Query>
        <FlexBox width={1 / 2} mx="auto" flexDirection="column" alignItems="flex-start">
          {
            books.map(book => <H3 key={book.id}>{book.title}</H3>)
          }
        </FlexBox>
      </React.Fragment>
    );
  }
}

Books.defaultProps = {
  staticContext: {},
};


Books.propTypes = {
  staticContext: PropTypes.shape({
    data: PropTypes.array,
  }),
};

export default Books;
