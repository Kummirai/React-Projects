
import Header from "./Header.jsx";
import HomeMovieCard from "./HomeMovieCard.jsx";
import MoviesDetails from "./MoviesDetails.jsx";

const Home = ({navLinks, isMovieDetails, movie, handleTabSelection}) => {

    console.log(movie);
    return (
        <div className="container-fluid home  position-relative d-flex p-0">
            {isMovieDetails ?
                <>
                    <MoviesDetails
                        navLinks={navLinks}
                        movie={movie}
                        handleTabSelection={handleTabSelection}
                    />
                </>

                : (
                <>
                <div className="main-bg home-bg position-absolute col-sm-12 z-2"></div>
                    <div className="col-sm-6 flex-grow-1 p-5 pb-2 home-grid z-2">
                        <Header
                            navLinks={navLinks}
                            handleTabSelection={handleTabSelection}
                        />
                        <div className="home-heading text-white">
                            <h2 className="display-4 gradient-text fw-bolder">Browse Your Favorite <br/>Movies Anywhere</h2>
                            <p className="mt-4 mb-5 ">Your ultimate movie companion, on the go, Your movie night, anytime, anywhere.</p>
                            <button className="btn btn-danger">Browse Movies</button>
                        </div>
                        {/*<div className="main-movie-card-container row col-sm-12">*/}
                        {/*    {topRatedMovies.map((movie, index) => (*/}
                        {/*        index < 3 ? <HomeMovieCard movie={movie} /> : ""*/}
                        {/*    ))}*/}
                        {/*</div>*/}
                    </div>
                <div className="col-sm-5 overflow-hidden z-0 image-section">

                    {/*<img src={movies[movieIndex]?.poster_path === undefined ? "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14100_p_v13_ap.jpg":"https://image.tmdb.org/t/p/original/" + movies[movieIndex]?.poster_path } className="img-fluid object-fit-cover" alt=""/>*/}

                </div>
                </>
            )}

        </div>
    );
};

export default Home;
