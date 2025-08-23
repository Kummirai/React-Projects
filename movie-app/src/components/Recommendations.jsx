import React from 'react';
import RecommendationsCard from "./RecommendationsCard.jsx";
import More from "./More.jsx";

function Recommendations({movies,handleShowMovieDetails, isMovieDetails, heading}) {
    console.log(isMovieDetails)

    return (
        <div className={isMovieDetails ? "bg-blur bg-theme" : "bg-theme"}>
            <div className="d-flex flex-column">
                <h2 className={isMovieDetails ? "m-5 text-transparent": "display-6 fs-6 pb-2 text-start m-5 text-white border-bottom "}>
                    {heading}
                </h2>
                <div className="recommendations container mb-5">
                    { movies.map((movie, index) => (
                        index < 10 ?
                        <RecommendationsCard
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

export default Recommendations;