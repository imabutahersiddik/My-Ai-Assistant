// src/App.js

import React from 'react';
import AIChatbot from './components/AIChatbot';
import './styles/App.css'; // Import global styles

const App = () => {
    return (
        <div className="App">
            <h1>Welcome to Your AI Assistant</h1>
            <AIChatbot />
        </div>
    );
};

export default App;