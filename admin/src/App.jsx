import React from 'react'
import './App.css'
import Home from './Component/Home'
import Layout from './Component/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Media from './pages/media'
import Login from './pages/login'
import Register from './pages/Register'
import AddProduct from './pages/AddProduct'
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './Component/User'
import CreateUser from './pages/createUser'
import UpdateUser from './pages/updateUser'

function App() {
  const isLoggedIn= window.localStorage.getItem("LoggedIn");

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn == "true" ? <Home /> : <Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Home />} />

        <Route path="/Media" element={<Layout ><Media /></Layout>} />
        <Route path="/AddProduct" element={<Layout><AddProduct /></Layout>} />
        <Route path="/logout" element={<Login />} />  {/* This route will redirect to login page when user logs out */}  {/* You can also use a redirect component from react-router-dom */}  {/* Example: <Redirect to="/login" /> */}  {/* Make sure to add this route at the end of your routes */}  {/* This route will be triggered when user tries to access a non-existing route */}   {/* Example: <Route path="*" element={<Redirect to="/"*/}
       
        <Route path="/User" element={<Layout><User /></Layout>} />
        <Route path="/create-User" element={<Layout><CreateUser /></Layout>} />
        <Route path="/Update-User" element={<Layout><UpdateUser /></Layout>} />

      </Routes>
    </Router>

    </>
  )
}

export default App
