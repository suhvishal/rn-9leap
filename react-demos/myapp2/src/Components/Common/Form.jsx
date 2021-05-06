
import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';
import Joi from 'joi-browser'

class Form extends Component {

    state = {
        data : {},
        errors : {}
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

        const data = { [name] : value }
        const schema = { [name] : this.schema[name] }

        const result = Joi.validate(data, schema)

        if(result.error)
            return result.error.details[0].message;

        //? validate using joi

        // if(name === 'email'){
        //     if(value === '')
        //         return 'Email is required...'
        // }

        // if(name === 'password'){
        //     if(value === '')
        //         return 'Password cannot be blank...'
        // }
    }

    validate = ()=> {
        const errors = {}
        const { data } = this.state;

        const result = Joi.validate(data, this.schema, { abortEarly : false })
        console.log(result)

        if(!result.error) return null;

        for(let item of result.error.details){
            errors[item.path[0]] =  item.message
        }

        return errors;

        // const { email, password } = this.state.data;
        
        // if(email === '')
        //     errors.email = 'Email is required...'

        // if(password === '')
        //     errors.password = 'Password cannot be blank...'

        // return Object.keys(errors).length !== 0 ? errors : null;
        
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
        
        this.doSubmit()
        
    }


    render() {
        return null;
    }
}

export default Form;