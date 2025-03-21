import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import StudyPlan from './components/StudyPlan';
import StudyLog from './components/StudyLog';
import TomatoTimer from './components/TomatoTimer';
import AISummary from './components/AISummary';
import AdminDashboard from './components/AdminDashboard';
import Settings from './components/Settings';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

function Navigation() {
  const { t } = useLanguage();
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-900">AI Study Planner</Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium">
                {t('studyPlan')}
              </Link>
              <Link to="/log" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
                {t('studyLog')}
              </Link>
              <Link to="/timer" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
                {t('timer')}
              </Link>
              <Link to="/summary" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
                {t('aiSummary')}
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link to="/settings" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              <i className="fas fa-cog"></i>
            </Link>
            <Link to="/admin" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              <i className="fas fa-user-shield"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<StudyPlan />} />
          <Route path="/log" element={<StudyLog />} />
          <Route path="/timer" element={<TomatoTimer />} />
          <Route path="/summary" element={<AISummary />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;