import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../Header/Header"
import Home from "../../pages/Home/Home"
import About from "../../pages/About/About"
import Accomodation from "../../pages/Accomodation/Accomodation"
import Error from "../../pages/Error/Error"
import Footer from "../Footer/Footer"

export default function Router() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/accomodation/:id" element={<Accomodation />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  )
}
