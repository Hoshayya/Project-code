import React, { useState } from 'react';

function Login() {
  // State for storing form data for login/sign up
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission for login
  const handleLogin = (e) => {
    e.preventDefault();
    // Logic for handling login (e.g., sending login request to backend)
    console.log('Login form submitted:', formData);
    // Clear form fields after submission
    setFormData({
      email: '',
      password: ''
    });
  };

  // Function to handle form submission for sign up
  const handleSignUp = (e) => {
    e.preventDefault();
    // Logic for handling sign up (e.g., sending sign up request to backend)
    console.log('Sign up form submitted:', formData);
    // Clear form fields after submission
    setFormData({
      email: '',
      password: ''
    });
  };

  return (
    <div>
      <h1>Login/Sign Up</h1>
      {/* Login form */}
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
