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
    width: `${props.pintsLeft}px`,
    backgroundColor: 'red',
  }

  return (
    <div style={kegCard}>
      <h2>{props.name}</h2>
      <h3>{props.brand}</h3>
      <h3>${props.cost}</h3>
      <h3>{props.alcoholContent}% Alcohol</h3>
      <h3>{props.pintsLeft} Pints Left</h3>
      <div style={outerKegLevelBar}>
        <div style={innerKegLevelBar}>
        </div>
      </div>
      <div style={actions}>
        <Link to ='/editkeg'><h4 style={actionLinks}> Edit </h4></Link>
        <h4 className='pourButton' onClick={()=> {props.onPourClick(props.id)}}style={actionLinks}> Pour </h4>
      </div>
      <style jsx>{`
          .pourButton:hover{
            cursor: pointer;
          }
            `}
      </style>
    </div>
  );
}

export default Keg;
