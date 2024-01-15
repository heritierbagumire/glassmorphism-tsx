import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


interface Todo{
  title: string;
  description: string;
}

function App() {
  const [todos, setTodos] = useState([] as Todo[])
  const [title, setTitle] = useState('' as string)
  const [description, setDescription] = useState('' as string)


  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | any) => { 
    e.preventDefault();

    const todo = {
      title,
      description
    }

    setTodos([...todos, todo]);
    setTitle('');
    setDescription('');
    console.log(todos);
    
  }
  
// adding delete button
  const handleDelete = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <div className="App">
   <div className="todos-container">
    <form className="form"  onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={e => setTitle(e.target.value)} value={title} placeholder="Enter todo's title" name="title" required />
        </div>
        <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" onChange={e => setDescription(e.target.value) } value={description}  placeholder="Describe the todo" name="description" required />
        </div>
        <div className="form-group">
            <button type="submit" className="form-submit-btn">
                Add todo
            </button>
        </div>
        </form>
        {
    todos.length > 0 ? (
        <ul className="todos-list">
        {
          todos.map((todo, index) => (
            <li key={index} className="todo-item">
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
            </li>
          ))            
        }
      </ul>
    ) : (
        <p className="no-todos">No todos yet</p>
    )
}

</div>
    </div>
  );
}

export default App;
