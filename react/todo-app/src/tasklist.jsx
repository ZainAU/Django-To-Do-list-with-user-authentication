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

  const handleTaskDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    props.onTaskUpdate(updatedTasks);
  };

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    return (
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

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

      <input type='text' placeholder='Search tasks...' value={searchTerm} onChange={handleSearchChange} />
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
