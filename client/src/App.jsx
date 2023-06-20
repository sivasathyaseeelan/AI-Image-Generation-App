import React from "react"
import { BrowserRouter, Route, Link, Routes } from "react-router-dom"
import Home from './pages/Home'
import Summarizer from './pages/Summarizer'
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import PrivateRouter from "./utils/PrivetRouter"


function App() {

  return (
    <BrowserRouter>
      <header className="flex justify-between items-center sm:px-10 md:px-20 lg:px-48 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to='/'>
          <div className="flex gap-1 text-xl md:text-3xl font-bold">
            <span className="text-blue-500">s</span>
            <span className="text-red-500">U</span>
            <span className="text-yellow-500">m</span>
            <span className="text-green-500">M</span>
            <span className="text-orange-500">a</span>
            <span className="text-blue-500">r</span>
            <span className="text-red-500">I</span>
            <span className="text-yellow-500">z</span>
            <span className="text-green-500">e</span>
            <span className="text-orange-500">R</span>
          </div>
        </Link>
        <Link to='/Summarizer'>
          <h1 className="md:text-lg font-medium text-white px-4 py-[5px] rounded-md hover:scale-110 hover:shadow-xl transition-all duration-300 bg-[#6469ff]">Let's Summarize</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/Signup' element={<Signup />} />
          <Route element={<PrivateRouter />}>
            <Route path='/Summarizer' element={<Summarizer />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  
  )
}

export default App
