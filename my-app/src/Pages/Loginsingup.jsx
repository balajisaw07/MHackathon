import React, { useState } from 'react';
import './CSS/LoginSignup.css';


export const Loginsingup = () => {
  const [name,setName]=useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange=(e) =>setName(e.target.value)
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(name);
      console.log(email);
      console.log(password);
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),  // Include the name in the request
      });
      const result = await response.json();
      if (response.ok) {
        console.log('Success:', result);
        alert("User Registered Sucessfully")
      } else {
        console.error('Error:', result);
        alert("Already Existed User")
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div>
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>Sign here</h1>
          <form className="loginsignup-fields" onSubmit={handleSubmit}>
          <input 
              type="name" 
              value={name} 
              onChange={handleNameChange} 
              name="name" 
              className="center-placeholder" 
              placeholder='Enter Name' 
            />
            <input 
              type="email" 
              value={email} 
              onChange={handleEmailChange} 
              name="email" 
              className="center-placeholder" 
              placeholder='Email Address' 
            />
            <input 
              type="password" 
              value={password} 
              onChange={handlePasswordChange} 
              name="password" 
              className="center-placeholder" 
              placeholder='Set Password' 
            />
            <button type="submit">Save</button>
          </form>

         
        </div>

       
      </div>
    </div>
  );
}