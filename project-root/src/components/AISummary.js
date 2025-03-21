import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function AISummary() {
  const { t } = useLanguage();
  const [summary, setSummary] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);

  const generateSummary = async () => {
    setIsLoading(true);
    // Simulated API call
    setTimeout(() => {
      setSummary({
        key_points: [
          "Understanding of core concepts demonstrated",
          "Good progress in practical applications",
          "Areas needing attention identified",
          "Recommended focus on specific topics"
        ],
        recommendations: [
          "Review chapter 5 more thoroughly",
          "Practice more problem-solving exercises",
          "Consider group study sessions",
          "Create flashcards for key terms"
        ],
        progress_score: 85
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('generateAISummary')}</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('selectSubject')}
            </label>
            <select
              className="input-field"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              <option value="">{t('chooseSubject')}</option>
              <option value="math">Mathematics</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="biology">Biology</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('uploadMaterials')}
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <i className="fas fa-cloud-upload-alt text-gray-400 text-3xl mb-3"></i>
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500">
                    <span>{t('uploadFile')}</span>
                    <input
                      type="file"
                      className="sr-only"
                      onChange={(e) => setUploadedFile(e.target.files[0])}
                    />
                  </label>
                  <p className="pl-1">{t('dragAndDrop')}</p>
                </div>
                <p className="text-xs text-gray-500">
                  {t('fileTypes')}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={generateSummary}
            disabled={!selectedSubject || isLoading}
            className={`btn-primary w-full ${(!selectedSubject || isLoading) ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? (
              <>
                <i className="fas fa-spinner fa-spin mr-2"></i>
                {t('generatingSummary')}
              </>
            ) : (
              <>
                <i className="fas fa-magic mr-2"></i>
                {t('generateSummary')}
              </>
            )}
          </button>
        </div>
      </div>

      {/* Summary Display */}
      {summary && (
        <div className="card fade-in">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xl font-bold text-gray-900">{t('studySummary')}</h3>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              {t('score')}: {summary.progress_score}%
            </span>
          </div>

          <div className="space-y-6">
            {/* Key Points */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('keyPoints')}</h4>
              <ul className="space-y-2">
                {summary.key_points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommendations */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('recommendations')}</h4>
              <ul className="space-y-2">
                {summary.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fas fa-lightbulb text-yellow-500 mt-1 mr-2"></i>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AISummary;