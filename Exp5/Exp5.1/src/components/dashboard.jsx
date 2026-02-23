import React, { useState } from 'react';
import './Dashboard.css';

export default function Dashboard() {
  const [stats] = useState({
    totalUsers: 1250,
    activeUsers: 342,
    totalSales: '$45,290',
    conversion: '3.24%'
  });

  const [recentActivity] = useState([
    { id: 1, user: 'John Doe', action: 'Logged in', time: '2 mins ago' },
    { id: 2, user: 'Jane Smith', action: 'Updated profile', time: '15 mins ago' },
    { id: 3, user: 'Mike Johnson', action: 'Made a purchase', time: '1 hour ago' },
    { id: 4, user: 'Sarah Williams', action: 'Posted a comment', time: '3 hours ago' },
    { id: 5, user: 'Tom Brown', action: 'Shared content', time: '5 hours ago' }
  ]);

  const [chartData] = useState([
    { month: 'Jan', sales: 4000 },
    { month: 'Feb', sales: 3000 },
    { month: 'Mar', sales: 2000 },
    { month: 'Apr', sales: 2780 },
    { month: 'May', sales: 1890 },
    { month: 'Jun', sales: 2390 }
  ]);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome to your analytics dashboard</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-icon total-users">👥</div>
          <div className="stat-content">
            <h3>Total Users</h3>
            <p className="stat-number">{stats.totalUsers}</p>
            <span className="stat-change">+12% from last month</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon active-users">🟢</div>
          <div className="stat-content">
            <h3>Active Users</h3>
            <p className="stat-number">{stats.activeUsers}</p>
            <span className="stat-change">Currently online</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon total-sales">💰</div>
          <div className="stat-content">
            <h3>Total Sales</h3>
            <p className="stat-number">{stats.totalSales}</p>
            <span className="stat-change">+8.5% from last week</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon conversion">📈</div>
          <div className="stat-content">
            <h3>Conversion Rate</h3>
            <p className="stat-number">{stats.conversion}</p>
            <span className="stat-change">+0.5% from yesterday</span>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        {/* Chart Section */}
        <div className="chart-section">
          <h2>Sales Trend</h2>
          <div className="chart">
            <div className="chart-bars">
              {chartData.map((data, index) => (
                <div key={index} className="bar-container">
                  <div 
                    className="bar" 
                    style={{ height: `${(data.sales / 4000) * 100}%` }}
                  ></div>
                  <span className="bar-label">{data.month}</span>
                </div>
              ))}
            </div>
            <div className="chart-legend">
              <p>Sales in dollars (×100)</p>
            </div>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="activity-section">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className="activity-icon">📌</div>
                <div className="activity-content">
                  <p className="activity-user">{activity.user}</p>
                  <p className="activity-action">{activity.action}</p>
                </div>
                <span className="activity-time">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}