import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { PokemonsContainers } from './containers/PokemonsContainers';

export function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh'
  });

  return (
      <ApolloProvider client={client}>
        <main>
          <PokemonsContainers />
        </main>
      </ApolloProvider>
  )
}

export default App;