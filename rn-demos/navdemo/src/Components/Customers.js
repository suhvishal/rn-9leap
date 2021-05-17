import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'

function Customers() {

    const route =  useRoute()
    const navigation = useNavigation()
    
    return (
        <View style = {styles.customersContainer}>
                <Text style={styles.textStyle}> This is Customers Screen </Text>
                <Text> Customer Id : {route.params.customerId} </Text>

                <Button 
                    title="Go Back"
                    onPress={ ()=> navigation.goBack()} />

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