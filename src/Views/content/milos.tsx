// file name: milos.tsx
// author name: Jose De Los Reyes
// website name: COMP2112 - Final Exam
// description: jsx content

import React from 'react';
import { NavLink } from 'react-router-dom';
import milosimg from "../../Assets/images/milos.jpg";

function Milos() {
    return (
        <div className="container">
            <article id="Milos" className="row">
                <h2 className="col-md-10 col-xs-offset-1 col-xs-10">Milos</h2>
                <img className="col-md-10 col-xs-offset-1 col-xs-10" src={milosimg} alt="Milos" />
                <p className="col-md-10 col-xs-offset-1 col-xs-10" id="Milos">
                    This volcanic island, with catacombs and ancient iron mines to explore, is dramatically rugged, and famous for its stunning rock formations. Often likened to a moonscape, it's also known for its hot springs, the ancient Venus De Milo statue that was found here, and for its diversity of incredible beaches. Known as "the island of colours" it's home to around 80 beaches — some only accessible by boat — ranging from stunningly white, to striking black, and even unusual red and grey. However, each beach has the same Evian-clear turquoise waters, and is surrounded by a rugged mountain landscape.
                </p>
            </article>
            <hr />
        </div>
    );
}

export default Milos;