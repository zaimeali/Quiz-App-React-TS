import React from 'react'

// Router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// Components
import Loading from './components/Loading'

// CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <Loading />
    </div>
  );
}

export default App;
