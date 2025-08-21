import Home from "./components/Home.jsx";

function App() {


    const navLinks = ["Home", "Movies", "TV Shows", "Trending"];
  return (
    <>
        <Home navLinks={navLinks} />
    </>
  )
}

export default App
