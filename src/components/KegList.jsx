import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import Keg from './Keg';

function KegList(){
  const kegs = [
    {
      name: 'Beer1',
      brand:'Beer Brand1',
      price:'5',
      alcoholContent:'4',
      pintsLeft: "80"
    },
    {
      name: 'Beer2',
      brand:'Beer Brand2',
      price:'4',
      alcoholContent:'7',
      pintsLeft: "64"
    },
    {
      name: 'Beer3',
      brand:'Beer Brand3',
      price:'8',
      alcoholContent:'3',
      pintsLeft: "124"
    },
    {
      name: 'Beer4',
      brand:'Beer Brand4',
      price:'12',
      alcoholContent:'6',
      pintsLeft: "8"
    },
    {
      name: 'Beer5',
      brand:'Beer Brand5',
      price:'3',
      alcoholContent:'4',
      pintsLeft: "4"
    },
  ]
  const kegList = {
    display: "flex",
    flexFlow: 'column wrap',
    justifyContent: 'space between'
  }
  const menu = {
    textAlign: "center",
    color: "white",
  }
  return (
    <div>
      <h1 style={menu}>Menu</h1>
      <div style={kegList}>
        {kegs.map((keg, index)=>
          <Keg
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            pintsLeft={keg.pintsLeft}
            key={index}/>
        )}
      </div>

    </div>
  );
}

export default KegList;
