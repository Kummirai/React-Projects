import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoItem({todo}) {
    return (
        <>
            <div className={"d-flex align-items-center justify-content-between"}>
                <div className={"d-flex align-items-center justify-content-between"}>
                    <input type="checkbox" />
                    <p className={"mb-0 px-2"}>{todo}</p>
                </div>
                <button className={"btn btn-danger"}><DeleteIcon fontSize={"small"} /> </button>
            </div>
            <hr/>
        </>
    );
}

export default TodoItem;