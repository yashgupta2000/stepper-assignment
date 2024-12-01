import React from 'react';
import { useNavigate } from 'react-router-dom';
import { checkValidate } from '../utils/validate';

export default function Footer({ formIndex, name, email, phone, setError }) {
    const navigate = useNavigate();

    const handleNextStep = () => {

        if (formIndex === 1) {
            const error = checkValidate(name.current.value, email.current.value, phone.current.value);
            console.log(error);
            if (error) {
                setError(error)
            }
            else {
                navigate('/select-plan');
            }
        } else if (formIndex === 2) {
            navigate('/add-ons');
        } else if (formIndex === 3) {
            navigate('/summary');
        }
    };
    return (
        <div className="flex justify-around  bg-white py-2  w-full fixed bottom-0  md:w-full lg:w-3/4 right-0 ">
            <button className="text-gray-600">Go Back</button>


            <button className='bg-blue-950 text-white px-3 py-1 rounded-md' onClick={handleNextStep}>
                Next Step
            </button>
        </div>
    );
}