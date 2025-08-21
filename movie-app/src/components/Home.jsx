import React from 'react';
import Header from "./Header.jsx";

const Home = ({navLinks}) => {
    return (
        <div className="container-fluid home d-flex main-img p-0">
            <div className="col-sm-6 main-bg flex-grow-1 p-5">
                <Header navLinks={navLinks} />
            </div>
            <div className="col-sm-6 ">

            </div>
        </div>
    );
};

export default Home;