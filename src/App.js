import React from 'react';
import logo from './logo.svg';
import './App.css';
import HorizontalMenu2 from './Components/Horizontal-menu2'; 

function App() {
  return (
    <div className="App">
        <HorizontalMenu2 title="Recently Viewed" width="300" height="300" id="1" />
        <HorizontalMenu2 title="Recently Viewed" id="2"  />
        <HorizontalMenu2 title="Recently Viewed" id="3" />
        <HorizontalMenu2 title="Recently Viewed" id="4" />
        <HorizontalMenu2 title="Recently Viewed" id="5" />
    </div>
  );
}

export default App;
