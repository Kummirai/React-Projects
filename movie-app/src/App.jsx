import Home from "./components/Home.jsx";

function App() {


    const navLinks = ["Home", "Movies", "TV Shows", "Trending"];
    const movies = [
        {
            id: 1,
            title: "Dark Waters",
            genre: "Drama",
            rating: 7
        },
        {
            id: 2,
            title: "Universal Soldier",
            genre: "War",
            rating: 8
        },
        {
            id: 3,
            title: "Jeepers Creepers 2",
            genre: "Horror",
            rating: 7.3
        },
    ]
  return (
    <>
        <Home navLinks={navLinks} movies={movies} />
    </>
  )
}

export default App
