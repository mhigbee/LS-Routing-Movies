import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSelectedMovie } from '../actions';

class MoviesInfo extends Component {
  componentDidMount() {
    this.props.getSelectedMovie(this.props.match.params.id);
  }

  displayStars() {
    if (this.props.movie.stars === undefined) return null;
    return(
      this.props.movie.stars.map((star) =>
        <li>{star}</li>
      )
    )
  }
  
  render() {
    return (
      <div>
        <h1>Title: {this.props.movie.title}</h1>
        <h2>Director: {this.props.movie.director}</h2>
        <h3>Metascore: {this.props.movie.metascore}</h3>
        <ul> Stars:
          {this.displayStars()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movies
  }
}

export default connect(mapStateToProps, { getSelectedMovie })(MoviesInfo);
