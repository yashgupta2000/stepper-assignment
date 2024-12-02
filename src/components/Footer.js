import React from 'react';
import { useNavigate } from 'react-router-dom';
import { checkValidate } from '../utils/validate';
import { useDispatch, useSelector } from 'react-redux';
import { formDetails } from '../utils/userDestilsSlice';
import { setFormIndex } from '../utils/formsSlice';

export default function Footer({ name, email, phone, setError }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

   //Subscribe to store
    const selectedPlan = useSelector((store) => store.selectPlan.plan);
    const selectedAddOns = useSelector((store) => store.addOns.addOns);
    const formIndex = useSelector((store) => store.form.formIndex);
   
   //Functions
   //Next button navigation
    const handleNextStep = () => {

        if (formIndex === 1) {
            const error = checkValidate(name, email, phone);

            if (error) {
                setError(error)
            }
            else {
                const userData = { name: name, email: email, phone: phone };
                dispatch(formDetails({ userData }));
                dispatch(setFormIndex(2));

                navigate('/select-plan');
            }
        } else if (formIndex === 2) {
            if (selectedPlan === null) {
                alert('Select at leat 1 plan!')
            }
            else {
                dispatch(setFormIndex(3));
                navigate('/add-ons')
            }

        } else if (formIndex === 3) {
            if (selectedAddOns.length === 0) {
                alert('Select at least 1 add on')
            }
            else {
                dispatch(setFormIndex(4));
                navigate('/summary');
            }
        }
        else if(formIndex===4){
            alert('Form submitted successfully! You can check data in console')
        }
    };

    //Go back navigatiion
    const handleGoBack = () => {
        
        if (formIndex === 2) {
            dispatch(setFormIndex(1)); 
            navigate('/'); 
        } else if (formIndex === 3) {
            dispatch(setFormIndex(2)); 
            navigate('/select-plan'); 
        } else if (formIndex === 4) {
            dispatch(setFormIndex(3)); 
            navigate('/add-ons'); 
        }
       
    };
    
    //JSX
    return (
        <div className="flex justify-around lg:pb-5 pb-3 pt-3 bg-white py-2  w-full fixed bottom-0  md:w-full lg:w-3/4 right-0 ">
            <button onClick={handleGoBack} className="text-gray-600 lg:text-base md:text-base sm:text-sm text-sm">{formIndex === 1 ? null : 'Go Back'}</button>

            <button className='bg-blue-950 text-white lg:px-6 lg:py-2 md:px-5 md:py-2 sm:px-5 sm:py-2  px-4 py-1  font-medium rounded-md' onClick={handleNextStep}>
                {formIndex === 4 ? "Submit" : "Next Step"}
            </button>
        </div>
    );
}