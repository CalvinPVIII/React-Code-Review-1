import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import Keg from './Keg';

function KegList(props){
  const kegList = {
    display: "flex",
    flexFlow: 'column wrap',
    justifyContent: 'space between'
  }
  const menu = {
    textAlign: "center",
    color: "black",
  }

  return (
    <div className='kegPage'>
      <h1 style={menu}>Keg List</h1>
      <div style={kegList}>
        {props.kegList.map((keg, index)=>
          <Keg
            name={keg.name}
            brand={keg.brand}
            cost={keg.cost}
            alcoholContent={keg.alcoholContent}
            pintsLeft={keg.pintsLeft}
            id={keg.id}
            onPourClick={props.onPourClick}
            currentPath={props.currentPath}
            onUpdateKeg={props.onUpdateKeg}
            key={index}/>
        )}
      </div>

      <style jsx>{`
          .kegPage{
            animation: fade-in 1s, slide-down 2s;
            font-family: 'Montserrat', sans-serif;
          }
          @keyframes slide-down {
            0% { margin-top: -1000px }
            100% { marign-top: 0px }
          }

          @keyframes fade-in {
            0% { opacity: 0 }
            100% { opacity: 1}
          }
          `}</style>
    </div>
  );
}

export default KegList;
