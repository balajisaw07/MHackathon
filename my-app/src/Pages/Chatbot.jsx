import React, { useEffect } from 'react';
import './CSS/Chatbot.css'; // Import the CSS file
import chat from '../Component/Assest/chat.png'
export const Chatbot = () => {
  useEffect(() => {
    // Dynamically load the JavaScript
    const script = document.createElement('script');
    script.src = '/chatbot.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="container">
      <div className="chatbox">
        <div className="chatbox__support">
          <div className="chatbox__header">
            <div className="chatbox__image--header">
              <img src={chat} alt="image" />
            </div>
            <div className="chatbox__content--header">
              <h4 className="chatbox__heading--header">Chat support</h4>
              <p className="chatbox__description--header">Hi. My name is Sam. How can I help you?</p>
            </div>
          </div>
          <div className="chatbox__messages">
            <div></div>
          </div>
          <div className="chatbox__footer">
            <input type="text" placeholder="Write a message..." />
            <button className="chatbox__send--footer send__button">Send</button>
          </div>
        </div>
        <div className="chatbox__button">
          <button><img src={chat} alt="Chatbox icon" /></button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
