import React, {useContext, useEffect} from 'react';
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import TVShowsContainer from "../components/TVShowsContainer";
import {MoviesContext} from "../context/Context.jsx";
import Pagination from "../components/Pagination.jsx";
import Footer from "../components/Footer.jsx";

function TvShows() {


    const {setTabs, setIsMovieDetails} = useContext(MoviesContext);

    useEffect(() => {
        setTabs("TV Shows");
        setIsMovieDetails(false);
    }, []);

    const {movies, isMovieDetails, movieDetailTheme, bgTheme} = useContext(MoviesContext);
    return (
        <>
            <div className="container-fluid gx-0 position-relative" style={isMovieDetails ? movieDetailTheme : bgTheme}>
                <div className="movie-theme-top position-absolute w-100 z-1 h-100"></div>
                <div className="hero tv-show z-2">
                    <Header/>
                    <Hero/>
                </div>
                <div className="z-2 position-relative">
                    <TVShowsContainer movies={movies} heading="TV Shows"/>
                    <Pagination/>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default TvShows;