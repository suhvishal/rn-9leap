import 'react-native-gesture-handler';

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';

// import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './src/Components/Home';
import Customers from './src/Components/Customers';
import Movies from './src/Components/Movies';
import Login from './src/Components/Login';
import Register from './src/Components/Register';



// const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer  initialRouteName="Home">
         <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Customers" component={Customers} />
         </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;


