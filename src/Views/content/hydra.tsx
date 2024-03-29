// file name: hydra.tsx
// author name: Jose De Los Reyes
// website name: COMP2112 - Final Exam
// description: jsx content

import React from 'react';
import { NavLink } from 'react-router-dom';
import hydraimg from "../../Assets/images/hydra.jpg";

function Hydra() {
    return (
        <div className="container">
            <article id="Hydra" className="row">
                <h2 className="col-md-10 col-xs-offset-1 col-xs-10">Hydra</h2>
                <img className="col-md-10 col-xs-offset-1 col-xs-10" src={hydraimg} alt="Hydra" />
                <p className="col-md-10 col-xs-offset-1 col-xs-10" id="Hydra">
                    The first thing you'll notice on this beautiful island is the lack of cars — and buses, motorcycles, or other wheeled vehicles, as well as high rises. The winding little streets full of beautiful 18th-century mansions, churches, cathedrals, museums and art galleries are covered in cobblestones, and mostly trafficked by donkeys and humans. Back in the day, the island attracted celebrities like Leonard Cohen and Sophia Loren, but was somehow forgotten over the years. That means that travellers to Hydra can have the chic yet almost rural island paradise more or less to themselves.
                </p>
            </article>
            <hr />
        </div>
    );
}

export default Hydra;