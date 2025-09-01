import React, {useContext} from 'react';
import UpcomingCard from "./MoviesCard.jsx";
import More from "./More.jsx";
import {MoviesContext} from "../context/Context.jsx";

function MoviesContainer({heading, movies}) {

    const {handleMoreMovies, handleShowMovieDetails} = useContext(MoviesContext);
    return (
        <div className="mb-5 popular-movies">
            <div className="d-flex align-items-center justify-content-center p-5 pb-0">
                <h2 className="gradient-text text-white fw-bold mb-5 display-6 px-5 pb-2 mx-sm-3">{heading}</h2>
            </div>
            <div className='container col-sm-10 upcoming mt-2'>
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
                url={"/search"}
            />
        </div>
    );
}

export default MoviesContainer;