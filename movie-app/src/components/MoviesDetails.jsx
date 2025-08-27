
import Header from "./Header.jsx";
import {MoviesContext} from "../context/Context.jsx";

function MoviesDetails({movie}) {

    const months =["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

    return (
        <div className="container-fluid d-flex">
            <div className="col-sm-12 flex-grow-1 p-5 pb-2 d-flex flex-column justify-content-start z-2">
                <Header/>
                <div className="row">
                    <div className="m-auto col-sm-8 text-white px-5 py-4 rounded-4">
                        <h2 className="fw-bold display-2 gradient-text">{movie?.name}</h2>
                        <div className="d-flex justify-content-start align-items-center text-white-50 mb-3">
                            <p className="gradient-text">TMDB rating</p>
                            <p className="mx-3"><i className="fas fa-star text-warning"></i><span
                                className="text-white-50 mx-1">{movie?.vote_average.toFixed(1)}</span></p>
                        </div>
                        <p className="text-white">{months[movie?.first_air_date]} * {movie?.first_air_date}</p>
                        <p className="text-white gradient-text fw-normal">{movie?.overview}</p>
                        <button className="btn btn-danger gradient-text">Save to watchlist</button>
                    </div>
                    <div className="col-sm-4 d-flex">
                        <div className="d-flex align-items-center justify-content-center flex-grow-1 m-auto">
                            <img className="img-fluid rounded-2 " style={{maxHeight: "350px"}}
                                 src={movie?.poster_path === undefined ? "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14100_p_v13_ap.jpg" : "https://image.tmdb.org/t/p/original/" + movie?.poster_path}
                                 alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoviesDetails;
