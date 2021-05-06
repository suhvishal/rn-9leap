import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./Common/Pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./Common/ListGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./MoviesTable";
import _ from 'lodash';

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: null,
    sortColumn : { path:'title', order: 'asc' }
  };

  componentDidMount() {
    const movies = getMovies();
    const genres = [{ _id: "", name: "All Movies" }, ...getGenres()];

    this.setState({
      movies,
      genres,
    });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn})
  }

  handleAdd = () => {
    this.props.history.push('/movies/new')
  }

  render() {
    const { length: count } = this.state.movies;

    const { movies: allMovies, 
        genres, 
        selectedGenre,
        currentPage,
        pageSize,
        sortColumn
    } = this.state;

    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sortedMovies = _.orderBy(filteredMovies, [ sortColumn.path ], [ sortColumn.order ])

    const movies = paginate(sortedMovies, currentPage, pageSize);

    

    if (count === 0) return <p>There are no movies in the database...</p>;
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>

        <div className="col-9">
          <p>Showing {filteredMovies.length} movies from database...</p>
          <button onClick={this.handleAdd} className="btn btn-primary">
            Add Movie
          </button>
          
          <MoviesTable 
            movies={movies} 
            onDelete={this.handleDelete}
            sortColumn={sortColumn}
            onSort={this.handleSort} />
            
          <Pagination
            itemsCount={filteredMovies.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
