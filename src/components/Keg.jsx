import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';


function Keg(props){

  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.brand}</h3>
      <h3>{props.price}</h3>
      <h3>{props.alcoholContent}</h3>
    </div>
  );
}

export default Keg;
