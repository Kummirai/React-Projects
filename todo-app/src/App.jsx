import Header from "./components/Header.jsx";
import InputField from "./components/InputField.jsx";
import TodoList from "./components/TodoList.jsx";
import {useState} from "react";
import TodoContext from "./context/Context.jsx";

function App() {

    const [todos, setTodos] = useState([
        "Clean the house",
        "Read a Book",
        "Complete React todo project"
    ]);

    const [task, setTask] = useState("");

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(task) {
            setTodos((prevTodos)=>{
                return [...prevTodos, task]
            })
            setTask("")
        }
    }

    const contextValues ={
        todos,
        handleChange,
        task,
        handleSubmit,
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
