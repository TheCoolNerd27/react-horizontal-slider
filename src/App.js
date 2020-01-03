import React from 'react';
import logo from './logo.svg';
import './App.css';
import items from './Data.js';

import HorizontalSlider from './Components/index'; 

function App() {
  return (
    <div className="App">

        <HorizontalSlider title="Menu 1" data={items} width={320} height={300} id="1" />
        <HorizontalSlider title="Menu 2" data={items} id="2"  />
        <HorizontalSlider title="Menu 3" data={items} id="3" />
        <HorizontalSlider title="Menu 4" data={items} id="4" />
        <HorizontalSlider title="Menu 5" data={items} id="5" />
    </div>
  );
}

export default App;
