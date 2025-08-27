import React, {useContext} from 'react';
import {MoviesContext} from "../context/Context.jsx";

function Alert({tabs}) {

    const {exists, success} = useContext(MoviesContext);

    return (
        <div className={
            exists ? "blur-bg fw-bold text-center text-white w-50 position-absolute alert-position z-3" : success ? "blur-bg fw-bold text-center text-white alert-position  w-50 position-absolute z-3" : "d-none"
        }
             role="alert">
            {exists ? `${tabs} already exists` : success ? `${tabs} successfully added!` : ""}
        </div>
    );
}

export default Alert;