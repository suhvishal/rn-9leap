import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

function Register(props) {
    return (
        <View style = {styles.RegisterContainer}>
                <Text style={styles.textStyle}> This is Register Screen </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    RegisterContainer : {
        flex : 1,
        backgroundColor : 'lightblue'
    }, 
    textStyle : {
        fontSize : 24
    }
})

export default Register;