import {Link} from 'react-router-dom'

const Header = () => {

    // const {navLinks, handleTabSelection, tabs} = useContext(MoviesContext);
    return (
        <header className="p-5">
            <nav className="col-sm-6 d-flex justify-content-between align-items-center text-white">
                <h1 className="display-6 col-sm-5 fs-4 mb-0 gradient-text ">Movie App</h1>
                <div className="d-flex align-items-center justify-content-between col-sm-7 mb-0 text-white">
                    <Link className="text-decoration-none text-white fs-85" to="/">Home</Link>
                    <Link className="text-decoration-none text-white fs-85" to="/movies">Movies</Link>
                    <Link className="text-decoration-none text-white fs-85" to="/tvshows">TV Shows</Link>
                    <Link className="text-decoration-none text-white fs-85" to="/watchlist">Watch List</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;