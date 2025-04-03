import React from "react";
import { useFormik } from "formik";
import { createTaskRequest } from '../api/tasks.api.js';
import '../css/TasksForm.css'; // Importamos los estilos

function TasksForm() {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    onSubmit: async (values, actions) => {
      console.log(values);
      try {
        const respuesta = await createTaskRequest({...values, done: 1});
        console.log(respuesta);
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