import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className=' mt-32 w-full flex justify-around'>
        <button className='text-gray-600'>Go Back</button>
        <Link to='/selectplan' className='bg-blue-950 text-white px-3 py-1 rounded-md'>Next Step</Link>

    </div>
  )
}
