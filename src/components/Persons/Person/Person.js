import React, {Component} from 'react';
import withClass from "../../../hoc/withClass";
import Aux from '../../../hoc/Auxiliary'
import classes from './Person.css';
import PropTypes from 'prop-types';

class Person extends Component {
    componentDidMount() {
        this.inputElement.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text"
                       ref={(inputEl) => {this.inputElement = inputEl}}
                       onChange={this.props.changed}
                       value={this.props.name}/>
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

// npm install --save prop-types
export default withClass(Person, classes.Person);