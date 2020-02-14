import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Header'
import KegList from './KegList'

function App() {
  return (
    <div >
    <Header/>
    
    <KegList/>
    </div>
  );
}

export default App;
