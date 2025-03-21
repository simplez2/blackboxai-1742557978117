import React, { useState } from 'react';

function Settings() {
  const [settings, setSettings] = useState({
    apiKey: '',
    apiUrl: 'https://api.openai.com/v1/chat/completions',
    notifications: true,
    darkMode: false,
    autoSave: true,
    language: 'en'
  });

  const [isSaving, setIsSaving] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    localStorage.setItem('settings', JSON.stringify(settings));
    setIsSaving(false);
  };

  return (
    <div className="space-y-6">
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Settings</h2>

        {/* API Configuration */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">API Configuration</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              OpenAI API Key
            </label>
            <div className="relative">
              <input
                type={showApiKey ? 'text' : 'password'}
                className="input-field pr-10"
                value={settings.apiKey}
                onChange={(e) => setSettings({...settings, apiKey: e.target.value})}
                placeholder="Enter your OpenAI API key"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 flex items-center"
                onClick={() => setShowApiKey(!showApiKey)}
              >
                <i className={`fas fa-eye${showApiKey ? '-slash' : ''} text-gray-400`}></i>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              API URL
            </label>
            <input
              type="text"
              className="input-field"
              value={settings.apiUrl}
              onChange={(e) => setSettings({...settings, apiUrl: e.target.value})}
              placeholder="Enter API URL"
            />
          </div>
        </div>

        <hr className="my-6" />

        {/* Preferences */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Preferences</h3>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-900">Notifications</h4>
              <p className="text-sm text-gray-500">Receive study reminders and updates</p>
            </div>
            <button
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${settings.notifications ? 'bg-indigo-600' : 'bg-gray-200'}`}
              onClick={() => setSettings({...settings, notifications: !settings.notifications})}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out ${settings.notifications ? 'translate-x-5' : 'translate-x-0'}`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-900">Dark Mode</h4>
              <p className="text-sm text-gray-500">Use dark theme</p>
            </div>
            <button
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${settings.darkMode ? 'bg-indigo-600' : 'bg-gray-200'}`}
              onClick={() => setSettings({...settings, darkMode: !settings.darkMode})}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out ${settings.darkMode ? 'translate-x-5' : 'translate-x-0'}`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-900">Auto-save</h4>
              <p className="text-sm text-gray-500">Automatically save study progress</p>
            </div>
            <button
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${settings.autoSave ? 'bg-indigo-600' : 'bg-gray-200'}`}
              onClick={() => setSettings({...settings, autoSave: !settings.autoSave})}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out ${settings.autoSave ? 'translate-x-5' : 'translate-x-0'}`}
              />
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Language
            </label>
            <select
              className="input-field"
              value={settings.language}
              onChange={(e) => setSettings({...settings, language: e.target.value})}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="btn-primary w-full"
          >
            {isSaving ? (
              <>
                <i className="fas fa-spinner fa-spin mr-2"></i>
                Saving...
              </>
            ) : (
              <>
                <i className="fas fa-save mr-2"></i>
                Save Settings
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;