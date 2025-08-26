import React, {useContext, useEffect} from 'react';
import Header from "../components/Header.jsx";
import {MoviesContext} from "../context/Context.jsx";

function WatchList() {

    const {setTabs, setIsMovieDetails, watchList,} = useContext(MoviesContext);

    useEffect(() => {
        setTabs("Watch List");
        setIsMovieDetails(false);
    }, []);

    return (
        <>
            <div className="container hero">
                <Header/>
                <div className="container watch-list-container">
                    {watchList.map((watch) => (
                        <div className={"d-flex align-items-start text-white"} key={watch.id}>
                            <h2 className={"col-sm-3"}>{watch.name || watch.title}</h2>
                            <p className={"col-sm-6"}>{watch.overview}</p>
                            <div className={"col-sm-3 d-flex justify-content-around text-white"}>
                                <button className={"btn btn-warning "}>Mark As Watched</button>
                                <button className={"btn btn-outline-light"}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default WatchList;