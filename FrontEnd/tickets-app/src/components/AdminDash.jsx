import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js'; // Import ArcElement
import '../style/AdminDash.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement); // Register ArcElement for Pie Chart

const Dashboard = () => {
    // Example Data for Bar Chart (Revenue, Participants)
    const barChartData = {
        labels: ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5'],
        datasets: [
            {
                label: 'Total Revenue',
                data: [500, 1500, 800, 1200, 1000], // Revenue data for each event
                backgroundColor: '#27ae60',
                borderColor: '#27ae60',
                borderWidth: 1,
            },
            {
                label: 'Registered Participants',
                data: [100, 200, 150, 300, 250], // Participants data for each event
                backgroundColor: '#3498db',
                borderColor: '#3498db',
                borderWidth: 1,
            },
        ],
    };

    // Example Data for Pie Chart (Event Types)
    const pieChartData = {
        labels: ['Conference', 'Workshop', 'Seminar', 'Webinar'],
        datasets: [
            {
                data: [40, 25, 20, 15], // Percentage of different event types
                backgroundColor: ['#e74c3c', '#f39c12', '#9b59b6', '#3498db'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="dashboard-container">
            <nav className="sidebar">
                <div className="sidebar-item">Dashboard</div>
                <div className="sidebar-item">Manage Events</div>
                <div className="sidebar-item">User Profiles</div>
                <div className="sidebar-item">Analytics</div>
            </nav>

            <main className="main-content">


                <section className="stats">
                    <div className="stat-box">
                        <h2>Upcoming Events</h2>
                        <p className="stat-number">5 Events</p>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '70%' }}></div>
                        </div>
                    </div>

                    <div className="stat-box">
                        <h2>Registered Participants</h2>
                        <p className="stat-number">150 Users</p>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '50%' }}></div>
                        </div>
                    </div>

                    <div className="stat-box">
                        <h2>Total Revenue</h2>
                        <p className="stat-number">$2000</p>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '90%' }}></div>
                        </div>
                    </div>
                </section>

                <section className="charts">
                    <div className="chart-container">
                        <h2>Revenue & Participants per Event</h2>
                        <Bar data={barChartData} options={{ responsive: true }} />
                    </div>

                    <div className="chart-container">
                        <h2>Event Type Distribution</h2>
                        <Pie data={pieChartData} options={{ responsive: true }} />
                    </div>
                </section>

                <section className="recent-activities">
                    <h2>Recent Activities</h2>
                    <ul>
                        <li>User A registered for Event X</li>
                        <li>Event Y ticket purchase completed</li>
                        <li>User B left feedback for Event Z</li>
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;
