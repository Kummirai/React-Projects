import {MoviesContext} from "../context/Context.jsx";

function WatchListCard({watch}) {

    return (
        <>
            <div className={"text-white watch-card"} key={watch.id}>
                <div className={"watch-image-container"}>
                    <img src={`https://image.tmdb.org/t/p/w342/${watch?.poster_path}`} alt=""/>
                </div>
                <h2 className={"fs-01"}>{watch.name || watch.title}</h2>
                <div className={"d-flex align-items-center justify-content-between text-white"}>
                    <button className={"btn btn-warning fs-65 fw-bold"}>Mark As Watched</button>
                    <button className={"btn btn-danger fs-75"}><i className={"fas fa-trash"}></i></button>
                </div>
            </div>
        </>
    );
}

export default WatchListCard;