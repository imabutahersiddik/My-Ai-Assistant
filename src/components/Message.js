// src/components/Message.js

import React from 'react';
import './Message.css'; // Import styles for Message component

const Message = ({ text, isUser }) => {
    return (
        <div className={`message ${isUser ? 'user-message' : 'ai-message'}`}>
            <strong>{isUser ? 'You' : 'AI'}:</strong> {text}
        </div>
    );
};

export default Message;