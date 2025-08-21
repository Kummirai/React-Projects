import React from 'react';

function Pagination(props) {
    
    const pages = [1, 2, 3, 4];

    return (

            <div className="d-flex align-items-center justify-content-between  border border-dark col-3 mb-5 mx-auto px-3 rounded-2">
                <p className="mb-0" ><i className="fas fa-angle-double-left text-white fs-5"></i></p>
                <div className="text-white d-flex justify-content-around p-2">
                    {pages.map((page, index) => (
                        <p key={index} className="mb-0 p-1 px-3 rounded-2 border mx-2 border-danger">{page}</p>
                    ))}
                </div>
                <p className="mb-0" ><i className="fas fa-angle-double-right text-white fs-5"></i></p>
            </div>

    );
}

export default Pagination;