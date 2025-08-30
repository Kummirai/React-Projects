import React from 'react';
import TodoItem from "./TodoItem.jsx";

function TodoList() {
    return (
        <div className={"input-field rounded-3 mt-4 p-3"}>
            <h2>Todo List</h2>
            <hr/>
            <div>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    );
}

export default TodoList;