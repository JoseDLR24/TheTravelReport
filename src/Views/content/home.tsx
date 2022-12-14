import React, { useEffect } from 'react';
// import content components
import Intro from './intro';
import Alonissos from './alonissos';
import Amorgos from './amorgos';
import Folegandros from './folegandros';
import Gavdos from './gavdos';
import Hydra from './hydra';
import Ithaca from './ithaca';
import Milos from './milos';
import Spetses from './spetses';
import Syros from './syros';

function Home() {
    useEffect(() => {
        document.title = "Home";
    }, []);

    return (
        <div className="container">
            <Intro></Intro>
            <Alonissos></Alonissos>
            <Amorgos></Amorgos>
            <Folegandros></Folegandros>
            <Gavdos></Gavdos>
            <Hydra></Hydra>
            <Ithaca></Ithaca>
            <Milos></Milos>
            <Spetses></Spetses>
            <Syros></Syros>
            <hr />
        </div>

    );
}

export default Home;