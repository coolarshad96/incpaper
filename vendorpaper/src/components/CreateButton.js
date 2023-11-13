import React from "react";
import "./CreateButton.css"
import Button from 'react-bootstrap/Button';

function CreateButton() {
    return ( 
    <div className="createbtn-container">
         <Button variant="outline-success">Create Company</Button>{' '}
    </div> );
}

export default CreateButton;