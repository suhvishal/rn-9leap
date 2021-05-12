/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Platform,
  TextInput,
  KeyboardAvoidingView,
  View,
} from 'react-native';


import React, { Component } from 'react';
import SearchInput from './src/components/SearchInput';

class App extends Component {
  render() {
    return (
      <KeyboardAvoidingView 
        behavior="height"
        style={styles.container}>
          <Text style={ [styles.textStyle, styles.largeText] }> 
              Hyderabad
          </Text>
          <Text style={ [styles.textStyle, styles.smallText] }> 
              Light Cloud
          </Text>

          <Text style={ [styles.textStyle, styles.largeText] }> 
              24
          </Text>

          <SearchInput  
            placeholder="Search any city"/>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center' 
  },
  textStyle : {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue-BoldItalic' : 'roboto'
  },
  largeText : {
    fontSize: 44
  },
  smallText : {
    fontSize: 18
  }
})

export default App;