import React, { useState } from "react"
import Tab from "../components/Tab"
import LanguageSkills from "./LanguageSkills"
import FrameworkSkills from "./FrameworkSkills"
import ToolSkills from "./ToolSkills"

const Skill = () => {
  const [isActive, setIsActive] = useState(0)
  let renderSkill

  const onTab = (i) => {
    setIsActive(i)
  }

  switch (isActive) {
    case 0:
      renderSkill = <LanguageSkills />
      break
    case 1:
      renderSkill = <FrameworkSkills />
      break
    case 2:
      renderSkill = <ToolSkills />
      break
    default:
      break
  }

  return (
    <section
      id="skills"
      className="bg-primary px-4 lg:px-40 pt-20 pb-1 lg:pb-c120">
      <h1 className="font-bold text-xl lg:text-4xl text-secondary capitalize text-center mb-c26">
        skill
      </h1>
      <div className="flex justify-center w-full">
        <Tab
          texts={["bahasa", "framework", "tools"]}
          isActive={isActive}
          onTab={onTab}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {renderSkill}
      </div>
    </section>
  )
}

export default Skill
