import React from 'react'
import  { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import Login from './components/admin/Login'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import Dealer from './pages/admin/Dealer'
import Medicine from './pages/admin/Medicine'
import Employee from './pages/admin/Employe'
import Customer from './pages/admin/Customer'
import Purchase from './pages/admin/Purchase'

const App = () => {

  const token = 'wew38sh8hf84hf84h4' 
  return (
    <>
      <Toaster/>
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/admin' element={token ? <Layout/> : <Login/>}>
          <Route index element={<Dashboard />} />
          <Route path='dealer' element={<Dealer />} />
          <Route path='medicine' element={<Medicine />} />
          <Route path='employee' element={<Employee />} />
          <Route path='customer' element={<Customer />} />
          <Route path='purchase' element={<Purchase />} />
        </Route>
      </Routes>
    </>
  )
}

export default App