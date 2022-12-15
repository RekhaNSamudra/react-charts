import React from 'react';
import './App.css';
import Barchart from './charts/Barchart';
import Piechart from './charts/Piechart';
import PieForCarsAge from './charts/PieforCarsAge';

function App() {
  return (
    <div className="App">
      <h1>React Assignment by Rekha N</h1>
      <Barchart />
      <Piechart/>
      <PieForCarsAge/>
    </div>
  );
}

export default App;
