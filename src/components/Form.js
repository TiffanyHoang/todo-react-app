import { useState } from 'react';

export const Form = ({propName}) => {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    }
  
    const handleSubmit = (e) => {
        e.preventDefault();
        propName(name);
        setName("");
    }
    
    return (
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
    )
}

