import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='bg-slate-500 p-2 m-2 rounded-xl text-slate-200'>
            {name}
        </button>
    </div>
  )
}

export default Button