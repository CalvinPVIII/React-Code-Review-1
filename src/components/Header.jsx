import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';


function Header(){

  const title = {
    marginLeft: "auto",
    marginRight: "auto",
    padding: "5px",
    textAlign: "center",
  }

  const navbar = {

    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: "100vw",
    height: "52px",
    color: "white",
    marginLeft: "-8px",
    marginTop: '-20px',
    paddingLeft: '10px',
    fontWeight: "400",
  }








  return (
        <div style={navbar}>
            <Link to='/'><h3 style={title}> The Tap Room </h3></Link>
            <style jsx>{`
              a:visited {
                color:white
              }
            `}</style>
            <div >
            </div>

        </div>
    );
  }

  export default Header;
