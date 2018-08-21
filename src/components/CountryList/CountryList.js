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


      componentWillReceiveProps(nextProps) {
        console.log('[UPDATE CountryList.js] Inside componentWillReceiveProps()', nextProps)
      }

      shouldComponentUpdate(nextProps, nextState){
        console.log('[UPDATE CountryList.js] Inside shouldComponentUpdate()', nextProps, nextState)
        return nextProps.countries !== this.props.countries ||
        nextProps.changed !== this.props.changed ||
        nextProps.clicked !== this.props
      }

      componentWillUpdate(nextProps,nextState) {
        console.log('[UPDATE CountryList.js] Inside componentWillUpdate()', nextProps, nextState) 
      }

      componentDidUpdate() {
        console.log('[UPDATE CountryList.js] Inside componentDidUpdate()')
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