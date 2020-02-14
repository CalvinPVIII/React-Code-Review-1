import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Header'
import KegList from './KegList'
import NewKeg from './NewKeg';
import EditKeg from './EditKeg';
import SignIn from './SignIn';
import SignUp from './SignUp';
function App() {
  return (
    <div>
    <Header/>
    <Switch>
    <Route exact path='/' component={KegList}/>
    <Route path='/newkeg' component={NewKeg}/>
    <Route path='/editkeg' component={EditKeg}/>
    <Route path='/signin' component={SignIn}/>
    <Route path='/signup' component={SignUp}/>
    </Switch>
    </div>
  );
}

export default App;
