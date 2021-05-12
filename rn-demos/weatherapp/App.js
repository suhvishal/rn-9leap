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
  ImageBackground,
} from 'react-native';

import React, {Component} from 'react';
import SearchInput from './src/components/SearchInput';
import getImageForWeather from './src/utils/getImageForWeather';
import { getLocationId, getWeather } from './src/services/weatherService';



class App extends Component {

  state = {
    location : 'Pune',
    weather : '',
    temparature : ''
  }

   componentDidMount(){
    
  }

  handleUpdateLocation = async city => {
    
    if(!city) return;
    const { location } = this.state;

    const { data } = await getLocationId(location)
    const { data: weatherDetails } = await getWeather(data[0].woeid)

    const { consolidated_weather } = weatherDetails;
    const { weather_state_name, the_temp } = consolidated_weather[0]

    this.setState({
      location : city,
      weather : weather_state_name,
      temparature :the_temp })
  }



  render() {
    const { location, weather, temparature } = this.state;
    return (
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <ImageBackground 
            style={styles.imageContainer}
            imageStyle={styles.image}
            source={getImageForWeather(weather)}>

          <View style={styles.detailsContainer}>

            <Text style={[styles.textStyle, styles.largeText]}>
              { location }
            </Text>
            <Text style={[styles.textStyle, styles.smallText]}>
              {weather}
            </Text>

            <Text style={[styles.textStyle, styles.largeText]}>
              {temparature}
            </Text>

            <SearchInput 
              placeholder="Search any city"
              onSubmit={this.handleUpdateLocation} />

          </View>
          
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer : {
    flex : 1
  },
  image : {
    flex : 1,
    width : null, 
    height: null,
    resizeMode : 'cover'
  },
  detailsContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue-BoldItalic' : 'roboto',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  
});

export default App;
