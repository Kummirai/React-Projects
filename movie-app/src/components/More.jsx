import React, {useContext} from 'react';
import {MoviesContext} from "../context/Context.jsx";
import {Link} from "react-router-dom";

function More({heading}) {

    const {handleMoreMovies} = useContext(MoviesContext);

    return (
        <div className="container more  d-flex justify-content-end align-items-center">
            <Link className="text-white-50 text-decoration-none fw-bold"
               onClick={handleMoreMovies}
                  to="/search">More {heading} <i className="fas fa-angle-double-right"></i></Link>
        </div>
    );
}

export default More;