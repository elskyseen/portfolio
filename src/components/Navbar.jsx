import React from "react"
import LinkIcon from "./LinkIcon"
import homeIcon from "../assets/icon/home_icon.svg"
import aboutIcon from "../assets/icon/about_icon.svg"
import resumeIcon from "../assets/icon/resume_icon.svg"
import gearIcon from "../assets/icon/gear_icon.svg"
import suitaseIcon from "../assets/icon/suitcase_icon.svg"
import phoneIcon from "../assets/icon/phone_icon.svg"

const links = [
  {
    path: "#home",
    icon: homeIcon,
  },
  {
    path: "#about-me",
    icon: aboutIcon,
  },
  {
    path: "#resume",
    icon: resumeIcon,
  },
  {
    path: "#skills",
    icon: gearIcon,
  },
  {
    path: "#projects",
    icon: suitaseIcon,
  },
  {
    path: "#contact",
    icon: phoneIcon,
  },
]

const Navbar = () => {
  return (
    <nav className="w-full py-4 flex justify-center items-center gap-8 fixed bottom-8 right-0 z-50">
      {links.map((link, i) => {
        return <LinkIcon key={i} path={link.path} icon={link.icon} />
      })}
    </nav>
  )
}

export default Navbar
