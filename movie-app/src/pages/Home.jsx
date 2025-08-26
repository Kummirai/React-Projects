import Header from "../components/Header.jsx";
import HomeMovieCard from "../components/HomeMovieCard.jsx";
import MoviesDetails from "../components/MoviesDetails.jsx";
import {useContext} from "react";
import {MoviesContext} from "../context/Context.jsx";
import TVShowsContainer from "../components/TVShowsContainer.jsx";
import MoviesContainer from "../components/MoviesContainer.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {

    const {
        movies,
        upComing,
        bgTheme,
        movieDetailTheme,
        navLinks,
        isMovieDetails,
        movie,
        handleTabSelection,
        tabs
    } = useContext(MoviesContext);

    return (
        <>
            <div className="container-fluid home  position-relative d-flex p-0"
                 style={!isMovieDetails ? bgTheme : movieDetailTheme}>
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
                    <div className="col-sm-8 flex-grow-1 p-5 pb-2 home-grid z-2">
                        <Header
                            navLinks={navLinks}
                            handleTabSelection={handleTabSelection}
                            tabs={tabs}
                        />
                        <div className="home-heading text-white">
                            <h2 className="display-4 gradient-text fw-bolder">Browse Your Favorite <br/>Movies Anywhere</h2>
                            <p className="mt-4 mb-5 gradient-text ">Your ultimate movie companion, on the go, Your movie night, anytime, anywhere.</p>
                            <button className="btn btn-danger gradient-text">Browse Movies</button>
                        </div>
                        <div className="container d-flex justify-content-between movie-cards">

                            {movies.map((movie, index) => (
                                index > 2 ? "" :
                                    <HomeMovieCard key={movie.id} movie={movie}/>
                            ))
                            }
                        </div>
                    </div>
                </>
            )}

        </div>
            <TVShowsContainer heading={navLinks[2]} movies={movies}/>
            <div className='bg-theme-1'>
                <MoviesContainer heading={navLinks[1]} movies={upComing}/>
            </div>
            <Footer/>
        </>
    );
};

export default Home;
