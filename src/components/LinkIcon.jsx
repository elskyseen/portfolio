import React from "react"

const LinkIcon = ({
  path,
  icon,
  customWidth = "w-c50",
  customHeight = "h-c50",
  widthIcon = "w-c38",
  heightIcon = "w-c38",
  ...custom
}) => {
  return (
    <a
      href={path}
      className={`${customWidth} ${customHeight} rounded-full border-2 border-secondary flex justify-center items-center hover:bg-secondary group transition-all duration-500 ease-in-out`}
      {...custom}>
      <img
        src={icon}
        alt="icon"
        className={`${widthIcon} ${heightIcon} group-hover:brightness-0 transition-all duration-500 ease-in-out`}
      />
    </a>
  )
}

export default LinkIcon
