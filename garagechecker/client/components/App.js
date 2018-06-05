import React from 'react';
import '../css/App.css';
import { Route } from 'react-router-dom';
import LatestContainer from './Latest';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Garage Checker</h1>


      
        <Route path='/' component={LatestContainer} />
      </div>
    );
  }
}

export default App;
