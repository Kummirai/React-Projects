import React from 'react';
import RecommendationsCard from "./RecommendationsCard.jsx";
import Pagination from "./Pagination.jsx";

function Recommendations({movies, pages, handleNextPage, handlePreviousPage, handlePageChange, currentPage, handleShowMovieDetails}) {
    return (
        <div>
            <div className="d-flex flex-column">
                <h2 className="text-center m-5 text-white">
                    Recommendations
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
                <Pagination
                    pages={pages}
                    handlePageChange={handlePageChange}
                    handleNextPage={handleNextPage}
                    handlePreviousPage={handlePreviousPage}
                    currentPage={currentPage}
                />
            </div>
        </div>
    );
}

export default Recommendations;