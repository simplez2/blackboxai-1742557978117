import React, { useState } from 'react';

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 156,
    activeUsers: 89,
    totalStudyHours: 1243,
    averageScore: 85
  });

  const [recentActivity] = useState([
    { user: 'John Doe', action: 'Completed study session', subject: 'Mathematics', time: '2 minutes ago' },
    { user: 'Jane Smith', action: 'Updated study plan', subject: 'Physics', time: '15 minutes ago' },
    { user: 'Mike Johnson', action: 'Generated AI summary', subject: 'Chemistry', time: '1 hour ago' },
    { user: 'Sarah Williams', action: 'Started new topic', subject: 'Biology', time: '2 hours ago' }
  ]);

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-600 bg-opacity-30">
              <i className="fas fa-users text-2xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm opacity-90">Total Users</p>
              <h3 className="text-2xl font-bold">{stats.totalUsers}</h3>
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-green-500 to-green-600 text-white">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-600 bg-opacity-30">
              <i className="fas fa-user-check text-2xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm opacity-90">Active Users</p>
              <h3 className="text-2xl font-bold">{stats.activeUsers}</h3>
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-600 bg-opacity-30">
              <i className="fas fa-clock text-2xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm opacity-90">Study Hours</p>
              <h3 className="text-2xl font-bold">{stats.totalStudyHours}</h3>
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-red-500 to-red-600 text-white">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-600 bg-opacity-30">
              <i className="fas fa-chart-line text-2xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm opacity-90">Avg. Score</p>
              <h3 className="text-2xl font-bold">{stats.averageScore}%</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
          <button className="text-indigo-600 hover:text-indigo-800">
            <i className="fas fa-sync-alt"></i>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentActivity.map((activity, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <i className="fas fa-user text-gray-400"></i>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{activity.user}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{activity.action}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {activity.subject}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {activity.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="btn-primary">
            <i className="fas fa-envelope mr-2"></i>
            Send Notification
          </button>
          <button className="btn-secondary">
            <i className="fas fa-download mr-2"></i>
            Export Data
          </button>
          <button className="btn-secondary">
            <i className="fas fa-cog mr-2"></i>
            System Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;