import React from 'react';
import Header from "../home/Header.jsx";

function Movies({navLinks, handleTabSelection, tabs }) {
    return (
        <div className="main-bg home-bg position-absolute col-sm-12 z-2">
            <div className="col-sm-7 flex-grow-1 p-5 pb-2 z-2">
                <Header
                    navLinks={navLinks}
                    handleTabSelection={handleTabSelection}
                    tabs={tabs}
                />
            </div>
            <div>

            </div>

        </div>
    );
}

export default Movies;