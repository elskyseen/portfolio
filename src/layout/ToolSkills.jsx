import React, { Fragment } from "react"
import CardSkill from "../components/CardSkill"

import gitSkill from "../assets/image/skill/git-skill.png"
import figmaSkill from "../assets/image/skill/figma-skill.png"
import githubSkill from "../assets/image/skill/github-skill.png"

const ToolSkills = () => {
  const skills = [
    {
      image: gitSkill,
      title: "git ",
    },
    {
      image: githubSkill,
      title: "github",
    },
    {
      image: figmaSkill,
      title: "figma",
    },
  ]
  return (
    <Fragment>
      {skills.map((skill, i) => {
        return <CardSkill key={i} {...skill} />
      })}
    </Fragment>
  )
}

export default ToolSkills
