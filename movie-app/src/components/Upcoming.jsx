import React from 'react';
import RecommendationsCard from "./RecommendationsCard.jsx";
import UpcomingCard from "./UpcomingCard.jsx";

function Upcoming({movies}) {
    return (
        <div className="bg-theme-1 mb-5">
            <div className="d-flex align-items-center justify-content-start  p-5 pb-0">
                <h2 className="text-white mb-0 d-block w-100 border-bottom display-6 fs-6 pb-2 mx-sm-3">Movies</h2>
            </div>
            <div className='container upcoming mt-5'>
                {movies.map((movie, index) => (
                    index < 10 ?
                    <UpcomingCard
                        key = {index}
                        movie={movie}
                /> : " "
                ))}
            </div>
        </div>
    );
}

export default Upcoming;