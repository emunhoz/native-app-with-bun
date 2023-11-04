import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { ApolloProvider } from '@apollo/client'
import { client } from './apollo/client'
import { LogMessage } from './components/LogMessage'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ApolloProvider client={client}>
        <View>
            <Text style={styles.mainTitle}>Hi there!</Text>
            <Text style={styles.description}>This is a sample app using React Native, GraphQL, Apollo Client, Typescript, Expo and bun!</Text>
            <LogMessage />
            <StatusBar style="auto" />
        </View>
      </ApolloProvider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainTitle: {
    fontSize: 40,
    textAlign: 'center'
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 14
  }
})
