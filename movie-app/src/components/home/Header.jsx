import React from 'react';

const Header = ({navLinks, handleTabSelection, tabs}) => {

    return (
        <header>
            <nav className="col-sm-12 d-flex justify-content-between align-items-center text-white">
                <h1 className="display-6 col-sm-5 fs-4 mb-0 gradient-text ">Movie App</h1>
                <ul className="d-flex align-items-center justify-content-between list-unstyled col-sm-7 mb-0 text-white">
                    { navLinks.map((link, key) => (
                        <li key={key}>
                            <a onClick={()=>handleTabSelection(link)} className={link !== tabs ? "text-decoration-none fw-normal text-white display-6 font-85 gradient-text" : "text-decoration-none fw-normal text-white display-6  font-85 border-bottom pb-1" } href="#">{link}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;