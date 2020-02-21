import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import KegList from './KegList'

function Admin(props){


  return (
    <div>
    <h1>Admin</h1>
      <KegList
      kegList ={props.kegList}
      currentPath ={props.currentPath}
      onPourClick ={props.onPourClick}/>
    </div>
  );
}

export default Admin;
