import React from 'react'

const Header = () => {
  return (
    <div className=' flex items-end  justify-between '>
        <h1 className='text-2xl font-medium' >Hello <br/><span className='text-3xl font-semibold ' >Rajat Yadav 👋 </span>  </h1>
        <button className='py-1 px-3 bg-red-400 rounded-md text-lg font-medi' >Log Out </button>
    </div>
  )
}

export default Header