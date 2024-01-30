import React, { useState } from 'react';

function Support() {
  // State for storing form data for contacting support
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission for contacting support
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for contacting support (e.g., sending email to support team)
    console.log('Form submitted:', formData);
    alert('Your message has been sent to our support team!');
    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <h1>Support</h1>
      {/* Contact form for users to reach out to the support team */}
      <div>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleInputChange} required />
          <button type="submit">Send Message</button>
        </form>
      </div>
      {/* FAQ section with answers to commonly asked questions */}
      <div>
        <h2>FAQ</h2>
        <p><strong>Q: How do I reset my password?</strong></p>
        <p>A: You can reset your password by visiting the 'Forgot Password' page and following the instructions.</p>
        <p><strong>Q: How can I access my course materials?</strong></p>
        <p>A: You can access your course materials by logging in to your account and visiting the 'Courses' page.</p>
        {/* Add more FAQs as needed */}
      </div>
    </div>
  );
}

export default Support;
