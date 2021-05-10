import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count : 0
    }

    handleClick = () => {
        this.setState({count : this.state.count + 1})
    }

    render() {

        if(this.state.count === 5)
            throw new Error('this is some error occured at Counter componnet')

        return (
            <div style={mystyle}>
                <h1>Count : {this.state.count} </h1>
                <button onClick={this.handleClick}>
                    Increment 
                </button>
            </div>
        );
    }
}

const mystyle = {
    border:'2px solid black',
    background:'bisque',
    width:'300px',
    height:'200px'
}


export default Counter;