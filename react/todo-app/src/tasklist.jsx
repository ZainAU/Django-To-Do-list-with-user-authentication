import React, {useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {IconButton, Button} from '@mui/material/';
import Task from './task';


function TaskList(props) {
  const { tasks } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showCompleted, setShowCompleted] = useState('');
  const [sortByDeadline, setSortByDeadline] = useState(false);

  const handleTaskDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    props.onTaskUpdate(updatedTasks);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortByDeadlineChange = (event) => {
    setSortByDeadline(event.target.checked);
  };

  const filteredTasks = props.tasks.filter((task) => {
    return (
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "" || task.category === selectedCategory) &&
        (showCompleted === "" || task.completed.toString() === showCompleted))
    });

  const sortedTasks = tasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

  const categories = [...new Set(tasks.map((task) => task.category))];

  const completeness = [...new Set(tasks.map((task) => task.completed.toString()))];

  const taskItems = filteredTasks.map((task, index) => (
    // <Task index={index} taskDetails={task} handleTaskDone={handleTaskDone} onEditTask={props.onEditTask} onTaskDelete={props.onTaskDelete}/>
    <div key={index}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Category: {task.category}</p>
      <div>Due Date: {task.deadline.toString()}</div>
      <p>Completed: {task.completed.toString()}</p>
      <CardActions>
        { !task.completed && 
          <Button 
            mode="elevated"
            icon={"undo"}
            onClick={() => handleTaskDone(index)}
          >
            { "Mark as done"}
          </Button>
        }
        <IconButton mode="contained" icon="pen" onClick={() => props.onEditTask(index)}>
          <EditIcon/>
        </IconButton>
        <IconButton mode="contained" icon="delete" onClick={() => props.onTaskDelete(index)}>
          <DeleteIcon/>
        </IconButton>
      </CardActions>
      
    </div>
  ));

  return (
    <div>
      <h2>Task List</h2>
      <p>You have {tasks.filter(task => !task.completed).length} incomplete tasks</p>

      <div>
        <label htmlFor="category">Filter by Category:</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <label htmlFor="completeness">Filter by Completeness:</label>
        <select id="completeness" value={showCompleted} onChange={(event) => setShowCompleted(event.target.value)}>
          <option value="">All</option>
          {completeness.map((completed) => (
            <option key={completed} value={completed}>
              {completed}
            </option>
          ))}
        </select>
      </div>
      <div className='search'>
      <input type='text' placeholder='Search tasks...' value={searchTerm} onChange={handleSearchChange} />
      </div>
      <Card>
        <CardContent>
      {taskItems.length > 0 ? (
        <div className='card-body'>
          {taskItems}
        </div>
      ) : (
        <div className='card-body'>
          No tasks found.
        </div>
      )}
      </CardContent>
    </Card>
    </div>
  );
}

export default TaskList;
