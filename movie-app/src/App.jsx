import Home from "./pages/Home.jsx";
import {useEffect, useState} from "react";
import Movies from "./pages/Movies.jsx";
import {MoviesContext} from "./context/Context.jsx";
import {Routes, Route} from "react-router-dom";
import TvShows from "./pages/TvShows.jsx";
import WatchList from "./pages/WatchList.jsx";
import Search from "./pages/Search.jsx";


function App() {

    const pages = [1, 2, 3, 4];
    const navLinks = ["Home", "Movies", "TV Shows", "Trending", "Genre", "Top Rated", "Watchlist"];
    const watchListTabs = ["All", "Not Yet Watched", "Watched"]
    const socials = ["fab fa-github", "fab fa-instagram", "fab fa-linkedin", "fab fa-twitter", "fab fa-facebook" ];
    const backgrounds = [
        "https://image.tmdb.org/t/p/original//1XS1oqL89opfnbLl8WnZY1O1uJx.jpg",
        "https://image.tmdb.org/t/p/original//6vFL8S6Cci8s7SHWXz60xOisGBC.jpg",
        "https://image.tmdb.org/t/p/original//7jEVqXC14bhfAzSPgr896dMdDv6.jpg",
        "https://image.tmdb.org/t/p/original//5E1BhkCgjLBlqx557Z5yzcN0i88.jpg",
        "https://image.tmdb.org/t/p/original//KoYWXbnYuS3b0GyQPkbuexlVK9.jpg"
    ]

    const backgroundsForMovies = [
        "https://image.tmdb.org/t/p/original//AEgggzRr1vZCLY86MAp93li43z.jpg",
        "https://image.tmdb.org/t/p/original//8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
        "https://image.tmdb.org/t/p/original//fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
        "https://image.tmdb.org/t/p/original//2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
        "https://image.tmdb.org/t/p/original//AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg"
    ]

    const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

    const [currentPage, setCurrentPage] = useState(1);
    const [movie, setMovie] = useState({});
    const [movies, setMovies] = useState([]);
    const randomIndex = Math.round(Math.random() * movies.length);
    const [isMovieDetails, setIsMovieDetails] = useState(false);
    const [upComing, setUpComing] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [movieIndex, setMovieIndex] = useState(randomIndex);
    const [backgroundIndex, setBackgroundIndex] = useState(null);
    const [tabs, setTabs] = useState("");
    const [similarMoviesId, setSimilarMoviesId] = useState(259075);
    const [isSimilarMovies, setIsSimilarMovies] = useState(false);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [watchList, setWatchList] = useState([]);
    const [watchedMovies, setWatchedMovies] = useState([]);
    const [exists, setExists] = useState(false);
    const [success, setSuccess] = useState(false);
    const [search, setSearch] = useState("");
    const [fetchSearchedMovies, setFetchSearchedMovies] = useState("");
    const [goToSearchPage, setGoToSearchPage] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [currentWatchListTab, setCurrentWatchListTab] = useState("");

    const handleTabSelection = (tab) => {
        if (tab === "All") {
            const newFetchWatchlist = JSON.parse(localStorage.getItem("watchList"))
            if (newFetchWatchlist) {
                setWatchList(newFetchWatchlist)
            }
        } else if (tab === "Not Yet Watched") {
            const newFetchWatchlist = JSON.parse(localStorage.getItem("watchList"))
            console.log(newFetchWatchlist);
            if (newFetchWatchlist) {
                const unWatchedShows = []
                newFetchWatchlist.filter(watch => {
                    const filteredWatchList = watchedMovies.find((id) => watch.id === id);
                    if (!filteredWatchList) {
                        unWatchedShows.splice(1, 0, watch);
                    }
                })
                setWatchList(unWatchedShows)
                saveToWatchlist()
            }
        } else if (tab === "Watched") {
            const newFetchWatchlist = JSON.parse(localStorage.getItem("watchList"))
            if (newFetchWatchlist) {
                const watchedShows = []
                newFetchWatchlist.filter(watch => {
                    const filteredWatchList = watchedMovies.find((id) => watch.id === id);
                    if (filteredWatchList) {
                        watchedShows.splice(1, 0, watch);
                    }
                })
                console.log(watchedShows)
                setWatchList(watchedShows)
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFetchSearchedMovies(search)
        setSearch("")
        setGoToSearchPage(true)
    }

    const handlePageChange = page => {
        setCurrentPage(page);
    }

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    }

    const handlePreviousPage = () => {
        setCurrentPage(prevState => (
            prevState > 1 ? prevState - 1 : prevState));
    }

    const handleShowMovieDetails = (movie) => {
        console.log(movie)
        setIsMovieDetails(true)
        setMovie(movie);
    }

    const handleSimilarMovies = (id) => {
        setSimilarMoviesId(id)
        setIsSimilarMovies(true)
    }

    const saveToWatchlist = (movie) => {
        const newWatchlist = [...watchList]
        const checkIfExists = newWatchlist.filter(item => item.id === movie.id)
        if (checkIfExists.length > 0) {
            setExists(true)
            setTimeout(() => {
                setExists(false)
            }, 3000)
        } else {
            newWatchlist.splice(1, 0, movie)
            localStorage.setItem("watchList", JSON.stringify(newWatchlist))
            setWatchList(newWatchlist)
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
            }, 3000)
        }
    }

    const handleMarkAsWatched = (id) => {
        const newWatchedMovies = [...watchedMovies];
        newWatchedMovies.splice(1, 0, id);
        localStorage.setItem("watchedMovies", JSON.stringify(newWatchedMovies));
        setWatchedMovies(newWatchedMovies)
    }

    const handleDeleteFromWatchList = (id) => {
        const newWatchList = [...watchList];
        const movieToDelete = newWatchList.find(movie => movie.id === id)
        newWatchList.splice(newWatchList.indexOf(movieToDelete), 1);
        localStorage.setItem("watchList", JSON.stringify(newWatchList))
        setWatchList(newWatchList)

        const updateWatchedList = [...watchedMovies]
        const itemToDelete = updateWatchedList.filter(item => item === id)
        if (itemToDelete.length > 0) {
            updateWatchedList.splice(updateWatchedList.indexOf(id), 1)
            localStorage.setItem("watchedMovies", JSON.stringify(updateWatchedList))
            setWatchedMovies(updateWatchedList)
        }

    }

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/search/movie?query=${fetchSearchedMovies}&include_adult=false&language=en-US&page=1`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: API_KEY,
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setSearchResults(json.results)
            })
            .catch(err => console.error(err));
    }, [fetchSearchedMovies]);

    useEffect(() => {
        const storedWatchedMovies = localStorage.getItem("watchedMovies");
        if (storedWatchedMovies) {
            setWatchedMovies(JSON.parse(storedWatchedMovies));
        } else {
            setWatchedMovies([]);
        }

    }, [])

    useEffect(() => {
        const storedWatchlist = localStorage.getItem('watchList'); // 'watchList' is the key
        if (storedWatchlist) {
            setWatchList(JSON.parse(storedWatchlist)); // parse string to array
        } else {
            setWatchList([]); // default to empty array if nothing stored
        }
    }, []); // empty dependency array to run once on mount


    const fetchData = (currentPage, type) => {
        const url = `https://api.themoviedb.org/3/discover/${type}?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: API_KEY
            }
        };

        return {url: url, options: options}
    }

    const handleMoreMovies = () => {
        console.log("you clicked me!")
    }

    useEffect(() => {
        const genRandom = Math.round(Math.random() * (backgrounds.length - 1))
        setBackgroundIndex(genRandom)

    }, [tabs]);

    const bgTheme = {
        backgroundImage: `url(${backgrounds[backgroundIndex]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top"
    }

    const moviesBackground = {
        backgroundImage: `url(${backgroundsForMovies[backgroundIndex]})`,
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

        const {url, options} = fetchData(currentPage, "movie")

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
        const {url, options} = fetchData(currentPage, "tv")

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

        const {url, options} = fetchData(currentPage, "movie")

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
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

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${similarMoviesId}/similar?language=en-US&page=${currentPage}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: API_KEY
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                setSimilarMovies(json.results)
            })
            .catch(err => console.error(err));
    }, [similarMoviesId, currentPage, API_KEY]);

    const context = {
        movies: movies,
        navLinks: navLinks,
        isMovieDetails: isMovieDetails,
        movie: movie,
        tabs: tabs,
        topRatedMovies: topRatedMovies,
        setIsMovieDetails: setIsMovieDetails,
        movieIndex: movieIndex,
        pages: pages,
        handleNextPage: handleNextPage,
        handlePreviousPage: handlePreviousPage,
        currentPage: currentPage,
        handlePageChange: handlePageChange,
        handleShowMovieDetails: handleShowMovieDetails,
        socials: socials,
        handleMoreMovies: handleMoreMovies,
        handleSimilarMovies: handleSimilarMovies,
        isSimilarMovies: isSimilarMovies,
        similarMovies: similarMovies,
        upComing: upComing,
        bgTheme: bgTheme,
        movieDetailTheme: movieDetailTheme,
        setTabs: setTabs,
        moviesBackground: moviesBackground,
        backgroundsForMovies: backgroundsForMovies,
        backgroundIndex: backgroundIndex,
        watchList: watchList,
        setWatchList: setWatchList,
        saveToWatchlist: saveToWatchlist,
        handleMarkAsWatched: handleMarkAsWatched,
        handleDeleteFromWatchList: handleDeleteFromWatchList,
        watchedMovies: watchedMovies,
        exists: exists,
        success: success,
        handleSubmit: handleSubmit,
        search: search,
        setSearch: setSearch,
        goToSearchPage: goToSearchPage,
        searchResults: searchResults,
        setGoToSearchPage: setGoToSearchPage,
        watchListTabs: watchListTabs,
        handleTabSelection: handleTabSelection,
        currentWatchListTab: currentWatchListTab,
    }

  return (
      <>
          <MoviesContext.Provider value={context}>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/movies" element={<Movies heading="Movies" movieDesc={movie}/>}/>
                  <Route path="/tvshows" element={<TvShows/>}/>
                  <Route path="watchlist" element={<WatchList/>}/>
                  <Route path="/search" element={<Search/>}/>
              </Routes>
          </MoviesContext.Provider>
      </>
  )
}

export default App

