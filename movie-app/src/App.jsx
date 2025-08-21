import Home from "./components/Home.jsx";
import {useEffect, useState} from "react";

function App() {


    const navLinks = ["Home", "Movies", "TV Shows", "Trending"];
    // const backUpMovies = [
    //     {
    //         id: 1,
    //         title: "Jeepers Creepers 2",
    //         genre: "Drama",
    //         rating: 7,
    //         image: "https://m.media-amazon.com/images/M/MV5BMTIxNDI2NzQyNF5BMl5BanBnXkFtZTYwMTY5MTQ3._V1_FMjpg_UX1000_.jpg"
    //     },
    //     {
    //         id: 2,
    //         title: "Universal Soldier",
    //         genre: "War",
    //         rating: 8,
    //         image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRLIbZgJx8YG-zEXvWq4iJYKEfCyp8_Eo3dAHbHUETcXOGupnl2qwB_hKPmf1EPVrbfB1zuuA"
    //     },
    //     {
    //         id: 3,
    //         title: "Dark Waters",
    //         genre: "Horror",
    //         rating: 7.3,
    //         image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQjtv0X0z9POJgMy-nXd9MRKsm4elcBQhoFumGYxyYpug75oxLN48ExBv4UbNEoKyOK2Kad"
    //     },
    // ]

    const [movies, setMovies] = useState([]);
    const randomIndex = Math.round(Math.random() * movies.length);

    const [movieIndex, setMovieIndex] = useState(randomIndex);


    useEffect(() => {
        setMovieIndex(randomIndex);
    }, [movies]);

    console.log(movies);

    useEffect(() => {
        const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
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
