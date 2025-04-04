import React from 'react';
import { Route, Routes } from 'react-router';

// Importing the components for the routes
import Tasks from './pages/tasks.jsx';
import TasksForm from './pages/TasksForm.jsx';
import NotFound from './pages/NotFound.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/new" element={<TasksForm/>} />
        <Route path="/edit/:id" element={<TasksForm/>} />       
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App;