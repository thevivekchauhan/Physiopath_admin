import { useEffect, useState } from 'react';
import TitleCard from '../../components/Cards/TitleCard';

function ContactUs() {
    useEffect(() => {
        document.title = "Contact Us";
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            setSubmitted(true);
            // Here, you would typically send the form data to a server or API.
        }
    };

    const contactStyles = {
        container: {
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        title: {
            fontSize: '2.5rem',
            color: '#2c3e50',
            marginBottom: '20px',
        },
        paragraph: {
            fontSize: '1.125rem',
            lineHeight: '1.8',
            color: '#555',
            marginBottom: '20px',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
        },
        input: {
            padding: '10px',
            fontSize: '1rem',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '100%',
            boxSizing: 'border-box',
        },
        textarea: {
            padding: '10px',
            fontSize: '1rem',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '100%',
            height: '150px',
            boxSizing: 'border-box',
        },
        submitButton: {
            padding: '12px 20px',
            fontSize: '1.125rem',
            color: '#fff',
            backgroundColor: '#16a085',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
        submitButtonHover: {
            backgroundColor: '#1abc9c',
        },
        successMessage: {
            fontSize: '1.25rem',
            color: '#2ecc71',
            textAlign: 'center',
            marginTop: '20px',
        },
    };

    return (
        <TitleCard title="Contact Us">
            <div style={contactStyles.container}>
                <h2 style={contactStyles.title}>Get in Touch</h2>
                <p style={contactStyles.paragraph}>
                    We would love to hear from you! Please fill out the form below to contact us.
                </p>

                {submitted ? (
                    <div style={contactStyles.successMessage}>
                        Thank you for reaching out! We will get back to you soon.
                    </div>
                ) : (
                    <form style={contactStyles.form} onSubmit={handleSubmit}>
                        <label style={{ fontSize: '1rem' }} htmlFor="name">
                            Your Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            style={contactStyles.input}
                        />

                        <label style={{ fontSize: '1rem' }} htmlFor="email">
                            Your Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            style={contactStyles.input}
                        />

                        <label style={{ fontSize: '1rem' }} htmlFor="message">
                            Your Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message here..."
                            style={contactStyles.textarea}
                        />

                        <button
                            type="submit"
                            style={contactStyles.submitButton}
                            onMouseEnter={(e) => e.target.style.backgroundColor = contactStyles.submitButtonHover.backgroundColor}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#16a085'}
                        >
                            Submit
                        </button>
                    </form>
                )}
            </div>
        </TitleCard>
    );
}

export default ContactUs;
