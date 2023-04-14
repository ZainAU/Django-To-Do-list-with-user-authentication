import React, { useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { Link } from 'react-router-dom';

function TaskForm(props) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  const [complete, setComplete] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDeadlineChange = (value) => {
    setDeadline(value.toDate());
  };

  const handleCompleteChange = (event) => {
    setComplete(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      title: title,
      category: category,
      description: description,
      deadline: deadline,
      complete: complete
    };
    props.onCreate(newTask);
    setTitle('');
    setDescription('');
    setDeadline('');
    setComplete(false);
  };

  return (
    <div>
        <div class="header-bar">
            <Link to="/dashboard">Back</Link>
        </div>
        <h2>Create/Edit Task</h2>
        <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <br />
        <label>
          Category:
          <select value={category} onChange={handleCategoryChange}>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
          </select>
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={handleDescriptionChange} />
        </label>
        <br />
        <label>
          Deadline:
          <Datetime value={deadline} onChange={handleDeadlineChange} />
        </label>
        <br />
        <label>
          Complete:
          <input type="checkbox" checked={complete} onChange={handleCompleteChange} />
        </label>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default TaskForm;
