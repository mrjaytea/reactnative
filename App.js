import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/MainComponent';

import { Provider } from 'react-redux'
import { ConfigureStore } from './redux/configureStore';

export default function App() {
  return (
    <Provider store={ConfigureStore()}>
      <View style={styles.container}>
        <Main/>
      </View>
    </Provider> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
