import { ApolloClient, InMemoryCache } from '@apollo/client'

const PROD_ENDPOINT = 'https://graphql-apollo-api-3ybl.onrender.com/'

export const client = new ApolloClient({
  uri: PROD_ENDPOINT,
  cache: new InMemoryCache(),
})
