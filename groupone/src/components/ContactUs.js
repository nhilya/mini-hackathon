import React, { useState } from 'react';
import "../App.css";

// Contact component for capturing user feedback
function Contact() {
    const [name, setName] = useState(''); // State for the name input
    const [email, setEmail] = useState(''); // State for the email input
    const [feedback, setFeedback] = useState(''); // State for the feedback input
    const [rating, setRating] = useState('1'); // State for the rating input, default value is '1'

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        alert('Form submitted, thank you for your valuable feedback!'); // Display an alert message
        console.log("Form submitted, thank you!") // Log a message to the console

        // Here you would typically send the form data to a server

        // Reset the form fields after submission
        setName('');
        setEmail('');
        setFeedback('');
        setRating('1');
    };

    // Render the contact form
    return (
        <div>
            <h1>Your feedback is valuable to us!</h1>
            <div className="centered-form-container">
                {/* Form submission handled by handleSubmit function */}
                <form onSubmit={handleSubmit}>
                    {/* Name Input */}
                    <div className="form-group">
                        <label htmlFor="inputName">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputName"
                            value={name}
                            onChange={e => setName(e.target.value)} // Update the name state on change
                            placeholder="Enter your name"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="form-group">
                        <label htmlFor="inputEmail">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail"
                            value={email}
                            onChange={e => setEmail(e.target.value)} // Update the email state on change
                            placeholder="Enter email"
                        />
                    </div>

                    {/* Feedback Textarea */}
                    <div className="form-group">
                        <label htmlFor="inputFeedback">Feedback Comments</label>
                        <textarea
                            className="form-control"
                            id="inputFeedback"
                            value={feedback}
                            onChange={e => setFeedback(e.target.value)} // Update the feedback state on change
                            rows="3"
                            placeholder="Your feedback"
                        ></textarea>
                    </div>

                    {/* Rating Select */}
                    <div className="form-group">
                        <label htmlFor="inputRating">Rating</label>
                        <select
                            className="form-control"
                            id="inputRating"
                            value={rating}
                            onChange={e => setRating(e.target.value)} // Update the rating state on change
                        >
                            <option>1 - Poor</option>
                            <option>2 - Fair</option>
                            <option>3 - Good</option>
                            <option>4 - Very good</option>
                            <option>5 - Excellent</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;