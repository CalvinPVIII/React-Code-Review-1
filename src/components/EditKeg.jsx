import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';


function EditKeg(props){

const form = {
  marginTop: '30px',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  marginLeft: '-30px',
}
const menu = {
  textAlign: "center",
  color: "black",
}
const label = {
  padding: '10px'
}
  return (
    <div>
      <h1 style={menu}> Edit Keg </h1>
    <form style={form}>
    <label style={label}> Name:
      <input type="text" name="name" />
    </label>
    <label style={label}> Brand:
      <input type="text" name="brand" />
    </label>
    <label style={label}> Cost:
      <input type="number" name="cost" />
    </label>
    <label style={label}> Alcohol Percentage:
      <input type="numder" name="alcoholContent" />
    </label>
    <input type="submit" value="Submit" />
  </form>
    </div>
  );
}

export default EditKeg;
