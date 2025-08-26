import React, {useContext} from 'react';
import {MoviesContext} from "../context/Context.jsx";

function Hero() {

    const {movie, isMovieDetails, tabs} = useContext(MoviesContext);

    return (
        <>
            {!isMovieDetails ?
                <>
                    <div className="p-5 container z-2 hro mx-0">
                        <div className="home-heading text-white">
                            <h2 className="display-4 gradient-text fw-bolder">Browse Your Favorite <br/>Movies Anywhere
                            </h2>
                            <p className="mt-4 mb-5 gradient-text ">Your ultimate movie companion, on the go, Your movie
                                night, anytime, anywhere.</p>
                            <button className="btn btn-danger gradient-text">Browse Movies</button>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className="p-5 container z-2 hro mx-0">
            <div className=" text-white">
                <h2 className="display-1 fw-bold text-blur">{tabs === "TV Shows" ? movie?.name : movie?.title}</h2>
                <div className="text-white d-flex align-items-center justify-content-start "><p
                    className="text-white "><i className="fas fa-star text-warning"></i><span
                    className="mx-2">{movie?.vote_average.toFixed(1)}</span><span
                    className="mx-2">|</span><span>{movie?.vote_count}</span></p><p
                    className="text-white gradient-text "><i
                    className="fa-solid fa-circle text-warning gradient-text px-2"></i></p><p
                    className="fw-bold gradient-text">{tabs === "TV Shows" ? movie?.first_air_date.slice(0, 4) : movie?.release_date.slice(0, 4)}</p>
                </div>
                <p className="gradient-text py-3 w-75 blur-bg text-blur">{movie?.overview}<a href="#"
                                                                                             className="text-warning more-details mx-2">More
                    details</a></p>
                <div className="d-flex align-items-center justify-content-start">
                    <button className="btn btn-warning"><i className="fas fa-save px-2"></i>Save to watchlist</button>
                    <button className="btn btn-outline-light mx-3"><i className="fas fa-eye mx-2"></i><span
                        className="text-blur">Similar Movies</span>
                    </button>
                </div>
            </div>
        </div>
                </>}
        </>
    );
}

export default Hero;