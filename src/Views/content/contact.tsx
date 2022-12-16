import React, { ChangeEvent, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Contact() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        document.title = "COMP2112 - Contact";
    }, []);

    function onChangeFirstName(e: ChangeEvent<HTMLInputElement>) {
        setFirstName(e.target.value);
    }

    function onChangeLastName(e: ChangeEvent<HTMLInputElement>) {
        setLastName(e.target.value);
    }

    function onChangeContactNumber(e: ChangeEvent<HTMLInputElement>) {
        setContactNumber(e.target.value);
    }

    function onChangeEmailAddress(e: ChangeEvent<HTMLInputElement>) {
        setEmailAddress(e.target.value);
    }

    function onChangeMessage(e: ChangeEvent<HTMLTextAreaElement>) {
        setMessage(e.target.value);
    }

    function onSubmitForm(e: any) {
        e.preventDefault();
        console.log(firstName);
        console.log(lastName);
        console.log(contactNumber);
        console.log(emailAddress);
        console.log(message);
    }

    return (
        <div className="container">
            <section id="contact" className="row">

                <div className="col-md-offset-2 col-md-8 col-xs-offset-1 col-xs-10">

                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">Contact Us</h3>
                        </div>
                        <div className="panel-body">
                            <form id="contactForm" className="form" onSubmit={onSubmitForm}>
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" className="form-control" id="firstName" name="firstName" placeholder="First Name" required onChange={onChangeFirstName} onBlur={onChangeFirstName} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last Name" required onChange={onChangeLastName} onBlur={onChangeLastName} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="contactNumber">Contact Number</label>
                                    <input type="tel" className="form-control" id="contactNumber" name="email" placeholder="Contact Number" required onChange={onChangeContactNumber} onBlur={onChangeContactNumber} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Email" required onChange={onChangeEmailAddress} onBlur={onChangeEmailAddress} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="comments">Your Message</label>
                                    <textarea className="form-control" rows={5} id="yourMessage" name="comments" placeholder="Enter Your Comments Here" required onChange={onChangeMessage} onBlur={onChangeMessage}></textarea>
                                </div>
                                <div className="text-right">
                                    <button id="sendButton" type="submit" className="btn btn-primary">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;