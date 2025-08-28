import React, {useContext} from 'react';
import Button from "./Button.jsx";
import {MoviesContext} from "../context/Context.jsx";

function Tabs() {

    const {watchListTabs} = useContext(MoviesContext)

    return (
        <div className="w-50 d-flex align-items-center justify-content-between">
            {watchListTabs.map((tab, index) => (
                <Button key={index} tab={tab}/>
            ))}

        </div>
    );
}

export default Tabs;