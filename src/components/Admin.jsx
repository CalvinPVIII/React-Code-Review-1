import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import KegList from './KegList'

function Admin(props){


  return (
    <div>
      <KegList
      kegList ={props.kegList}/>
    </div>
  );
}

export default Admin;
