import React, {useContext} from 'react';
import {MoviesContext} from "../context/Context.jsx";

function Hero() {

    const {movie} = useContext(MoviesContext);
    return (
        <div className="p-5 container hro mx-0">
            <div className=" text-white">
                <h2 className="display-1 fw-bold gradient-text">{movie?.name}</h2>
                <div className="text-white d-flex align-items-center justify-content-start "><p
                    className="text-white "><i className="fas fa-star text-warning"></i><span
                    className="mx-2">{movie?.vote_average.toFixed(1)}</span><span
                    className="mx-2">|</span><span>{movie?.vote_count}</span></p><p
                    className="text-white gradient-text "><i
                    className="fa-solid fa-circle text-warning gradient-text px-2"></i></p><p
                    className="fw-bold gradient-text"></p></div>
                <p className="gradient-text py-3 w-75">{movie?.overview}<a href="#"
                                                                           className="text-warning more-details mx-2">More
                    details</a></p>
                <div className="d-flex align-items-center justify-content-start">
                    <button className="btn btn-warning"><i className="fas fa-save px-2"></i>Save to watchlist</button>
                    <button className="btn btn-outline-light mx-3"><i className="fas fa-eye mx-2"></i>Similar Movies
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;