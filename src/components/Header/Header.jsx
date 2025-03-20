import React from "react"
import "./Header.scss"
import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/images/logo_kasa.png"

export default function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <img src={logo} alt="logo kasa"></img>{" "}
          {/* Clicking on image links to Home page */}
        </Link>
      </div>
      <nav className="navbar">
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar__link--active" : "navbar__link"
          }
          to="/" // Links to Home page
        >
          Accueil
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar__link--active" : "navbar__link"
          }
          to="/about" // Links to About page
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}
