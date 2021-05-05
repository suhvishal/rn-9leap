import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Pagination from './Common/Pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './Common/ListGroup';
import { getGenres } from '../services/fakeGenreService';

class Movies extends Component {

    state = {
        movies : [],
        genres : [],
        pageSize : 4,
        currentPage : 1,
        selectedGenre : null
    }

    componentDidMount(){

        const movies = getMovies()
        const genres = [ {_id:"", name: "All Movies"}, ...getGenres() ]

        this.setState({
            movies,
            genres
        })
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter( m=> m._id !== movie._id)
        this.setState({movies})
    }

    handlePageChange = page => {
        this.setState({currentPage: page})
    }

    handleGenreSelect = genre => {
        this.setState({selectedGenre : genre, currentPage : 1})
    }

    render() {

        const { length:count } = this.state.movies;

        const { movies:allMovies, genres, selectedGenre, currentPage, pageSize } = this.state;

        const filteredMovies = selectedGenre && selectedGenre._id
                                    ? allMovies.filter( m => m.genre._id === selectedGenre._id)
                                    : allMovies

        const movies = paginate(filteredMovies, currentPage, pageSize)

        if(count === 0) return <p>There are no movies in the database...</p>
        return (
            <div className='row'>

                <div className="col-3">
                    <ListGroup 
                        items={genres}
                        selectedItem={selectedGenre}
                        onItemSelect={this.handleGenreSelect}/>
                </div>
                
                <div className="col-9">
                    <p>Showing {count} movies from database...</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Stock</th>
                                <th>Rate</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                movies.map( movie => (
                                    <tr key={movie._id}>
                                        <td>{movie.title}</td>
                                        <td>{movie.genre.name}</td>
                                        <td>{movie.numberInStock}</td>
                                        <td>{movie.dailyRentalRate}</td>
                                        <td>
                                            <button onClick={ ()=> this.handleDelete(movie) } className="btn btn-danger btn-sm">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ) )
                            }
                            
                        </tbody>
                    </table>
                    <Pagination 
                        itemsCount={filteredMovies.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}/>
                </div>
            </div>
        );
    }
}

export default Movies;