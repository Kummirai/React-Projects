import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoItem() {
    return (
        <>
            <div className={"d-flex align-items-center justify-content-between"}>
                <div className={"d-flex align-items-center justify-content-between"}>
                    <input type="checkbox" />
                    <p className={"mb-0 px-2"}>Clean the house</p>
                </div>
                <button className={"btn btn-danger"}><DeleteIcon fontSize={"small"} /> </button>
            </div>
            <hr/>
        </>
    );
}

export default TodoItem;