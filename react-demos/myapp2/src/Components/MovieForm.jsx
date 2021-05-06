import React, { Component } from "react";
import Form from "./Common/Form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";
import Select from "./Common/Select";
import { getMovie } from "../services/fakeMovieService";

class MovieForm extends Form {
  state = {
    data: { title: "", numberInStock: "", dailyRentalRate: "", genreId: "" },
    errors: {},
    genres: [],
  };

  populateGenres = ()=> {
    this.setState({ genres: getGenres() });
  }

  populateMovie = () => {
    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    const data = { ...this.state.data };
    data.title = movie.title;
    data.numberInStock = movie.numberInStock;
    data.dailyRentalRate = movie.dailyRentalRate;
    data.genreId = movie.genre._id;
    this.setState({ data });
  };

  componentDidMount() {
    this.populateGenres();
    this.populateMovie();
  }

  schema = {
    title: Joi.string().required(),
    numberInStock: Joi.number().required(),
    dailyRentalRate: Joi.number().required(),
    genreId: Joi.string().required(),
  };

  doSubmit = () => {
    console.log("form submitted");
    console.log(this.state.data);
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("Title", "title", data.title, errors.title)}

          {this.renderSelect(
            "Genre",
            "genreId",
            data.genreId,
            errors.genreId,
            this.state.genres
          )}

          {this.renderInput(
            "Stock",
            "numberInStock",
            data.numberInStock,
            errors.numberInStock
          )}
          {this.renderInput(
            "Rate",
            "dailyRentalRate",
            data.dailyRentalRate,
            errors.dailyRentalRate
          )}
          {this.renderButton("Save Movie")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
