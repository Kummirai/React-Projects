import React, {useContext} from 'react';
import {MoviesContext} from "../context/Context.jsx";

function SearchInput() {

    const {setSearch, search, handleSubmit} = useContext(MoviesContext)

    return (
        <form className="d-flex z-2  align-items-center justify-content-between" onSubmit={handleSubmit}>
            <input
                className="form-control mx-3 btn-outline-lightline bg-transparent text-white"
                type="text"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => (setSearch(e.target.value))}
            />
        </form>
    );
}

export default SearchInput;