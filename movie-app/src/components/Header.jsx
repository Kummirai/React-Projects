import React from 'react';

const Header = ({navLinks}) => {



    return (
        <>
            <nav className="col-sm-6 d-flex justify-content-between align-items-center">
                <h1 className="display-6 col-sm-6 fs-4 mb-0">Movie App</h1>
                <ul className="d-flex align-items-center justify-content-between list-unstyled col-sm-6 mb-0">
                    { navLinks.map((link, key) => (
                        <li key={key}>
                            <a className="text-decoration-none d-block" href="#">{link}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Header;