import React, { PureComponent } from 'react';
import classes from './App.css';
// components
import CountryList from '../components/CountryList/CountryList';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    // possible initialize this.state = ... here. Needs super(props) beforehand
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()')
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState)
  //   return nextState.countries !== this.state.countries ||
  //   nextState.showCountries !== this.state.showCountries;
  // }

  componentWillUpdate(nextProps,nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState) 
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate()')
  }

  state = {
    countries: [
      { id: '1', name: 'Czechia', population: 10.6 + 'M'},
      { id: '2', name: 'Slovakia', population: 5.4 + 'M'},
      { id: '3', name: 'Spain', population: 46.5 + 'M'},
    ],
    showCountries: false
  }

  // ########################################## METHODS ################################################ //
  
  deleteCountryHandler = (countryIndex) => {
    // ES6 const countries = [...this.state.persons]
    const countries = this.state.countries.slice();   //list of countries, slice creates new Array(copy)
    countries.splice(countryIndex, 1);    // removing country under certain index, 1 country only
    this.setState({countries: countries})    // updating the list of countries
  }

  
  nameChangedHandler = (event, id) => {
    const countryIndex = this.state.countries.findIndex( c => {
      return c.id === id
    });
    
    const country = {
      //spread opp for a new object, to not mutate directly
      ...this.state.countries[countryIndex]
    } 
    country.name = event.target.value
    const countries = [...this.state.countries];
    countries[countryIndex] = country;
    this.setState({ countries: countries})
  }
  
  toggleCountriesHandler = () => {
    const doesShow = this.state.showCountries;
    this.setState({showCountries: !doesShow})
  }


 // ########################################## RENDER ################################################ //
  render() {
    console.log('[App.js] Inside render()');
    let countries= null; // countries are not displayed

    if (this.state.showCountries) {
      countries = <CountryList
        countries={this.state.countries}
        clicked={this.deleteCountryHandler}
        changed={this.nameChangedHandler} />
    }
    
    return (
      <div className={classes.App}>
      <button onClick={() => {this.setState({showCountries: true})}}>Show Countries</button>
        <Cockpit
        appTitle = {this.props.title} 
        showCountries ={this.state.showCountries}
        countries = {this.state.countries}
        clicked = {this.toggleCountriesHandler} />
        {countries}
      </div>
    );
  }
}

export default App;

/* Compiled looks like this: 
return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Some testing text')); */