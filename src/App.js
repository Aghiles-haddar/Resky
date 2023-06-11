import {Routes,Route, BrowserRouter} from "react-router-dom"
import React from "react"
import Home from "./Pages/Home"
import Navbar from "../src/Components/Navbar/Navbar"
import Footer from "../src/Components/Footer/Footer"
import "../src/App.css"



function App(){  

	return (
    
    <BrowserRouter>
    <div className="app">
      <Navbar/>
      <div className="global"> 
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
    </BrowserRouter>
	)
}

export default App