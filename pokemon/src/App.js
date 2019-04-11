import React, { Component } from 'react';
import './App.css';
import ListPokemon from "./components/ListPokemon";

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Pokemon World</h1>
          <div className="pokeDispo">
              <ListPokemon />
          </div>
      </div>
    );
  }
}

export default App;
