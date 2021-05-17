import React, { Component } from 'react';
import { Platform, StatusBar, Text, StyleSheet, View } from 'react-native';
import NetInfo from "@react-native-community/netinfo";


class Status extends Component {

    state = {
        isConnected : null
    }


    async componentDidMount(){
        this.unsubscribe =   NetInfo.addEventListener(this.handleChange)

       const { isConnected } =  await NetInfo.fetch()
       this.setState({isConnected})
       //console.log('detect the network status upon componentDidMount', result)
               //reset the state with appropriate network state

        // setTimeout(() => {
        //     this.handleChange({isConnected : false})
        // }, 3000);

        // setTimeout(() => {
        //     this.handleChange({isConnected : true})
        // }, 7000);
    }

    componentWillUnmount(){
        this.unsubscribe()
    }

    handleChange = ({ isConnected }) => {
        this.setState({isConnected})
        //console.log('detecting change in network', event )
        //reset the state with appropriate network state
    }


    render() {

        const { isConnected } = this.state;

        const backgroundColor = isConnected ? 'white' : 'red'

        const statusbar = <StatusBar 
                                backgroundColor={backgroundColor} 
                                barStyle={ isConnected ? 'dark-content' : 'light-content' }
                                animated={false}/>

        const messageContainer = <View style={styles.messageContainer}>
                                    {statusbar}
                                    {!isConnected && <View style={styles.bubble}>
                                            <Text style={styles.text}>No Netowork Connection</Text>
                                        </View>}
                            </View>

        if(Platform.OS === 'ios'){
            return <View style={ [ styles.status,   {backgroundColor}] }>
                {messageContainer}
            </View>
        }

        return messageContainer;
    }
}

// const statusHeight = Platform.OS === 'ios' ? 

const styles = StyleSheet.create({
    status : {
        zIndex: 1,
        height: 40
    }, 
    messageContainer : {
        zIndex : 1, 
        position: 'absolute',
        top : 60,
        right : 0,
        left : 0, 
        height : 80,
        alignItems : 'center'
    }, 
    bubble : {
        borderRadius : 30,
        backgroundColor : 'red',
        paddingHorizontal : 20,
        paddingVertical : 20,
    }, 
    text : {
        color : 'white'
    }
})

 

export default Status;

