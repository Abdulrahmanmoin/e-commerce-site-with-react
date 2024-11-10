import React, { Children } from 'react'

function Container({children}) {
  return (
    <div className='bg-gray-400 py-1'>
      {children}
    </div>
  )
}

export default Container
