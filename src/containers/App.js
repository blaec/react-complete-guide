import React, {PureComponent} from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import Aux from '../hoc/Auxiliary'

class App extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[App.js] inside constructor', props);
    }

    componentWillMount() {
        console.log('[App.js] inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[App.js] inside componentDidMount()');
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('[UPDATE App.js] inside shouldComponentUpdate()', nextProps, nextState);
    //     return nextState.persons !== this.state.persons ||
    //         nextState.showPersons !== this.state.showPersons;
    // }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('[UPDATE App.js] inside componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[UPDATE App.js] inside componentDidUpdate()');
    }

    state = {
        persons: [
            {id: 'a1', name: 'Max', age: 28},
            {id: 'a2', name: 'Manu', age: 29},
            {id: 'a3', name: 'Stephanie', age: 26}
        ],
        otherState: 'some other value',
        showPersons: false
    };

    switchNameHandler = () => {
        // console.log('Was clicked!')
        // DONT DO THIS this.state.persons[0].name = 'Maximilian';
        this.setState({
            persons: [
                {name: 'Maximilian', age: 28},
                {name: 'Manu', age: 29},
                {name: 'Stephanie', age: 27}
            ]
        })
    };

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

        this.setState({persons: persons});
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
        console.log('[App.js] render()');
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons persons={this.state.persons}
                               clicked={this.deletePersonHandler}
                               changed={this.nameChangedHandler}/>;
        }

        return (
            <Aux>
                <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
                <Cockpit appTitle={this.props.title}
                         showPersons={this.state.showPersons}
                         persons={this.state.persons}
                         clicked={this.togglePersonsHandler}/>
                {persons}
            </Aux>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, I\'m a React App!!!'));
    }
}

// npm install --save radium
// npm install --save styled-components
export default withClass(App, classes.App);