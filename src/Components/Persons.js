import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
      } from 'react-router-dom';
      
    const Persons = ({ persons }) => {
      return (
        <div>
          <center><h1>Person List</h1></center>
          {persons.map((person) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{person.firstName}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{person.lastName}</h6>
                </div>
            </div>
          ))}
        </div>
      )
    };

    export default Persons;