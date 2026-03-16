import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2'; // Assuming Chart.js is installed

export default function CreatorAnalytics() {
    const [stats, setStats] = useState({ totalEarnings: 0, streamCount: 0 });

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Monthly Royalty Revenue ($)',
            data: [450, 890, 1200, 980, 2100, 3400],
            borderColor: '#00F0FF', // SMGPUB Neon Blue
            tension: 0.4,
            fill: true,
            backgroundColor: 'rgba(0, 240, 255, 0.1)'
        }]
    };

    return (
        <div className="analytics-container">
            <div className="stats-grid">
                <div className="stat-card">
                    <h4>Total Revenue</h4>
                    <h1>${stats.totalEarnings.toLocaleString()}</h1>
                    <span className="trend-up">+12.5% from last month</span>
                </div>
                <div className="stat-card">
                    <h4>Active Licenses</h4>
                    <h1>42</h1>
                </div>
            </div>

            <div className="chart-wrapper">
                <h3>Revenue Forecasting</h3>
                <Line data={data} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
        </div>
    );
}
