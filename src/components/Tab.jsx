import React from "react"

const Tab = ({ texts, isActive, onTab }) => {
  return (
    <div className="flex gap-2 rounded-8 bg-common mb-c72 max-w-max border-2 border-common">
      {texts.map((text, i) => {
        return (
          <button
            className={`p-4 rounded-8 font-semibold capitalize ${isActive === i ? "bg-secondary" : "text-secondary hover:bg-secondary hover:text-primary"}`}
            onClick={() => onTab(i)}
            key={i}>
            {text}
          </button>
        )
      })}
    </div>
  )
}

export default Tab
