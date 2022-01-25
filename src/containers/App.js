import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxiliary';
import withClass from '../hoc/WithClass';


class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  state = {
    persons: [
      { id: 'id1', name: 'Mohammad', age: 36 },
      { id: 'id2', name: 'Dan', age: 42 },
      { id: 'id3', name: 'Mette', age: 40 },
      { id: 'id4', name: 'Bjarte', age: 46 },
    ],
    showPersons: false,
    showCockpit: true
  };




  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };


  render() {
    console.log('[App.js] render');
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (

      <Aux>
        <button
          onClick={() => { this.setState({ showCockpit: false }) }}
        >Remove Cockpit</button>

        {
          this.state.showCockpit ? <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          /> : null
        }

        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App)
