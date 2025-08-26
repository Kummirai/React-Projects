import Header from "../components/Header.jsx";
import HomeMovieCard from "../components/HomeMovieCard.jsx";
import MoviesDetails from "../components/MoviesDetails.jsx";
import React, {useContext} from "react";
import {MoviesContext} from "../context/Context.jsx";
import TVShowsContainer from "../components/TVShowsContainer.jsx";
import MoviesContainer from "../components/MoviesContainer.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import Pagination from "../components/Pagination.jsx";

const Home = () => {

    const {
        movies,
        upComing,
        bgTheme,
        movieDetailTheme,
        isMovieDetails,
    } = useContext(MoviesContext);

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
                    <MoviesContainer movies={upComing} heading="Movies"/>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Home;
