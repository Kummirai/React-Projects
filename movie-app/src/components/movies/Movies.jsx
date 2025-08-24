import React, {useEffect} from 'react';
import Header from "../home/Header.jsx";
import Upcoming from "../home/Upcoming.jsx";
import Pagination from "../home/Pagination.jsx";

function Movies({navLinks,
                    handleTabSelection,
                    tabs,
                    movies,
                    heading,
                    handleMoreMovies,
                    pages, handleNextPage,
                    handlePreviousPage,
                    handlePageChange,
                    currentPage,
                    handleShowMovieDetails,
                    movieDesc,
                    isMovieDetails
}) {

    const [movie, setMovie] = React.useState([]);

    useEffect(() => {
        const randomMovie = Math.round(Math.random() * (movies.length-1));
        setMovie(movies[randomMovie]);
    }, [])

    return (
        <>
        <div className="home-bg d-flex align-items-start flex-column justify-content-between position-relative col-sm-12 z-1 movie-page-height"
        style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${!isMovieDetails ? movie?.poster_path : movieDesc?.poster_path})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center"
        }}>

            <div className="movie-theme-top position-absolute w-100 h-25 z-0"></div>
            <div className="movie-theme position-absolute w-100 h-50 z-0"></div>
            <div className="col-sm-7 flex-grow-1 p-5 pb-2 z-2">
                <Header
                    navLinks={navLinks}
                    handleTabSelection={handleTabSelection}
                    tabs={tabs}
                />
            </div>
            <div className="p-5 container z-3 w-75 mx-0">
                <div className=" text-white">
                    <h2 className="display-1 fw-bold gradient-text">{!isMovieDetails ? movie?.title: movieDesc?.title}</h2>
                    <div className="text-white w-50 d-flex align-items-center justify-content-start ">
                        <p className="text-white "><i className="fas fa-star text-warning"></i>
                            <span className="mx-2">{!isMovieDetails ? movie?.vote_average : movieDesc?.vote_average}</span>
                            <span className="mx-2">|</span>
                            <span>{!isMovieDetails ? movie?.vote_count : movieDesc?.vote_count} votes</span>
                        </p>
                        <p className="text-white gradient-text "><i className='fa-solid fa-circle text-white gradient-text px-2'></i></p>
                        <p className="">{!isMovieDetails ? movie?.release_date : movieDesc?.release_date}</p>
                    </div>
                    <p className="gradient-text py-3 w-50">{!isMovieDetails ? movie?.overview : movieDesc?.overview}</p>
                    <button className="btn btn-danger gradient-text">Save to watchlist</button>
                </div>
            </div>
        </div>
        <div className="position-relative">
            <div className="movie-theme-top position-absolute w-100 h-25 z-n1"></div>
            <Upcoming
                heading={heading}
                movies={movies}
                handleMoreMovies={handleMoreMovies}
                handleShowMovieDetails={handleShowMovieDetails}
            />
            <Pagination
                pages={pages}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageChange={handlePageChange}
                currentPage={currentPage}
            />
        </div>
        </>
    );
}

export default Movies;