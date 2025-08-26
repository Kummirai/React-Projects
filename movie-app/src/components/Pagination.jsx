import React, {useContext} from 'react';
import {MoviesContext} from "../context/Context.jsx";

function Pagination() {

    const {pages, handleNextPage, handlePreviousPage, handlePageChange, currentPage} = useContext(MoviesContext)

    return (

        <div className="d-flex align-items-center justify-content-between z-3 col-3 mb-5 mx-auto px-3 rounded-2">
                <p onClick={() => handlePreviousPage()} className="mb-0"><i
                    className="fas fa-angle-double-left btn btn-outline-light"></i></p>
                <div className="text-white d-flex justify-content-around p-2">
                    {pages.map((page, index=1) => (
                        <p onClick={() => handlePageChange(page)} key={index}
                           className={currentPage === page ? "mb-0 btn btn-light mx-2 " : "mb-0 btn btn-outline-light mx-2 "}>
                            { page }
                        </p>
                    ))}
                </div>
                <p className="mb-0" onClick={() => handleNextPage()}><i
                    className="fas fa-angle-double-right btn btn-outline-light"></i></p>
            </div>
    );
}

export default Pagination;