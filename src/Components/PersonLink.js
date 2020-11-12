import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
      } from 'react-router-dom';

const PersonLink = ({id}) => {

    const [name, setName] = React.useState('');
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch(`https://localhost:44332/api/person/${id}`)
            .then(response => response.json())
            .then((data) => { setName(data.firstName); setLoading(false); });


    }, [id])


    

    return (
    <div>
    {loading ?  <div>loading...</div>: <Link to={`/persons/${id}`}><button type="button">Go to {name}</button></Link>}
    </div>
    );
}

 export default PersonLink;
