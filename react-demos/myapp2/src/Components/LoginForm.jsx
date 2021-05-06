import React, { Component } from 'react';
import Button from './Common/Button';
import Input from './Common/Input';

class LoginForm extends Component {

    state = {
        data : { email: '', password : ''},
        errors : {  }
    }

    handleChange = ({target:input}) => {

        //validate this field
        const errors = {...this.state.errors}
        const errorMessage =  this.validateProperty(input)
        
        if(errorMessage)
            errors[input.name] = errorMessage
        else 
            delete errors[input.name]

        const data = { ...this.state.data }
        data[input.name] = input.value;
        this.setState({data, errors})
    }

    validateProperty = ({name, value}) => {
        if(name === 'email'){
            if(value === '')
                return 'Email is required...'
        }

        if(name === 'password'){
            if(value === '')
                return 'Password cannot be blank...'
        }
    }


    validate = ()=> {
        const errors = {}
        const { email, password } = this.state.data;
        
        if(email === '')
            errors.email = 'Email is required...'

        if(password === '')
            errors.password = 'Password cannot be blank...'

        return Object.keys(errors).length !== 0 ? errors : null;
    }

    renderInput = (label, name, value, error, type='text') => {
        return <Input 
                    label={label}
                    name={name}
                    value={value}
                    onChange={this.handleChange}
                    error={error}
                    type={type}/>
    }
    
    renderButton = (label) => {
        return <Button label={label} />
    }


    handleSubmit = (event) => {
        event.preventDefault();

        const errors = this.validate()
        this.setState({errors : errors || {} })

        if(errors) return;
        
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