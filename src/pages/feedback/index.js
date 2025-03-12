import { useEffect, useState } from 'react';
import TitleCard from '../../components/Cards/TitleCard';

function Feedback() {
    useEffect(() => {
        document.title = "Feedback";
    }, []);

    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(5);
    const [submitted, setSubmitted] = useState(false);

    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
    };

    const handleRatingChange = (e) => {
        setRating(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (feedback.trim()) {
            setSubmitted(true);
        }
    };

    const feedbackStyles = {
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
        <TitleCard title="Feedback">
            <div style={feedbackStyles.container}>
                <h2 style={feedbackStyles.title}>We Value Your Feedback</h2>
                <p style={feedbackStyles.paragraph}>
                    Please provide us with your feedback to help us improve our services. Your thoughts are important to us!
                </p>

                {submitted ? (
                    <div style={feedbackStyles.successMessage}>
                        Thank you for your feedback! We appreciate your input.
                    </div>
                ) : (
                    <form style={feedbackStyles.form} onSubmit={handleSubmit}>
                        <label style={{ fontSize: '1rem' }} htmlFor="feedback">
                            Your Feedback:
                        </label>
                        <textarea
                            id="feedback"
                            value={feedback}
                            onChange={handleFeedbackChange}
                            placeholder="Write your feedback here..."
                            style={feedbackStyles.textarea}
                        />

                        <label style={{ fontSize: '1rem' }} htmlFor="rating">
                            Your Rating:
                        </label>
                        <select
                            id="rating"
                            value={rating}
                            onChange={handleRatingChange}
                            style={feedbackStyles.input}
                        >
                            <option value={1}>1 - Poor</option>
                            <option value={2}>2 - Fair</option>
                            <option value={3}>3 - Good</option>
                            <option value={4}>4 - Very Good</option>
                            <option value={5}>5 - Excellent</option>
                        </select>

                        <button
                            type="submit"
                            style={feedbackStyles.submitButton}
                            onMouseEnter={(e) => e.target.style.backgroundColor = feedbackStyles.submitButtonHover.backgroundColor}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#16a085'}
                        >
                            Submit Feedback
                        </button>
                    </form>
                )}
            </div>
        </TitleCard>
    );
}

export default Feedback;
