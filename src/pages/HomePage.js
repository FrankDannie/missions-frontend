import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="page-title">Welcome to the Mission Tracker</h1>
      <div className="card-container">
        <Link to="/missions" className="card">
          <h2>Missions</h2>
          <p>View and manage missions.</p>
        </Link>
        <Link to="/robots" className="card">
          <h2>Robots</h2>
          <p>View and manage robots.</p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
