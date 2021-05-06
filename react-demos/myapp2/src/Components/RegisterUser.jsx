import React, { Component } from "react";
import Form from "./Common/Form";
import Joi from "joi-browser";

class RegisterUser extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    errors : {}
  };

  schema = {
    email: Joi.string().required(),
    password: Joi.string().required(),
    name: Joi.string().required(),
  };

  doSubmit = () => {
    console.log(this.state.data);
    console.log("Form Submitted...");
    //call the server..
  };

  render() {
    const { data, errors } = this.state;

    return (
      <div>
        <h1>Register User Form</h1>
        <form onSubmit={this.handleSubmit}>
            {this.renderInput("Email", "email", data.email, errors.email)}

            {this.renderInput( "Password", "password", data.password, errors.password, "password")}

            {this.renderInput( "Name", "name", data.name, errors.name          )}

            {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default RegisterUser;
