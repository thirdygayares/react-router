import React from 'react';
import {Route, Routes} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";

interface RouteProps {
    exact?: boolean;
    path: string;
    component: React.ComponentType<any>;
}


const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* Default route */}
            <Route path="/" element={<LoginPage />} />
        </Routes>
    );
};

export default AppRoutes;