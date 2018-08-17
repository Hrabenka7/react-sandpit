import React, { Component } from 'react';
import './App.css';
import Country from './Country/Country'; 

class App extends Component {
  state = {
    countries: [
      { id: '1', name: 'Czechia', population: 10.6 + 'M'},
      { id: '2', name: 'Slovakia', population: 5.4 + 'M'},
      { id: '3', name: 'Spain', population: 46.5 + 'M'},
    ],
    showCountries: false
  }


  nameChangedHandler = (event, id) => {
    const countryIndex = this.state.countries.findIndex( c => {
      return c.id === id
    });

    const country = {
      //spread opp for a new object, to not mutate dirrectly
      ...this.state.countries[countryIndex]
    } 

    country.name = event.target.value
    const countries = [...this.state.countries];
    countries[countryIndex] = country;
    this.setState({ countries: countries})
  }

  deleteCountryHandler = (countryIndex) => {
    // ES6 const countries = [...this.state.persons]
    const countries = this.state.countries.slice();   //list of countries, slice creates new Array(copy)
    countries.splice(countryIndex, 1);    // removing country under certain index, 1 country only
    this.setState({countries: countries})    // updating the list of countries
  }

  toggleCountriesHandler = () => {
    const doesShow = this.state.showCountries;
    this.setState({showCountries: !doesShow})
  }



  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid purple',
      padding: '8px',
      cursor: 'pointer',
      margin: '8px'
    };

    // countries are not displayed
    let countries= null;

    if (this.state.showCountries) {
      countries = (
        <div>
          {this.state.countries.map((country, index) => {
            return <Country 
              click = {() => this.deleteCountryHandler(index)}
              name={country.name}
              population={country.population}
              key={country.id}
              changed={(event) => this.nameChangedHandler(event, country.id)}
                />
              })}
        </div>
      );
    }
    
    return (
      <div className="App">
      <h1> Country Population </h1>
      
      <button
        style = {style}
        onClick={this.toggleCountriesHandler}
        > Show Countries
      </button>
      {countries}

      </div>
    );
    
    
  }
}

export default App;

/* Compiled looks like this: 
return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Some testing text')); */