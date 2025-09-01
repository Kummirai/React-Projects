import Header from "./components/Header.jsx";
import InputField from "./components/InputField.jsx";
import TodoList from "./components/TodoList.jsx";
import {useState} from "react";
import TodoContext from "./context/Context.jsx";

function App() {

    const [todos, setTodos] = useState([]);

    const [task, setTask] = useState("");

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(task) {
            setTodos((prevTodos)=>{
                return [...prevTodos, {task: task, isDone: false}]
            })
            setTask("")
        }
    }

    const handleCheckBox = (id) => {
        const selectedTodo = todos.filter(todo => todos.indexOf(todo) === id)
        if(selectedTodo[0]['isDone'] === false) {
            todos[id] = {...selectedTodo[0], isDone: true};
            const updatedTodos = [...todos];
            setTodos(updatedTodos);
        } else {
            todos[id] = {...selectedTodo[0], isDone: false};
            const updatedTodos = [...todos];
            setTodos(updatedTodos);
        }

    }

  const handleDelete = (index) => {
        const upDatedTodos = [...todos];
        upDatedTodos.splice(index, 1);
        setTodos(upDatedTodos);
  }

    const contextValues ={
        todos,
        handleChange,
        task,
        handleSubmit,
        handleCheckBox,
        handleDelete
    }

  return (
    <div className={"container-fluid gx-0 d-flex flex-column align-items-center "}>
        <TodoContext.Provider value={contextValues}>
            <Header />
            <InputField />
            <TodoList />
        </TodoContext.Provider>
    </div>
  )
}

export default App
