import React, { Component } from 'react';
import Titre from './Titre';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Titre nom='Hugo'  />
        <Titre nom='Bob' />
        Roule ma p'tite
        <Titre nom='Fréd' />
      </div>
    );
  }
}

export default App;
