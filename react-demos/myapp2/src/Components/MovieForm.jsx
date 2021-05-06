import React, { Component } from 'react';
import Form from './Common/Form';
import Joi from 'joi-browser';
import { getGenres } from '../services/fakeGenreService';
import Select from './Common/Select';

class MovieForm extends Form {

    state = {
        data : {title : '', numberInStock: '', dailyRentalRate : '', genreId: ''},
        errors : {},
        genres : []
    }

    componentDidMount(){
        this.setState({genres: getGenres()})
    }

    schema = {
        title : Joi.string().required(),
        numberInStock: Joi.number().required(), 
        dailyRentalRate : Joi.number().required(), 
        genreId: Joi.string().required()
    }

    doSubmit = () => {
        console.log('form submitted')
        console.log(this.state.data)
    }

    render() {
        const {data, errors} = this.state;
        return (
            <div>
                <h1>Movie Form</h1>
                <form onSubmit={this.handleSubmit}>
                    { this.renderInput('Title', 'title', data.title, errors.title) }

                    { this.renderSelect('Genre', 'genreId', data.genreId, errors.genreId, this.state.genres) }

                    { this.renderInput('Stock', 'numberInStock', data.numberInStock, errors.numberInStock) }
                    { this.renderInput('Rate', 'dailyRentalRate', data.dailyRentalRate, errors.dailyRentalRate) }
                    { this.renderButton('Save Movie') }
                </form>
            </div>
        );
    }
}

export default MovieForm;