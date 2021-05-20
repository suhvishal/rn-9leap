import React from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, save, subtract } from '../../store/actions/actions'
import { counterActions } from '../../newStore/store-slicers/counter-slice';


function AnotherCounter(props) {

    const counter =  useSelector(state => state.counterSlice.counter)
    // const data = useSelector(state => state.dataReducer.data)

    const dispatch = useDispatch()

    return (
        <View style={styles.counterContainer}>
            <Text style={styles.text}> Counter : {counter}  </Text>
             <Button style={styles.button}
                title="Decrement"
                onPress={ ()=> dispatch(counterActions.decrement())  } />
            {/*<Button style={styles.button}
                title="Subtract"
                onPress={ ()=> dispatch(subtract(5))  } />
            <Button style={styles.button}
                title="Save Counter to Data"
                onPress={ ()=> dispatch(save(counter))  } />

            <FlatList 
                data={data}
                renderItem={ ({item})=> <View>
                        <Text> { item } </Text>
                     </View> } /> */}
        </View>
    );
}


const styles = StyleSheet.create({
    counterContainer : {
      flex: 1,
      backgroundColor : 'lightblue'
    },
    text : {
        fontSize : 30,
        margin: 20
    },
    button : {
        marginTop : 10
    }
  })
export default AnotherCounter;