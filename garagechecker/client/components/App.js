import React from 'react';
import '../css/App.css';
import { Route } from 'react-router-dom';
import Latest from './Latest';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Garage Checker</h1>
        </header>


      
        <Route path='/latest' component={Latest} />
      </div>
      

    );
  }
}

export default App;
