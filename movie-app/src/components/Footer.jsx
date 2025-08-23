import React from 'react';

function Footer({navLinks, handleTabSelection, socials}) {
    return (
        <footer className="container-fluid d-flex align-items-start justify-content-between flex-column p-5 pb-1 d-flex flex-column bg-black">
            <div className="container row">
                <div className="col-sm-2 text-white">
                    <h2 className="gradient-text">Movie App</h2>
                </div>
                <nav className="col-sm-8 mx-auto">
                    <ul className="d-flex align-items-center justify-content-center list-unstyled mb-0 text-white-50">
                        { navLinks.map((link, key) => (
                            <li key={key}>
                                <a onClick={()=>handleTabSelection(link)} className="text-decoration-none mx-3 text-start fw-normal text-white display-6 font-85" href="#">{link}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <nav className="col-sm-2 d-flex align-items-start justify-content-evenly ">
                    {socials.map((social, index) => (
                        <a className="text-decoration-none text-white-50" href="#"><i className={social} key={index}></i></a>
                    ))}
                </nav>
            </div>
            <div className="container d-flex align-items-center justify-content-between">
                <div className="col-sm-4 text-secondary d-flex align-items-center justify-content-between text-center p-2 ">
                    <p className="mb-0 ">movieap@movies.com</p>
                    <p className="mb-0 ">+44 235 454 369</p>
                </div>
                <div className=" text-secondary">
                    <p>Movie app &copy; 2025</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;