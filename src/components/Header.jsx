import React from 'react'

const Header = ({category, title}) => {
  return (
    <div className='mb-10'>
      <p classname="text-gray-400">
        {category}
      </p>
      <p className='text-3xl font-extrabold flex m-3 flex-wrap '>
        {title}
      </p>
      {/* text-2xl font-semibold flex m-3 flex-wrap justify-between */}
    </div>
  )
}

export default Header