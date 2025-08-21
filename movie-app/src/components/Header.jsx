import React from 'react';

const Header = ({navLinks}) => {



    return (
        <>
            <nav>
                <ul>
                    { navLinks.map((link, key) => (
                        <li key={key}>
                            <a href="#">{link}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Header;