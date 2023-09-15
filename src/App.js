import { useState } from "react";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setToDoList([...toDoList, newTask]);
  };

  const delteTask = (task) => {
    const newArr = toDoList.filter((value) => (value !== task ? true : false));
    setToDoList(newArr);
  };

  return (
    <div className="App">
      <div className="addtask">
        <input onChange={handleChange}></input>
        <button onClick={addTask}>ADD TASK</button>
      </div>
      <div className="list">
        {toDoList.map((task) => {
          return (
            <div>
              <h1>{task}</h1>
              <button onClick={() => delteTask(task)}>DELETE</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
