import React from 'react';

function More({heading}) {
    return (
        <div className="container more  d-flex justify-content-end align-items-center">
            <a className="text-white-50 text-decoration-none fw-bold"
               href="#">More {heading} <i className="fas fa-angle-double-right"></i></a>
        </div>
    );
}

export default More;