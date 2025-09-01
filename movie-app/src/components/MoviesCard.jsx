import React from 'react';

function RecommendationsCard ({movie, handleShowMovieDetails}) {

    return (
        <a href="#" className="text-decoration-none" onClick={()=>handleShowMovieDetails(movie)}>
            <div className='d-flex flex-column justify-content-between recommendation-card rounded-3'>
                <div className="mb-2 recommendation-img-container">
                    <img className="img-fluid rounded-2" loading="lazy"
                         src={"https://image.tmdb.org/t/p/w342/" + movie.poster_path} alt=""/>
                </div>
                <div className=" d-flex align-items-start flex-column rating-title">
                    <p className="text-white rounded-2 fw-bold mb-0 line-clamp-1">
                        <span className="mx-1 fs-75 fw-normal">{movie.title}</span>
                    </p>
                    <p className="text-warning fw-bold"><i
                        className="fas fa-star px-1"></i>{movie.vote_average.toFixed(1)}</p>
                </div>
            </div>
        </a>
    );
}

export default RecommendationsCard;

