import React, { useState } from 'react';
import './Contact.scss'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Här kan du implementera logik för att skicka formulärdata till en server eller annan åtgärd
    console.log(formData);
    // Återställ formuläret efter att det har skickats
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-container">
        <label className="form-label" htmlFor="name">Namn:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>
      <div className="form-container">
        <label className="form-label" htmlFor="email">E-post:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>
      <div className="form-container">
        <label className="form-label" htmlFor="message">Meddelande:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="form-input-message"
        />
      </div>
      <button className="form-button" type="submit">Skicka</button>
    </form>
  );
};

export default Contact;