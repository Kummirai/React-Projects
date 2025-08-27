import React from 'react';
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx";

function Search() {
    return (
        <>
            <div className="container-fluid gx-0 position-relative">
                <div className="movie-theme-top position-absolute w-100 z-1 h-100"></div>
                <div className="hero tv-show z-2">
                    <Header/>
                    <Hero/>
                </div>
                <div className="z-2 position-relative">

                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Search;