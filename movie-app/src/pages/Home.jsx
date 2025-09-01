import Header from "../components/Header.jsx";
import HomeMovieCard from "../components/HomeMovieCard.jsx";
import MoviesDetails from "../components/MoviesDetails.jsx";
import React, {useContext, useEffect} from "react";
import {MoviesContext} from "../context/Context.jsx";
import TVShowsContainer from "../components/TVShowsContainer.jsx";
import MoviesContainer from "../components/MoviesContainer.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import Pagination from "../components/Pagination.jsx";
import HomeMovieSection from "../components/HomeMovieSection.jsx";
import HomeSeriessSection from "../components/HomeSeriessSection.jsx";

const Home = () => {

    const {
        movies,
        upComing,
        bgTheme,
        movieDetailTheme,
        isMovieDetails,
        setTabs,
        setIsMovieDetails,
    } = useContext(MoviesContext);

    useEffect(() => {
        setTabs("Home");
        setIsMovieDetails(false);
    }, []);

    return (
        <>
            <div className="container-fluid gx-0 position-relative">
                <div className="movie-theme-top position-absolute w-100 z-1 h-100"></div>
                <div className="hero tv-show z-2" style={isMovieDetails ? movieDetailTheme : bgTheme}>
                    <Header/>
                    <Hero/>
                </div>
                <div className="z-2 position-relative">
                    <TVShowsContainer movies={movies} heading="TV Shows"/>
                    <HomeMovieSection/>
                    <MoviesContainer movies={upComing} heading="Popular Movies"/>
                    <HomeSeriessSection/>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Home;
