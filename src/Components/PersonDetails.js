import React, { Component } from 'react';

 const PersonDetails = ({match}) => {
    return (
        <div>
           <h1>Person Details of {match.params.id}</h1> 
        </div>
     );
    };
  

 export default PersonDetails;