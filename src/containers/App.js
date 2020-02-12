import React, {Component} from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
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
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons persons={this.state.persons}
                               clicked={this.deletePersonHandler}
                               changed={this.nameChangedHandler}/>;
        }

        return (
            <div className={classes.App}>
                <Cockpit appTitle={this.props.title}
                         showPersons={this.state.showPersons}
                         persons={this.state.persons}
                         clicked={this.togglePersonsHandler}/>
                {persons}
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, I\'m a React App!!!'));
    }
}

// npm install --save radium
// npm install --save styled-components
export default App;