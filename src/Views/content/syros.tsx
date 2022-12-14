import React from 'react';
import { NavLink } from 'react-router-dom';

function Syros() {
    return (
        <div className="container">
            <article id="Syros" className="row">
                <h2 className="col-md-10 col-xs-offset-1 col-xs-10">Syros</h2>
                <img className="col-md-10 col-xs-offset-1 col-xs-10" src="../../Assets/images/syros.jpg" alt="Syros" />
                <p className="col-md-10 col-xs-offset-1 col-xs-10" id="Syros">
                    A favourite Athenian escape and former shipowners' vacation spot full of grand mansions, Syros is little known to foreigners. Famous for its neoclassical architecture and perfectly preserved heritage, its capital, Ermoupolis, was a 13th-century Venetian-built town and important trade and industrial centre, and boasts giant churches and beautiful villas, a stunning town hall, and labyrinthine streets and stairways.
                </p>
            </article>
            <hr />
        </div>
    )
}

export default Syros;