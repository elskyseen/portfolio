import React, { Fragment } from "react"
import CardProject from "../components/CardProject"
import portfolioDesign from "../assets/image/project/portfolio-design.png"

const ProjectList = () => {
  const skills = [
    {
      image: portfolioDesign,
      title: "design portofolio",
      describe: "UI dari portfolio design, yang di buat menggunakan figma",
      linkDemo: "",
      linkGithub: "",
      isStrict: true,
    },
  ]
  return (
    <Fragment>
      {skills.map((skill, i) => {
        return <CardProject key={i} {...skill} />
      })}
    </Fragment>
  )
}

export default ProjectList
