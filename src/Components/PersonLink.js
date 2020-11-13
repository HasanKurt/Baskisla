import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
      } from 'react-router-dom';

const PersonLink = ({id}) => {

    const [name, setName] = React.useState('');
    const [gender, setGender] = React.useState('');
    
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch(`https://baskislaapi20201113123205.azurewebsites.net/api/person/${id}`)
            .then(response => response.json())
            .then((data) => { setName(data.firstName); setGender(data.gender); setLoading(false); });


    }, [id])


    

    return (
    <div>
    {loading ?  <div>loading...</div>: <Link to={`/persons/${id}`}><button type="button" className={'button'+gender}>{name}</button></Link>}
    </div>
    );
}

 export default PersonLink;
