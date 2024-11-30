import React from 'react';
import Heading from './Heading';
import SubHeading from './SubHeading';

export default function PersonalInfo() {
    return (
        <div className=''>
            <Heading text="Personal info" />
            <SubHeading text="Please provide your name, email address and phone number." />

            <div className=' w-2/3 mt-16 m-auto' >
                <form className="">
                    <div className="flex flex-col space-y-2 items-start">
                        <label className="text-sm font-medium">Name</label>
                        <input
                            className="border w-full border-gray-400 rounded-md p-2"
                            type="text"
                            placeholder="e.g. Stephen King"
                        />
                    </div>
                    <div className="flex flex-col space-y-2 items-start mt-4">
                        <label className="text-sm font-medium">Email</label>
                        <input
                            className="border w-full border-gray-400 rounded-md p-2"
                            type="text"
                            placeholder="e.g. stephenking@gmail.com"
                        />
                    </div>
                    <div className="flex flex-col space-y-2 items-start mt-4">
                        <label className="text-sm font-medium">Phone Number</label>
                        <input
                            className="border w-full border-gray-400 rounded-md p-2"
                            type="Number"
                            placeholder="e.g. +91 123 456 7890"
                        />
                    </div>
                </form>

            </div>
        </div>
    )
}
