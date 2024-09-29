// src/components/InputField.js

import React from 'react';

const InputField = ({ input, onChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="input-form">
            <input 
                type="text" 
                value={input} 
                onChange={onChange} 
                placeholder="Ask me anything..." 
                className="input-field"
            />
            <button type="submit" className="send-button">Send</button>
        </form>
    );
};

export default InputField;