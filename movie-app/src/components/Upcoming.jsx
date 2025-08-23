import React from 'react';
import RecommendationsCard from "./RecommendationsCard.jsx";
import UpcomingCard from "./UpcomingCard.jsx";

function Upcoming({movies}) {
    return (
        <div className="bg-theme-1">
            <div className="d-flex align-items-center justify-content-center pt-5">
                <h2 className="text-white mb-0">Upcoming</h2>
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