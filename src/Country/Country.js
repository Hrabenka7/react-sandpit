import React from 'react'; 
import classes from './Country.css'

const country= (props) => {
    return (
        <div className={classes.Country}>
            <p onClick={props.click}> {props.population} of people live in {props.name}</p>
            <p> {props.children} </p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )    
}

export default country; 

