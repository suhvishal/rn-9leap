import React, { Component } from 'react';
import {connect} from 'react-redux'

class MyCounter extends Component {

   
    render() {
        const { count, list, onIncrement, onDecrement,  onSave, onDelete } = this.props;
        return (
            <div style={mystyle}>
                <h1>This is My Counter Component </h1>
                <h3>Count : {count }</h3>
                <button onClick={ onIncrement }>
                    Increment 
                </button>
                <button onClick={ onDecrement }>
                    Increment 
                </button>
                <br /><br />
                <button onClick={ ()=> onSave(count) }>
                    Save
                </button>
                <hr />
                <ul>
                    {
                        list.map((item,index)=> (
                            <li onClick={ ()=> onDelete(index) } key={index}>
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

const mystyle = {
    border:'2px solid black',
    background:'bisque',
    width:'400px',
    height:'500px',
    margin:'10px',
    display:'inline-block'
}

//using this configure we define which properties  from the central store to be passed as props 
const mapStateToProps = (store) => {
    return {
        count : store.counterReducer.counter,
        list : store.countListReducer.countList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement : ()=> dispatch({type: 'INCRE'}),
        onDecrement : ()=> dispatch({type: 'DECRE'}),
        onSave : (count)=> dispatch({type: 'SAVE', data: count}),
        onDelete: (index)=> dispatch({type:'REMOVE', data : index })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCounter);




