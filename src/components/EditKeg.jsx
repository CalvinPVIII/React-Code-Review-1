import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';


function EditKeg(props){
  let _name = null;
  let _brand = null;
  let _cost = null;
  let _alcoholContent = null;

const[visibility, setVisibility] = useState('auto')



  function handleEditKegSubmit(event){
    event.preventDefault();
    props.onUpdateKeg({name: _name.value, brand: _brand.value, cost: _cost.value, alcoholContent: _alcoholContent.value, pintsLeft: [props.kegPintsLeft[0], props.kegPintsLeft[1]], id: props.kegId})
   _name = "";
   _brand = "";
   _cost = "";
   _alcoholContent = "";
   setVisibility('none')
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

    const editKeg = {
      float: 'right',
      width: '400px',
      marginTop: '-20%',
    }
    return (
      <div id="editDiv" className='beforeSubmit'style={editKeg}>
        <h1 style={menu}> Edit {props.kegName} </h1>
        <form onSubmit={handleEditKegSubmit}style={form}>
          <label style={label}> Name:
            <input type="text" name="name" id='name' defaultValue={props.kegName} ref={(input) => {_name = input;}}/>
          </label>
          <label style={label}> Brand:
            <input type="text" name="brand" id='brand' defaultValue={props.kegBrand} ref={(input) => {_brand = input;}}/>
          </label>
          <label style={label}> Cost:
            <input type="number" name="cost" id='cost' defaultValue={props.kegCost} ref={(input) => {_cost = input;}}/>
          </label>
          <label style={label}> Alcohol Percentage:
            <input type="numder" name="alcoholContent" id='alcoholContent' defaultValue={props.kegAlcoholContent} ref={(input) => {_alcoholContent = input;}}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <style jsx>{`
            .beforeSubmit{
              display: ${visibility};
            }
          `}

        </style>
      </div>
    );
  }
export default EditKeg;
