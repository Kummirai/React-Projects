import React from 'react';
import Header from "./Header.jsx";

function MoviesDetails({navLinks,movie,handleTabSelection}) {

    const months =["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

    return (
        <div className="container-fluid d-flex">
            <div className="col-sm-8 flex-grow-1 p-5 pb-2 d-flex flex-column justify-content-start z-2">
                <Header
                    navLinks={navLinks}
                    handleTabSelection={handleTabSelection}
                />
                <div className="m-auto text-white px-5 py-4 rounded-4 blur-bg">
                    <h2 className="fw-bold display-2">{movie?.name}</h2>
                    <div className="d-flex justify-content-start align-items-center text-white-50 mb-3">
                        <p>TMDB rating</p>
                        <p className="mx-3"><i className="fas fa-star text-warning"></i><span className="text-white-50 mx-1">{movie?.vote_average.toFixed(1)}</span></p>
                    </div>
                    <p className="text-white">{months[movie?.first_air_date.slice(6, 7)]} * {movie?.first_air_date.slice(0, 4)}</p>
                    <p className="text-white fw-normal">{movie?.overview}</p>
                    <button className="btn btn-danger">Save to watchlist</button>
                </div>

            </div>
            <div className="col-sm-4 d-flex">
                <div className="d-flex align-items-center justify-content-center flex-grow-1 m-auto" >
                    <img className="img-fluid rounded-2 " style={{maxHeight: "350px"}}  src={movie?.poster_path === undefined ? "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14100_p_v13_ap.jpg":"https://image.tmdb.org/t/p/original/" + movie?.poster_path } alt=""/>
                </div>
            </div>
        </div>
    );
}

export default MoviesDetails;
