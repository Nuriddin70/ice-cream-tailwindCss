import React from 'react'
import GreenIce from '../asset/greenIce.png'
import LemonIce from '../asset/lemonIce.png' 
import User from "../asset/user.png"
import Group from "../asset/Group.svg"
import Arrow from "../asset/arrow.svg"
import MountainiIce from '../asset/MountainIce.png'

function OurProduct() {
  return (
    <div className='bg-white'>
      <div className='pt-32 max-w-6xl container mx-auto'>
        <h1 className='leading-14 text-5xl font-bold text-center' >Our Product</h1>
        <ul className='flex justify-center mt-16 p-2'>
          <div className='px-5'>
            <li className='opacity-60 leading-5 text-lg font-medium hover:text-black hover:border-b-4 border-red-600 hover:pb-1'>ICE CREAM</li>
          </div>
          <div className='px-5'>
            <li className='opacity-60 leading-5 text-lg font-medium hover:text-#000 hover:border-b-4 border-red-600 hover:pb-1'>CAYENNE CHOCOLATE</li>
          </div>
          <div className='px-5'>
            <li className='opacity-60 leading-5 text-lg font-medium hover:text-#000 hover:border-b-4 border-red-600 hover:pb-1'>CAKE BATTER</li>
          </div >
          <div className='px-5'>
            <li className='opacity-60 leading-5 text-lg font-medium hover:text-#000 hover:border-b-4 border-red-600 hover:pb-1'>CANDY CANE</li>
          </div>
          <div className='px-5'>
            <li className='opacity-60 leading-5 text-lg font-medium hover:text-#000 hover:border-b-4 border-red-600 hover:pb-1'>PLATTERS</li>
          </div>
          <div className='px-5'>
            <li className='opacity-60 leading-5 text-lg font-medium hover:text-#000 hover:border-b-4 border-red-600 hover:pb-1'>DESSERT</li>
          </div>
        </ul>
      
      <div className='flex justify-around items-center mt-24 '>
        <div className='mr-16'>
          <img src={GreenIce} />
        </div>
        <div className='w-1/2'>
          <h4 className='font-bold text-2xl leading-9'>Brown bread</h4>
          <p className='text-base leading-6 opacity-70 mt-3 w-'>
            Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.
            </p>
          <div className='flex mt-7'>
            <span className='font-medium text-2xl leading-9 mr-1'>
              $19.55
            </span>
            <span className='font-medium text-base leading-7 line-through opacity-70 align-text-bottom  mt-1.5'>
              $22.55
            </span>
          </div>
          <button className='leading-5 text-base font-bold py-3 px-12 bg-rose-600 rounded text-slate-100 hover:shadow-lg hover:bg-rose-500 mt-3'>
            Buy Now
          </button>
        </div>
      </div>
      <div className='flex  items-center mb-24'>
        
        <div className='w-1/2'>
          <h4 className='font-bold text-2xl leading-9'>Brown bread</h4>
          <p className='text-base leading-6 opacity-70 mt-3 w-'>
            Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.
            </p>
          <div className='flex mt-7'>
            <span className='font-medium text-2xl leading-9 mr-1'>
              $19.55
            </span>
            <span className='font-medium text-base leading-7 line-through opacity-70 align-text-bottom  mt-1.5'>
              $22.55
            </span>
          </div>
          <button className='leading-5 text-base font-bold py-3 px-12 bg-rose-600 rounded text-slate-100 hover:shadow-lg hover:bg-rose-500 mt-3'>
            Buy Now
          </button>
        </div>
        <div className='mr-16'>
          <img src={LemonIce} />
        </div>
      </div>

      <div className='flex  justify-between items-center pb-32' >
      <div className='w-1/3 mr-16'>
        <div className='flex align-middle items-center  mb-10'>
          <img className='mr-5' src={User} />
          <div >
            <h1 className='font-medium text-2xl leading-7 mb-1'>
              Adele A. McNeill
            </h1>
            <p className='font-medium text-xs leading-3 opacity-70'>
              AMIRICAN
            </p>
          </div>
        </div>

          <p className='flex text-base leading-6 text-black opacity-70  '>
            <span className='w-10 h-10 mr-2'><img className='rotate-180' src={Group}/></span>
            Thanks a lot for the prompt service. Really appreciate. 
            Excellence taste in Every Bite.Add a joy of best Taste. Foodie Moments.
            <span className='flex items-end w-10  '><img  src={Group}/></span>
          </p>        

        <div className='flex justify-between items-center mt-12 w-5/6'>
          <img className='rotate-180 opacity-60' src={Arrow} />
          <img className='w-10 h-10' src={User} />
          <img className='w-14 h-14 border-solid border-2 border-red-500 rounded-full p-0 m-0' src={User} />
          <img className='w-10 h-10' src={User} />
          <img src={Arrow} />
        </div>

      </div>

      <div >
        <img src={MountainiIce} />
      </div>

      </div>

      </div>
    </div>
  )
}

export default OurProduct