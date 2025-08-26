import React, {useContext} from 'react';
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import TVShowsContainer from "../components/TVShowsContainer";
import {MoviesContext} from "../context/Context.jsx";
import Pagination from "../components/Pagination.jsx";
import Footer from "../components/Footer.jsx";

function TvShows() {

    const {movies, isMovieDetails, movieDetailTheme} = useContext(MoviesContext);
    return (
        <>
            <div className="container-fluid" style={isMovieDetails ? movieDetailTheme : null}>
                <div className="hero tv-show">
                    <Header/>
                    <Hero/>
                </div>
                <TVShowsContainer movies={movies} heading="TV Shows"/>
                <Pagination/>
            </div>
            <Footer/>
        </>
    );
}

export default TvShows;