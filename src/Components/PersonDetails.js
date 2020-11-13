import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import PersonLink from './PersonLink'
import PersonAddModal from './PersonAddModal'

const PersonDetails = ({ match }) => {



    const [details, setDetails] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(true);
    const [openDad, setOpenDad] = React.useState(false);
    const [openMom, setOpenMom] = React.useState(false);
    

    React.useEffect(() => {
        fetch(`https://baskislaapi20201113123205.azurewebsites.net/api/person/${match.params.id}/details`)
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
                                    <PersonAddModal id="father"  details={details} open={openDad} setOpen={setOpenDad} addFather={true}/>
                                </>
                        }
                        {
                            details.mother != null && details.mother != 0 ?
                                <PersonLink id={details.mother} />
                                :
                                <PersonAddModal id="mother"  details={details} open={openMom} setOpen={setOpenMom} addFather={false}/>
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