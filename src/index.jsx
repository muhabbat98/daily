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
import { AuthProvider} from './store/auth-contex';
const authLink = setContext((_, { headers }) => {

  // const [state ]= useAuth(true)
  // const token = state.token;
  const token = window.localStorage.getItem('token')
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
  cache: new InMemoryCache(),
  link:authLink.concat(from([errorLink, httpLink])) ,
 

} );

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AuthProvider>
          <App/>
        </AuthProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
