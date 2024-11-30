import React from 'react'

export default function Sidebar() {
    return (
        <div className="bg-blue-200 lg:h-screen lg:w-3/12 rounded-md sm:w-full sm:h-1/3 sm:rounded-none">

            <div className='mt-7 flex lg:flex-col md:flex-row sm:flex-row '>
                <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col ml-10 gap-5 mb-10 items-start">
                    
                    <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-blue-500 text-blue-500 font-bold">
                        1
                    </div>

                   
                    <div>
                        <p className="text-xs text-gray-600 text-left">STEP 1</p>
                        <p className="text-sm font-medium text-left">YOUR INFO</p>
                    </div>
                </div>


                <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col ml-10 gap-5 mb-10 items-start'>
                    <div class="w-8 h-8 flex items-center justify-center rounded-full border-2 border-blue-500 text-blue-500 font-bold">
                        2
                    </div>
                    <div>
                        <p className='text-xs text-gray-600 text-left'>STEP 2</p>
                        <p className='text-sm font-medium text-left'>SELECT PLAN</p>

                    </div>


                </div>

                <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col ml-10 gap-5 mb-10 items-start'>
                    <div class="w-8 h-8 flex items-center justify-center rounded-full border-2 border-blue-500 text-blue-500 font-bold">
                        3
                    </div>
                    <div>
                        <p className='text-xs text-gray-600 text-left'>STEP 3</p>
                        <p className='text-sm font-medium text-left'>ADD-ONS</p>

                    </div>


                </div>

                <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col ml-10 gap-5 mb-10 items-start'>
                    <div class="w-8 h-8 flex items-center justify-center rounded-full border-2 border-blue-500 text-blue-500 font-bold">
                        4
                    </div>
                    <div>
                        <p className='text-xs text-gray-600 text-left'>STEP 4</p>
                        <p className='text-sm font-medium text-left'>SUMMARY</p>

                    </div>


                </div>
            </div>
        </div>

    )
}
