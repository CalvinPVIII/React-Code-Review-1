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

const actions ={
  display: "flex",
  flexFlow: 'row wrap',
  justifyContent: 'center',
}

const actionLinks ={
  padding: '5px',
}
  return (
    <div style={kegCard}>
      <h2>{props.name}</h2>
      <h3>{props.brand}</h3>
      <h3>${props.price}</h3>
      <h3>{props.alcoholContent}% Alcohol</h3>
      <h3>{props.pintsLeft} Pints Left</h3>
      <div style={actions}>
        <Link to ='/editkeg'><h4 style={actionLinks}> Edit </h4></Link>
        <h4 style={actionLinks}> Pour </h4>
      </div>
    </div>
  );
}

export default Keg;
