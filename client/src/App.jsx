import React from "react"
import { BrowserRouter, Route, Link, Routes } from "react-router-dom"
import Home from './pages/Home'
import ImageGenerator from './pages/ImageGenerator'
import Login from './pages/Login'
import Community from './pages/Community'

function App() {

  return (
    <BrowserRouter>
      <header className="flex justify-between items-center sm:px-10 md:px-20 lg:px-48 px-4 py-4">
        <Link to='/'>
          <div className="flex gap-1 text-3xl font-bold">
            <span className="text-blue-500">I</span>
            <span className="text-red-500">m</span>
            <span className="text-yellow-500">g</span>
            <span className="text-green-500">B</span>
            <span className="text-red-500">o</span>
            <span className="text-blue-500">T</span>
          </div>
        </Link>
        <Link to='/ImageGenerator'>
          <h1 className="text-lg font-medium text-white px-4 py-[5px] rounded-md hover:scale-110 hover:shadow-xl transition-all duration-300 bg-[#6469ff]">create</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ImageGenerator' element={<ImageGenerator />} />
          <Route path='/Community' element={<Community />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  
  )
}

export default App
