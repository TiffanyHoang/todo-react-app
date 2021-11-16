import { useState } from 'react';
import {nanoid} from 'nanoid';
import { Form, FormRemove } from './components/Form';

const Todo = ({ name, priority, id }) => (<li>P: {priority}
- N:{name} - Id: {id} </li>);

const App = () => {
  const [tasks, setTasks] = useState([]);

  const taskList = tasks.map(task => <Todo name={task.name} priority={task.priority} id={task.id} key={task.id} />)

  const addTask = (name, priority)=> {
    const newTask = { id: "todo-" + nanoid(), name: name, priority: priority };
    setTasks([...tasks, newTask]);
  }

  const removeTask = (id)=> {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks([...newTasks]);
  }

  const sort = () => {
    const newTasks = tasks.sort((a,b)=> a.priority - b.priority);
    setTasks([...newTasks]);
  }
  return (
    <>
      <h1>Todo list</h1>
      <button onClick={sort}>Sort</button>
      <ul>
        {taskList}
      </ul>
      <h2>What needs to be done?</h2>
      <Form onSubmit={addTask}/>
      <h2>What needs to be removed?</h2>
      <FormRemove onSubmit={removeTask}/>
    </>
  );
}
export default App;
