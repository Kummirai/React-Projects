import {Link} from 'react-router-dom'
import React, {useContext} from "react";
import {MoviesContext} from "../context/Context.jsx";
import SearchInput from "./SearchInput.jsx";

const Header = () => {

    const {tabs, watchList, goToSearchPage} = useContext(MoviesContext);

    return (
        <>
            <header className="p-5 z-2 d-flex align-items-center justify-content-between">
                <nav className="col-sm-6 d-flex justify-content-between align-items-center text-white">
                    <h1 className="display-6 col-sm-5 fs-4 mb-0 gradient-text ">Movie App</h1>
                    <div className="d-flex align-items-center justify-content-between col-sm-7 mb-0 text-white">
                        <Link
                            className={tabs === "Home" ? "border-bottom text-decoration-none text-white fs-85" : "text-decoration-none text-white fs-85"}
                            to="/">Home</Link>
                        <Link
                            className={tabs === "Movies" ? "border-bottom text-decoration-none text-white fs-85" : "text-decoration-none text-white fs-85"}
                            to="/movies">Movies</Link>
                        <Link
                            className={tabs === "TV Shows" ? "border-bottom text-decoration-none text-white fs-85" : "text-decoration-none text-white fs-85"}
                            to="/tvshows">TV Shows</Link>
                        <Link
                            className={tabs === "Watch List" ? "border-bottom text-decoration-none text-white fs-85" : "text-decoration-none text-white fs-85"}
                            to="/watchlist">Watch List<span
                            className={"fw-bold rounded-2 text-warning mx-1"}>({watchList.length})</span></Link>
                        <Link
                            className={tabs === "Search" ? "border-bottom text-decoration-none text-white fs-85" : "text-decoration-none text-white fs-85"}
                            to="/search">Search</Link>
                    </div>

                </nav>
                <nav className={!goToSearchPage ? "navbar navbar-dark" : "d-none"}>
                    <SearchInput/>
                </nav>
            </header>
        </>
    );
};

export default Header;