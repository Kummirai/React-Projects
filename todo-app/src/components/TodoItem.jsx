import React, {useContext} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import TodoContext from "../context/Context.jsx";

function TodoItem({todo, index}) {

    const {handleCheckBox, isDone, handleDelete} = useContext(TodoContext);

    return (
        <>
            <div className={"d-flex align-items-center justify-content-between"}>
                <div className={"d-flex align-items-center justify-content-between"}>
                    <input type="checkbox" onClick={()=>handleCheckBox(index)}/>
                    <p className={isDone ? "text-decoration-line-through mb-0 px-2" : "mb-0 px-2"}>{todo}</p>
                </div>
                <button className={"btn btn-danger"}><DeleteIcon onClick={()=>handleDelete(index)} fontSize={"small"} /> </button>
            </div>
            <hr/>
        </>
    );
}

export default TodoItem;