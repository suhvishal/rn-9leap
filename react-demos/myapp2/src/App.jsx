import "./App.css";
import LoginForm from "./Components/LoginForm";
import Movies from "./Components/Movies";
import RegisterUser from "./Components/RegisterUser";
import Home from "./Components/Home";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MovieForm from './Components/MovieForm';

function App() {
  return (
    <div className="container">

     <Navbar />

      <Switch>

        <Route path="/movies/:id" component={MovieForm} />

        <Route path="/movies" render={ (props)=> <Movies {...props}  /> } />

        <Route path="/register" component={RegisterUser} />

        <Route path="/login" component={LoginForm} />

        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
