import {useContext} from "react";
import {MoviesContext} from "../context/Context.jsx";


function Button({tab}) {

    const {handleTabSelection} = useContext(MoviesContext)

    return (
        <button
            className={"btn btn-outline-light btn-sm"}
            onClick={() => handleTabSelection(tab)}>
            {tab}
        </button>
    );
}

export default Button;