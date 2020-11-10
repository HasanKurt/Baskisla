import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
      } from 'react-router-dom';

const Home = () => {
    return (
    <div>
    <h1>Welcome to Baskisla!</h1>
    <p>
        Baskisla is a project to connect to your roots.
    </p>
    <Link to="/persons">Click here to go to the person</Link>
    </div>
    );
}

export default Home;