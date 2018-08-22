import React, {Component} from 'react'; 
import classes from './Country.css';
import PropTypes from 'prop-types';

class Country extends Component {
    constructor(props) {
        super(props);
        console.log('[Country.js] Inside Constructor', props);
        // possible initialize this.state = ... here. Needs super(props) beforehand
      }
    
      componentWillMount() {
        console.log('[Country.js] Inside componentWillMount()')
      }
    
      componentDidMount() {
        console.log('[Country.js] Inside componentDidMount()')
      }
    render() {
        console.log('[Country.js] Inside render()')
        return (
            <div className={classes.Country}>
                <p onClick={this.props.click}> {this.props.population} of people live in {this.props.name}</p>
                <p> {this.props.children} </p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }    
}

Country.propTypes = {
    click: PropTypes.func,
    population: PropTypes.string,
    name: PropTypes.string,
    changed: PropTypes.func
};

export default Country; 

    /* before return statement, for error boundary
    
    const rnd = Math.random();
     if (rnd > 0.7) 
     {
        throw new Error ('Something went wrong')
     } 
    
     */