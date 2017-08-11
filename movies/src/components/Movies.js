import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions';

class Movies extends Component {
  componentDidMount() {
    this.props.getMovies();
  }
  
  render() {
    return (
      <div>
        <ul>
          {this.props.movies.map((movie, i) => {
            return (
              <li key={i}>
                <h3>{movie.title}</h3>
              </li>
              )
            }
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps, { getMovies })(Movies);


// id: 0,
// title: 'The Godfather',
// director: 'Francis Ford Coppola',
// metascore: 100,
// stars: ['Marlon Brando', 'Al Pacino', 'Robert Duvall'],
