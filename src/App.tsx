import React from 'react'

// Router
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
// import Loading from './components/Loading'
import UserInfo from './components/UserInfo';
import Home from './pages/Home';

// CSS
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={ UserInfo } />
        <Route path="/home" component={ Home } />
      </Router>
    </div>
  );
}

export default App;
