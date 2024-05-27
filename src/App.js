import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import CreateTask from './components/tasks/CreateTask';
import EditTask from './components/tasks/EditTask';
import EditTasksList from './components/tasks/EditTasksList';
import DeleteTask from './components/tasks/DeleteTask';
import ViewTasks from './components/tasks/ViewTasks';
import CreateCourse from './components/courses/CreateCourse';
import EditCourse from './components/courses/EditCourse';
import EditCoursesList from './components/courses/EditCoursesList';
import DeleteCourse from './components/courses/DeleteCourse';
import ViewCourses from './components/courses/ViewCourses';
import CreateEvaluation from './components/evaluations/CreateEvaluation';
import EditEvaluation from './components/evaluations/EditEvaluation';
import EditEvaluationsList from './components/evaluations/EditEvaluationsList';
import DeleteEvaluation from './components/evaluations/DeleteEvaluation';
import ViewEvaluations from './components/evaluations/ViewEvaluations';
import CreateSchool from './components/schools/CreateSchool';
import EditSchool from './components/schools/EditSchool';
import EditSchoolsList from './components/schools/EditSchoolsList';
import ViewSchools from './components/schools/ViewSchools';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/create-task"
        element={
          <PrivateRoute>
            <CreateTask />
          </PrivateRoute>
        }
      />
      <Route
        path="/edit-tasks"
        element={
          <PrivateRoute>
            <EditTasksList />
          </PrivateRoute>
        }
      />
      <Route
        path="/edit-task/:id"
        element={
          <PrivateRoute>
            <EditTask />
          </PrivateRoute>
        }
      />
      <Route
        path="/delete-task"
        element={
          <PrivateRoute>
            <DeleteTask />
          </PrivateRoute>
        }
      />
      <Route
        path="/view-tasks"
        element={
          <PrivateRoute>
            <ViewTasks />
          </PrivateRoute>
        }
      />
      <Route
        path="/create-course"
        element={
          <PrivateRoute>
            <CreateCourse />
          </PrivateRoute>
        }
      />
      <Route
        path="/edit-courses"
        element={
          <PrivateRoute>
            <EditCoursesList />
          </PrivateRoute>
        }
      />
      <Route
        path="/edit-course/:id"
        element={
          <PrivateRoute>
            <EditCourse />
          </PrivateRoute>
        }
      />
      <Route
        path="/delete-course"
        element={
          <PrivateRoute>
            <DeleteCourse />
          </PrivateRoute>
        }
      />
      <Route
        path="/view-courses"
        element={
          <PrivateRoute>
            <ViewCourses />
          </PrivateRoute>
        }
      />
      <Route
        path="/create-evaluation"
        element={
          <PrivateRoute>
            <CreateEvaluation />
          </PrivateRoute>
        }
      />
      <Route
        path="/edit-evaluations"
        element={
          <PrivateRoute>
            <EditEvaluationsList />
          </PrivateRoute>
        }
      />
      <Route
        path="/edit-evaluation/:id"
        element={
          <PrivateRoute>
            <EditEvaluation />
          </PrivateRoute>
        }
      />
      <Route
        path="/delete-evaluation"
        element={
          <PrivateRoute>
            <DeleteEvaluation />
          </PrivateRoute>
        }
      />
      <Route
        path="/view-evaluations"
        element={
          <PrivateRoute>
            <ViewEvaluations />
          </PrivateRoute>
        }
      />
      <Route
        path="/create-school"
        element={
          <PrivateRoute>
            <CreateSchool />
          </PrivateRoute>
        }
      />
      <Route
        path="/edit-schools"
        element={
          <PrivateRoute>
            <EditSchoolsList />
          </PrivateRoute>
        }
      />
      <Route
        path="/edit-school/:id"
        element={
          <PrivateRoute>
            <EditSchool />
          </PrivateRoute>
        }
      />
      <Route
        path="/view-schools"
        element={
          <PrivateRoute>
            <ViewSchools />
          </PrivateRoute>
        }
      />
    </Routes>
  </div>
);

export default App;