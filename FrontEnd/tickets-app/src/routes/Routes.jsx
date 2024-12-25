import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "../layers/Home";
import Description from "../components/Description";
import MorePage from "../layers/MorePage";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/description" element={<MorePage />} />
        </Routes>
    );
};

export default AppRoutes;
