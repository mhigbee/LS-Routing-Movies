import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies';
import MoviesInfo from './components/MoviesInfo';
import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Movies}/>
        <Route exact path="/movies" component={Movies}/>
        <Route path="/movies/:id" component={MoviesInfo}/>
      </div>
    );
  }
}

export default App;

