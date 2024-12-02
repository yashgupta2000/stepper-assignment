import React from 'react';
import { useNavigate } from 'react-router-dom';
import { checkValidate } from '../utils/validate';
import { useDispatch, useSelector } from 'react-redux';
import { formDetails } from '../utils/userDestilsSlice';
import { setFormIndex } from '../utils/formsSlice';

export default function Footer({ name, email, phone, setError }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();



    const selectedPlan = useSelector((store) => store.selectPlan.plan);
    // const selectedBilling = useSelector((store) => store.selectPlan.billing);
    const selectedAddOns = useSelector((store) => store.addOns.addOns);
    const formIndex = useSelector((store) => store.form.formIndex);
    console.log(`formIndex` + formIndex);

    const handleNextStep = () => {

        if (formIndex === 1) {
            const error = checkValidate(name.current.value, email.current.value, phone.current.value);
            // console.log(error);
            if (error) {
                setError(error)
            }
            else {
                const userData = { name: name.current.value, email: email.current.value, phone: phone.current.value };
                dispatch(formDetails({ userData }));
                dispatch(setFormIndex(2));

                navigate('/select-plan');
            }
        } else if (formIndex === 2) {
            if (selectedPlan == null) {
                alert('Select at leat 1 plan!')
            }
            else {
                dispatch(setFormIndex(3));
                navigate('/add-ons')
            }

        } else if (formIndex === 3) {
            if (selectedAddOns.length == 0) {
                alert('Select at least 1 add on')
            }
            else {
                dispatch(setFormIndex(4));
                navigate('/summary');
            }

        }
    };
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
    
    return (
        <div className="flex justify-around  bg-white py-2  w-full fixed bottom-0  md:w-full lg:w-3/4 right-0 ">
            <button onClick={handleGoBack} className="text-gray-600">{formIndex === 1 ? null : 'Go Back'}</button>


            <button className='bg-blue-950 text-white px-3 py-1 rounded-md' onClick={handleNextStep}>
                {formIndex == 4 ? "Submit" : "Next Step"}
            </button>
        </div>
    );
}