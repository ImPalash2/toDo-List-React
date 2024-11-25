import "./App.css";
import { useState } from "react";
function App() {
  const [item, setItem] = useState("");
  const [todos, setTodos] = useState([]);
  const handleSubmit = (event) => {
    if (item) {
      if (todos.includes(item)) {
        alert("Item is already in the list!");
      } else {
        const newTodoList = [...todos, item];
        setTodos(newTodoList);
      }
    } else {
      alert("write something to add!!");
    }
    setItem("");
    event.preventDefault();
  };
  const handleChange = (event) => {
    let item = event.target.value;
    setItem(item);
  };
  const handleDelete = (i) => {
    let newTodoList = todos.filter((item, index) => index !== i);
    setTodos(newTodoList);
  };
  return (
    <>
      <div className="container">
        <h1>ToDo List</h1>
        <main>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="item"
              value={item}
              onChange={handleChange}
            />
            <button type="submit">Add</button>
          </form>
          <div className="content">
            <ul>
              {todos
                ? todos.map((todoItem, i) => {
                    return (
                      <li key={i}>
                        <span className="number">{i + 1}.</span> {todoItem}
                        <span className="cross" onClick={() => handleDelete(i)}>
                          &times;
                        </span>
                      </li>
                    );
                  })
                : ""}
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
