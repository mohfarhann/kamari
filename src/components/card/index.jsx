import React from 'react'
import CoffeImg from "../../assets/3.png"
import { IoMdStar } from "react-icons/io";

const index = () => {
  return (
    <div className='w-full '>
      <div className='flex flex-row items-center justify-start gap-2 bg-white rounded p-2'>
        <div className='col-span-2'>
         <img src={CoffeImg} className="object-cover w-full h-full rounded"/>
        </div>
        <div className='flex flex-col items-center justify-between gap-2'>
          <p className='text-2xl font-bold uppercase'>Kamari Signature</p>
          <div className='flex flex-row items-center justify-between w-full'>
           <div className='flex flex-row items-center justify-between gap-2'>
              <IoMdStar className='text-yellow-400'/>
              <p>4.8</p>
           </div>
           <p className='px-4'>More</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index