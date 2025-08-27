import React, {useContext, useEffect} from 'react';
import Header from "../components/Header.jsx";
import {MoviesContext} from "../context/Context.jsx";
import WatchListCard from "../components/WatchListCard.jsx";


function WatchList() {

    const {setTabs, setIsMovieDetails, watchList, setGoToSearchPage} = useContext(MoviesContext);

    setGoToSearchPage(false)

    useEffect(() => {
        setTabs("Watch List");
        setIsMovieDetails(false);
    }, []);

    return (
        <>
            <div className="container-fluid gx-0 position-relative">
                <div className="hero tv-show z-2">
                    <Header/>
                    <div className={"watch-list-heading mt-5 text-warning border-bottom mx-5"}>
                        <h2 className={"pb-3 display-6 fs-4 fw-bold"}>Your Watch List</h2>
                    </div>
                    <div className="container py-5 watch-list-container">
                        {watchList.map((watch) => (
                            <WatchListCard watch={watch} key={watch.id}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default WatchList;