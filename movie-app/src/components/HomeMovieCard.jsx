import React from 'react';

const HomeMovieCard = ({movie}) => {
    return (
        <div className="main-card col-sm-4">
            <div className="main-card-image">
                <img className="img-fluid object-fit-cover rounded-3 shadow-lg" src={"https://image.tmdb.org/t/p/w185/" + movie.poster_path} alt="main image" />
            </div>
            <div className="d-flex justify-content-between text-white mt-3">
                <h3 className='line-clamp-1'>{movie.name}</h3>
            </div>
            <p className="text-light-emphasis text-start"><i className="fas fa-star"></i>({Math.round(movie.vote_average)})</p>
        </div>
    );
};

export default HomeMovieCard;