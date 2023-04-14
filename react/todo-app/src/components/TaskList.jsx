import { useState } from 'react';
// import Button from '@material-ui/core/Button';
import Task from './Task';

export default function TaskList({todos, handleStatus, handleDelete, handleEdit}) {
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
            
            <Task/>
            <Task/>
            <Task/>
    </div>    
    );
} 