import gql from 'graphql-tag';
import apolloClient from 'src/data/ApolloClient';

export const fetchAllBooks = async () => {
  const query = gql`
  {
    books {
      id
      title
      authors {
        id
        username
      }
    }
  }`;

  const books = await apolloClient.query({ query })
    .then(res => res.data.books)
    .catch(error => console.error(error));

  return books;
};

export const fetchAllPosts = async () => {
  const postContext = require.context('../../content', false, /\.md$/);
  const postFiles = await postContext
    .keys()
    .map(filename => postContext(filename));
  return postFiles;
};
