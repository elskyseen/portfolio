import React, { Fragment } from "react"
import Home from "./layout/Home"
import Navbar from "./components/Navbar"
import About from "./layout/About"

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <About />
    </Fragment>
  )
}

export default App
