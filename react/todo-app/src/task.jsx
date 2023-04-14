import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {IconButton, Button} from '@mui/material/';

export default function Task({index, task, handleTaskDone, onEditTask, onTaskDelete} ) {
    return (
        <div key={index}>
        <h3>{task.title}</h3>
        <p>{task.description ? (task.description) : "no description"}</p>
        <p>Category: {task.category}</p>
        <div>Due Date: {task.deadline ? (task.deadline.toString()) : "no deadline"}</div>
        <p>Completed: {task.completed.toString()}</p>
        <CardActions>
          { !task.completed && 
            <Button 
              mode="elevated"
              icon={"undo"}
              onClick={() => handleTaskDone(index)}>
                { "Mark as done"}
            </Button>
          }
          <IconButton mode="contained" icon="pen" onClick={() => onEditTask(index)}>
            <EditIcon/>
          </IconButton>
          <IconButton mode="contained" icon="delete" onClick={() => onTaskDelete(index)}>
            <DeleteIcon/>
          </IconButton>
        </CardActions>
        
      </div>
    );
}