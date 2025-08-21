import Home from "./components/Home.jsx";

function App() {


    const navLinks = ["Home", "Movies", "TV Shows", "Trending"];
    const movies = [
        {
            id: 1,
            title: "Jeepers Creepers 2",
            genre: "Drama",
            rating: 7,
            image: "https://m.media-amazon.com/images/M/MV5BMTIxNDI2NzQyNF5BMl5BanBnXkFtZTYwMTY5MTQ3._V1_FMjpg_UX1000_.jpg"
        },
        {
            id: 2,
            title: "Universal Soldier",
            genre: "War",
            rating: 8,
            image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRLIbZgJx8YG-zEXvWq4iJYKEfCyp8_Eo3dAHbHUETcXOGupnl2qwB_hKPmf1EPVrbfB1zuuA"
        },
        {
            id: 3,
            title: "Dark Waters",
            genre: "Horror",
            rating: 7.3,
            image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQjtv0X0z9POJgMy-nXd9MRKsm4elcBQhoFumGYxyYpug75oxLN48ExBv4UbNEoKyOK2Kad"
        },
    ]
  return (
    <>
        <Home navLinks={navLinks} movies={movies} />
    </>
  )
}

export default App
