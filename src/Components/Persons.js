import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
      } from 'react-router-dom';
import PersonDetails from './PersonDetails'      
      
    const Persons = ({ persons }) => {
      return (
        <div>
          <center><h1>Person List</h1></center>
          <>
          {persons.map((person) => (
            <div>
            <Link to={`/persons/${person.id}`} ><div>{person.id} {person.firstName} {person.lastName}</div></Link>
            </div>
            
            ))}
        </>
        </div>
      )
    };

    export default Persons;