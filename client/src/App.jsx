import React from "react"
import { BrowserRouter, Route, Link, Routes, useLocation } from "react-router-dom"
import Home from './pages/Home'
import Summarizer from './pages/Summarizer'
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import PrivateRouter from "./utils/PrivetRouter"
import Navbar from "./components/Navbar/Navbar"


function App() {

  return (
    <BrowserRouter>
      <Navbar />
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
