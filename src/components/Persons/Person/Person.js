import React, {Component} from 'react';
import withClass from "../../../hoc/withClass";
import Aux from '../../../hoc/Auxiliary'
import classes from './Person.css';
import PropTypes from 'prop-types';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                {this.props.isAuth ? <p>Authenticated</p> : <p>Please log in</p>}
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text"
                       // ref={(inputEl) => {this.inputElement = inputEl}}
                       ref={this.inputElementRef}
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