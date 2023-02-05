import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import Contact from "./Contact"
const Layout = ({ children }) => {
  return (
    <>
    <Navbar/>
      {children}
      <Contact/>
      <Footer/>
    </>
  )
}

export default Layout
