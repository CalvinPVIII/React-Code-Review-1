import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';


function NewKeg(props){

  return (
    <div>
    <form action="/">
      <label for="name">Name:</label><br>
      <input type="text"name="name"><br>
      <label for="brand">Brand:</label><br>
      <input type="text" name="brand"><br>
      <label for="price">Price:</label><br>
      <input type="number" name="price"><br>
      <label for="alcoholContent">Alcohol Percentage:</label><br>
      <input type="number" name="alcoholContent"><br>
      <input type="submit" value="Submit">
    </form>
    </div>
  );
}

export default NewKeg;
