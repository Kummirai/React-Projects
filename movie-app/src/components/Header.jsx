import React from 'react';

const Header = ({navLinks, handleTabSelection}) => {

    return (
        <>
            <nav className="col-sm-12 d-flex justify-content-between align-items-center text-white">
                <h1 className="display-6 col-sm-5 fs-4 mb-0 ">Movie App</h1>
                <ul className="d-flex align-items-center justify-content-between list-unstyled col-sm-7 mb-0 text-white">
                    { navLinks.map((link, key) => (
                        <li key={key}>
                            <a onClick={()=>handleTabSelection(link)} className="text-decoration-none fw-normal text-white display-6 font-85" href="#">{link}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Header;