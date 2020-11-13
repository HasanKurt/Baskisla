import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
      } from 'react-router-dom';
import PersonDetails from './PersonDetails'      
      
    const Persons = ({ persons }) => {

        const [state, setState] = React.useState({searchTerm: ''})

        const editSearchTerm = (event) => { setState({searchTerm: event.target.value}) }

        function dynamicSearch()
        {
            //persons.map(person => console.log(person.lastName));
            if(state.searchTerm == undefined)
                return persons;
            return persons.filter(person => 
                (person.firstName?person.firstName:'').toLowerCase().includes(state.searchTerm.toLowerCase())
                || (person.lastName?person.lastName:'').toLowerCase().includes(state.searchTerm.toLowerCase())
                )
        }

      return (
        <div>
          <center><h1>Person List</h1></center>
          <input type='text' value={state.searchTerm} onChange={editSearchTerm} placeholder="Enter a name here" />
          <>
          {state.searchTerm == ''?<div></div>:<div>There are {dynamicSearch().length} people in the search results</div>}
          {dynamicSearch().map((person) => (
            <div>
            <Link to={`/persons/${person.id}`} ><button type="button" className={'button'+person.gender}>{person.firstName} {person.lastName}</button></Link>
            </div>
            
            ))}
        </>
        </div>
      )
    };

    export default Persons;