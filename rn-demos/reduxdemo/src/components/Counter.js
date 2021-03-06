import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import actionTypes, { add, increment, incrementAsync } from '../../store/actions/actions'
import { counterActions, addAsync } from '../../newStore/store-slicers/counter-slice';

class Counter extends Component {

    render() {

        const { counter, onIncrement, onAdd } = this.props;

        return (
            <View style={styles.counterContainer}>
                <Text style={styles.text}> Counter : {counter}  </Text>
               <Button style ={ styles.button} 
                    title="Increment"
                    onPress={ onIncrement } />

                 <Button style ={ styles.button} 
                    title="Add"
                    onPress={ ()=> onAdd(200) } />
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
        counter : store.counterSlice.counter
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onIncrement : ()=> dispatch(counterActions.increment()),
        onAdd : (number)=> dispatch(addAsync(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);