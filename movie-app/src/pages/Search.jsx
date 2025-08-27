import React, {useContext, useEffect} from 'react';
import Header from "../components/Header.jsx";
import WatchListCard from "../components/WatchListCard.jsx";
import {MoviesContext} from "../context/Context.jsx";
import SearchInput from "../components/SearchInput.jsx";

function Search() {

    const {searchResults, setTabs, setIsMovieDetails} = useContext(MoviesContext)

    useEffect(() => {
        setTabs("Search");
        setIsMovieDetails(false);
    }, []);

    return (
        <>

            <div className="container-fluid gx-0 position-relative">
                <div className="movie-theme-top position-absolute w-100 z-1 h-100"></div>
                <div className="hero tv-show z-2">
                    <Header/>
                    <div className="search-input">
                        <SearchInput/>
                    </div>
                    {searchResults.length > 0 ?
                    <div className="container position-relative z-2 py-5 watch-list-container">
                        {searchResults.map((watch) => (
                            <WatchListCard watch={watch} key={watch.id}/>
                        ))}
                    </div>
                        :
                        <div className="container no-results position-relative z-2 py-5 ">
                            <p className={"text-white text-center"}>Search Movies and tv shows</p>
                        </div>
                    }
                </div>
            </div>

        </>
    );
}

export default Search;