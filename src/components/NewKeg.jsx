import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';


function NewKeg(props){
let _name = null;
let _brand = null;
let _cost = null;
let _alcoholContent = null;

console.log(props);

function handleNewKegSubmit(event){
  event.preventDefault();
  props.onKegCreation({name: _name.value, brand: _brand.value, cost: _cost.value, alcoholContent: _alcoholContent.value, pintsLeft: 124, id: props.kegList.length})
 _name = "";
 _brand = "";
 _cost = "";
 _alcoholContent = "";
}

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
    fontFamily: "'Montserrat', sans-serif",
  }
  const label = {
    padding: '10px'
  }
  return (
    <div>
      <h1 style={menu}> Tap Keg </h1>
      <form onSubmit={handleNewKegSubmit}style={form}>
        <label style={label}> Name:
          <input type="text" name="name" id='name' ref={(input) => {_name = input;}}/>
        </label>
        <label style={label}> Brand:
          <input type="text" name="brand" id='brand' ref={(input) => {_brand = input;}}/>
        </label>
        <label style={label}> Cost:
          <input type="number" name="cost" id='cost' ref={(input) => {_cost = input;}}/>
        </label>
        <label style={label}> Alcohol Percentage:
          <input type="numder" name="alcoholContent" id='alcoholContent' ref={(input) => {_alcoholContent = input;}}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default NewKeg;
