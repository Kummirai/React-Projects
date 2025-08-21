
import Header from "./Header.jsx";
import HomeMovieCard from "./HomeMovieCard.jsx";

const Home = ({navLinks, movies,movieIndex}) => {

    return (
        <div className="container-fluid home position-relative d-flex p-0">
            <div className="main-bg position-absolute col-sm-6 z-2"></div>
            <div className="col-sm-6 flex-grow-1 p-5 pb-2 d-flex flex-column justify-content-between z-2">
                <Header navLinks={navLinks} />
                <div className="home-heading col-sm-9 text-white mt-5">
                    <h2 className="mb-3">Browse Your Favorite <br/>Movies Anywhere</h2>
                    <p>Your ultimate movie companion, on the go, Your movie night, anytime, anywhere.</p>
                    <button className="btn btn-danger">Browse Movies</button>
                </div>
                <div className="main-movie-card-container row col-sm-12">
                    {movies.map((movie, index) => (
                        index < 3 ? <HomeMovieCard movie={movie} /> : ""
                    ))}
                </div>
            </div>
            <div className="col-sm-6 overflow-hidden z-0 image-section">

                <img src={movies[movieIndex]?.poster_path === undefined ? "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14100_p_v13_ap.jpg":"https://image.tmdb.org/t/p/w780/" + movies[movieIndex]?.poster_path } className="img-fluid object-fit-cover" alt=""/>

            </div>
        </div>
    );
};

export default Home;