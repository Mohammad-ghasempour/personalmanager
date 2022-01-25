import React , { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends  PureComponent{
  
getSnapshotBeforeUpdate() {
  console.log('[Persons.js] getSnapshotBeforeUpdate');
  return {message: "Snapshot!"};
}

componentDidUpdate(prevProps,prevState,message) {
  console.log('[Persons.js componentDidUpdate');
  console.log(message);
}

componentWillUnmount() {
  console.log('[Persons.js] componentWillUnmount');
}
//   shouldComponentUpdate(nextProps, nextState) {
//   if (nextProps.persons !== this.props.person) {
//     return true;
// } else {
//     return false;
// }
//  }

  render(){
    console.log('[Persons.js] rendering...');
  return this.props.persons.map((person, index) => {
    return (
      <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={event => this.props.changed(event, person.id)}
      />
    );
  });
  }
}

export default Persons;
