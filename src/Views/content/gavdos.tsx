// file name: gavdos.tsx
// author name: Jose De Los Reyes
// website name: COMP2112 - Final Exam
// description: jsx content

import React from 'react';
import { NavLink } from 'react-router-dom';
import gavdosimg from "../../Assets/images/gavdos.jpg";

function Gavdos() {
    return (
        <div className="container">
            <article id="Gavdos" className="row">
                <h2 className="col-md-10 col-xs-offset-1 col-xs-10">Gavdos</h2>
                <img className="col-md-10 col-xs-offset-1 col-xs-10" src={gavdosimg} alt="Gavdos" />
                <p className="col-md-10 col-xs-offset-1 col-xs-10" id="Gavdos">
                    Near the more well-known Crete, Gavdos is the most southern island in Greece — and the most southern spot in Europe discounting the Canaries. Only accessible by ferry, the remote island has only about 50 permanent residents, and can feel like your private playground. Local legend has it that the island was the home of goddess Calypso, who kept Odysseus prisoner here. Today, a favorite tourist activity is to visit the spot believed to be her cave. Be warned, you won't find any luxury hotels here. While the romantically under-developed, super laid back island has a number of rooms for rent, those are limited, as the real draw here for many is the free, seaside camping.
                </p>
            </article>
            <hr />
        </div>
    );
}

export default Gavdos;




