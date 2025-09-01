import React from 'react';

function TVShowsCard({movie, handleShowMovieDetails}) {

    console.log(movie)

    return (
        <a href="#" onClick={() => handleShowMovieDetails(movie)} className="text-decoration-none tv-card bx-shadow">
            <div className='d-flex flex-column justify-content-between recommendation-card rounded-3'>
                <div className="mb-2">
                    <img className="img-fluid rounded-2" loading="lazy"
                         src={"https://image.tmdb.org/t/p/w342/" + movie.poster_path} alt=""/>
                </div>
                <div className=" d-flex align-items-start flex-column rating-title">
                    <p className="text-white rounded-2 fw-bold mb-0 line-clamp-1">
                        <span className="mx-1 gradient-text ">{movie.name}</span>
                    </p>
                    <p className="text-warning fw-normal"><i className="fas fa-star px-1"></i>{movie.vote_average.toFixed(1)}</p>
                </div>
            </div>
        </a>
    );
}

export default TVShowsCard;


