import React, { useState } from 'react';

function SignUp() {
  // State for storing form data for sign up
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

  // Function to handle sign up with Google
  const handleSignUpWithGoogle = () => {
    // Logic for signing up with Google
    console.log('Sign up with Google clicked');
  };

  // Function to handle sign up with Facebook
  const handleSignUpWithFacebook = () => {
    // Logic for signing up with Facebook
    console.log('Sign up with Facebook clicked');
  };

  return (
    <div>
      <h1>Sign Up</h1>
      {/* Sign up form */}
      <div>
        <h2>Create an Account</h2>
        <form onSubmit={handleSignUp}>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      {/* Sign up with Google */}
      <div>
        <h2>Sign Up with Google</h2>
        {/* Add Google sign up button */}
        <button onClick={handleSignUpWithGoogle}>Sign Up with Google</button>
      </div>
      {/* Sign up with Facebook */}
      <div>
        <h2>Sign Up with Facebook</h2>
        {/* Add Facebook sign up button */}
        <div
          className="fb-login-button"
          data-size="medium"
          data-button-type="continue_with"
          data-layout="rounded"
          data-auto-logout-link="false"
          data-use-continue-as="false"
          data-width=""
          onClick={handleSignUpWithFacebook}
        ></div>
      </div>
    </div>
  );
}

export default SignUp;
