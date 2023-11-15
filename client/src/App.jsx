import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { UserProvider } from './components/userContext';
import { Outlet } from 'react-router-dom';
import './index.css';

import Header from './components/header/index';
import Footer from './components/footer/index';
import Navbar from './components/Navbar';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <>
          <Header />
          <Navbar />
          <Outlet />
          <Footer />
        </>
      </UserProvider>
    </ApolloProvider>
  );
}

export default App;