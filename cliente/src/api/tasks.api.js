import axios from "axios";

export const getTasksRequest = async () => {
    try {
        const response = await axios.get("http://localhost:3000/tasks");
        return response.data;
    } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error;
    }
}

export const deleteTaskRequest = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3000/tasks/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting task:", error);
        throw error;
    }
}

export const createTaskRequest = async (task) => {
    try {
        const response = await axios.post("http://localhost:3000/tasks", task);
        return response.data;
    } catch (error) {
        console.error("Error creating task:", error);
        throw error;
    }
}