import React, { Component } from 'react';
import { removeToken } from '../services/authService';

class Logout extends Component {

    componentDidMount(){
        removeToken()
        window.location = '/login'
    }

    render() {
        return null;
    }
}

export default Logout;