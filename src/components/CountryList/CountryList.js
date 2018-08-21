import React, {Component} from 'react'
import Country from './Country/Country'

// ONE LINE CAN OMIT RETURN
class CountryList extends Component {
    constructor(props) {
        super(props);
        console.log('[CountryList.js] Inside Constructor', props);
        // possible initialize this.state = ... here. Needs super(props) beforehand
      }
    
      componentWillMount() {
        console.log('[CountryList.js] Inside componentWillMount()')
      }
    
      componentDidMount() {
        console.log('[CountryList.js] Inside componentDidMount()')
      }

    render() {
        console.log('[CountryList.js] Inside render()')
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