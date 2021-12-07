import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  from
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from '@apollo/client/link/context';
import { onError } from "@apollo/client/link/error";
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoiYmlnT05vdCIsImlhdCI6MTYzODQ0NDE2OH0.yhhGChFsarF71KOdGsHPURL6DXO2INa1c1LXpWiJ8BU";
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      token: token ? `${token}` : "",
    }
  }
} );
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});
const httpLink = createUploadLink( { uri: 'https://daily-uz.herokuapp.com/app',credentials: 'same-origin' } )
const client = new ApolloClient({
  uri: 'https://daily-uz.herokuapp.com/app',

  link:authLink.concat(from([errorLink, httpLink])) ,
  cache: new InMemoryCache(),

} );

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
