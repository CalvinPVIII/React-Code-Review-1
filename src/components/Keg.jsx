import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';


function Keg(props){
const kegCard ={

  width: '300px',
  marginLeft: "auto",
  marginRight: 'auto',
  textAlign: "center",
  padding: '20px',

  marginTop: '10px'
}
  return (
    <div style={kegCard}>
      <h2>{props.name}</h2>
      <h3>{props.brand}</h3>
      <h3>${props.price}</h3>
      <h3>{props.alcoholContent}% Alcohol</h3>
      <h3>{props.pintsLeft} Pints Left</h3>
    </div>
  );
}

export default Keg;
