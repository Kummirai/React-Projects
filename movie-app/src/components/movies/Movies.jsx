import React, {useEffect} from 'react';
import Header from "../home/Header.jsx";

function Movies({navLinks, handleTabSelection, tabs, movies }) {


    const [movie, setMovie] = React.useState([]);

    useEffect(() => {
        const randomMovie = Math.round(Math.random() * (movies.length-1));
        setMovie(movies[randomMovie]);
    }, [])

    return (
        <div className="home-bg d-flex flex-column position-absolute col-sm-12 z-2 movie-page-height"
        style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.poster_path})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center"
        }}>
            <div className="col-sm-7 flex-grow-1 p-5 pb-2 z-2">
                <Header
                    navLinks={navLinks}
                    handleTabSelection={handleTabSelection}
                    tabs={tabs}
                />
            </div>
            <div className="container h-100 flex-grow-1">
                <h1>{movie.title}</h1>
            </div>
        </div>
    );
}

export default Movies;