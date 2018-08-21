import React, {Component} from 'react'
import Country from './Country/Country'

// ONE LINE CAN OMIT RETURN
class CountryList extends Component {
    render() {
        return this.props.countries.map((country, index) => {
            return <Country    
            click = {() => this.props.clicked(index)}
            name={country.name}
            population={country.population}
            key={country.id}
            changed={(event) => this.props.changed(event, country.id)}
            />
        });
    }
}

export default CountryList