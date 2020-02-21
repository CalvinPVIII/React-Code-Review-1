import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import EditKeg from './EditKeg'

function Keg(props){



let edit = null;
const[editVisibility, setVisibility] = useState(null)

function onEditClick(){
  if (editVisibility === null){
    setVisibility(<EditKeg
      kegId = {props.id}
      kegName = {props.name}
      kegBrand = {props.brand}
      kegCost = {props.cost}
      kegAlcoholContent = {props.alcoholContent}
      kegPintsLeft = {props.pintsLeft}
      onUpdateKeg= {props.onUpdateKeg}/>

    )
  }else {
    setVisibility(null)
  }
}


  const kegCard ={

    width: '300px',
    marginLeft: "auto",
    marginRight: 'auto',
    textAlign: "center",
    padding: '20px',
    marginTop: '10px',
    color: `black`
  }

  const actions ={
    display: "flex",
    flexFlow: 'row wrap',
    justifyContent: 'center',
  }

  const actionLinks ={
    padding: '5px',
  }

  const outerKegLevelBar ={
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '1px solid black',
    height: '10px',
    width: '124px',
    backgroundColor: 'white',
  }

  const innerKegLevelBar ={

    height: '10px',
    width: `${props.pintsLeft[0]}px`,
    backgroundColor: `${props.pintsLeft[1]}`,
  }

  const kegInfo =
  <div style={kegCard}>
    <h2>{props.name}</h2>
    <h3>{props.brand}</h3>
    <h3>${props.cost}</h3>
    <h3>{props.alcoholContent}% Alcohol</h3>
    <h3>{props.pintsLeft[0]} Pints Left</h3>
    <div style={outerKegLevelBar}>
      <div style={innerKegLevelBar}>
      </div>
    </div>

  </div>;

if (props.currentPath === '/admin') {

  return (
    <div>
      {kegInfo}
      <div style={actions}>
        <h4  onClick={()=> onEditClick()}style={actionLinks}> Edit </h4>
        <h4 className='pourButton' onClick={()=> {props.onPourClick(props.id)}}style={actionLinks}> Pour </h4>

      </div>
      {editVisibility}
      <style jsx>{`
          .pourButton:hover{
            cursor: pointer;
          }
            `}
      </style>
    </div>
  );
}else {
  return(
    <div>
      {kegInfo}
    </div>
  )
}
}

export default Keg;
