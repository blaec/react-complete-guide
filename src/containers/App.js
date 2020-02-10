import React, {Component} from 'react';
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass"
import Aux from "../hoc/Auxiliary"

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }

    state = {
        persons: [
            {id: 'a1', name: 'Max', age: 28},
            {id: 'a2', name: 'Manu', age: 29},
            {id: 'a3', name: 'Stephanie', age: 26}
        ],
        otherState: 'some other value',
        showPersons: false,
        showCockpit: true,
        changeCounter: 0
    };

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    // componentWillMount() {
    //     console.log('[App.js] componentWillMount');
    // }

    // switchNameHandler = () => {
    //     // console.log('Was clicked!')
    //     // DONT DO THIS this.state.persons[0].name = 'Maximilian';
    //     this.setState({
    //         persons: [
    //             {name: 'Maximilian', age: 28},
    //             {name: 'Manu', age: 29},
    //             {name: 'Stephanie', age: 27}
    //         ]
    //     })
    // };

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[App.js] componentDidUpdate');
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        // const person = Object.assign({}, this.state.persons[personIndex]);
        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1
            };
        });
    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    render() {
        console.log('[App.js] render');
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons persons={this.state.persons}
                               clicked={this.deletePersonHandler}
                               changed={this.nameChangedHandler}/>;

        }

        return (
            <Aux>
                <button onClick={() => {
                    this.setState({showCockpit: false})
                }}>
                    Remove Cockpit
                </button>
                {this.state.showCockpit ? (<Cockpit title={this.props.appTitle}
                                                    showPersons={this.state.showPersons}
                                                    personsLength={this.state.persons.length}
                                                    clicked={this.togglePersonsHandler}/>
                ) : null}
                {persons}
            </Aux>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, I\'m a React App!!!'));
    }
}

// npm install --save radium
// npm install --save styled-components
export default withClass(App, classes.App);