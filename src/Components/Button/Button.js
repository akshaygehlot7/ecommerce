import React from 'react'

const Button = ({children, ...attributes}) => {
  return (
    <button
    type="button"
    className="text-white bg-blue-500 shadow-lg hover:text-blue-400 hover:bg-white transition duration-200 ease-in shadow-slate-500/50 px-4 py-2 rounded capitalize"
    {...attributes}
  >
    {children}
  </button>
// text-blue-600/100
  )
}

export default Button