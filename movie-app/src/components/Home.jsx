import React from 'react';
import Header from "./Header.jsx";
import HomeMovieCard from "./HomeMovieCard.jsx";

const Home = ({navLinks, movies}) => {
    return (
        <div className="container-fluid home d-flex main-img p-0">
            <div className="col-sm-6 main-bg flex-grow-1 p-5 position-relative">
                <Header navLinks={navLinks} />
                <div className="main-movie-card-container row col-11">
                    {movies.map(movie => (
                        <HomeMovieCard movie={movie} />
                    ))}
                </div>
            </div>
            <div className="col-sm-6 ">
            </div>
        </div>
    );
};

export default Home;