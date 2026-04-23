
import './Contact.css';

const Contact = () => {



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