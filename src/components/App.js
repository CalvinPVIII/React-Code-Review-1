import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Header'
import KegList from './KegList'
import NewKeg from './NewKeg';
import EditKeg from './EditKeg';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Error from './Error'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this)
  }

handleAddingNewKegToList(keg){
  let newKegList = this.state.masterKegList.slice();
  newKegList.push(keg)
  this.setState({masterKegList: newKegList})
}

  render(){

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' render={()=> <KegList kegList={this.state.masterKegList}/>}/>
        <Route path='/newkeg' render={()=><NewKeg onKegCreation={this.handleAddingNewKegToList} />}/>
        <Route path='/editkeg' component={EditKeg}/>
        <Route path='/signin' component={SignIn}/>
        <Route path='/signup' component={SignUp}/>
        <Route component={Error}/>
      </Switch>
    </div>
  );
}
}

export default App;
