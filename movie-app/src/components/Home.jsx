import React from 'react';
import Header from "./Header.jsx";

const Home = ({navLinks}) => {
    return (
        <div className="container-fluid p-5">
            <Header navLinks={navLinks} />
        </div>
    );
};

export default Home;