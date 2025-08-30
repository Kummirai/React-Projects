import React, {useContext} from 'react';
import TodoItem from "./TodoItem.jsx";
import TodoContext from "../context/Context.jsx";

function TodoList() {
    const {todos} = useContext(TodoContext);

    return (
        <div className={"input-field rounded-3 mt-4 p-3"}>
            <h2>Todo List</h2>
            <hr/>
            {todos.length === 0 ?
                <div>
                    <p>You dont have any tasks todo!</p>
                </div>
                :
                <div>
                {todos.map((todo, index) => (
                    <TodoItem todo={todo} key={index} />
                ))}
            </div> }
        </div>
    );
}

export default TodoList;