import 'react-native-gesture-handler';

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Components/Home';
import Customers from './src/Components/Customers';
import Movies from './src/Components/Movies';
import Login from './src/Components/Login';
import Register from './src/Components/Register';



const Stack = createStackNavigator()

class App extends Component {
  render() {
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Customer" component={Customers} />
          <Stack.Screen name="Movies" component={Movies} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;


