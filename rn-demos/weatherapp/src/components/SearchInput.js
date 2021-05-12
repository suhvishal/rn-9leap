import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

class SearchInput extends Component {


    state = {
        text : ''
    }

    handleChangeText = (text) => {
        this.setState({text})
    }

    handleSubmitEditing = ()=>{
        const { text } = this.state; 
        const { onSubmit } = this.props

        if(!text) return;

        onSubmit(text)
        this.setState({text : ''})

    }


  render() {

    const { placeholder } = this.props
    const { text } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          value={text}
          placeholder={placeholder}
          placeholderTextColor="white"
          clearButtonMode="always"
          onChangeText={this.handleChangeText}
          style={styles.textInput}
          onSubmitEditing={this.handleSubmitEditing}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    backgroundColor: '#666',
    borderRadius: 5,
  },

  textInput: {
    flex: 1,
    color: 'white',
  },
});

export default SearchInput;
