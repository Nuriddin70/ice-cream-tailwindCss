import React from 'react'
// import Cream from '../asset/cream.png'
// import Glass from '../asset/glass.png'
// import Pink from '../asset/pinkcrycl.svg'


function Hero() {
  return (
    <div>
      <div className='w-7/12 mt-48'>
        <p className='text-black text-sm font-medium leading-4 tracking-widest mb-2'>
        Sweet fun, full of milk.
        </p>
        <h1 className='text-black text-6xl font-semibold opacity-90 mb-8 '>
          Feel inside cold with <br /> our delicious 
          <span className='text-rose-600 text-5xl'> ice-cream.</span> 
        </h1>
        <p className='text-black opacity-60 leading-6 text-lg mb-12'>
        Some food has looked so awful that it's looked like 
        something that <br /> the dog's brought home, yet after one mouthful 
        I've been left <br /> eating my thoughts, my words.
        </p>
        <button className='leading-5 text-base font-bold py-3 px-12 bg-rose-600 rounded text-slate-100 hover:shadow-lg hover:bg-rose-500 mb-52'>
          Buy Now
        </button>
      </div>
    </div>
  )
}

export default Hero