import React, { Component } from 'react';
import logo from './logo.svg';
import '../styles/App.css';
import ContactList from './ContactList';

class AppBody extends Component {
	constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
        	<div className = "app-body">
	            <ContactList/>
	            <div className = "contact-info"></div>
            </div>
        );
    }
}

export default AppBody;
