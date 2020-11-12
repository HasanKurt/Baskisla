import React, { Component } from 'react';
import {Link} from 'react-router-dom' 

const PersonDetails = ({ match }) => {

    const [details, setDetails] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        fetch(`https://localhost:44332/api/person/${match.params.id}`)
            .then(response => response.json())
            .then((data) => { console.log(data); setDetails(data); setIsLoading(false); });

    }, [match.params.id])

    return (
        <>
            {
                (isLoading || details.id == null) ? <h1>Loading..</h1>
                    :
                    <>
                        <h1>Person Details of {details.firstName} {details.lastName}</h1>
                        {
                            details.father != null && details.father != 0 ?
                            <Link to={`/persons/${details.father}`} ><div>Go to father of {details.firstName} </div></Link>
                                :
                                <h3>Father unknown. Wanna add?</h3>
                        }
                        {
                            details.mother != null && details.mother != 0 ?
                            <Link to={`/persons/${details.mother}`} ><div>Go to mother of {details.firstName} </div></Link>
                                :
                                <h3>Mother unknown. Wanna add?</h3>
                        }
                    </>
            }



        </>
    );
};


export default PersonDetails;