import React, { useState } from 'react';

function Profile() {
  // State for storing user's personal information
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    profilePicture: 'https://example.com/profile.jpg',
  });

  // State for storing form data for updating user information
  const [formData, setFormData] = useState({
    newName: userInfo.name,
    newEmail: userInfo.email,
    newPassword: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission for updating user information
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for updating user information
    // Example:
    setUserInfo({
      name: formData.newName,
      email: formData.newEmail,
      profilePicture: userInfo.profilePicture, // Assuming profile picture cannot be updated in this example
    });
    alert('User information updated successfully!');
  };

  return (
    <div>
      <h1>Profile</h1>
      {/* Display user's personal information */}
      <div>
        <h2>Personal Information</h2>
        <p>Name: {userInfo.name}</p>
        <p>Email: {userInfo.email}</p>
        <img src={userInfo.profilePicture} alt="Profile" />
      </div>
      {/* Form for updating user information */}
      <div>
        <h2>Update Information</h2>
        <form onSubmit={handleSubmit}>
          <label>New Name:</label>
          <input type="text" name="newName" value={formData.newName} onChange={handleInputChange} />
          <label>New Email:</label>
          <input type="email" name="newEmail" value={formData.newEmail} onChange={handleInputChange} />
          <label>New Password:</label>
          <input type="password" name="newPassword" value={formData.newPassword} onChange={handleInputChange} />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
