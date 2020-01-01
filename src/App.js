import React from 'react';
import logo from './logo.svg';
import './App.css';
import items from './Components/Data.js';

import HorizontalMenu2 from './Components/Horizontal-menu2'; 

function App() {
  return (
    <div className="App">
      
        <HorizontalMenu2 title="Recently Viewed" data={items}width="300" height="300" id="1" />
        <HorizontalMenu2 title="Recently Viewed" data={items} id="2"  />
        <HorizontalMenu2 title="Recently Viewed" data={items} id="3" />
        <HorizontalMenu2 title="Recently Viewed" data={items} id="4" />
        <HorizontalMenu2 title="Recently Viewed" data={items} id="5" />
    </div>
  );
}

export default App;
