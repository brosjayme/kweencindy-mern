import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthLayout from "./components/AuthLayout";
import DashboardLayout from "./components/DashboardLayout";
import GuestLayout from "./components/GuestLayout";
import MissingPage from "./components/MissingPage";
import Login from "./views/auth/Login";
import Signup from "./views/auth/Signup";
import Dashboard from "./views/Dashboard";
import Booking from "./views/booking/Booking";
import Category from "./views/category/Category";
import CreateCategory from "./views/category/CreateCategory";
import CreateBooking from "./views/booking/CreateBooking";
import Unauthorized from './views/auth/Unauthorized';
import RequireAuth from './components/RequireAuth';

function App() {

  return (
    <main className='App'>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          
        </Route>

        <Route element={<DashboardLayout/>}>
          <Route element={<RequireAuth allowedRoles={['default', 'admin']}/>}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/booking' element={<Booking />} />
            <Route path='/booking/create' element={<CreateBooking />} />
          </Route>
          
          <Route element={<RequireAuth allowedRoles={['admin']}/>}>
            <Route path='/category' element={<Category />} />
            <Route path='/category/create' element={<CreateCategory />} />
          </Route>

          <Route path='unauthorized' element={<Unauthorized />} />
        </Route>

        {/* catch all  */}
        <Route path='*' element={<MissingPage />} />

      </Routes>
    </main>
  )
}

export default App