import React, { Component } from 'react';
import Radium, {StyleRoot } from 'radium';
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

  toggleCountriesHandler = () => {
    const doesShow = this.state.showCountries;
    this.setState({showCountries: !doesShow})
  }

  
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


  render() {
    const style = {
      backgroundColor: 'white',
      color: 'green',
      font: 'inherit',
      border: '2px solid green',
      padding: '8px',
      cursor: 'pointer',
      margin: '8px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    // countries are not displayedá
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
      style.border = "2px solid red";
      style.color = "red";
      style[':hover'] = {
        backgroundColor: 'lightcoral',
        color: 'black'
      };
      
    }
    
    const classes = [];
    if(this.state.countries.length <= 2) {
      classes.push('red') 
    }
    if (this.state.countries.length <= 1) {
      classes.push('bold')
    }

    return (
      <StyleRoot>
      <div className="App">
      <h1> Country Population </h1>
      <p className={classes.join(' ')}>This is a React Application </p> {/* className must be a string not array! */}

      <button
        style = {style}
        onClick={this.toggleCountriesHandler}
        > Toggle Countries
      </button>
      {countries}

      </div>
      </StyleRoot>
    );
    
    
  }
}

export default Radium(App);

/* Compiled looks like this: 
return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Some testing text')); */