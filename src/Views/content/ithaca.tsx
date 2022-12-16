// file name: ithaca.tsx
// author name: Jose De Los Reyes
// website name: COMP2112 - Final Exam
// description: jsx content

import React from 'react';
import { NavLink } from 'react-router-dom';
import ithacaimg from "../../Assets/images/ithaca.jpg";

function Ithaca() {
    return (
        <div className="container">
            <article id="Ithaca" className="row">
                <h2 className="col-md-10 col-xs-offset-1 col-xs-10">Ithaca</h2>
                <img className="col-md-10 col-xs-offset-1 col-xs-10" src={ithacaimg} alt="Ithaca" />
                <p className="col-md-10 col-xs-offset-1 col-xs-10" id="Ithaca">
                    Most famous for being the home of Odysseus, and a prominent figure in Homer's "The Odyssey," Ithaca is said to have been inhabited since the 2nd millennium BC. Made up of two islands joined by a narrow strip of land, many visit it to see the legendary sites mentioned by Homer. However, Ithaca is more than its mythical counterpart, beckoning with secluded beaches, dramatic cliffs, beautiful olive groves, and sleepy fishing villages full of Byzantine churches and monasteries.
                </p>
            </article>
            <hr />
        </div>
    )
}

export default Ithaca;