import Home from "./components/home/Home.jsx";
import {useEffect, useState} from "react";
import Recommendations from "./components/home/Recommendations.jsx";
import Upcoming from "./components/home/Upcoming.jsx";
import Footer from "./components/home/Footer.jsx";
import Movies from "./components/movies/Movies.jsx";

function App() {

    const pages = [1, 2, 3, 4];
    const navLinks = ["Home", "Movies", "TV Shows", "Trending", "Genre", "Top Rated", "Watchlist"];
    const socials = ["fab fa-github", "fab fa-instagram", "fab fa-linkedin", "fab fa-twitter", "fab fa-facebook" ];
    const backgrounds = [
        "https://image.tmdb.org/t/p/original//1XS1oqL89opfnbLl8WnZY1O1uJx.jpg",
        "https://image.tmdb.org/t/p/original//6vFL8S6Cci8s7SHWXz60xOisGBC.jpg",
        "https://image.tmdb.org/t/p/original//7jEVqXC14bhfAzSPgr896dMdDv6.jpg",
        "https://image.tmdb.org/t/p/original//5E1BhkCgjLBlqx557Z5yzcN0i88.jpg",
        "https://image.tmdb.org/t/p/original//KoYWXbnYuS3b0GyQPkbuexlVK9.jpg"
    ]

    const [currentPage, setCurrentPage] = useState(1);
    const [movie, setMovie] = useState(null);
    const [movies, setMovies] = useState([]);
    const randomIndex = Math.round(Math.random() * movies.length);
    const [isMovieDetails, setIsMovieDetails] = useState(false);
    const [upComing, setUpComing] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [movieIndex, setMovieIndex] = useState(randomIndex);
    const [backgroundIndex, setBackgroundIndex] = useState(null);
    const [tabs, setTabs] = useState("Home");

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

    const selectTab = (tab) => {
        setTabs(tab)
    }

    const handleTabSelection = (tab) => {
        selectTab(tab)
        if (tab === "Home") {
            setIsMovieDetails(false)
        }
    }

    const handleMoreMovies = () => {
        console.log("you clicked me!")
    }

    useEffect(() => {
        const genRandom = Math.round(Math.random() * (backgrounds.length - 1))
        console.log(genRandom)
        setBackgroundIndex(genRandom)

    }, [tabs]);

    const bgTheme = {
        backgroundImage: `url(${backgrounds[backgroundIndex]})`,
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

    useEffect(() => {
        setMovieIndex(randomIndex);
    }, [movies]);

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=${currentPage }&sort_by=popularity.desc`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                authorisation : `Bearer ${import.meta.env.VITE_REACT_APP_API_KEY}`
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
                authorisation : `Bearer ${import.meta.env.VITE_REACT_APP_API_KEY}`
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

    useEffect(() => {
        const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                authorisation : `Bearer ${import.meta.env.VITE_REACT_APP_API_KEY}`
                }
        }

        fetch(url, options)
            .then(res => res.json())
            .then(json => {console.log(json)
                const topRated = [];
                const numToSelect = json.results.length;

                for (let i = 0; i < numToSelect; i++) {
                    const index = Math.floor(Math.random() * json.results.length);
                    if(!topRated.includes(json.results[index])){
                        topRated.push(json.results[index]);
                    }
                }

                setTopRatedMovies(topRated);
            })
            .catch(err => console.error(err));
    }, [currentPage]);


  return (
      <>
          { tabs === "Home" ?
              <>
                <div className="d-flex flex-column" style={!isMovieDetails ? bgTheme : movieDetailTheme}>
                    <Home
                        navLinks={navLinks}
                        topRatedMovies={movies}
                        movieIndex={movieIndex}
                        isMovieDetails = {isMovieDetails}
                        setIsMovieDetails = {setIsMovieDetails}
                        movie={movie}
                        handleTabSelection={handleTabSelection}
                        tabs={tabs}
                    />
                    <Recommendations
                        heading={navLinks[2]}
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
                <div className='bg-theme-1'>
                  <Upcoming
                      handleShowMovieDetails={handleShowMovieDetails}
                      movies={topRatedMovies}
                      heading={navLinks[5]}
                  />
                  <Upcoming
                      handleShowMovieDetails={handleShowMovieDetails}
                      movies={upComing}
                      heading={navLinks[1]}
                  />
                </div>
                  <Footer
                  navLinks={navLinks}
                  handleTabSelection={handleTabSelection}
                  socials={socials}
                  />
              </> :
              <>
                  <Movies navLinks={navLinks}
                          handleTabSelection={handleTabSelection}
                          tabs={tabs}
                          movies={upComing}
                          heading="Movies"
                          handleMoreMovies={handleMoreMovies}
                          pages={pages}
                          currentPage={currentPage}
                          handlePageChange={handlePageChange}
                          handlePreviousPage={handlePreviousPage}
                          handleNextPage={handleNextPage}
                          handleShowMovieDetails={handleShowMovieDetails}
                          movieDesc={movie}
                          isMovieDetails={isMovieDetails}
                  />
                  <Footer
                      navLinks={navLinks}
                      handleTabSelection={handleTabSelection}
                      socials={socials}
                  />
              </>
          }
      </>
  )
}

export default App
