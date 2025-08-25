import React from 'react'

const Btmtg = ({timeline,domain}) => {
  return (
    <div className='flex flex-col bg-white rounded-lg  px-7 p-2 mx-12' >
      <div className='flex flex-col py-2 '>
        <center>
        <h1 className='text-7xl font-semibold text-blue-800 px-1 '>{timeline}</h1>
          <h3 className=' font-extrabold text-4xl text-blue-800 pt-2 '>{domain}</h3>
          </center>
      </div>
    </div>
  )
}

export default Btmtg
