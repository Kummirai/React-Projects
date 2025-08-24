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
                    currentPage
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
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.poster_path})`,
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
            <div className="p-5 container z-3 w-50 mx-0">
                <div className=" text-white">
                    <h2 className="display-1 fw-bold gradient-text">{movie?.title}</h2>
                    <div className="text-white w-50 d-flex align-items-center justify-content-between ">
                        <p className="text-white "><i className="fas fa-star text-warning"></i>
                            <span className="mx-2">{movie?.vote_average}</span>
                            <span className="mx-2">|</span>
                            <span>{movie?.vote_count} votes</span>
                        </p>
                        <p className="text-white "><i className='fa-solid fa-circle text-white'></i></p>
                        <p className="">{movie?.release_date}</p>
                    </div>
                    <p className="gradient-text">{movie?.overview}</p>
                </div>
            </div>
        </div>
        <div className="position-relative">
            <div className="movie-theme-top position-absolute w-100 h-25 z-n1"></div>
            <Upcoming
                heading={heading}
                movies={movies}
                handleMoreMovies={handleMoreMovies}
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