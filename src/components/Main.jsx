import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import Cream from '../asset/cream.png'
import Glass from '../asset/glass.png'
import Pink from '../asset/pinkcrycl.svg'

function Main() {
  return (
    <div className='bg-rose-100  relative max-w-6xl container mx-auto px-10'>
    <Navbar/>
    <Hero/>
    <img className='absolute top-96 right-8 ' src={Pink}/>
        <img className='absolute top-20 -right-20 'src={Glass}/>
        <img className='absolute top-52 -right-48 'src={Cream}/>
    </div>
  )
}

export default Main