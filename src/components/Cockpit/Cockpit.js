import React, { useEffect } from 'react';
import classes from './Cockpit.css';


const cockpit = (props) => {

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []);


  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;  //style Toggle Button Red
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>The number of people we have!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(cockpit);