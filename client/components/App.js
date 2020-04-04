import React from 'react';
import '../css/App.css';
import { Route } from 'react-router-dom';
import GarageChecker from './GarageChecker';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={GarageChecker} />
      </div>
    );
  }
}

export default App;