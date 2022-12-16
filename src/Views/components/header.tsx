// file name: header.tsx
// author name: Jose De Los Reyes
// website name: Assignment 2
// file description: main navigation bar content added formy header component that will be present in the whole website.

import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="Home">
                    <i className="fa-solid fa-earth-europe fa-lg"></i>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mg-lg-0">
                        <li className="nav-item">
                            <NavLink to={"/home"} className="nav-link" id="Home" aria-current="page"><i className="fa-solid fa-house-chimney fa-lg"></i> Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/about"} className="nav-link" id="About" aria-current="page"><i className="fa-solid fa-circle-info fa-lg"></i> About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/contact"} className="nav-link" id="Contact" aria-current="page"><i className="fa-solid fa-envelope fa-lg"></i> Contact Us</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Header;