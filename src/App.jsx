import React, { Fragment } from "react"
import Home from "./layout/Home"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
    </Fragment>
  )
}

export default App
