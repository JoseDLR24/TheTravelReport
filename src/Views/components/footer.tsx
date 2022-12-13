import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <div className="container">
            <footer>
                <nav className="navbar fixed-bottom navbar-light bg-light">
                    <h4>&copy; Copyright 2022 - The Travel Report</h4>
                </nav>
            </footer>
        </div>
    );
}

export default Footer;
