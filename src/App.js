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

  return (
    <>
      <h1>Todo list</h1>
      <ul>
        {taskList}
      </ul>
      <Form propName={addTask}/>
    </>
  );
}
export default App;
