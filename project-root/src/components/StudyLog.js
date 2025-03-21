import React, { useState } from 'react';

function StudyLog() {
  const [logs, setLogs] = useState([]);
  const [newLog, setNewLog] = useState({
    subject: '',
    duration: '',
    notes: '',
    mood: 'neutral'
  });

  return (
    <div className="space-y-6">
      {/* Add New Log */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Add Study Log</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              className="input-field"
              placeholder="Enter subject name"
              value={newLog.subject}
              onChange={(e) => setNewLog({...newLog, subject: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Duration (minutes)
            </label>
            <input
              type="number"
              className="input-field"
              placeholder="Enter duration in minutes"
              value={newLog.duration}
              onChange={(e) => setNewLog({...newLog, duration: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notes
            </label>
            <textarea
              className="input-field"
              rows="3"
              placeholder="Enter study notes"
              value={newLog.notes}
              onChange={(e) => setNewLog({...newLog, notes: e.target.value})}
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              How did it go?
            </label>
            <div className="flex space-x-4">
              <button
                type="button"
                className={`p-2 rounded-full ${newLog.mood === 'great' ? 'bg-green-100 text-green-600' : 'text-gray-400'}`}
                onClick={() => setNewLog({...newLog, mood: 'great'})}
              >
                <i className="fas fa-smile text-2xl"></i>
              </button>
              <button
                type="button"
                className={`p-2 rounded-full ${newLog.mood === 'neutral' ? 'bg-yellow-100 text-yellow-600' : 'text-gray-400'}`}
                onClick={() => setNewLog({...newLog, mood: 'neutral'})}
              >
                <i className="fas fa-meh text-2xl"></i>
              </button>
              <button
                type="button"
                className={`p-2 rounded-full ${newLog.mood === 'tough' ? 'bg-red-100 text-red-600' : 'text-gray-400'}`}
                onClick={() => setNewLog({...newLog, mood: 'tough'})}
              >
                <i className="fas fa-frown text-2xl"></i>
              </button>
            </div>
          </div>

          <button type="submit" className="btn-primary w-full">
            <i className="fas fa-plus mr-2"></i>Add Log Entry
          </button>
        </form>
      </div>

      {/* Study Logs */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Study History</h2>
        
        {logs.length === 0 ? (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <i className="fas fa-book-reader text-4xl text-gray-400 mb-2"></i>
            <p className="text-gray-500">No study logs yet. Start by adding your first study session!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {logs.map((log, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{log.subject}</h3>
                    <p className="text-gray-600">{log.duration} minutes</p>
                  </div>
                  <span className="text-2xl">
                    {log.mood === 'great' && <i className="fas fa-smile text-green-500"></i>}
                    {log.mood === 'neutral' && <i className="fas fa-meh text-yellow-500"></i>}
                    {log.mood === 'tough' && <i className="fas fa-frown text-red-500"></i>}
                  </span>
                </div>
                <p className="mt-2 text-gray-700">{log.notes}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default StudyLog;