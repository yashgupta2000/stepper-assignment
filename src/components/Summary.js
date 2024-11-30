import React from 'react';
import Heading from './Heading';
import SubHeading from './SubHeading';

export default function Summary() {
    return (
        <div>
            <Heading text="Finishing up" />
            <SubHeading text="Double-check everything looks OK before confirming." />
            <div className='lg:w-1/2 sm:w-5/6 md:w-5/6 border bg-gray-100 p-4 m-auto rounded-md mt-8'>
                <div className='flex justify-between'>
                    <div>
                        <p className='font-medium'>Arcade (Monthly)</p>
                        <p className='text-gray-600 text-sm text-left'>Change</p>
                    </div>
                    <div className='flex items-center'>
                        <p>$9/mo</p>
                    </div>
                </div>
                <hr class="border-t mt-4 mb-4 border-gray-300" />

                <div className='flex justify-between'>
                    <div>
                        <p className='text-gray-600 text-sm'>Online service</p>
                    </div>
                    <div className='flex items-center'>
                        <p className='text-sm'>+$1/mo</p>
                    </div>
                </div>

                <div className='flex justify-between mt-3'>
                    <div>
                        <p className='text-gray-600 text-sm'>Large storage</p>
                    </div>
                    <div className='flex items-center'>
                        <p className='text-sm'>+$9/mo</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between lg:w-1/2 md:w-5/6 sm:w-5/6 p-4 m-auto  mt-8'>
                <div>
                    <p className='font-medium'>Total (per monthly)</p>
                </div>
                <div className='flex items-center'>
                    <p className='text-blue-700 font-bold text-xl'>$9/mo</p>
                </div>
            </div>

        </div>
    )
}
