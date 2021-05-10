import React, { Component } from 'react';
import {connect} from 'react-redux'

class MyCounter extends Component {

   
    render() {
        return (
            <div style={mystyle}>
                <h1>This is My Counter Component </h1>
                <h3>Count : {this.props.count }</h3>
                <button onClick={ this.props.onIncrement }>
                    Increment 
                </button>
                <button onClick={ this.props.onDecrement }>
                    Increment 
                </button>
            </div>
        );
    }
}

const mystyle = {
    border:'2px solid black',
    background:'bisque',
    width:'400px',
    height:'300px',
    margin:'10px',
    display:'inline-block'
}

//using this configure we define which properties  from the central store to be passed as props 
const mapStateToProps = (store) => {
    return {
        count : store.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement : ()=> dispatch({type: 'INCRE'}),
        onDecrement : ()=> dispatch({type: 'DECRE'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCounter);




