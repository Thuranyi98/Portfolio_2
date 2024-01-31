import React from 'react'

function Button({title}:{title:string}) {
  return (
      <div className=' inline-block text-xs text-teal-400  bg-teal-900/20 rounded-full p-2 px-3'>{title}</div>
  )
}

export default Button