import {Router} from 'express';
import {
    getTask,
    getTasks, 
    createTask, 
    updateTask, 
    deleteTask,
    updateTaskDone
} from '../controlles/tasks.controllers.js';

const router = Router();

router.get('/tasks', getTasks)
router.post('/tasks', createTask) 
router.put('/tasks/:id' , updateTask)
router.put('/tasks/done/:id' , updateTaskDone)
router.get('/tasks/:id' , getTask)
router.delete('/tasks/:id' , deleteTask)

export default router;