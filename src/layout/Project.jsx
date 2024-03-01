import React, { useState } from "react"
import Tab from "../components/Tab"
import ProjectList from "./ProjectList"
import DesignList from "./DesignList"

const Project = () => {
  const [isActive, setIsActive] = useState(0)
  let renderSkill

  switch (isActive) {
    case 0:
      renderSkill = <ProjectList />
      break
    case 1:
      renderSkill = <DesignList />
      break
      break
    default:
      break
  }

  const onTab = (i) => {
    setIsActive(i)
  }
  return (
    <section id="projects" className="bg-primary px-40 pt-20 pb-c120">
      <h1 className="font-bold text-4xl text-secondary capitalize text-center mb-c26">
        project
      </h1>
      <div className="flex justify-center w-full">
        <Tab texts={["project", "design"]} isActive={isActive} onTab={onTab} />
      </div>
      <div className="grid grid-cols-12 gap-4">{renderSkill}</div>
    </section>
  )
}

export default Project
