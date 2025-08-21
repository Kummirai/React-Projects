import React from 'react';
import Header from "./Header.jsx";
import HomeMovieCard from "./HomeMovieCard.jsx";

const Home = ({navLinks, movies}) => {
    return (
        <div className="container-fluid home d-flex  p-0">
            <div className="col-sm-6 main-bg flex-grow-1 p-5 d-flex flex-column justify-content-between">
                <Header navLinks={navLinks} />
                <div className="home-heading col-sm-9 text-white mt-5">
                    <h2 className="mb-3">Browse Your Favorite <br/>Movies Anywhere</h2>
                    <p>Your ultimate movie companion, on the go, Your movie night, anytime, anywhere.</p>
                    <button className="btn btn-danger">Browse Movies</button>
                </div>
                <div className="main-movie-card-container row col-11">
                    {movies.map(movie => (
                        <HomeMovieCard movie={movie} />
                    ))}
                </div>
            </div>
            <div className="col-sm-6 main-img overflow-hidden">
                <img src="
                https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14100_p_v13_ap.jpg" className="img-fluid object-fit-cover" alt=""/>
            </div>
        </div>
    );
};

export default Home;