import react from "react";
import '../css/TasksCars.css'; // Importamos los estilos
import { useNavigate } from "react-router"; // Importamos el hook useNavigate para la navegación

import {deleteTaskRequest} from '../api/tasks.api.js';

function TasksCars({ task , setLoading , loading }) {
  const navigate = useNavigate(); // Inicializamos el hook useNavigate
  
   const handleDelete = async (id) => {
    setLoading(!loading);
    try {
         await deleteTaskRequest(id);
         console.log("Task deleted successfully");
         
      } catch (error) {
         console.error("Error deleting task:", error);
      }
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
        <button className="cars-button edit-btn" onClick={()=>navigate(`/edit/${task.id}`)}>Edit</button>
      </div>
    </div>
  );
}

export default TasksCars;