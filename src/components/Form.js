import { useState } from 'react';

export const Form = ({onSubmit}) => {
    const [name, setName] = useState('');
    const [priority, setPriority] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    }
    const handleChangePriority = (e) => {
        setPriority(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(name, priority);
        setName("");
        setPriority("");
    }
    
    return (
        <form onSubmit={handleSubmit} >
            <p>Task name</p>
            <input
              type="text"
              name="text"
              autoComplete="off"
              value={name}
              onChange={handleChange}
            />
            <p>Task priority</p>
             <input
              type="text"
              name="text"
              autoComplete="off"
              value={priority}
              onChange={handleChangePriority}
            />
            <button type="submit">
                Add
            </button>

        </form>
    )
}

export const FormRemove = ({onSubmit}) => {
    const [id, setId] = useState('');

    const handleChange = (e) => {
        setId(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(id);
        setId("");
    }
    
    return (
        <form onSubmit={handleSubmit} >
            <p>Task Id</p>
            <input
              type="text"
              name="text"
              autoComplete="off"
              value={id}
              onChange={handleChange}
            />
            <button type="submit">
                Remove
            </button>
        </form>
    )
}

