import React, { Fragment } from "react"
import CardProject from "../components/CardProject"
import portfolioProject from "../assets/image/project/portfolio-project.png"

const ProjectList = () => {
  const skills = [
    {
      image: portfolioProject,
      title: "portofolio saya",
      describe:
        "Portofolio Saya adalah website yang secara kegunaan digunakan untuk menampilkan data diri saya sendiri, dan project ini dikembangkan oleh saya sendiri",
      linkDemo: "",
      linkGithub: "https://github.com/hlkgt/portfolio",
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
