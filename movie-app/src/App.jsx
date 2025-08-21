import Home from "./components/Home.jsx";
import {useEffect, useState} from "react";

function App() {


    const navLinks = ["Home", "Movies", "TV Shows", "Trending"];

    const [movies, setMovies] = useState([]);
    const randomIndex = Math.round(Math.random() * movies.length);

    const [movieIndex, setMovieIndex] = useState(randomIndex);


    useEffect(() => {
        setMovieIndex(randomIndex);
    }, [movies]);


    useEffect(() => {
        const url = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';
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
    }, []);
  return (
    <>
        <Home navLinks={navLinks} movies={movies} movieIndex={movieIndex} />
    </>
  )
}

export default App
