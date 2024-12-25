import React from 'react';

import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import AdminDash from "../components/AdminDash";



const Board = () => {
    return (
        <div>
            <Navbar/>
            <AdminDash/>
            <Footer/>
        </div>
    );
};

export default Board;
