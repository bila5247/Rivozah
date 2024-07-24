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
       
      </Routes>
    </Router>

    </>
  )
}

export default App
