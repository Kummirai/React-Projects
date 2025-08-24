import React from 'react';

const HomeMovieCard = ({movie}) => {
    return (

        <div className="d-flex col-sm-3 h-100 align-items-center">
            <img src={`https://image.tmdb.org/t/p/w342/${movie?.poster_path}`}
                 alt={movie?.title}
                 className="img-fluid w-100 h-100 object-fit-cover"
            />
            <div className="text-white">
                <h2 className="fs-5">{movie?.title}</h2>
                <h3 className="fs-6">{movie?.release_date}</h3>
            </div>
        </div>
    );
};

export default HomeMovieCard;
