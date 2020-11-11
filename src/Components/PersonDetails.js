import React, { Component } from 'react';

 const PersonDetails = ({match}) => {
    
    const [details, setDetails] = React.useState({});
    
    React.useEffect(()=>{
    fetch(`https://localhost:44332/api/person/${match.params.id}`)
    .then(response => response.json())
    .then((data) => {console.log(data); setDetails(data);} );
  
    },[match.params.id])
    
    return (
        <div>
           <h1>Person Details of {match.params.id}</h1> 
           <h2>Lastname: {details.lastName}</h2>
           {details.father != null && details.father != 0 ?
           <h3>Father: {details.father}</h3>
           :
           <h3>Father unknown. Wanna add?</h3>
           }
        </div>
     );
    };
  

 export default PersonDetails;