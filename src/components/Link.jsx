import React from "react"

const Link = ({ path, icon, text, isPrimary = false, ...custom }) => {
  return (
    <a
      href={path}
      className={`p-2 lg:p-4 rounded-8 border-2 capitalize flex gap-2 cursor-pointer hover:bg-secondary hover:border-secondary hover:text-primary group transition-all duration-500 ease-in-out  ${isPrimary ? "bg-common border-common" : "text-secondary bg-primary border-secondary"}`}
      {...custom}>
      <img
        src={icon}
        alt="icon"
        className="w-c21 group-hover:brightness-0 transition-all duration-500 ease-in-out"
      />
      <p className="text-base lg:text-xl">{text}</p>
    </a>
  )
}

export default Link
