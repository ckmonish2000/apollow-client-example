import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import { HttpLink,ApolloProvider,ApolloClient,InMemoryCache,ApolloLink,concat } from "@apollo/client";

const httpLink = new HttpLink({ uri: "http://localhost:8000/graphql/" });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Im1rIiwiZXhwIjoxNjE5MDg3NjE5LCJvcmlnSWF0IjoxNjE5MDg3MzE5fQ.4sYryQfHUtlGUT1PmDVKUKJ69F99_0qBpCyjAXfWJ0Q",
    }
  });

  return forward(operation);
})

const client = new ApolloClient({
  cache:new InMemoryCache(),
  link:concat(authMiddleware,httpLink)
})


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
    </ApolloProvider>,
  document.getElementById('root')
);
