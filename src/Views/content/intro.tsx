// file name: intro.tsx
// author name: Jose De Los Reyes
// website name: COMP2112 - Final Exam
// description: jsx content introduction before the main content of the website

import React from 'react';
import { NavLink } from 'react-router-dom';
import introimg from "../../Assets/images/milos-greece-colorful-houses.jpg";

function Intro() {
    return (
        <div className="container" id="mainContent">
            <h1 id="MainTitle" className="col-lg-offset-1 col-lg-10">The Travel Report</h1>
            <h4 className="col-lg-offset-1 col-lg-10">body copy and image credits: Sophie-Claire Hoeller</h4>
            <article id="9Islands" className="row">
                <h2 className="col-md-offset-1 col-md-10 col-xs-offset-1 col-xs-10">9 Gorgeous Greek islands</h2>
                <p id="IntroParagraph" className="col-md-4 col-xs-offset-1 col-xs-10">
                    Now is the time to travel to Greece. The country may be going through an economic crisis, but many travellers say that it hasn't impacted the experience of visiting. Plus, there may be some great deals.
                    Greece has 1,400 islands, though only 230 of them are inhabited.
                    And while everyone knows about Santorini and Mykonos, there are gorgeous lesser-known islands in Greece, too.
                </p>
                <img className="col-md-6 col-xs-offset-1  col-xs-10" src={introimg} alt="Milos Greece colorful houses" />
            </article>
            <hr />

            <section className="row">
                <p className="col-md-12 col-xs-offset-1 col-xs-10">Here are 9 incredible Greek islands you may not have heard of, but should have on your radar.</p>
                Now is the time to travel to Greece. The country may be going through an economic crisis, but many travellers say that it hasn't impacted the experience of visiting. Plus, there may be some great deals.
                Greece has 1,400 islands, though only 230 of them are inhabited.
                And while everyone knows about Santorini and Mykonos, there are gorgeous lesser-known islands in Greece, too.
            </section>
        </div>
    );
}

export default Intro;