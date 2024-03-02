import React from "react"

const CardSkill = ({ image, title }) => {
  return (
    <div className="col-span-1 lg:col-span-3 p-4 rounded-8 border-2 border-secondary text-secondary">
      <img
        src={image}
        className="w-full lg:w-c236 h-auto lg:h-c236 bg-secondary rounded-8 mb-5 bg-cover"
        alt="skill-image"
      />
      <h1 className="text-center capitalize font-semibold">{title}</h1>
    </div>
  )
}

export default CardSkill
