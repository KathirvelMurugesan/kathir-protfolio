import React from 'react'

const Techcomp = ({techname}) => {
  return (
    <div className='bg-blue-700 p-2 mx-4 hover:text-blue-700 scale-75 my-2 hover:bg-blue-950 hover:scale-105 duration-200  ' >
      <h1 className='text-white font-semibold text-xl p-2'>{techname}</h1>
    </div>
  )
}

export default Techcomp
