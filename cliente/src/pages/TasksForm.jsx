import React from "react";
import { useFormik } from "formik";
import { createTaskRequest , updateTaskRequest} from '../api/tasks.api.js';
import '../css/TasksForm.css'; // Importamos los estilos
import { useParams } from "react-router";

function TasksForm() {
  const id = useParams().id; // Obtenemos el id de la URL
  //console.log(id); // Imprimimos el id en la consola para verificar que se está obteniendo correctamente
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    onSubmit: async (values, actions) => {
      //console.log(values + " " + id); // Imprimimos los valores del formulario y el id en la consola para verificar que se están obteniendo correctamente
      try {
        
        if (id) {
          await updateTaskRequest(id, {...values, done: 0});
        }
        else {
          await createTaskRequest({...values, done: 0});
        }
        actions.resetForm();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  });

  return (
    <div className="form-container">
      <form onSubmit={formik.handleSubmit} className="task-form">
        <label htmlFor="title" className="form-label">Title</label>
        <input 
          type="text" 
          id="title"
          name="title" 
          placeholder="Write a title" 
          onChange={formik.handleChange} 
          value={formik.values.title}
          className="form-input"
        />
        
        <label htmlFor="description" className="form-label">Description</label>
        <textarea 
          id="description"
          name="description" 
          rows="3" 
          placeholder="Write a description" 
          onChange={formik.handleChange} 
          value={formik.values.description}
          className="form-textarea"
        />
        
        <button 
          type="submit" 
          disabled={formik.isSubmitting}
          className="submit-button"
        >
          {formik.isSubmitting ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
}

 export default TasksForm;