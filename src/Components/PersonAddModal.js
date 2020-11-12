import React from 'react'
import { Modal } from 'react-responsive-modal';

import {
    BrowserRouter as Router,
    Route,
    Link
      } from 'react-router-dom';

const PersonAddModal = (props) => {
    return (
    <div>
        <button onClick={() => props.setOpen(true)}>{props.addFather ? <div>Add father</div>:<div>Add mother</div>}</button>
                                    <Modal open={props.open} onClose={() => props.setOpen(false)}>
                                        <h1>contents of modal for {props.details.firstName}</h1>
                                        <input type="text" placeholder="Enter first name" required/>
                                        <input type="text" placeholder="Enter last name" required/>
                                        <button type="button" onClick={()=>{props.setOpen(false);}}>Submit</button>
                                        
                                    </Modal>
    </div>
    );
}

export default PersonAddModal;