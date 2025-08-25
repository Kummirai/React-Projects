import React, {useContext, useEffect} from 'react';
import Header from "../home/Header.jsx";
import Upcoming from "../home/Upcoming.jsx";
import Pagination from "../home/Pagination.jsx";
import {MoviesContext} from "../../context/Context.jsx";

function Movies({movieDesc}) {


    const {
        navLinks,
        handleTabSelection,
        tabs,
        pages,
        movies,
        heading,
        isMovieDetails,
        handleSimilarMovies,
        similarMovies,
        isSimilarMovies,
        upComing
    } = useContext(MoviesContext)

    console.log(movieDesc)

    const [movie, setMovie] = React.useState([]);

    useEffect(() => {
        const randomMovie = Math.round(Math.random() * (movies.length-1));
        setMovie(movies[randomMovie]);
    }, [])


    const movieBasesBackground = {
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${!isMovieDetails ? movie?.poster_path : movieDesc?.poster_path})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center"
    }


    return (
        <>
            <div className={
                !isSimilarMovies ?
                    "home-bg d-flex align-items-start flex-column justify-content-between position-relative col-sm-12 z-1 movie-page-height" :
                    "d-flex align-items-start flex-column justify-content-between position-relative col-sm-12 z-1 movie-page-height"
            }
                 style={movieBasesBackground}>
                {!isSimilarMovies ?
                    <>
                        <div className="movie-theme-top position-absolute w-100 h-25 z-0"></div>
                        <div className="movie-theme position-absolute w-100 h-50 z-0"></div>
                    </>
                    :
                    ""
                }
                <div className={"col-sm-12 flex-grow-1 p-5 pb-2 z-2"}>
                <Header
                    navLinks={navLinks}
                    handleTabSelection={handleTabSelection}
                    tabs={tabs}
                />
            </div>
            {!isSimilarMovies ?
                <div className="p-5 container z-3 w-75 mx-0">
                    <div className=" text-white">
                        <h2 className="display-1 fw-bold gradient-text">{!isMovieDetails ? movie?.title : movieDesc?.title}</h2>
                        <div className="text-white w-50 d-flex align-items-center justify-content-start ">
                            <p className="text-white "><i className="fas fa-star text-warning"></i>
                                <span
                                    className="mx-2">{!isMovieDetails ? movie?.vote_average : movieDesc?.vote_average?.toFixed(1)}</span>
                                <span className="mx-2">|</span>
                                <span>{!isMovieDetails ? movie?.vote_count : movieDesc?.vote_count} votes</span>
                            </p>
                            <p className="text-white gradient-text "><i
                                className='fa-solid fa-circle text-warning gradient-text px-2'></i></p>
                            <p className="fw-bold gradient-text">{!isMovieDetails ? movie?.release_date?.slice(0, 4) : movieDesc?.release_date?.slice(0, 4)}</p>
                        </div>
                        <p className="gradient-text py-3 w-75">{!isMovieDetails ? movie?.overview : movieDesc?.overview}<a
                            href="#" className="text-warning more-details mx-2">More details</a></p>
                        <div className="w-50 d-flex align-items-center justify-content-start">
                            <button className="btn btn-warning"><i className="fas fa-save px-2"></i>Save to watchlist
                            </button>
                            <button
                                onClick={() => handleSimilarMovies(
                                    isMovieDetails ? movieDesc.id : movie.id
                                )}
                                className="btn btn-outline-light mx-3">
                                <i className="fas fa-eye mx-2"></i>
                                Similar Movies
                            </button>
                        </div>

                    </div>
                </div>
                :
                <div className="container blur-bg">
                    <div className="pt-5">
                        <h2 className="text-white text-center fs-4">Movies similar to <br/><span
                            className="text-warning fw-bold display-6">{isMovieDetails ? movieDesc?.title : movie.title}</span>
                        </h2>
                    </div>
                    <Upcoming
                        movies={similarMovies}
                    />
                    <Pagination pages={pages}/>
                </div>
            }
        </div>
            {isSimilarMovies ? ""
                :
                <div className="position-relative">
                    <div className="movie-theme-top position-absolute w-100 h-25 z-n1"></div>
                    <Upcoming heading={heading} movies={upComing}/>
                    <Pagination/>
                </div>
            }
        </>
    );
}

export default Movies;