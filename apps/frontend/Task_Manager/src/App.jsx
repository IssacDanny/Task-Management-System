import React from 'react'
import { useState } from 'react';
import Dashboard from "./pages/Administration/Dashboard"
import Login from "./pages/Authentication/Login"
import SignUp from "./pages/Authentication/SignUp"
import ManageTasks from "./pages/Administration/ManageTasks"
import CreateTask from "./pages/Administration/CreatTask"
import ManageUsers from "./pages/Administration/ManageUsers"
import UserDashboard from "./pages/User/UserDashboard"
import Mytasks from "./pages/User/MyTasks"
import ViewTaskDetails from "./pages/User/ViewTaskDetails"
import PrivateRoute from './routes/PrivateRoute'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />

          {/*Administration Routes*/}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/tasks" element={<ManageTasks />} />
            <Route path="/admin/create_task" element={<CreateTask />} />
            <Route path="/admin/users" element={<ManageUsers />} />
          </Route>

          {/*User Routes*/}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/tasks" element={<Mytasks />} />
            <Route path="/user/task_details/:id" element={<ViewTaskDetails />} />
          </Route>

        </Routes>
      </Router>
    </div>
  )
}

export default App
