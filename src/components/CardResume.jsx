import React from "react"

const CardResume = ({
  title = "title",
  describe = "describe",
  headActivity = "head",
  listActivitys = ["list activity"],
}) => {
  return (
    <div className="col-span-1 lg:col-span-6 p-4 rounded-8 border-2 border-secondary text-secondary">
      <h1 className="text-xl lg:text-4xl font-bold text-center capitalize mb-6">
        {title}
      </h1>
      <p className="text-sm lg:text-base mb-4">{describe}</p>
      <h6 className="text-sm lg:text-base font-semibold mb-2">
        {headActivity}
      </h6>
      <ul style={{ listStyleType: "disc", padding: "0px 16px" }}>
        {listActivitys.map((activity, i) => {
          return (
            <li key={i} className="text-sm lg:text-base">
              {activity}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CardResume
