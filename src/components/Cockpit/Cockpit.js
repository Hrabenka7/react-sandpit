import React from 'react'
import classes from './Cockpit.css'; 

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    
    if(props.showCountries){
        btnClass = classes.Red;
    }

    if(props.countries.length <= 2) {
      assignedClasses.push(classes.red) 
    }

    if (props.countries.length <= 1) {
      assignedClasses.push(classes.bold)
    }


    return(
        <div className={classes.Cockpit}>
            <h1> Country Population </h1>
            <p className={assignedClasses.join(' ')}>This is a React Application </p> {/* className must be a string not array! */}
            <button
                className={btnClass}
                onClick={props.clicked}>
                 Toggle Countries
            </button>
      </div>
    )

}

export default cockpit;