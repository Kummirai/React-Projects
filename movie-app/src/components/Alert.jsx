import React, {useContext} from 'react';
import {MoviesContext} from "../context/Context.jsx";

function Alert({tabs}) {

    const {exists, success} = useContext(MoviesContext);

    return (
        <div className={
            exists ? "alert alert-danger text-center w-50 position-absolute top-50 z-3" : success ? "alert alert-success  text-center w-50 position-absolute top-50 z-3" : "d-none"
        }
             role="alert">
            {exists ? `${tabs} already exists` : success ? `${tabs} successfully added!` : ""}
        </div>
    );
}

export default Alert;