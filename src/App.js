import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Banners from './components/ui/banners';

class App extends Component {
  render() {
    return (
      <div className="App">
         {/* <Dashboard /> */}
         <Banners />
      </div>
    );
  }
}

export default App;
