import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

function Movies(props) {
    return (
        <View style = {styles.MoviesContainer}>
                <Text style={styles.textStyle}> This is Movies Screen </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    MoviesContainer : {
        flex : 1,
        backgroundColor : 'lightgreen'
    }, 
    textStyle : {
        fontSize : 24
    }
})

export default Movies;