import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Hi there!</Text>
      <Text style={styles.description}>This is a sample app using React Native, Typescript, expo and bun!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  mainTitle: {
    fontSize: 40
  },
  description: {
    fontSize: 16,
    textAlign: 'center'
  }
})
