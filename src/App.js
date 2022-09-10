import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
