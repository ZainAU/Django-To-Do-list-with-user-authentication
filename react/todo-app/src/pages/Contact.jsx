import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export default function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
    setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
    setMessage(event.target.value);
    };

    const handleSubmit = () => {
        const isValidEmail = /\S+@\S+\.\S+/.test(email);
        if (!name || !email || !message) {
            alert('Please fill in all the fields');
            return;
        }
        if (isFormValid && isValidEmail) {
            // Call a function here to submit the form data
            console.log('Submitting form...');
        }
    };

    useEffect(() => {
        setIsFormValid(name !== '' && email !== '' && message !== '');
    }, [name, email, message]);
    
    return(
        <div>
        <div className="header-bar">
            <h1>Contact Us</h1>
            </div>
            <div className='card-body'>
            <form onSubmit={(event) => {event.preventDefault(); handleSubmit();}}>
                <div>
                <label>Name: </label>
                <input type="text" value={name} onChange={handleNameChange}/>
                </div>
                <div>
                <label>Email Address: </label>
                <input type="email" value={email} onChange={handleEmailChange}/>
                </div>
                <div>
                <label>Message: </label>
                <textarea value={message} onChange={handleMessageChange}/>
                </div>
                <button className="button" type="submit" >Submit</button>
                <Link to='/dashboard'>Back</Link>
            </form>
            </div>
        </div>
    );
}