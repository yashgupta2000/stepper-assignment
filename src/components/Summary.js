import React, { useEffect, useState } from 'react';
import Heading from './Heading';
import SubHeading from './SubHeading';
import Footer from './Footer';
import { useSelector } from 'react-redux';

export default function Summary() {

    const [finalPrice, setFinalPrice] = useState(0);
    const selectedPlan = useSelector((store) => store.selectPlan.plan);
    const selectedBilling = useSelector((store) => store.selectPlan.billing);
    const selectedAddOns = useSelector((store) => store.addOns.addOns);
    // console.log(selectedPlan);
    // console.log(selectedBilling);
    // console.log(selectedAddOns);

    // const priceArr = selectedAddOns?.map((item)=> item?.price);
    // const addOnPrice = priceArr?.reduce((acc,curr)=> acc+curr);
    // const finalPrice = (addOnPrice || 0) + (selectedPlan.price|| 0);
    // console.log(finalPrice);

    useEffect(() => {
        const priceArr = selectedAddOns?.map((item) => item?.price);
        const addOnPrice = priceArr?.reduce((acc, curr) => acc + curr, 0);
        const total = (addOnPrice || 0) + (selectedPlan.price || 0);
        setFinalPrice(total);
    }, [selectedAddOns, selectedPlan]);


    return (
        <div>
            <Heading text="Finishing up" />
            <SubHeading text="Double-check everything looks OK before confirming." />
            <div className='lg:px-0 md:px:0 sm:px:0 px-4'>
                <div className='px-4 w-full md:w-2/3 lg:w-2/3 border py-2  bg-gray-100  m-auto rounded-md mt-8'>
                    <div className='flex justify-between'>
                        <div>
                            <p className='font-medium'>{selectedPlan?.name} ({selectedBilling})</p>
                            <p className='text-gray-600 text-xs text-left'>Change</p>
                        </div>
                        <div className='flex items-center font-medium'>
                            <p> {selectedBilling == 'Yearly' ? (`$${selectedPlan?.price * 12}/yr`) : `${selectedPlan?.price}/mo`} </p>
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
                                    <p className='text-sm'>${item?.price}/mo</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <div className='flex justify-between w-full md:w-2/3 lg:w-2/3 p-4 m-auto  mt-8'>
                <div>
                    <p className='font-medium'>Total (per monthly)</p>
                </div>
                <div className='flex items-center'>
                    <p className='text-blue-700 font-bold text-xl'>${finalPrice}/mo</p>
                </div>
            </div>
            <Footer formIndex={4} />
        </div>
    )
}
