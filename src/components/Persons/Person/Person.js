import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Auxiliary'
import PropTypes from 'prop-types'

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] inside constructor', props);
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log('[Person.js] inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] inside componentDidMount()');
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }
    }

    focus() {
        this.inputElement.current.focus();
    }

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
                {this.props.authenticated ? <p>I'm authenticated</p> : null}
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text"
                       ref={this.inputElement}
                       onChange={this.props.changed}
                       value={this.props.name}/>
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);