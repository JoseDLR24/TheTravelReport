// file name: syros.tsx
// author name: Jose De Los Reyes
// website name: COMP2112 - Final Exam
// description: jsx content

import React from 'react';
import { NavLink } from 'react-router-dom';
import syrosimg from "../../Assets/images/syros.jpg";

function Syros() {
    return (
        <div className="container">
            <article id="Syros" className="row">
                <h2 className="col-md-10 col-xs-offset-1 col-xs-10">Syros</h2>
                <img className="col-md-10 col-xs-offset-1 col-xs-10" src={syrosimg} alt="Syros" />
                <p className="col-md-10 col-xs-offset-1 col-xs-10" id="Syros">
                    A favourite Athenian escape and former shipowners' vacation spot full of grand mansions, Syros is little known to foreigners. Famous for its neoclassical architecture and perfectly preserved heritage, its capital, Ermoupolis, was a 13th-century Venetian-built town and important trade and industrial centre, and boasts giant churches and beautiful villas, a stunning town hall, and labyrinthine streets and stairways.
                </p>
            </article>
            <hr />
        </div>
    )
}

export default Syros;