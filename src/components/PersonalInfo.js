import React, { useEffect, useRef, useState } from 'react';
import Heading from './Heading';
import SubHeading from './SubHeading';
import Footer from './Footer';
import { useSelector } from 'react-redux';
// import { checkValidate } from '../utils/validate';

export default function PersonalInfo() {

    const name = useRef(null);
    const email = useRef(null);
    const phone = useRef(null);
    const [error, setError] = useState({});

    // const message =checkValidate(name,email,phone);
    // console.log(message);

    const userDetails = useSelector((state) => state.details.userDetails);
    console.log("User Details:", userDetails);// its giving {} empty



    const state = useSelector((state) => state);
    console.log("Redux State:", state);// getiing all states but in this case empty {}

    return (
        <div className=''>
            <Heading text="Personal info" />
            <SubHeading text="Please provide your name, email address and phone number." />

            <div className="w-full md:w-2/3 lg:w-2/3 mt-7 mx-auto md:px-0 sm:px-4 lg:px-0 px-4">

                <form>
                    <div className="flex flex-col space-y-1 items-start">
                        <label className="text-sm font-medium">Name</label>
                        <input
                            className="border w-full border-gray-400  rounded-md p-2"
                            type="text"
                            placeholder="e.g. Stephen King"
                            ref={name}
                            value={userDetails?.name}
                        />
                        {error.name && <p className="text-red-500 text-xs">{error.name}</p>}
                    </div>
                    <div className="flex flex-col space-y-1 items-start mt-4">
                        <label className="text-sm font-medium">Email</label>
                        <input
                            className="border w-full border-gray-400 rounded-md p-2"
                            type="text"
                            value={userDetails?.email}
                            placeholder="e.g. stephenking@gmail.com"
                            ref={email}
                        />
                        {error.email && <p className="text-red-500 text-xs">{error.email}</p>}

                    </div>
                    <div className="flex flex-col space-y-1 items-start mt-4">
                        <label className="text-sm font-medium">Phone Number</label>
                        <input
                            className="border w-full border-gray-400 rounded-md p-2"
                            type="Number"
                            placeholder="e.g. +91 123 456 7890"
                            ref={phone}
                            value={userDetails?.phone}
                        />
                        {error.phone && <p className="text-red-500 text-xs">{error.phone}</p>}

                    </div>
                </form>
                <Footer formIndex={1} name={name} email={email} phone={phone} setError={setError} />

            </div>
        </div>
    )
}
