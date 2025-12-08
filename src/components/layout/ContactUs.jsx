import { useState } from 'react';
import '/src/styles/ContactSection.css';


const ContactSection = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", { firstName, lastName, email, phone, message });
        
        // Reset form
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
        
        alert("Thank you for your message! We'll get back to you soon.");
    };

    return (
        <section className="contact-section sec" id="contact">
            <div className="contact-container">
                <div className="contact-header">
                    <h2 className="contact-title">Contact Us</h2>
                    <p className="contact-subtitle">Reach Out Today</p>
                </div>

                <div className="contact-content">
                    {/* Left Side - Contact Info */}
                    <div className="contact-info">
                        <div className="info-item">
                            <h3 className="info-label">Email Address</h3>
                            <p className="info-value">Consulting@gmail.com</p>
                        </div>
                        
                        <div className="info-item">
                            <h3 className="info-label">Phone</h3>
                            <p className="info-value">+187219819283</p>
                        </div>
                        
                        <div className="info-item">
                            <h3 className="info-label">Address</h3>
                            <p className="info-value">456 Business Ave, New York, NY 10001</p>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        placeholder="First Name"
                                        required
                                        className="form-input"
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        placeholder="Last Name"
                                        required
                                        className="form-input"
                                    />
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                    required
                                    className="form-input"
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Phone Number"
                                    className="form-input"
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Your Message"
                                    rows="4"
                                    required
                                    className="form-textarea"
                                />
                            </div>
                            
                            <button type="submit" className="submit-button">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;