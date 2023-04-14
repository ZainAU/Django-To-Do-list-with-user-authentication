import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {IconButton, Button} from '@mui/material/';
import Task from './Task';

export default function TaskList({tasks, handleStatus, handleDelete, handleEdit}) {
    return (<div>
        {/* {todos.map(todo => (
            <Card key={todo.id}>
            <CardContent>
                {todo.id}. {todo.title}
            </CardContent>
            <CardActions>
                <Button 
                mode="elevated"
                icon={todo.completed? "undo" : "check"} onPress={() => {handleStatus(todo.id,!todo.completed)}} >
                    {todo.completed ? "Undo" : "Mark as done"}
                </Button> 
                <IconButton mode="contained" icon="pen" onPress={()=>handleEdit(todo)}></IconButton>
                <IconButton mode="contained" icon="delete" onPress={() => {handleDelete(todo.id)}}></IconButton>
            </CardActions>
            </Card>))} */}
            
            {/* <Task/> */}
            
        {tasks.map(task=> (
            // <Task task={tasks} handleStatus={handleStatus} handleDelete={handleDelete} handleEdit={handleEdit}} />
        <Card>
            <CardContent>
                {task.id}. {task.title}
            </CardContent>
            <CardActions>
                <Button 
                mode="elevated"
                icon={task.completed? "undo" : "check"} onClick={()=>handleStatus(task.id, !task.completed)}  >
                    { task.completed ? "Undo" : "Mark as done"}
                </Button> 
                <IconButton mode="contained" onClick={handleEdit(task)}><EditIcon/></IconButton>
                <IconButton mode="contained" onClick={() => {handleDelete(task.id)}}><DeleteIcon/></IconButton>
            </CardActions>
        </Card>
        ))}
    </div>    
    );
} 