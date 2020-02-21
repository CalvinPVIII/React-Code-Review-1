import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Header'
import KegList from './KegList'
import NewKeg from './NewKeg';
import EditKeg from './EditKeg';
import Admin from './Admin';
import SignUp from './SignUp';
import Error from './Error'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this)
    this.handleDecreasingPints = this.handleDecreasingPints.bind(this)
  }

handleAddingNewKegToList(keg){
  let newKegList = this.state.masterKegList.slice();
  newKegList.push(keg)
  this.setState({masterKegList: newKegList})
}

handleDecreasingPints(kegId){
  let newKegList = this.state.masterKegList.slice();
  newKegList.forEach((keg) => {
    if (keg.id === kegId){
      keg.pintsLeft --

    }
    this.setState({masterKegList: newKegList})
  });


}

  render(){

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' render={()=> <KegList kegList={this.state.masterKegList} onPourClick={this.handleDecreasingPints}/>}/>
        <Route path='/newkeg' render={()=><NewKeg onKegCreation={this.handleAddingNewKegToList} kegList={this.state.masterKegList} />}/>
        <Route path='/editkeg' component={EditKeg}/>
        <Route path='/admin' render={()=> <Admin kegList={this.state.masterKegList}/>}/>

        <Route component={Error}/>
      </Switch>
    </div>
  );
}
}

export default App;
