import { pool } from "../db.js";


export const getTasks = async (req, res) => {
    try {
        const tasks = await pool.query("SELECT * FROM tasks")
        console.log(tasks[0]);
        res.send(tasks[0]);
    }
    catch (error) {
        return res.status(500).json({ message: "Error en el servidor" });
    }
}
export const getTask = async (req, res) => {
    try {
        const {id} = req.params;
        //console.log(id);
        const task = await pool.query("SELECT * FROM tasks WHERE id = ?", [id]);
        console.log(task[0]);
        if (task[0].length == 0) return res.status(404).json({message: "no exixte el id"});
        res.send("Get Task " + req.params.id);
    }catch (error) {
        return res.status(500).json({ message: "Error en el servidor" });
    }
}
export const createTask = (req, res) => {
    try {
        /* console.log(req.body);
        //const {nombre, edad,ciudad} = req.body;
        const {title, description, done} = req.body;
        pool.query("INSERT INTO tasks (title, description, done) VALUES (?,?,?);", [title, description, done]);
        //pool.query("INSERT INTO tasks ( title , description , done , createAt) VALUES (?,?,?,?)", [title , description , done , createAt]);
        //pool.query("INSERT INTO nombre_de_la_tabla (nombre, edad, ciudad) VALUES (?,?,?)", [nombre, edad, ciudad]);
        res.send("Create Task " + req.body); */
        console.log(req.body);
        //const {nombre, edad,ciudad} = req.body;
        const {title, description, done} = req.body;
        pool.query("INSERT INTO tasks (title, description, done) VALUES (?,?,?);", [title, description, done]);
        //pool.query("INSERT INTO tasks ( title , description , done , createAt) VALUES (?,?,?,?)", [title , description , done , createAt]);
        //pool.query("INSERT INTO nombre_de_la_tabla (nombre, edad, ciudad) VALUES (?,?,?)", [nombre, edad, ciudad]);
        res.send("Create Task " + req.body);
    }catch (error) {
        return res.status(500).json({ message: "Error en el servidor" });
    }
}
export const updateTask = async (req, res) => {
    try{
        console.log(req.body);
        //const {nombre, edad,ciudad} = req.body;
        const {title, description, done} = req.body;
        const {id} = req.params;
        const respuesta = await pool.query("UPDATE tasks SET title = ?, description = ?, done = ? WHERE id = ?", [title, description, done, id]);
        if (respuesta[0].affectedRows == 0) return res.status(404).json({message: "no exixte el id"});
        res.send("Update Task " + req.params.id);
    }catch (error) {
        return res.status(500).json({ message: "Error en el servidor" });
    }
}
export const deleteTask = (req, res) => {
    try{
        res.send("Delete Task " + req.params.id);
        const {id} = req.params;
        pool.query("DELETE FROM tasks WHERE id = ?", [id]);
        if (respuesta[0].affectedRows == 0) return res.status(404).json({message: "no exixte el id"});
    }catch (error) {
        return res.status(500).json({ message: "Error en el servidor" });
    }
    //pool.query("DELETE FROM nombre_de_la_tabla WHERE id = ?", [id]);
}
