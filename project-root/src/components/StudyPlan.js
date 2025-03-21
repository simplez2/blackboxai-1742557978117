import React, { useState } from 'react';

function StudyPlan() {
  const [plan, setPlan] = useState({
    subjects: [],
    schedule: {},
    goals: []
  });

  return (
    <div className="space-y-6">
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Study Plan</h2>
        
        {/* Quick Actions */}
        <div className="flex space-x-4 mb-6">
          <button className="btn-primary">
            <i className="fas fa-plus mr-2"></i>Add Subject
          </button>
          <button className="btn-secondary">
            <i className="fas fa-calendar-alt mr-2"></i>View Schedule
          </button>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {plan.subjects.length === 0 ? (
            <div className="col-span-full text-center py-8 bg-gray-50 rounded-lg">
              <i className="fas fa-book text-4xl text-gray-400 mb-2"></i>
              <p className="text-gray-500">No subjects added yet. Click "Add Subject" to get started.</p>
            </div>
          ) : (
            plan.subjects.map((subject, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-semibold">{subject.name}</h3>
                <p className="text-gray-600">{subject.description}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Goals Section */}
      <div className="card">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Study Goals</h3>
        <div className="space-y-4">
          {plan.goals.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No goals set yet.</p>
          ) : (
            plan.goals.map((goal, index) => (
              <div key={index} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="h-5 w-5 text-indigo-600 rounded"
                  checked={goal.completed}
                />
                <span className={goal.completed ? 'line-through text-gray-400' : ''}>
                  {goal.description}
                </span>
              </div>
            ))
          )}
          <button className="btn-secondary w-full mt-4">
            <i className="fas fa-plus mr-2"></i>Add Goal
          </button>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="card">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Progress Overview</h3>
        <div className="space-y-4">
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                  Overall Progress
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-indigo-600">
                  30%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
              <div
                style={{ width: "30%" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyPlan;