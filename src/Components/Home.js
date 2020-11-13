import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
      } from 'react-router-dom';

import baskislaPic from './../res/97558822_566966043805262_5387835958973392540_n.jpg'    

const Home = () => {
    return (
    <div style={{alignItems:'right'}}>
    <h3>Welcome to Baskisla!</h3>
    <Link to="/persons">Continue</Link>
    <p style={{width: '90%', padding: '5%'}}>
        Baskisla is a project to connect to your roots. It is developed as a way of visualizing the familiar relations between people.
        The idea was conceived by Hasan Kurt, and is very much in progress.
        Keep checking this site to keep in touch with the latest developments!
    </p>
    <img src={baskislaPic} style={{width: '80%', maxWidth: '800px'}} />
    </div>
    );
}

export default Home;