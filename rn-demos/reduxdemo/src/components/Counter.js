import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { connect } from 'react-redux';

class Counter extends Component {


 
    render() {

        const { counter, onIncrement } = this.props;

        return (
            <View style={styles.counterContainer}>
                <Text style={styles.text}> Counter : { counter }  </Text>
                <Button style ={ styles.button} 
                    title="Increment"
                    onPress={ onIncrement } />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    counterContainer : {
      flex: 1,
      backgroundColor : 'lightyellow'
    },
    text : {
        fontSize : 30,
        margin: 20
    }, 
    button : {
        marginTop : 10
    }
  })

const mapStateToProps = (store) => {
    return {
        counter : store.counter
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onIncrement : ()=> dispatch({ type : 'INCRE' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);