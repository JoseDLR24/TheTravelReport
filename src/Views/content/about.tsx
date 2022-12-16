// file name: about.tsx
// author name: Jose De Los Reyes
// website name: FInal Exam
// file description: jsx content added for my about component with a brief explanation or introduction about me.

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import aboutme from "../../Assets/images/me.jpg";
import "../../App.css";

function About() {
    useEffect(() => {
        document.title = "About";
    }, []);

    return (
        <div className="container aboutpage">
            <h1>About</h1>
            <h2>Jose David De Los Reyes Osorio - #200499424</h2>
            <aside id="abtaside">
                <img src={aboutme} id="aboutme" />
                <div id="asidesec">
                    <p>I'm Jose, a gamer geek who learned how to code as a hobby and now trying to live of it. A Colombian surviving in the sweet and cold winters of Canada</p>
                    <p>I am pretty sure you have heard of Colombia, I mean, we have the most delicious coffee in the world, right?<br></br>
                        So, here you have a passionate Colombian bringing you programming and design from the other side of the world with a cup of hot coffee.</p>
                    <p>I have knowledge in different programming languages and a variety of design tools.</p>
                </div>
            </aside>
        </div>
    );
}
export default About;
