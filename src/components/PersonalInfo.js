import React, { useEffect, useState } from 'react';
import Heading from './Heading';
import SubHeading from './SubHeading';
import Footer from './Footer';
import { useSelector } from 'react-redux';

export default function PersonalInfo() {
    //State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const [error, setError] = useState({});

    //Subscribe to store
    const userDetails = useSelector((state) => state.details.userDetails);

    //UseEffect
    useEffect(() => {
        if (userDetails) {
            setFormData({
                name: userDetails.name || '',
                email: userDetails.email || '',
                phone: userDetails.phone || '',
            });
        }
    }, [userDetails]);

    //Function
    //Handling input field 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    //JSX
    return (
        <div className=''>
            <Heading text="Personal info" />
            <SubHeading text="Please provide your name, email address and phone number." />

            <div className="w-full md:w-2/3 lg:w-2/3 lg:mt-8 mg:mt-8 sm:mt-8 mt-5 mx-auto md:px-0 sm:px-4 lg:px-0 px-4">

                <form>
                    <div className="flex flex-col space-y-1 items-start mb-2 ">
                        <label className="text-sm font-medium">Name</label>
                        <input
                            className="border w-full border-gray-400  rounded-md p-2"
                            type="text"
                            placeholder="e.g. Stephen King"
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <p className={`text-red-500 text-xs h-4 ${error.name ? 'visible' : 'invisible'} `}>{error.name || ''}</p>

                    </div>
                    <div className="flex flex-col space-y-1 items-start  mb-2">
                        <label className="text-sm font-medium">Email</label>
                        <input
                            className="border w-full border-gray-400 rounded-md p-2"
                            type="text"
                            value={formData.email}
                            name='email'
                            onChange={handleChange}
                            placeholder="e.g. stephenking@gmail.com"
                        />
                        <p className={`text-red-500 text-xs h-4 ${error.email ? 'visible' : 'invisible'} `}>{error.email || ''}</p>

                    </div>
                    <div className="flex flex-col space-y-1 items-start">
                        <label className="text-sm font-medium">Phone Number</label>
                        <input
                            className="border w-full border-gray-400 rounded-md p-2"
                            type="Number"
                            placeholder="e.g. 9876543210"
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <p className={`text-red-500 text-xs h-4 ${error.phone ? 'visible' : 'invisible'} `}>{error.phone || ''}</p>


                    </div>
                </form>
                <Footer  name={formData.name} email={formData.email} phone={formData.phone} setError={setError} />

            </div>
        </div>
    )
}
