import React, { Fragment } from "react"
import Home from "./layout/Home"
import Navbar from "./components/Navbar"
import About from "./layout/About"
import Resume from "./layout/Resume"
import Skill from "./layout/Skill"
import Project from "./layout/Project"
import Contact from "./layout/Contact"

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Skill />
      <Project />
      <Contact />
      <p className="text-center text-base pb-8 bg-primary text-secondary">
        Copyright All Reverse 2024, Create By Leo Marselio
      </p>
    </Fragment>
  )
}

export default App
