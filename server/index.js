import express from 'express';
import {PORT} from './config.js';
import cors from 'cors';

import indexRoutes from './routes/index.routes.js';
import tasksRoutes from './routes/tasks.routes.js';

const app = express();
app.use(cors());  
app.use(express.json());
app.use(indexRoutes);
app.use(tasksRoutes);
  

app.listen(PORT);
console.log('Server running on http://localhost:' + PORT);
