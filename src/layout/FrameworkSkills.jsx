import React, { Fragment } from "react"
import CardSkill from "../components/CardSkill"

import laravelSkill from "../assets/image/skill/laravel-skill.png"
import reactSkill from "../assets/image/skill/react-skill.png"
import vueSkill from "../assets/image/skill/vue-skill.png"
import jquerySkill from "../assets/image/skill/jquery-skill.png"
import tailwindSkill from "../assets/image/skill/tailwind-skill.png"
import bootstrapSkill from "../assets/image/skill/bootstrap-skill.png"

const FrameworkSkills = () => {
  const skills = [
    {
      image: laravelSkill,
      title: "laravel ",
    },
    {
      image: reactSkill,
      title: "react",
    },
    {
      image: vueSkill,
      title: "vue",
    },
    {
      image: jquerySkill,
      title: "JQuery",
    },
    {
      image: tailwindSkill,
      title: "tailwind",
    },
    {
      image: bootstrapSkill,
      title: "bootstrap",
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

export default FrameworkSkills
