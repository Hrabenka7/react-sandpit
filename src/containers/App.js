import React, { Component } from 'react';
import classes from './App.css';
// components
import CountryList from '../components/CountryList/CountryList';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
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

    // countries are not displayed
    let countries= null;

    if (this.state.showCountries) {
      countries = <CountryList
        countries={this.state.countries}
        clicked={this.deleteCountryHandler}
        changed={this.nameChangedHandler} />
    }
    
    return (
      <div className={classes.App}>
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