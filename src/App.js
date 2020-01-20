import React, { Component } from 'react';
import Titre from './Titre';


class App extends Component {

  state = {
    nom1: 'Bob',
    nom2: 'Marion',
    nom3: 'Sophie'
  }

  render() {
    return (
      <div className="App">
        <Titre nom={this.state.nom1}  />
        <Titre nom={this.state.nom2} />
        <Titre nom={this.state.nom3} />
      </div>
    );
  }
}

export default App;
