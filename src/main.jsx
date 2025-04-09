import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import AdminDash from './pages/AdminDash.jsx'
import StaffDash from './pages/StaffDash.jsx'
import StudentDash from './pages/StudentDash.jsx'
import Layout1 from './layouts/Layout1.jsx'
import StudentMarks from './pages/StudentMarks.jsx'
import Layout2 from './layouts/Layout2.jsx'
import StudentProfile from './pages/StudentProfile.jsx'
import ProtectedRoutes from './ProtectedRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route element={<ProtectedRoutes  role={['admin']}/>}>
          <Route path="admin" element={<AdminDash />}  />
          {/* other admin routes can come here */}
        </Route>
        <Route element={<ProtectedRoutes  role={['staff','admin']}/>}>
          <Route path="staff" element={<StaffDash />}  />
          {/* other staff routes can come here */}
        </Route>
        
        <Route path="students" element={<Layout2 />}>
          <Route index element={<StudentDash />} />
          <Route path='profile/:studentID' element={<StudentProfile />} />
          <Route path='marks' element={<StudentMarks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
