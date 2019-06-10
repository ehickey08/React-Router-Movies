import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    if(!savedList.includes(movie)){
        savedList.push(movie);
        this.setState({ savedList });
    }
    else{
        alert(`You've already saved that movie!`)
    }
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route 
            path="/movies/:movieID" 
            render = {props => <Movie {...props} addToSavedList = {this.addToSavedList} />} />
      </div>
    );
  }
}
