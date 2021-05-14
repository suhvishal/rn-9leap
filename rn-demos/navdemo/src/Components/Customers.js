import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

function Customers(props) {
    return (
        <View style = {styles.customersContainer}>
                <Text style={styles.textStyle}> This is Customers Screen </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    customersContainer : {
        flex : 1,
        backgroundColor : 'lightblue'
    }, 
    textStyle : {
        fontSize : 24
    }
})

export default Customers;