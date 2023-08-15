import React, { useState, ChangeEvent, FormEvent } from 'react';
import { message } from 'antd';

interface LoginPageProps {
  onLogin: (userData: { email: string; password: string }) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [userData, setUserData] = useState({ email: '', password: '' });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (userData.email.trim() === '' || userData.password.trim() === '') {
      message.error('Please enter a valid username and password.');
      return;
    }

    onLogin(userData);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
