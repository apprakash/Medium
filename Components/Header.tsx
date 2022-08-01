import React from 'react'

function Header() {
  return (
    <header className='flex items-center justify-between space-x-5 py-4'>
        <div className='flex'>
        <div>
          <img src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png" className='w-44 object-contain cursor-pointer'></img>
        </div>
        <div className='space-x-5 items-center hidden md:inline-flex' >
          <h3>
            About
          </h3>
          <h3>
            Contact 
          </h3>
          <h3 className='bg-green-600 text-white px-2 rounded-full'>
            Follow 
          </h3>
        </div>
        </div>
        <div className='flex space-x-5 items-center text-green-600'>
          <h3>
            Sign-In
          </h3>
          <h3 className=' border border-green-600 px-2 rounded-full'>
            Get Started
          </h3>
        </div>
      </header>
  )
}

export default Header