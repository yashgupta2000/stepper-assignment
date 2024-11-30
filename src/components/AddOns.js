import React from 'react'
import Heading from './Heading';
import SubHeading from './SubHeading';

export default function AddOns() {
    return (
        <div className='w-full'>

            <Heading text="Pick add-ons" />
            <SubHeading text="Add-ons help enhance your gaming experience." />
            <div className='flex flex-col items-center w-full px-8'>
                <div className='flex border-2 lg:w-2/4 sm:w-full md:w-full border-gray-300 p-4 rounded-md mt-4  hover:bg-gray-100 cursor-pointer hover:border-blue-500'>
                    <input
                        type="checkbox"
                        name="onlineService"
                        className="mr-4"
                    />
                    <div className='text-left flex-grow'>
                        <p className='font-medium'>Online service</p>
                        <p className='text-gray-600 text-sm font-medium'>Access to the multiple games</p>

                    </div>
                    <div className='flex items-center text-blue-500 font-medium' ><p >+2$/mo</p></div>
                </div>

                <div className='flex border-2 lg:w-2/4 sm:w-full md:w-full border-gray-300 p-4 rounded-md mt-4  hover:bg-gray-100 cursor-pointer hover:border-blue-500'>
                    <input
                        type="checkbox"
                        name="onlineService"
                        className="mr-4"
                    />
                    <div className='text-left flex-grow'>
                        <p className='font-medium'>Large storage</p>
                        <p className='text-gray-600 text-sm font-medium'>Custom theme on your profile</p>

                    </div>
                    <div className='flex items-center text-blue-500 font-medium' ><p >+2$/mo</p></div>
                </div>

                <div className='flex border-2 lg:w-2/4 sm:w-full md:w-full border-gray-300 p-4 rounded-md mt-4  hover:bg-gray-100 cursor-pointer hover:border-blue-500'>
                    <input
                        type="checkbox"
                        name="onlineService"
                        className="mr-4"
                    />
                    <div className='text-left flex-grow'>
                        <p className='font-medium'>Customizable profile</p>
                        <p className='text-gray-600 text-sm font-medium'>Custom theme on your profile</p>

                    </div>
                    <div className='flex items-center text-blue-500 font-medium' ><p >+2$/mo</p></div>
                </div>
            </div>

        </div>
    )
}
