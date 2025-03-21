import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function Settings() {
  const { t, language, setLanguage } = useLanguage();
  const [settings, setSettings] = useState({
    apiKey: '',
    apiUrl: 'https://api.openai.com/v1/chat/completions',
    notifications: true,
    darkMode: false,
    autoSave: true
  });

  const [isSaving, setIsSaving] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      localStorage.setItem('settings', JSON.stringify(settings));
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
    } finally {
      setIsSaving(false);
    }
  };

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage); // Directly update the language context
  };

  return (
    <div className="space-y-6">
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('settings')}</h2>

        {/* API Configuration */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">{t('apiConfiguration')}</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('apiKey')}
            </label>
            <div className="relative">
              <input
                type={showApiKey ? 'text' : 'password'}
                className="input-field pr-10"
                value={settings.apiKey}
                onChange={(e) => setSettings({...settings, apiKey: e.target.value})}
                placeholder={t('enterApiKey')}
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
              {t('apiUrl')}
            </label>
            <input
              type="text"
              className="input-field"
              value={settings.apiUrl}
              onChange={(e) => setSettings({...settings, apiUrl: e.target.value})}
              placeholder={t('apiUrl')}
            />
          </div>
        </div>

        <hr className="my-6" />

        {/* Preferences */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">{t('preferences')}</h3>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-900">{t('notifications')}</h4>
              <p className="text-sm text-gray-500">{t('notificationsDesc')}</p>
            </div>
            <button
              type="button"
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
              <h4 className="text-sm font-medium text-gray-900">{t('darkMode')}</h4>
              <p className="text-sm text-gray-500">{t('darkModeDesc')}</p>
            </div>
            <button
              type="button"
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
              <h4 className="text-sm font-medium text-gray-900">{t('autoSave')}</h4>
              <p className="text-sm text-gray-500">{t('autoSaveDesc')}</p>
            </div>
            <button
              type="button"
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
              {t('language')}
            </label>
            <select
              className="input-field"
              value={language}
              onChange={handleLanguageChange}
            >
              <option value="en">English</option>
              <option value="zh">中文</option>
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
                {t('saving')}
              </>
            ) : (
              <>
                <i className="fas fa-save mr-2"></i>
                {t('saveSettings')}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;