import React from 'react'
import Hand from "../asset/hand.svg"
import GooglePlay from '../asset/googlePlay.png'
import AppleStore from '../asset/appleStore.png'

function OrderSectioin() {
  return (
    <div className='flex container mx-auto'>
      <div className='w-3/5'></div>
    <div className=''>
      <h1 className='font-medium text-4xl mt-20'> Simple Way To Order Your Food </h1>
      <p className='text-lg leading-5 tracking-widest opacity-70 mt-5'>
        Some food has looked so awful that it's looked like 
        something that the dog's brought home, yet after one 
        mouthful I've been left eating my thoughts.
      </p>
      <div className='mt-7'>
        <div className='flex mb-4 items-center'>
          <img className='mr-2.5' src={Hand}/>
          <p className='text-xl leading-6'>Select Your Food</p>
        </div>
        <div className='flex mb-4 items-center'>
          <img className='mr-2.5' src={Hand}/>
          <p className='text-xl leading-6' >Add To Cart</p>
        </div>
        <div className='flex mb-4 items-center'>
          <img className='mr-2.5' src={Hand}/>
          <p className='text-xl leading-6' >Order Your Food</p>
        </div>
      </div>

      <div className='flex items-center mb-32'>
        <img src={GooglePlay}/>
        <img src={AppleStore}/>       
      </div>
    </div>
    </div>
  )
}

export default OrderSectioin