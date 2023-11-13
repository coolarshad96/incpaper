import React from "react";
import "./UserAccount.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserAccount() {
    return (
        <div className="account-container">
            <DropdownButton
            variant="success"  expand="lg"
                align="end"
                title="Howdy, Saiyad"
                id="dropdown-menu-align-end"
            >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
        </div>
    );
}

export default UserAccount;