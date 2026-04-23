import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus(data.message || 'Message sent successfully!');
        if (!data.warning) {
          setFormData({ name: '', email: '', message: '' });
        }
      } else {
        setStatus(data.message || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Could not connect to the server. Please ensure the backend is running.');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2>Contact</h2>
        <p className="contact-text">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>

        <div className="contact-links">
          <a href="mailto:ayushtanty003@gmail.com" className="email-btn">Email Me</a>
          <a href="https://github.com/AyushTanty" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/ayush-tanty/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/_.ayusxx._?igsh=aXY3OWE2MmZhcGg4" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>

        <div className="contact-details">
          <p>Email: ayushtanty003@gmail.com</p>
          <p>Phone: +91 XXXXX XXXXX</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;