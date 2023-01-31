import React, { useState, useEffect } from "react"
import logo from "../assets/ux-logo.png"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null)
  const [scrollActive, setScrollActive] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20)
    })
  }, [])
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="nav-center">
            <div className="nav-header">
              <img src={logo} alt="Silikhe_logo" />
              {/* <p>Silikhe_</p> */}

              <button type="button" className="toggle-btn">
                <FaAlignRight />
              </button>
            </div>
            <PageLinks styleClass="nav-links"></PageLinks>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
