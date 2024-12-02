import React, { useEffect } from 'react';
import Heading from './Heading';
import SubHeading from './SubHeading';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { billing, choosePlan } from '../utils/choosePlanSlice';


export default function SelectPlan() {
   
    const dispatch = useDispatch();

    //JSON data
    const Datas = [{
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={17} viewBox="0 0 512 512"><path d="M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8c0 12.8 10.4 23.2 23.2 23.2l56.8 0c26.5 0 48 21.5 48 48l0 56.8c0 12.8 10.4 23.2 23.2 23.2c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2c-12.8 0-23.2 10.4-23.2 23.2L384 464c0 26.5-21.5 48-48 48l-56.8 0c-12.8 0-23.2-10.4-23.2-23.2c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8c0 12.8-10.4 23.2-23.2 23.2L48 512c-26.5 0-48-21.5-48-48L0 343.2C0 330.4 10.4 320 23.2 320c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256C10.4 256 0 245.6 0 232.8L0 176c0-26.5 21.5-48 48-48l120.8 0c12.8 0 23.2-10.4 23.2-23.2z" fill='white' /></svg>
        ),
        name: 'Arcade',
        price: 9,
        index: 0,
        bgColor: "bg-orange-400"
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={17} viewBox="0 0 576 512"><path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z" fill='white' /></svg>
        ),
        name: 'Advanced',
        price: 12,
        index: 1,
        bgColor: "bg-pink-400"
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={18} viewBox="0 0 640 512"><path d="M192 64C86 64 0 150 0 256S86 448 192 448l256 0c106 0 192-86 192-192s-86-192-192-192L192 64zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24l0 32 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-32z" fill='white' /></svg>
        ),
        name: 'Pro',
        price: 15,
        index: 2,
        bgColor: "bg-blue-500"
    },
    ]

    //Subscribe to store
    const selectedPlan = useSelector((store) => store.selectPlan.plan);
    const selectedBilling = useSelector((store) => store.selectPlan.billing);

    //State
    useEffect(() => {
        if (!selectedBilling) {
            dispatch(billing('Monthly'))
        }
    }, [dispatch,selectedBilling])

    //Functions
    const handleSelectPlan = (item) => {
        dispatch(choosePlan(item));
    }
    const toggleBilling = () => {
        const newCycle = selectedBilling === 'Monthly' ? 'Yearly' : 'Monthly';
        dispatch(billing(newCycle));
    }

    //JSX
    return (
        <div className='flex flex-col'>
            <div className='flex-grow overflow-y-auto '>
                <Heading text="Select your plan" />
                <SubHeading text="You have option of monthly or yearly billing." />

                <div className='  flex justify-between  m-auto mt-5 gap-1  flex-wrap w-full md:w-2/3 lg:w-2/3 px-4 lg:px-0'>

                    {
                        Datas?.map((item) => (
                            <div onClick={() => handleSelectPlan(item)} className={`rounded-md border-2 w-full md:w-3/12 lg:py-5 py-2 cursor-pointer ${selectedPlan?.index === item.index ? 'border-blue-500 bg-gray-100' : 'border-gray-300 hover:border-blue-500 hover:bg-gray-100'
                                }`}>
                                <div className={`flex flex-col px-4`}>
                                    <div className="flex  md:flex-col">
                                        <div
                                            className={` ${item.bgColor} p-2 rounded-full flex justify-center items-center lg:w-12 lg:h-12 md:w-12 md-12 sm:h-12 sm:w-12 w-10 h-10 `}
                                        >
                                            {item.icon}
                                        </div>
                                        <div className="md:mt-12 flex flex-col ml-4 lg:ml-0 md:ml-0">
                                            <p className="lg:text-xl md:text-lg text-base text-left font-medium   ">{item.name}</p>
                                            <p className="text-gray-600 text-left text-sm  md:ml-0">${ selectedBilling === 'Monthly' ? `${item.price}/mo` :`${item.price * 10}/yr`}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        ))
                    }
                </div>
                <div className='px-4 lg:px-0 md:px-0 sm:px-4'>
                    <div className='flex lg:w-2/3 md:w-2/3  w-full    justify-center gap-4 m-auto rounded-md p-3 bg-gray-100 mb-6    mt-6'>
                        <p className={`${selectedBilling === 'Monthly' ? 'font-bold': ''} `}>Monthly</p>
                        {selectedBilling === 'Monthly' ?
                            <svg className='cursor-pointer' onClick={toggleBilling} xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 576 512"><path d="M384 128c70.7 0 128 57.3 128 128s-57.3 128-128 128l-192 0c-70.7 0-128-57.3-128-128s57.3-128 128-128l192 0zM576 256c0-106-86-192-192-192L192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192zM192 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z" /></svg>
                            : <svg className='cursor-pointer' onClick={toggleBilling} xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 576 512"><path d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" /></svg>
                        }
                        <p className={`${selectedBilling === 'Yearly' ? 'font-bold': ''} `}>Yearly</p>
                    </div>
                </div>
            </div>


            <Footer formIndex={2} />
        </div>
    )
}
