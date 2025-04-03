import {useEffect, useState} from "react";
import {getTasksRequest} from "../api/tasks.api.js";

function Tasks() {
    const [tasks, setTasks] = useState([]);
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

    },[]);

  return (
    <div>
      <h1>Tasks</h1>
      <p>This is the tasks page.</p>
    </div>
  );
}

export default Tasks;