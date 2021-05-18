import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { MessageShape } from '../utils/messageUtils';
import { FlatList, StyleSheet, View , Image, Text, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';

class MessageList extends Component {

    //messages , onPressMessage

    renderMessageBody = ({ type, text, uri, coordinate }) => {
        switch(type){
            case 'text' : 
                return (
                    <View style={styles.textMessageContainer}>
                        <Text style={styles.text}> { text } </Text>
                    </View>
                );
            
            case 'image' : 
                return (
                    <Image style={styles.image} source={ {uri} } />
                );

            case 'location' : 
                return (
                    <MapView 
                        style={styles.map}
                        initialRegion={{
                            ...coordinate,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}/>
                );
        }
    }

    keyExtractor = (item) => item.id.toString()


    renderMessageItem = ({ item })=> { 

        const { onPressMessage } = this.props

        return (
            <View style={styles.messageRow} key={item.id}>
                <TouchableOpacity 
                        onPress={ ()=> onPressMessage(item)  }>
                    {this.renderMessageBody(item)}
                </TouchableOpacity>
            </View>
        )
    }

    render() {

        const { messages } = this.props;

        return (
            <FlatList 
                style={styles.container}
                data={messages}
                renderItem={this.renderMessageItem}
                keyExtractor={this.keyExtractor} />
        );
    }
}

const styles = StyleSheet.create({

    container : {
        flex : 1
    },

    textMessageContainer : {
        backgroundColor : '#bdffce',
        borderRadius : 10,
        paddingVertical: 5, 
        paddingHorizontal: 10
    },
    text : {
        fontSize : 16,
        color : '#0a0a0a'
    },
    image : {
        width : 150,
        height : 150, 
        borderRadius: 10
    },
    map : {
        width : 250,
        height : 250, 
        borderRadius: 10
    },
    messageRow: {
        flexDirection : 'row',
        justifyContent : 'flex-end',
        marginBottom: 4,
        marginRight: 10, 
        marginLeft: 10
    }
})

MessageList.PropTypes = {
    messages : PropTypes.arrayOf(MessageShape).isRequired,
    onPressMessage: PropTypes.func.isRequired
}

export default MessageList;