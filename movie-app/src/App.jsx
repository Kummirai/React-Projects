import Home from "./components/Home.jsx";

function App() {


    const navLinks = ["Home", "Movies", "TV Shows", "Trending"];
  return (
    <>
        <h1>Milton Movie App</h1>
        <Home navLinks={navLinks} />
    </>
  )
}

export default App
