import React, { Component } from 'react';
import logo from './logo.svg';
import '../styles/App.css';
import People from '../data/people.json';
class ContactList extends Component {
	constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        let peopleComponents = People.People.map((person, index)=>{return (<div className="contact-list-item"><span className="contact-name">{person.name}</span><i className="fa fa-caret-right"></i></div>)});
        return (
            <div className = "contact-list">
            {peopleComponents}
            </div>
        );
    }
}

export default ContactList;
