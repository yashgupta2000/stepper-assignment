import React, { useEffect, useState } from 'react';
import Heading from './Heading';
import SubHeading from './SubHeading';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { setFormIndex } from '../utils/formsSlice';

export default function Summary() {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    //subscribing to store
    const selectedPlan = useSelector((store) => store.selectPlan.plan);// Arcade- 9$
    const selectedBilling = useSelector((store) => store.selectPlan.billing);// monthly or yearly * 10
    const selectedAddOns = useSelector((store) => store.addOns.addOns);// extra services
     
    //state
    const [montlyTotalPrice, setMonthlyTotalPrice] = useState(0);
    const [yearlyTotalPrice, setYearlyTotalPrice] = useState(0);
     

    //console form data
    const addOnsPlan = selectedAddOns.map((item)=>item.name)
    console.log('Plan:',`${selectedPlan.name} (${selectedBilling})` );
    console.log('Add-ons:',`${addOnsPlan}` );
    console.log('Final price:',`${selectedBilling === 'Yearly'? `$${montlyTotalPrice*10}/yr `: `$${montlyTotalPrice}/mo `}` );

    

    //functions
    const handleChangePlan = () => {
        dispatch(setFormIndex(2))
        navigate('/select-plan')
    }
    
    //useEffect
    useEffect(() => {
        const priceArr = selectedAddOns?.map((item) => item?.price);
        const addOnPrice = priceArr?.reduce((acc, curr) => acc + curr, 0);
        const total = (addOnPrice || 0) + (selectedPlan.price || 0);
        setMonthlyTotalPrice(total);
        setYearlyTotalPrice(total * 10);//

    }, [selectedAddOns, selectedPlan]);

    //JSX
    return (
        <div>
            <Heading text="Finishing up" />
            <SubHeading text="Double-check everything looks OK before confirming." />
            <div className='lg:px-0 md:px:0 sm:px:0 px-4'>
                <div className='px-4 w-full md:w-2/3 lg:w-2/3 border py-2  bg-gray-100  m-auto rounded-md lg:mt-8 md:mt-8 sm:mt-8 mt-4'>
                    <div className='flex justify-between'>
                        <div>
                            <p className='font-medium'>{selectedPlan?.name} ({selectedBilling})</p>
                            <p onClick={handleChangePlan} className='text-gray-600 text-xs text-left underline cursor-pointer'>Change</p>
                        </div>
                        <div className='flex items-center font-medium'>
                            <p> {selectedBilling === 'Yearly' ? (`$ ${selectedPlan.price * 10}/yr`) : `${selectedPlan.price}/mo`} </p>
                        </div>
                    </div>
                    <hr class="border-t mt-4 mb-4 border-gray-300" />

                    <div>
                        {selectedAddOns?.map((item) => (
                            <div className='flex justify-between mb-3'>
                                <div>
                                    <p className='text-gray-600 text-sm'>{item?.name}</p>
                                </div>
                                <div className='flex items-center'>
                                    <p className='text-sm'>${selectedBilling === 'Yearly' ? `${item.price * 10} yr` : `${item.price}/mo`}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <div className='flex justify-between w-full md:w-2/3 lg:w-2/3 p-4 m-auto  lg:mt-3 md:mt-3 sm:mt-3 mt-2'>
                <div>
                    <p className='font-medium'>Total ({selectedBilling})</p>
                </div>
                <div className='flex items-center'>
                    <p className='text-blue-700 font-bold lg:text-xl md:text-xl sm:text-xl text-lg'>${selectedBilling === 'Yearly' ? `${yearlyTotalPrice}/yr` : `${montlyTotalPrice}/mo`}</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
