// src/components/AIChatbot.js

import React, { useState } from 'react';
import { useCopilot } from 'copilotkit';
import Message from './Message';
import InputField from './InputField';
import './AIChatbot.css'; // Import styles for AIChatbot component

const AIChatbot = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const copilot = useCopilot();

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessages([...messages, { user: input }]);

        // Call Gemini or Mistral API here to get a response
        const response = await fetchGeminiResponse(input);

        setMessages((prev) => [...prev, { ai: response }]);
        setInput('');
    };

    return (
        <div className="chat-container">
            <h2 className="chat-title">AI Assistant</h2>
            <div className="messages-container">
                {messages.map((msg, index) => (
                    <Message key={index} text={msg.user || msg.ai} isUser={!!msg.user} />
                ))}
            </div>
            <InputField input={input} onChange={handleInputChange} onSubmit={handleSubmit} />
        </div>
    );
};

export default AIChatbot;