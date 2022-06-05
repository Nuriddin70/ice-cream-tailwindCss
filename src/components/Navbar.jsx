import React from 'react'
import Logo from '../asset/images-removebg-preview.png'
function Navbar() {
  return (
    <div className='flex  justify-between items-center h-20 container mx-auto'>
      <img className='w-20 h-20 cursor-pointer' src={Logo} />
      <ul className='flex'>
        <li className='px-5 cursor-pointer text-lg font-normal leading-4 text-black opacity-60 hover:text-red-600 hover:text-lg hover:font-bold '>Home</li>
        <li className='px-5 cursor-pointer text-lg font-normal leading-4 text-black opacity-60 hover:text-red-600 hover:text-lg hover:font-bold'>Product</li>
        <li className='px-5 cursor-pointer text-lg font-normal leading-4 text-black opacity-60 hover:text-red-600 hover:text-lg hover:font-bold'>Pricing</li>
        <li className='px-5 cursor-pointer text-lg font-normal leading-4 text-black opacity-60 hover:text-red-600 hover:text-lg hover:font-bold'>Testimonials</li>
        <li className='px-5 cursor-pointer text-lg font-normal leading-4 text-black opacity-60 hover:text-red-600 hover:text-lg hover:font-bold'>Contact Us</li>
      </ul>
      <button className='leading-5 text-base font-bold py-3 px-12 bg-rose-600 rounded text-slate-100 hover:shadow-lg hover:bg-rose-500'  >
        Buy Now
      </button>
    </div>
  )
}

export default Navbar