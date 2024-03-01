import React, { Fragment } from "react"
import Home from "./layout/Home"
import Navbar from "./components/Navbar"
import About from "./layout/About"
import Resume from "./layout/Resume"
import Skill from "./layout/Skill"

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Skill />
    </Fragment>
  )
}

export default App
