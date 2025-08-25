import Header from "./Header.jsx";
import HomeMovieCard from "./HomeMovieCard.jsx";
import MoviesDetails from "./MoviesDetails.jsx";
import {useContext} from "react";
import {MoviesContext} from "../../context/Context.jsx";

const Home = ({navLinks, isMovieDetails, movie, handleTabSelection, tabs}) => {

    const movies = useContext(MoviesContext);

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
    );
};

export default Home;
