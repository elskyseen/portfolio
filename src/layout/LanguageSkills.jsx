import React, { Fragment } from "react"
import CardSkill from "../components/CardSkill"

import htmlSkill from "../assets/image/skill/html-skill.png"
import cssSkill from "../assets/image/skill/css-skill.png"
import jsSkill from "../assets/image/skill/js-skill.png"
import phpSkill from "../assets/image/skill/php-skill.png"

const LanguageSkills = () => {
  const skills = [
    {
      image: htmlSkill,
      title: "HTML",
    },
    {
      image: cssSkill,
      title: "CSS",
    },
    {
      image: jsSkill,
      title: "Javascript",
    },
    {
      image: phpSkill,
      title: "PHP",
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

export default LanguageSkills
