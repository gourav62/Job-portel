import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/navbar'
import Login from "./components/auth/Login.jsx"
import Signup from "./components/auth/Signup.jsx"
import Home from './components/Home.jsx'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/profile'
import JobDescription from './components/JobDescription'
import Companies from './components/admin/companies'
import CompanyCreate from './components/admin/CompanyCreate'
import CompanySetup from './components/admin/companySetup'
import AdminJobs from './components/admin/AdminJobs'
import PostJob from './components/admin/PostJob'
import Applicants from './components/admin/Applicants'
import ProtectedRoute from './components/admin/ProtectedRoute'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/jobs',
    element: <Jobs />
  },
  {
    path: '/description/:id',
    element: <JobDescription />
  },
  {
    path: '/browse',
    element: <Browse />
  },
  {
    path: '/profile',
    element: <Profile />
  },

  //admin 
  {
    path: "/admin/companies",
    element: <Companies />
  },
  {
    path: "/admin/companies/create",
    element: <CompanyCreate />
  },
  {
    path: "/admin/companies/:id",
    element: < CompanySetup />
  },
  {
    path: "/admin/jobs",
    element: < AdminJobs />
  },
  {
    path: "/admin/jobs/create",
    element: < PostJob />
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: < Applicants />
  },

])

function App() {

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
