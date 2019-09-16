import React from 'react';
import './assets/bootstrap.min.css';
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import PostContainer from './components/PostContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/post" component={PostContainer} />
      </Router>
    </>
  );
}

export default App;
