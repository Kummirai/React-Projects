import React from 'react';
import Header from "../components/Header.jsx";
import Hero from "./Hero.jsx";

function TvShows() {
    return (
        <>
            <div className="container">
                <div className="hero tv-show">
                    <Header/>
                    <Hero/>
                </div>
            </div>
        </>
    );
}

export default TvShows;