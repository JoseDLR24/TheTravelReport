// file name: folegandros.tsx
// author name: Jose De Los Reyes
// website name: COMP2112 - Final Exam
// description: jsx content

import React from 'react';
import { NavLink } from 'react-router-dom';
import folegrandosimg from "../../Assets/images/folegandros.jpg";

function Folegandros() {
    return (
        <div className="container">
            <article id="Folegandros" className="row">
                <h2 className="col-md-10 col-xs-offset-1 col-xs-10">Folegandros</h2>
                <img className="col-md-10 col-xs-offset-1 col-xs-10" src={folegrandosimg} alt="Folegandros" />
                <p className="col-md-10 col-xs-offset-1 col-xs-10" id="Folegandros">
                    Folegandros is almost a Greek cliché, full of beautiful whitewashed houses with bright blue doors lining cobblestoned streets on steep cliffs. Rugged and remote, without chain hotels or package tours — not even a bank or ATM — and accessible only by ferry, the volcanic island boasts solitude in spades, secluded beaches, and incredible sunsets.
                </p>
            </article>
            <hr />
        </div>
    );
}

export default Folegandros;