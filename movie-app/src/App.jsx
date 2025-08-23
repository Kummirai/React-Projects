import Home from "./components/Home.jsx";
import {useEffect, useState} from "react";
import Recommendations from "./components/Recommendations.jsx";
import Upcoming from "./components/Upcoming.jsx";

function App() {

    const pages = [1, 2, 3, 4];
    const navLinks = ["Home", "Movies", "TV Shows", "Trending", "Genre"];

    const [currentPage, setCurrentPage] = useState(1);
    const [movie, setMovie] = useState(null);
    const [movies, setMovies] = useState([]);
    const randomIndex = Math.round(Math.random() * movies.length);
    const [isMovieDetails, setIsMovieDetails] = useState(false);
    const [upComing, setUpComing] = useState([]);

    const [movieIndex, setMovieIndex] = useState(randomIndex);

    const handlePageChange = page => {
        setCurrentPage(page);
    }

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    }

    const handlePreviousPage = () => {
        setCurrentPage(prevState => prevState - 1);
    }

    const handleShowMovieDetails = (movie) => {
        setIsMovieDetails(true)
        setMovie(movie);
    }


    const handleTabSelection = (tab) => {
        console.log(tab)
        if (tab === "Home") {
            setIsMovieDetails(false)
        }
    }

    const bgTheme = {
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies[movieIndex]?.poster_path})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top"
    }

    const movieDetailTheme = {
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.poster_path})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top"
    }

    console.log(isMovieDetails);

    useEffect(() => {
        setMovieIndex(randomIndex);
    }, [movies]);


    useEffect(() => {
        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=${currentPage }&sort_by=popularity.desc`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmQxODhjZWVlZDdlNGNhYjM3OTFlMjlmYmNjOTQyZSIsIm5iZiI6MTcyNDAxMjQxMS4zNjMwMDAyLCJzdWIiOiI2NmMyNTc3YmI5YjJiNzM5NTlkMGMzNjkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4tJnTFZLNWX2JRK0_eHGYhNBb_P6J1Wpl1JwV8Ht9pc'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                const randomShows = [];
                const numToSelect = json.results.length;

                for (let i = 0; i < numToSelect; i++) {
                    const index = Math.floor(Math.random() * json.results.length);
                    if(!randomShows.includes(json.results[index])){
                        randomShows.push(json.results[index]);
                    }
                }

                setUpComing(randomShows);
            })
            .catch(err => console.error(err));
    }, [currentPage]);


    useEffect(() => {
        const url = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${currentPage}&sort_by=popularity.desc`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmQxODhjZWVlZDdlNGNhYjM3OTFlMjlmYmNjOTQyZSIsIm5iZiI6MTcyNDAxMjQxMS4zNjMwMDAyLCJzdWIiOiI2NmMyNTc3YmI5YjJiNzM5NTlkMGMzNjkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4tJnTFZLNWX2JRK0_eHGYhNBb_P6J1Wpl1JwV8Ht9pc'
            }
        };


        fetch(url, options)
            .then(res => res.json())
            .then(json => {

                const randomMovies = [];
                const numToSelect = json.results.length;

                for (let i = 0; i < numToSelect; i++) {
                    const index = Math.floor(Math.random() * json.results.length);
                    if(!randomMovies.includes(json.results[index])){
                        randomMovies.push(json.results[index]);
                    }
                }

                setMovies(randomMovies);
            })
            .catch(err => console.error(err));
    }, [currentPage]);
  return (
      <>
        <div className="d-flex flex-column" style={!isMovieDetails ? bgTheme : movieDetailTheme}>
            <Home
                navLinks={navLinks}
                movies={movies}
                movieIndex={movieIndex}
                isMovieDetails = {isMovieDetails}
                setIsMovieDetails = {setIsMovieDetails}
                movie={movie}
                handleTabSelection={handleTabSelection}
            />
            <Recommendations
                movies={movies}
                movieIndex={movieIndex}
                pages={pages}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageChange={handlePageChange}
                currentPage={currentPage}
                handleShowMovieDetails={handleShowMovieDetails}
                isMovieDetails={isMovieDetails}
        />
        </div>
        <Upcoming
            handleShowMovieDetails={handleShowMovieDetails}
            movies={upComing}
        />
      </>
  )
}

export default App
