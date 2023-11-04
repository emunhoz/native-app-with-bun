import React from 'react';
import {FlatList, Text, View, StyleSheet, Image} from 'react-native';
import {gql, useQuery} from '@apollo/client';

const GET_LOG_MESSAGE = gql`
  query LogQuery($message: String!) {
    log(message: $message)
  }
`;

export function LogMessage() {
  const { loading, error, data } = useQuery(GET_LOG_MESSAGE, {
    variables: { message: "from api!" },
  });

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.infoText}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={[styles.infoText, styles.errorText]}>
          Error: {error.message}
        </Text>
      </View>
    );
  }

  return (
    <Text style={styles.infoText}>{data.log}</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#797979',
    textAlign: 'center',
    padding: 10
  },
  errorText: {
    color: '#ce2727',
  },
});
