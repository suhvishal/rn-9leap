import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "./App.css";
import { getCurrentUser } from "./services/authService";
import Logout from './components/Logout';
import ProtectedRoute from "./components/common/ProtectedRoute";

class App extends Component {

  state = {}

  componentDidMount(){
    const user = getCurrentUser();
    this.setState({user})
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <NavBar user={this.state.user} />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />

            <Route path="/movies/:id" component={MovieForm} />
            
            <ProtectedRoute path="/movies" render={(props)=> <Movies  {...props}/>} />

          
            <ProtectedRoute path='/customers' component={Customers} />

            <ProtectedRoute path='/rentals' component={Rentals} />

            <Route path="/not-found" component={NotFound} />

            <Redirect from="/" exact to="/movies" />

            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
