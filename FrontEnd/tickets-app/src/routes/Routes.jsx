import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "../layers/Home";
import MorePage from "../layers/MorePage";
import Heart from "../layers/Heart";
import Board from "../layers/Board";
import Login from "../components/Login";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/description" element={<MorePage />} />
            <Route path="/fav" element={<Heart />} />
            <Route path="/dash" element={<Board />} />
            <Route path="/login" element={<Login />} />

        </Routes>
    );
};

export default AppRoutes;
