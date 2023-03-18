import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='p-1 px-4 m-2 rounded bg-gray-200'>{name}</button>
    </div>
  )
}

export default Button
