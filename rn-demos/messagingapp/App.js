import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MessageList from './src/Components/MessageList';
import Status from './src/Components/Status';
import { createTextMessage, createImageMessage, createLocationMessage } from './src/utils/messageUtils';

class App extends Component {

  state = {
    messages : [
      createTextMessage('Helloworld'),
      createTextMessage('Welcome to ReactNative'),
      createImageMessage('http://www.mobileswall.com/wp-content/uploads/2014/11/640-Small-White-Flower-l.jpg'),
      
    ]
  }


  handlePressMessage = () => {

  }

  renderMessageList() {
    const {messages } = this.state;
    return (
       <View style={styles.content}>
         <MessageList  
            messages={messages} 
            onPressMessage={this.handlePressMessage} />
        
       </View>
    );
  }

  renderToolbar() {
    return (
      <View style={styles.toolbar}>
        <Text>ToolBar</Text>
      </View>
    );
  }

  renderInputMethod() {
    return (
      <View style={styles.inputMethod}>
        <Text>InputMethod</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>

        <Status />

        {this.renderMessageList()}

        {this.renderToolbar()}

        {this.renderInputMethod()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
  },
  content: {
    flex: 7,
    backgroundColor: 'lightgreen',
  },
  toolbar: {
    flex: 1,
    backgroundColor: 'gray',
    borderTopWidth: 1,
    borderTopColor: 'white',
  },
  inputMethod: {
    flex: 1,
    backgroundColor: 'orange',
  },
});

export default App;
