import { useState } from 'react';
import {nanoid} from 'nanoid';

const Todo = ({ name }) => (<li>{name}</li>);

const App = () => {
  const [name, setName] = useState('');

  const [tasks, setTasks] = useState([]);

  const taskList = tasks.map(task => <Todo name={task.name} key={task.id} />)

  const handleChange = (e) => {
      setName(e.target.value);
  }
  const handleSubmit = (e) => {
      e.preventDefault();
      addTask(name);
      setName("");
  }
  const addTask = (name)=> {
    const newTask = { id: "todo-" + nanoid(), name: name };
    setTasks([...tasks, newTask]);
  }

  return (
    <>
      <h1>Todo list</h1>
      <ul>
        {taskList}
      </ul>
      <form onSubmit={handleSubmit}>
          <h2>What needs to be done?</h2>
          <input
              type="text"
              name="text"
              autoComplete="off"
              value={name}
              onChange={handleChange}
          />
          <button type="submit">
              Add
          </button>
      </form>
    </>
  );
}
export default App;
