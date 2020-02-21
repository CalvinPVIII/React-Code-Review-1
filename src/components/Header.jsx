import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import logopic from '../images/logo.png'

function Header(){

  const title = {
    marginLeft: "auto",
    marginRight: "auto",
    padding: "5px",
    textAlign: "center",
    paddingbottom: "20px",
    marginTop: '8px',
  }

  const navbar = {
    width: "100vw",
    height: "52px",
    color: "black",
    fontWeight: "400",
    borderTop: '1px solid rgba(0,0,0,0.5)',
    borderBottom: '1px solid rgba(0,0,0,0.5)',
    marginTop: "2%",
    width: "80vw",
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: "'Poppins', sans-serif",

  }

  const navbarRight = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: 'flex-end',
    marginRight: '40px',
    marginTop: '30px',
    paddingRight: '20%',

  }

  const validationLinks = {

    marginTop: '-60px',
    paddingLeft: '10px',

  }

const logotext = {
  textAlign: 'center',
  fontSize: '50px',
  fontFamily: "'Poppins', sans-serif",
}

const logo = {
  display: 'flex',
  flexFlow: "row wrap",
  justifyContent: 'center',
  borderBottom: "4px double black",
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '25%',
  paddingLeft: '25px',

}

const logoimg = {
  width: '100px',
  height: '100px',
  marginTop: '15px',
  marginLeft: '20px',

}

const navbarLeft = {
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: 'flex-start',
  marginRight: '40px',
  marginTop: '-80px',
  paddingLeft: '25%',
}





  return (
    <div>
      <div style={logo}>
        <h1 style={logotext}> The Tap Room </h1>
        <img style={logoimg} src={logopic}/>
        </div>
        <div style={navbar}>
          <Link to='/'><h3 style={title}> Keg List  </h3></Link>
          <div style={navbarRight}>
            <Link to='/admin'><h3 style={validationLinks}> Admin </h3></Link>

          </div>
          <div style={navbarLeft}>
            <Link to ="/newkeg"><h3> Tap Keg </h3></Link>
          </div>
          <style jsx>{`
            a{
              color:black
            }
            a:visited {
              color:black
            }
          `}</style>
        </div>
    </div>
    );
  }

  export default Header;
