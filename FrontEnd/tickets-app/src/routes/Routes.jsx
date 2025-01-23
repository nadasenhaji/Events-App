import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "../layers/Home";
import MorePage from "../layers/MorePage";
import Board from "../layers/Board";
import Login from "../components/Login";
import Org from "../layers/Org";
import Heart from "../layers/Heart";
import Events from "../components/Events";
import Description from "../components/Description";
import Register from "../components/Register";



const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/description" element={<MorePage />} />
            <Route path="/dash" element={<Board />} />
            <Route path="/login" element={<Login />} />
            <Route path="/favorites" element={<Heart/>} />
            <Route path="/Org" element={<Org />} />
            <Route path="/Register" element={<Register />} />


        </Routes>
    );
};

export default AppRoutes;
