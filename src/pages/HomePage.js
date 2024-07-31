import React from 'react';
import { Link } from 'react-router-dom';
import Labels from '../components/common/labels'; 
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="page-title">{Labels.WELCOME_MESSAGE}</h1>
      <div className="card-container">
        <Link to="/missions" className="card">
          <h2>{Labels.MISSIONS_TITLE}</h2>
          <p>{Labels.MISSION_DESCRIPTION}</p>
        </Link>
        <Link to="/robots" className="card">
          <h2>{Labels.ROBOT_TITLE}</h2>
          <p>{Labels.ROBOT_DESCRIPTION}</p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
