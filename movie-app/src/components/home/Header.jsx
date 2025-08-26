import {Link} from 'react-router-dom'

const Header = () => {

    // const {navLinks, handleTabSelection, tabs} = useContext(MoviesContext);
    return (
        <header>
            <nav className="col-sm-8 d-flex justify-content-between align-items-center text-white">
                <h1 className="display-6 col-sm-5 fs-4 mb-0 gradient-text ">Movie App</h1>
                <ul className="d-flex align-items-center justify-content-between list-unstyled col-sm-7 mb-0 text-white">
                    <Link className="text-decoration-none text-white" to="/">Home</Link>
                    <Link className="text-decoration-none text-white" to="/movies">Movies</Link>
                    <Link className="text-decoration-none text-white" to="/tvshows">TV Shows</Link>
                    <Link className="text-decoration-none text-white" to="/watchlist/">Watch List</Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;