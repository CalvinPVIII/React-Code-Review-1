import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Header'
import KegList from './KegList'
import NewKeg from './NewKeg';
import EditKeg from './EditKeg';
import Admin from './Admin';
import Error from './Error'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this)
    this.handleDecreasingPints = this.handleDecreasingPints.bind(this)
    this.handleUpdatingKeg = this.handleUpdatingKeg.bind(this)
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
      keg.pintsLeft[0] --
      if (  keg.pintsLeft[0] <= 64 && keg.pintsLeft[0] > 32 ) {
        keg.pintsLeft[1] = 'yellow'
      }else if (keg.pintsLeft[0] <= 32) {
        keg.pintsLeft[1] = 'red'
      }else {
        keg.pintsLeft[1] = 'green'
      }
    }
    this.setState({masterKegList: newKegList})
  });
}

handleUpdatingKeg(updatedKeg){
  let updatedKegList = this.state.masterKegList.slice();
  updatedKegList.forEach((keg, i) => {
    if (updatedKeg.id === keg.id){
      updatedKegList[i] = updatedKeg
    }
    this.setState({masterKegList: updatedKegList})
  });
}


  render(){

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' render={()=> <KegList kegList={this.state.masterKegList}  onPourClick={this.handleDecreasingPints}/>}/>
        <Route path='/newkeg' render={()=><NewKeg onKegCreation={this.handleAddingNewKegToList} kegList={this.state.masterKegList} />}/>
        <Route path='/admin' render={(props)=> <Admin kegList={this.state.masterKegList} currentPath={props.location.pathname} onUpdateKeg={this.handleUpdatingKeg} onPourClick={this.handleDecreasingPints}/>}/>

        <Route component={Error}/>
      </Switch>
    </div>
  );
}
}

export default App;
