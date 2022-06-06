import React from 'react'
import BigIceCraem from '../asset/bigice.png'
import Shadow from '../asset/shadow.svg'

function Section3() {
  return (
    <div className='flex justify-center items-center max-w-6xl container mx-auto relative'>
      <div>
        <p className='leading-6 text-5xl font-semibold mb-5 ' >Brown Sugar <br/> <br /> Oatmea</p>
        <p className='opacity-60 leading-6 text-base mb-9'>
        Together with McDonald’s, Burger King has grown 
        to become  synonymous with burgers in the US.Together 
        with McDonald’s,  Burger King has grown to become synonymous.
        </p>
        <button className='leading-5 text-base font-bold py-3 px-12 bg-rose-600 rounded text-slate-100 hover:shadow-lg hover:bg-rose-500' >
          See Details
        </button>
      </div>
      <div>
        <img src={BigIceCraem}/>
      </div>
      <img className='absolute z-10 right-48 bottom-16' src={Shadow} />
    </div>
  )
}

export default Section3