// file name: spetses.tsx
// author name: Jose De Los Reyes
// website name: COMP2112 - Final Exam
// description: jsx content

import React from 'react';
import { NavLink } from 'react-router-dom';
import spetsesimg from "../../Assets/images/spetses.jpg";

function Spetses() {
    return (
        <div className="container">
            <article id="Spetses" className="row">
                <h2 className="col-md-10 col-xs-offset-1 col-xs-10">Spetses</h2>
                <img className="col-md-10 col-xs-offset-1 col-xs-10" src={spetsesimg} alt="Spetses" />
                <p className="col-md-10 col-xs-offset-1 col-xs-10" id="Spetses">
                    This bohemian paradise is more Côte d'Azur than Grecian island. Spetses was hot in the '60s, when it hosted Marilyn Monroe and Elizabeth Taylor, and remains a swanky summer retreat for Athens' glitterati to this day, full of fancy hotels, mansions and yachts, and stylish boutiques. Aside from a handful of locally-owned cabs, the four-mile-long island has banned cars in town, giving it a refreshingly 19th-century vibe, with horse-drawn carriages being a common sight.
                </p>
            </article>
            <hr />
        </div>
    );
}

export default Spetses;