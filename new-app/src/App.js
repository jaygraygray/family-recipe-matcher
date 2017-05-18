import React, { Component } from 'react';
import './App.css';
import AllRecipes from './components/AllRecipes'
class App extends Component {
  render() {
    return (
      <div>
        <h1>Family Eats</h1>
        <h3>Welcome to Family Eats!</h3>
        <p>Here, you can manage all of your favorite recipes and figure out who in your family will enjoy which meals the most.</p>
      <AllRecipes />
      </div>
    );
  }
}

export default App;
