import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks';
import { HttpLink } from "@apollo/client";


// 'https://peaceful-sea-13348.herokuapp.com/graphql/'
const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/'
})


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
    </ApolloProvider>,
  document.getElementById('root')
);
