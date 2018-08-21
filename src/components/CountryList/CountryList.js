import React from 'react'
import Country from './Country/Country'

// ONE LINE CAN OMIT RETURN
const countryList = (props) => props.countries.map((country, index) => {
    return <Country 
        click = {() => props.clicked(index)}
        name={country.name}
        population={country.population}
        key={country.id}
        changed={(event) => props.changed(event, country.id)}
        />
        });
  
export default countryList