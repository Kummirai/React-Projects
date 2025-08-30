import React from 'react';
import {Fab, Icon, Input} from '@mui/material';

function AddIcon() {
    return null;
}

function InputField() {
    return (
        <div className="d-flex input-field justify-content-center mt-5 p-5 rounded-3">
            <form className={"d-flex align-items-center justify-content-between"} style={{ width: "640px" }}>
                <input
                    type="text"
                    className={"form-control"}
                    style={{ width: "480px" }}
                    placeholder={"What do you want to add?"}
                />
                <button className={"btn btn-primary"} >Add Task</button>
            </form>
        </div>

    );
}

export default InputField;