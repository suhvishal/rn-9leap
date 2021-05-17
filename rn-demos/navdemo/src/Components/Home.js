import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'

function Home({ navigation }) {
     
    return (
        <View style = {styles.homeContainer}>
                <Text style={styles.textStyle}> This is Home Screen </Text>
                <Button 
                    title="Login"
                    onPress={ ()=> navigation.navigate("Login")  } />
                 <Button 
                    title="Customers"
                    onPress={ ()=> navigation.navigate("Customers", {
                        customerId : 101
                    } )  } />
        </View>
    );
}

const styles = StyleSheet.create({
    homeContainer : {
        flex : 1,
        backgroundColor : 'lightyellow'
    }, 
    textStyle : {
        fontSize : 24
    }
})

export default Home;