import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


function AnotherCounter(props) {
    return (
        <View style={styles.counterContainer}>
            <Text style={styles.text}> Counter : ??  </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    counterContainer : {
      flex: 1,
      backgroundColor : 'lightblue'
    },
    text : {
        fontSize : 30,
        margin: 20
    }
  })
export default AnotherCounter;