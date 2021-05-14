/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';


import {
  
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList
} from 'react-native';


const movies = [
  {id : 1, title : 'Movie1', description: 'Some description of Movie 1'},
  {id : 2, title : 'Movie2', description: 'Some description of Movie 2'},
  {id : 3, title : 'Movie3', description: 'Some description of Movie 3'},
  {id : 4, title : 'Movie4', description: 'Some description of Movie 4'},
]


function App(){

   
  return (
    <View style={styles.container}> 
        <FlatList 
          style={styles.listContainer}
          data={movies}
          renderItem={ ({item})=> <Text style={styles.rowItem}>{item.title}</Text> }
          keyExtractor={ (item)=> item.id }/>
        


    </View>
  )
}

const styles = StyleSheet.create({
  container : {
      flex: 1,
      
      backgroundColor: 'lightyellow'
  },
  listContainer : {
    flex : 1
  },
  rowItem : {
    padding : 15,
    backgroundColor : 'skyblue',
    marginBottom : 3
  }
})

export default App;
