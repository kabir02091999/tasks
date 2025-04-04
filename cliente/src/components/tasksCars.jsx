import react from "react";
import '../css/TasksCars.css'; // Importamos los estilos
import { useNavigate } from "react-router"; // Importamos el hook useNavigate para la navegación

import {deleteTaskRequest, updateTaskDoneRequest} from '../api/tasks.api.js';

function TasksCars({ task , setLoading , loading }) {
  const navigate = useNavigate(); // Inicializamos el hook useNavigate
    const handleClick = async (id) => {
      //setLoading(!loading);  
      /* handleDelete(task.id); */
      try {
         await updateTaskDoneRequest(id, {...task, done: !task.done});
         console.log("Task updated successfully");
      } catch (error) {
         console.error("Error updating task:", error);
      }
      setLoading(!loading); 
    }  
   const handleDelete = async (id) => {
    
    try {
         await deleteTaskRequest(id);
         console.log("Task deleted successfully");
         
      } catch (error) {
         console.error("Error deleting task:", error);
      }
      //console.log(loading)
      setLoading(!loading); 
   } 

   const handleEdit = (id) => {
    setLoading(!loading);
    navigate(`/edit/${id}`)
   }

  return (
    <div className="tasks-cars-container">
      <div className="cars-content">
        <h2 className="cars-title">{task.title}</h2>
        <p className="cars-description">{task.description}</p>
        <span className={`cars-status ${task.done ? 'done' : 'pending'}`}>
          {task.done ? "Yes" : "No"}
        </span>
      </div>
      <div className="cars-actions">
        <button className="cars-button delete-btn" onClick={() => handleDelete(task.id)} >Delete</button>
        <button className="cars-button edit-btn" onClick={()=>handleEdit(task.id)}>Edit</button>
        <button className="cars-button done-btn" onClick={() => handleClick(task.id)}>Done</button>
      </div>
    </div>
  );
}

export default TasksCars;