import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <i className="fa-solid fa-earth-europe fa-lg"></i>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mg-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#mainContent">
                                <i className="fa fa-map-signs fa-lg"></i> Tour</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">
                                <i className="fa fa-envelope fa-lg"></i> Contact</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Header;