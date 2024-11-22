import './App.css'
import * as stylex from '@stylexjs/stylex'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AdminLayout from './components/AdminLayout'
import Home from './components/home/Home'
import UserRole from './components/user_role/UserRole'

const styles = stylex.create({
  base: {
    color: 'red'
  }
})

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/admin/home' replace />} />
          <Route path='/admin/*' element={<AdminLayout />}>
            <Route path='home' element={<Home />} />
            <Route path='user-roles' element={<UserRole />} /> 
            <Route path="user-management" element={<div>User Management Page</div>} />
            <Route path="customers" element={<div>Customers Page</div>} />
            <Route path="auto-response" element={<div>Auto Response Page</div>} />
            <Route path="subscriptions" element={<div>Subscriptions Page</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
