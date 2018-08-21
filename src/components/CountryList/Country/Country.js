import React, {Component} from 'react'; 
import classes from './Country.css'

class Country extends Component {
    render() {
        return (
            <div className={classes.Country}>
                <p onClick={this.props.click}> {this.props.population} of people live in {this.props.name}</p>
                <p> {this.props.children} </p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }    
}

export default Country; 

    /* before return statement, for error boundary
    
    const rnd = Math.random();
     if (rnd > 0.7) 
     {
        throw new Error ('Something went wrong')
     } 
    
     */