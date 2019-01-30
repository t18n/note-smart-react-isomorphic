import React from 'react';
// import { Query } from 'react-apollo';
import PropTypes from 'prop-types';

import { fetchAllBooks } from 'src/utils/loadData';
import Head from 'src/Components/Head';
import { FlexBox } from 'src/Components/Layout';
import { Heading } from 'src/Components/Typo';

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
      const books = window.ROUTE_LOADED_DATA;
      this.setState({
        books,
      });
      delete window.ROUTE_LOADED_DATA;
    } else {
      console.log('Data not preloaded. Fetching...');
      await fetchAllBooks().then((books) => {
        this.setState({
          books,
        });
      });
    }
  }

  render() {
    const { books } = this.state;
    return (
      <React.Fragment>
        <Head title="Books" />
        <FlexBox width={1 / 2} mx="auto" flexDirection="column" alignItems="flex-start">
          {
            books.map(book => <Heading as="h3" key={book.id}>{book.title}</Heading>)
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
