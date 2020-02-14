import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Auxiliary'

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] inside constructor', props);
    }

    componentWillMount() {
        console.log('[Person.js] inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] inside componentDidMount()');
    }

    // componentWillReceiveProps(nextProps, nextContext) {
    //     console.log('[UPDATE Person.js] inside componentWillReceiveProps()', nextProps);
    // }

    render () {
        console.log('[Person.js] inside render()');
        // return [
        //         <p id="1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>,
        //         <p id="2">{this.props.children}</p>,
        //         <input id="3" type="text"
        //                onChange={this.props.changed}
        //                value={this.props.name}/>
        // ]
        return (
            // <div className="Person" style={style}>
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text"
                       onChange={this.props.changed}
                       value={this.props.name}/>
            </Aux>
        )
    }
}


export default withClass(Person, classes.Person);