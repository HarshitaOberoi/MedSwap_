// Route.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginScreen from '../login/index';

const Routing = () => {
    return (
        <Routes>
            
            <Route path="/login" element={<LoginScreen/>} />
        </Routes>
    );
};

export default Routing;
