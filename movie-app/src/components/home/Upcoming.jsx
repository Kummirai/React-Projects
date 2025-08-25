import React, {useContext} from 'react';
import UpcomingCard from "./UpcomingCard.jsx";
import More from "./More.jsx";
import {MoviesContext} from "../../context/Context.jsx";

function Upcoming({heading,}) {

    const {movies, handleMoreMovies, handleShowMovieDetails} = useContext(MoviesContext);
    return (
        <div className="mb-5">
            <div className="d-flex align-items-center justify-content-start  p-5 pb-0">
                <h2 className="gradient-text text-white fw-bold mb-0 d-block w-100 border-bottom display-6 fs-6 pb-2 mx-sm-3">{heading}</h2>
            </div>
            <div className='container upcoming mt-5'>
                {movies.map((movie, index) => (
                    index < 10 ?
                    <UpcomingCard
                        key={movie.id}
                        movie={movie}
                        handleShowMovieDetails={handleShowMovieDetails}
                /> : " "
                ))}
            </div>
            <More
                heading={heading}
                handleMoreMovies={handleMoreMovies}
            />
        </div>
    );
}

export default Upcoming;