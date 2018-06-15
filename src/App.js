import React, { Component } from 'react';
import './App.css';
import logo from './Logo.png';
import List from './Components/List';
import Flights from './Components/Flights';
import Geolocation from './Components/Geolocation';

class App extends Component {
  
  render() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="logo" alt="logo" />
                <h1 className="App-title">Air Traffic List</h1>
            </header>

            <div className="container">
              <List result={Flights().acList} />
            </div>
            
            <div className="geo-location">
               <h2>Your location</h2>
                <Geolocation />
            </div>
        </div>
        
        
       
    );
  }

}

export default App;