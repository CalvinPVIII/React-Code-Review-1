import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';


function Keg(props){
const kegCard ={
  backgroundColor: '#a6662c',
  width: '300px',
  marginLeft: "auto",
  marginRight: 'auto',
  textAlign: "center",
  padding: '20px',
  borderRadius: '10px',
  border: '1px solid #D4AF37'
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
