import { useState } from 'react';
import {nanoid} from 'nanoid';
import { Form } from './components/Form';

const Todo = ({ name }) => (<li>{name}</li>);

const App = () => {
  const [tasks, setTasks] = useState([]);

  const taskList = tasks.map(task => <Todo name={task.name} key={task.id} />)

  const addTask = (name)=> {
    const newTask = { id: "todo-" + nanoid(), name: name };
    setTasks([...tasks, newTask]);
  }

  const removeTask = (name)=> {
    const newTasks = tasks.filter(task => task.name !== name)
    setTasks([...newTasks]);
  }

  return (
    <>
      <h1>Todo list</h1>
      <ul>
        {taskList}
      </ul>
      <h2>What needs to be done?</h2>
      <Form onSubmit={addTask}/>
      <h2>What needs to be removed?</h2>
      <Form onSubmit={removeTask}/>
    </>
  );
}
export default App;
