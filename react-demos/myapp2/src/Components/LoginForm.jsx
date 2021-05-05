import React, { Component } from 'react';

class LoginForm extends Component {

    state = {
        data : { email: '', password : ''}
    }

    handleChange = ({target:input}) => {
         
        const data = { ...this.state.data }
        data[input.name] = input.value;
        this.setState({data})
    }

    handleSubmit = (event) => {
        event.preventDefault();

        //validate
        
        console.log(this.state.data)
        console.log('Form Submitted...')
    }
    
    render() {
        const { data } = this.state;
        return (
            <div>
                <h1>Login Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" 
                                id="email" 
                                value={data.email}
                                name="email"
                                onChange={this.handleChange}
                                className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password</label>
                        <input type="password" 
                                id="pwd"
                                name="password"
                                value={data.password} 
                                onChange={this.handleChange}
                                className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;