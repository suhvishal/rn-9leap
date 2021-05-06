import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './Common/Form';

class LoginForm extends Form {

    state = {
        data : { email: '', password : ''},
        errors : {  }
    }

    schema = {
        email : Joi.string().required(),
        password : Joi.string().required()
    }    

    doSubmit = () => {
        console.log(this.state.data)
        console.log('Form Submitted...')
        //call the server..
    }

    render() {
        const { data, errors } = this.state;
        return (
            <div>
                <h1>Login Form</h1>
                <form onSubmit={this.handleSubmit}>

                    { this.renderInput('Email', 'email', data.email, errors.email) }                    

                    { this.renderInput('Password', 'password', data.password, errors.password, 'password') }                    

                    { this.renderButton('Login') }
                    
                </form>
            </div>
        );
    }
}

export default LoginForm;