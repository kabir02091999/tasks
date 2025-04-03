import react from "react";
import '../css/TasksCars.css'; // Importamos los estilos

function TasksCars({ task }) {
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
        <button className="cars-button delete-btn">Delete</button>
        <button className="cars-button edit-btn">Edit</button>
      </div>
    </div>
  );
}

export default TasksCars;