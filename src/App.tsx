import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AppRoutes from "./AppRoutes";

const App: React.FC = () => {
    return (
            <div>
                {/* Navigation */}
                <nav>
                    <ul>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>

                {/* Render Routes */}
                <AppRoutes />
            </div>
    );
};

export default App;