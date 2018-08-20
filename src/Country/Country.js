import React from 'react';
import Radium from 'radium'; 
import './Country.css'

const country= (props) => {
    const style = {
        '@media(min-width: 500px)':{
            width: '450px'
        }
    }
    return (
        <div className="Country" style={style}>
            <p onClick={props.click}> {props.population} of people live in {props.name}</p>
            <p> {props.children} </p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )    
}

export default Radium(country);