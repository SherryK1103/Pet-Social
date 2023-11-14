import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import React from 'react';

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
      <>
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
      </>
    </ApolloProvider>
  );
}

export default App;