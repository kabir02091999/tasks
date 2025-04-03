import {useEffect, useState} from "react";
import {getTasksRequest} from "../api/tasks.api.js";
import TasksCars from "../components/tasksCars.jsx";

function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        
        async function fetchTasks() {
            try {       
                const tasks = await getTasksRequest();
                setTasks(tasks);
                
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        }
        fetchTasks();
    },[loading]);

  return (
    <div>
        <h1>Tasks</h1>
            {tasks.map(task => (
                <TasksCars task={task} key={task.id} setLoading={setLoading} loading={loading} /> // Pass the task as a prop to TasksCars                  
            ))}
    </div>
  );
}

export default Tasks;