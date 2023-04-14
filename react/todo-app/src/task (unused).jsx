import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {IconButton, Button} from '@mui/material/';

export default function Task({task, handleStatus, handleDelete, handleEdit} ) {
    return (
    <Card>
        <CardContent>
            1. Sample Title
            {/* task */}
        </CardContent>
        <CardActions>
            <Button 
            mode="elevated"
            icon={"undo"}  >
                { "Mark as done"}
            </Button> 
            <IconButton mode="contained" icon="pen" ><EditIcon/></IconButton>
            <IconButton mode="contained" icon="delete"><DeleteIcon/></IconButton>
        </CardActions>
    </Card>
    );
}