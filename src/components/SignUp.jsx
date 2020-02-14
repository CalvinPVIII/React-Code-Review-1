import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';


function SignIn(props){

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
      <h1 style={menu}> Create Account </h1>
    <form style={form}>
    <label style={label}> Email:
      <input type="text" name="email" />
    </label>
    <label style={label}> Password:
      <input type="text" name="password" />
    </label>
    <label style={label}> Confirm Password:
      <input type="text" name="confirmPassword" />
    </label>
    <input type="submit" value="Submit" />
  </form>
    </div>
  );
}

export default SignIn;
