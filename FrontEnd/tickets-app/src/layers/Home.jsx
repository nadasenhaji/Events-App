import React from 'react';

import SousNavBar from "../components/SousNavBar";
import LandingPage from "../components/LandingPage";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";



const Home = () => {
    return (
        <div>
            <Navbar/>
            <SousNavBar/>
            <LandingPage/>
            <Events/>
            <Footer/>
        </div>
    );
};

export default Home;
