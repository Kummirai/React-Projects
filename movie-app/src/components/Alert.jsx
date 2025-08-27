import React, {useContext} from 'react';
import {MoviesContext} from "../context/Context.jsx";

function Alert({tabs}) {

    const {exists} = useContext(MoviesContext);

    return (
        <div className={exists ? "alert alert-danger text-center w-50 position-absolute top-50 z-3" : "d-none"}
             role="alert">
            {tabs} Already Exists!
        </div>
    );
}

export default Alert;