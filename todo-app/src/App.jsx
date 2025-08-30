import Header from "./components/Header.jsx";
import InputField from "./components/InputField.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {

  return (
    <div className={"container-fluid gx-0 d-flex flex-column align-items-center "}>
        <Header />
        <InputField />
        <TodoList />
    </div>
  )
}

export default App
