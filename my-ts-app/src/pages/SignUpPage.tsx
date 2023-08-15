import React, { useState, ChangeEvent, FormEvent } from 'react';
import { message } from 'antd';

interface SignUpPageProps {
  onSignUp: (userData: { username: string; email: string; password: string }) => void;
}

const SignUpPage: React.FC<SignUpPageProps> = ({ onSignUp }) => {
  const [userData, setUserData] = useState({ username: '', password: '', email: '' });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (userData.username.trim() === '' || userData.password.trim() === '' || userData.email.trim() === '') {
      message.error('Please enter a valid username and password of email.');
      return;
    }

    onSignUp(userData);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleInputChange}
          value={userData.username}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={handleInputChange}
          value={userData.email}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInputChange}
          value={userData.password}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
