import React from 'react'
import { Modal } from 'react-responsive-modal';


class PersonAddModal extends React.Component 
{
    constructor(props) {
        super(props);
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.state= {
            gender: ''
        }
    }


    handleSubmit(event)
    {
        //todo: fix the data (to be in json format?)
        //todo: fix the fake url
        console.log(event);
        var target = event.target;
        var properties = this.props;
        var gender = this.gender;
        event.preventDefault();//todo: why needed?
        const data = new FormData(event.target);
        console.log(data);
        fetch("fakeurl:3000/api/person/",{
            method: 'POST',
            body: data
        })
        .then((data) => console.log(data))
        .catch(err =>  alert("Error while creating new person. Details:" + err.message + "The data was: " + data));  
        this.props.setOpen(false);
    }
    

    render() { 
        return(
    <div>
        <button onClick={() => this.props.setOpen(true)}>{this.props.addFather ? <div>Add father</div>:<div>Add mother</div>}</button>
                                    <Modal open={this.props.open} onClose={() => this.props.setOpen(false)}>
                                        <h1>Add a {this.props.id} of {this.props.details.firstName}</h1>
                                        <form onSubmit={(event) => {this.handleSubmit(event)}}>
                                        <input type="text" id="firstName" name="firstName" placeholder="Enter first name" required/>
                                        <input type="text" id="lastName" name="lastName" placeholder="Enter last name" required/>
                                        <button type="submit">Submit</button>
                                        </form>
                                    </Modal>
    </div>
        )};
}

export default PersonAddModal;