import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import AnotherCounter from './src/components/AnotherCounter';
import Counter from './src/components/Counter';

import newStore from './newStore'

class App extends Component {
  render() {
    return (
      <Provider store={newStore}>
        <View style={styles.container}>
          <Counter />
          <AnotherCounter />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1
  }
})

export default App;