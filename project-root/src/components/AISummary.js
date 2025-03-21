import React, { useState } from 'react';

function AISummary() {
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Generate AI Summary</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Subject
            </label>
            <select
              className="input-field"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              <option value="">Choose a subject...</option>
              <option value="math">Mathematics</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="biology">Biology</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Study Materials (Optional)
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <i className="fas fa-cloud-upload-alt text-gray-400 text-3xl mb-3"></i>
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500">
                    <span>Upload a file</span>
                    <input
                      type="file"
                      className="sr-only"
                      onChange={(e) => setUploadedFile(e.target.files[0])}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PDF, DOC up to 10MB
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
                Generating Summary...
              </>
            ) : (
              <>
                <i className="fas fa-magic mr-2"></i>
                Generate Summary
              </>
            )}
          </button>
        </div>
      </div>

      {/* Summary Display */}
      {summary && (
        <div className="card fade-in">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xl font-bold text-gray-900">Study Summary</h3>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              Score: {summary.progress_score}%
            </span>
          </div>

          <div className="space-y-6">
            {/* Key Points */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Points</h4>
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
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Recommendations</h4>
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