import React, {useContext, useEffect} from 'react';
import Header from "../components/Header.jsx";
import {MoviesContext} from "../context/Context.jsx";

function WatchList() {

    const {setTabs, setIsMovieDetails} = useContext(MoviesContext);

    useEffect(() => {
        setTabs("Watch List");
        setIsMovieDetails(false);
    }, []);

    return (
        <>
            <div className="container hero">
                <Header/>
            </div>
        </>
    );
}

export default WatchList;