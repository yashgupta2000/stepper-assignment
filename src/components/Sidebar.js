import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="bg-blue-700 lg:h-screen lg:w-3/12 rounded-md sm:w-full sm:h-1/3 sm:rounded-none">

            <div className='mb-7 pt-4 flex lg:flex-col md:flex-row sm:flex-row  w-full justify-around  '>
                <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col lg:ml-8 ml:0 gap-5 mb-10 justify-start ">

                    <Link to='/' className="w-8 h-8 flex  items-center justify-center rounded-full border-2 border-white-500     text-white font-bold">
                        1
                    </Link>


                    <div className='sm:hidden md:hidden lg:block hidden '>
                        <p className="text-xs text-gray-300  text-left">STEP 1</p>
                        <p className="text-sm text-white font-medium text-left">YOUR INFO</p>
                    </div>
                </div>


                <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col lg:ml-8 ml:0 gap-5 mb-10 items-start'>
                    <Link to='select-plan' class="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white-500 text-white font-bold">
                        2
                    </Link>
                    <div className='sm:hidden md:hidden lg:block hidden'>
                        <p className='text-xs text-gray-300  text-left'>STEP 2</p>
                        <p className='text-sm font-medium text-white text-left'>SELECT PLAN</p>

                    </div>


                </div>

                <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col lg:ml-8 ml:0 gap-5 mb-10 items-start'>
                    <Link to='add-ons' class="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white-500 text-white font-bold">
                        3
                    </Link>
                    <div className='sm:hidden md:hidden lg:block hidden'>
                        <p className='text-xs text-gray-300 text-left'>STEP 3</p>
                        <p className='text-sm font-medium text-white text-left'>ADD-ONS</p>

                    </div>


                </div>

                <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col lg:ml-8 ml:0 gap-5 mb-10 items-start'>
                    <Link to='summary' class="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white-500 text-white font-bold">
                        4
                    </Link>
                    <div className='sm:hidden md:hidden lg:block hidden'>
                        <p className='text-xs text-gray-300  text-left'>STEP 4</p>
                        <p className='text-sm font-medium text-white text-left'>SUMMARY</p>

                    </div>


                </div>
            </div>
        </div>

    )
}
