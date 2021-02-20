import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Movie from './components/Movie';
import About from './components/About';
import Detail from './components/Detail';
import {HashRouter as Router, Route} from 'react-router-dom';


function App(){
  return (
    <Router>
      <Nav /> 
      <Route path='/' exact = {true} component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/detail' component={Detail}/>
    </Router>
  );
}

export default App;