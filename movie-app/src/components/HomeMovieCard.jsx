import React from 'react';

const HomeMovieCard = () => {
    return (
        <div className="main-card col-sm-4">
            <div className="main-card-image">
                <img className="img-fluid rounded-1" src="src/assets/images/main-image.webp" alt="main image" />
            </div>
            <div className="d-flex flex-column text-white mt-3">
                <h2 className="mb-0 fw-light">Drama</h2>
                <h3>Dark Waters</h3>
            </div>
            <p className="text-white text-end"><i className="fas fa-star"></i>(4.5)</p>
        </div>
    );
};

export default HomeMovieCard;