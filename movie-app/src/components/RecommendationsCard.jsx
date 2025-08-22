import React from 'react';

function RecommendationsCard ({movie, handleShowMovieDetails}) {

    return (
        <div onClick={()=>handleShowMovieDetails(movie)} className='d-flex flex-column justify-content-between recommendation-card rounded-3'
        style={{backgroundImage: `url(${"https://image.tmdb.org/t/p/w342/" + movie.poster_path})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
        }}>
            <div className="p-2 d-flex justify-content-between align-items-start">
                <div className="d-flex align-items-center text-end justify-content-end rating-title">
                    <p className="text-white bg-dark rounded-2  fw-light p-1">
                        <i className="fas fa-star mx-1"></i>
                        <span className="mx-1">{movie.vote_average.toFixed(1)}</span>
                    </p>
                    {/*<p className="text-white rounded-2  bg-danger fw-bold py-1 px-2">{movie.release_date.slice(0, 4)}</p>*/}
                </div>
                <i className="fas fa-plus text-end text-white rounded-2 bg-danger fw-bold p-1 px-2"></i>
            </div>
            <div className=" px-2">

            </div>
        </div>
    );
}

export default RecommendationsCard;


