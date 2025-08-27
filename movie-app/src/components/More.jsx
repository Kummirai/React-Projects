import React, {useContext} from 'react';
import {MoviesContext} from "../context/Context.jsx";

function More({heading}) {

    const {handleMoreMovies} = useContext(MoviesContext);

    return (
        <div className="container more  d-flex justify-content-end align-items-center">
            <a className="text-white-50 text-decoration-none fw-bold"
               onClick={handleMoreMovies}
               href="#">More {heading} <i className="fas fa-angle-double-right"></i></a>
        </div>
    );
}

export default More;