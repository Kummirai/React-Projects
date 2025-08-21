import React from 'react';

const HomeMovieCard = ({movie}) => {
    return (
        <div className="main-card col-sm-4">
            <div className="main-card-image">
                <img className="img-fluid object-fit-cover rounded-3 shadow-lg" src={movie.image} alt="main image" />
            </div>
            <div className="d-flex flex-column text-white mt-3">
                <h2 className="mb-0 fw-light text-secondary">{movie.genre}</h2>
                <h3>{movie.title}</h3>
            </div>
            <p className="text-light-emphasis text-end"><i className="fas fa-star"></i>({movie.rating})</p>
        </div>
    );
};

export default HomeMovieCard;