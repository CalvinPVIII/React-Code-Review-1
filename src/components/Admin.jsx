import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import KegList from './KegList'

function Admin(props){

const adminHeadStyle ={
  textAlign: 'center'
}
  return (
    <div>
    <h1 style={adminHeadStyle}>Admin</h1>
      <KegList
      kegList ={props.kegList}
      currentPath ={props.currentPath}
      onPourClick ={props.onPourClick}
      onUpdateKeg = {props.onUpdateKeg}/>
    </div>
  );
}

export default Admin;
