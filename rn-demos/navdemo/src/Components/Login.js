import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

function Login(props) {
    return (
        <View style = {styles.LoginContainer}>
                <Text style={styles.textStyle}> This is Login Screen </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    LoginContainer : {
        flex : 1,
        backgroundColor : 'lightblue'
    }, 
    textStyle : {
        fontSize : 24
    }
})

export default Login;