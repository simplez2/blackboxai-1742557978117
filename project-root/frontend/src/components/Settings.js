import React, { useState } from 'react';

const Settings = () => {
    const [apiUrl, setApiUrl] = useState(localStorage.getItem('openaiApiUrl') || '');
    const [apiKey, setApiKey] = useState(localStorage.getItem('openaiApiKey') || '');

    const handleSave = () => {
        localStorage.setItem('openaiApiUrl', apiUrl);
        localStorage.setItem('openaiApiKey', apiKey);
        alert('Settings saved successfully!');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Settings</h1>
            <div className="mt-4">
                <label className="block">OpenAI API URL:</label>
                <input
                    type="text"
                    value={apiUrl}
                    onChange={(e) => setApiUrl(e.target.value)}
                    className="border p-2 w-full"
                />
            </div>
            <div className="mt-2">
                <label className="block">OpenAI API Key:</label>
                <input
                    type="text"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="border p-2 w-full"
                />
            </div>
            <button onClick={handleSave} className="mt-4 bg-blue-500 text-white p-2">
                Save Settings
            </button>
        </div>
    );
};

export default Settings;