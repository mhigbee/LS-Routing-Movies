import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSelectedMovie } from '../actions';
import ListStars from './ListStars'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

class MoviesInfo extends Component {
  componentDidMount() {
    this.props.getSelectedMovie(this.props.match.params.id);
  }
  

  render() {
    return (
      <div>
        <h1>Title: {this.props.movie.title}</h1>
        <h2>Director: {this.props.movie.director}</h2>
        <h3>Metascore: {this.props.movie.metascore}</h3>
        <ListStars stars={this.props.movie.stars}/>
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
