import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

class SearchInput extends Component {
  render() {

    const { placeholder } = this.props

    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          placeholder={placeholder}
          placeholderTextColor="white"
          clearButtonMode="always"
          style={styles.textInput}
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
