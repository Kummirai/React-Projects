import React, {useContext} from 'react';
import {Fab, Icon, Input} from '@mui/material';
import TodoContext from "../context/Context.jsx";

function AddIcon() {
    return null;
}

function InputField() {

    const {handleChange, task, handleSubmit} = useContext( TodoContext);

    return (
        <div className="d-flex input-field justify-content-center mt-5 p-5 rounded-3">
            <form onSubmit={handleSubmit} className={"d-flex align-items-center justify-content-between"} style={{ width: "640px" }}>
                <input
                    type="text"
                    className={"form-control"}
                    style={{ width: "480px" }}
                    placeholder={"What do you want to add?"}
                    value={task}
                    onChange={(e) => {handleChange(e)}}
                />
                <button className={"btn btn-primary"} >Add Task</button>
            </form>
        </div>

    );
}

export default InputField;