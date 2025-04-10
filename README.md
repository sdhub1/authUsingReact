# Authentication and Authorization in Front end using React and React-Router only.
### Install React using Vite , React Router using official Documents or refer to https://github.com/sdhub1/ReactNotes

  1. Create a Protected routes jsx file
  2. In this file take role as props which we will pass for routes made for specific role from main.jsx or where our routes are defined.
      src/ProtectedRoutes.jsx  //file created manually
    
     ```
      const ProtectedRoutes = ({role}) => {
        const {auth, authRole}=useStore()// or any context , here i am using 'zustand'
          
          if (auth && role.includes(authRole)) return   <Outlet/> // Outlet component comes from react-router
          if (auth && !role.includes(authRole)) return   <h1>Unauthorized</h1>
        return (
          <>
         
          <h1>Login with form</h1> 
          
          </>
        )
      }
      
      export default ProtectedRoutes
     ```
  4. we need to get auth,and role state as well from user, this can be coming from backend, which will be saved in some context
  5. which all routes you need to protect i.e need authenication or authorization: we will wrap that as route element as follows

     src/main.jsx
     ```
        <Route element={<ProtectedRoutes  role={['admin']}/>}>
          <Route path="admin" element={<AdminDash />}  />
          {/* other admin routes can come here */}
        </Route>
        <Route element={<ProtectedRoutes  role={['staff','admin']}/>}>
          <Route path="staff" element={<StaffDash />}  />
          {/* other staff routes can come here */}
        </Route>
     ```
    
