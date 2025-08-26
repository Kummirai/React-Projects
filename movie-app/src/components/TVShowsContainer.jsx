import React, {useContext} from 'react';
import TVShowsCard from "./TVShowsCard.jsx";
import More from "./More.jsx";
import {MoviesContext} from "../context/Context.jsx";

function TVShowsContainer({heading, movies}) {

    const {handleShowMovieDetails, isMovieDetails} = useContext(MoviesContext);

    return (
        <div className={isMovieDetails ? "" : " "}>
            <div className="d-flex flex-column ">
                <h2 className={isMovieDetails ? "m-5 text-transparent": "gradient-text fw-bold  display-6 fs-6 pb-2 text-start m-5 text-white border-bottom "}>
                    {heading}
                </h2>
                <div className="recommendations container mb-5">
                    { movies.map((movie, index) => (
                        index < 10 ?
                            <TVShowsCard
                            key={movie.id} movie={movie}
                            handleShowMovieDetails={handleShowMovieDetails}
                        />
                            : ""
                    ))}
                </div>
                <More heading={heading} />
            </div>
        </div>
    );
}

export default TVShowsContainer;