import { useState } from 'react';

export const Form = ({onSubmit}) => {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    }
  
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(name);
        setName("");
    }
    
    return (
        <form onSubmit={handleSubmit}>
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
    )
}

