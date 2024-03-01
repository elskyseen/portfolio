import React from "react"
import Link from "../components/Link"
import playIcon from "../assets/icon/play_icon.svg"
import githubIcon from "../assets/icon/github_icon.svg"

const CardProject = ({
  image,
  title,
  describe,
  isStrict = false,
  linkDemo,
  linkGithub,
}) => {
  return (
    <div className="col-span-4 p-4 rounded-8 border-2 border-secondary text-secondary">
      <img
        src={image}
        className="w-full bg-secondary rounded-8 mb-5 bg-cover"
        alt="skill-image"
      />
      <h1 className="text-center capitalize font-semibold mb-2">{title}</h1>
      <p className="text-base mb-4">{describe}</p>
      {isStrict === false && (
        <div className="flex justify-center gap-2">
          <Link path={linkDemo} icon={playIcon} text={"demo"} target="_blank" />
          <Link
            path={linkGithub}
            icon={githubIcon}
            text={"github"}
            target="_blank"
          />
        </div>
      )}
    </div>
  )
}

export default CardProject
