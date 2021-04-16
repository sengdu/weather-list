import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import FlavorForm from '../containers/a';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <FlavorForm />
      </div>
    );
  }
}
