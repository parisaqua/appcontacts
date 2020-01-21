import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './composants/Header';
import List from './composants/Liste';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <List />
        </div>
      </div>
    );
  }
}

export default App;
