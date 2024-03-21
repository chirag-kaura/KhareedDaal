import React,{useState} from 'react';
import './Contact_Us.css'

function ContactForm(){
    const [formData, setFormData] =useState({
        name:'',
        email:'',
        message:''
    });

    const handleChange = (e) =>{
        const {name,value} =e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
        alert('Thank you for contacting us!');

        setFormData({
            name:'',
            email:'',
            message:''
        });
    };

    return(
        <form onSubmit={handleSubmit}>
            <h2>Contact Us</h2>
            <div className='Contact-us'>
                <div className='container'>
                <label htmlFor='name'>Name:</label>
                <input 
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input 
                type='text'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>
            <button type='submit'>Submit</button>
            </div>
        </form>
    );
}

export default ContactForm;