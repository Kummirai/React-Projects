import React from 'react';

function Pagination({pages, handleNextPage, handlePreviousPage, handlePageChange}) {


    return (

            <div className="d-flex align-items-center justify-content-between  border border-dark col-3 mb-5 mx-auto px-3 rounded-2">
                <p onClick={()=>handlePreviousPage()} className="mb-0" ><i className="fas fa-angle-double-left btn btn-outline-light"></i></p>
                <div className="text-white d-flex justify-content-around p-2">
                    {pages.map((page, index) => (
                        <p onClick={()=>handlePageChange(page)} key={index} className="mb-0 btn btn-outline-danger mx-2 border-danger">{page}</p>
                    ))}
                </div>
                <p className="mb-0" onClick={()=>handleNextPage()} ><i className="fas fa-angle-double-right btn btn-outline-light"></i></p>
            </div>

    );
}

export default Pagination;