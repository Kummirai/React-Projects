import {MoviesContext} from "../context/Context.jsx";
import {useContext} from "react";

function WatchListCard({watch}) {

    const {handleDeleteFromWatchList, handleMarkAsWatched, movieStatus} = useContext(MoviesContext);

    return (
        <>
            <div className={"text-white watch-card"} key={watch.id}>
                <div className={"watch-image-container"}>
                    <img src={`https://image.tmdb.org/t/p/w342/${watch?.poster_path}`} alt=""/>
                </div>
                <h2 className={"fs-01"}>{watch.name || watch.title}</h2>
                <div className={"d-flex align-items-center justify-content-between text-white"}>
                    <button onClick={() => handleMarkAsWatched(watch.id)}
                            className={"btn btn-warning fs-65 fw-bold"}>{movieStatus}</button>
                    <button onClick={() => handleDeleteFromWatchList(watch.id)} className={"btn btn-danger fs-75"}><i
                        className={"fas fa-trash"}></i></button>
                </div>
            </div>
        </>
    );
}

export default WatchListCard;