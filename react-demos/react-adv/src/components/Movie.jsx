import React, { Component } from 'react';
import withToolTip from '../hoc/withToolTip';

class Movie extends Component {

    render() {
        return (
            <div style={mystyle}>
                <h1>This is Movie Component</h1>
                {this.props.showToolTip && <div>This is Tooltip</div>}
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

export default withToolTip(Movie);