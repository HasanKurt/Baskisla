import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import PersonLink from './PersonLink'
import PersonAddModal from './PersonAddModal'

const PersonDetails = ({ match }) => {



    const [details, setDetails] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(true);
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        fetch(`https://localhost:44332/api/person/${match.params.id}/details`)
            .then(response => response.json())
            .then((data) => { setDetails(data); setIsLoading(false); });


    }, [match.params.id])

    return (
        <>
            {
                (isLoading || details.id == null) ? <h1>Loading..</h1>
                    :
                    <>
                        <h1>Person Details of {details.firstName} {details.lastName}</h1>
                        <h2>Parents </h2>
                        {
                            details.father != null && details.father != 0 ?
                            <PersonLink id={details.father  } />
                                :
                                <>
                                    <PersonAddModal details={details} open={open} setOpen={setOpen} addFather={true}/>
                                </>
                        }
                        {
                            details.mother != null && details.mother != 0 ?
                                <PersonLink id={details.mother} />
                                :
                                <PersonAddModal details={details} open={open} setOpen={setOpen} addFather={false}/>
                        }
                        {details.spouse != 0 ?
                            <>
                                <h2>Spouse</h2>
                                <PersonLink id={details.spouse}/>
                            </>
                            : <></>}
                        <h2>Siblings</h2>
                        {
                            details.siblings.map((sibling) => (<PersonLink id={sibling} />))
                        }
                        <h2>Children</h2>
                        {
                            details.children.map((child) => (<PersonLink id={child} />))
                        }
                    </>
            }



        </>
    );
};


export default PersonDetails;