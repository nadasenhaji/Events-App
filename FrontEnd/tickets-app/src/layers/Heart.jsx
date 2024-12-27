import React from 'react';

import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import Favorites from "../components/Favorites";



const Heart = () => {
    return (
        <div>
            <Navbar/>
            <Favorites/>
            <Footer/>
        </div>
    );
};

export default Heart;