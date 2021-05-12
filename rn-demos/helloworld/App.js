/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import myimage1 from './assets/download.jpeg';

import images from './src/utils/imageStore';


import type {Node} from 'react';

import {
  
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';


function App(){

  const [ count, setCount ] = useState(0)

   
  return (
    <View style={styles.container}> 

        {/* <Image 
          style={styles.myImageStyle}
          source={ { uri : 'https://cdn.shopify.com/s/files/1/0035/2754/0782/articles/International_Flower_Day_1239x.jpeg?v=1579365491'} } />

        <Image style={styles.myImageStyle}
            source={images.image1} /> */}

            <TouchableOpacity 
              style={styles.button}
              activeOpacity = {0.5}
              onPress={ ()=> {
                setCount(count+1)
              }}>

                  <Text>Press Me!</Text>

              </TouchableOpacity>

            <Text style={styles.text}> {`Pressed the button ${count} times `} </Text>


    </View>
  )
}

const styles = StyleSheet.create({
  container : {
      flex: 1,
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor: 'lightyellow'
  },
  myImageStyle : {
    width: 200, 
    height: 200,
    margin:10
  },
  button : {
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'lightgreen'
  },
  text : {
    fontSize: 18,
    padding: 15
  }
})

export default App;
