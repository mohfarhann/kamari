import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <div className='w-full h-screen bg-blue-gray-100'>
      <div className='w-full h-full flex flex-col items-center justify-center'>
        <div className='w-full  text-center text-4xl font-bold flex flex-col items-center justify-center gap-5'>
           <p>Payment Done!</p>
           <FaCheckCircle  className='text-yellow-600 text-8xl'/>
           <p>Order Number: 24</p>
           <Link to={'/dashboard'}>
             <button className='w-full bg-yellow-400 text-center font-bold text-2xl p-2'>Back to Home! </button>
           </Link>
        </div>
      </div>
    </div>
  )
}

export default index