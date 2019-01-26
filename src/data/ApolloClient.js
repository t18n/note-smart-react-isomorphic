import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const brightizenBeUri = 'http://localhost:3001/graphql';

const client = new ApolloClient({
  link: new HttpLink({ uri: brightizenBeUri }),
  cache: new InMemoryCache(),
});

export default client;
