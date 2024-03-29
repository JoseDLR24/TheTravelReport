// file name: amorgos.tsx
// author name: Jose De Los Reyes
// website name: COMP2112 - Final Exam
// description: jsx content

import React from 'react';
import { NavLink } from 'react-router-dom';
import amorgosimg from "../../Assets/images/amorgos.jpg";

function Amorgos() {
    return (
        <div className="container">
            <article id="Amorgos" className="row">
                <h2 className="col-md-10 col-xs-offset-1 col-xs-10">Amorgos</h2>
                <img className="col-md-10 col-xs-offset-1 col-xs-10" src={amorgosimg} alt="Amorgos" />
                <p className="col-md-10 col-xs-offset-1 col-xs-10" id="Amorgos">
                    Shipwrecks, sea caves and beautiful clear waters make Amorgos popular with snorkelers, but the mountainous island is the perfect compromise between unwinding and adventure, boasting beautiful beaches but also hiking, scuba diving and rock-climbing. One of the island's main attractions is the 11th-century cliffside monastery of Panayia Hozoviótissa, which is precariously carved into a cliff.
                </p>
            </article>
            <hr />
        </div>
    );
}

export default Amorgos;