import React, { useEffect, useState } from 'react'
import Heading from './Heading';
import SubHeading from './SubHeading';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { selectAddOns } from '../utils/pickAddOnsSlice';

export default function AddOns() {

    const [selectCard, setSelectCard] = useState([]);
    const [selectedAddOns, setSelectedAddOns] = useState([]);
    const Datas = [
        { id: 1, name: 'Online service', description: 'Access to multiple games', price: 2 },
        { id: 2, name: 'Larger storage', description: 'Extra 1TB of cloud save', price: 3 },
        { id: 3, name: 'Custom profile', description: 'Customizable profile options', price: 4 },
    ];
    const dispatchAddOns = useDispatch();

    const reduxSelectedAddOns = useSelector((store) => store.addOns.addOns);
    // console.log('reduxSelectedAddOns', reduxSelectedAddOns);

    const handleSelectBox = (id, item) => {

        setSelectCard((prev) => prev.includes(id) ? prev.filter((items) => id != items) : [...prev, id]) //[1,2,3]=>[1] - 
        setSelectedAddOns((prev) =>
            prev.some((selectedItem) => selectedItem.id === item.id)
                ? prev.filter((selectedItem) => selectedItem.id !== item.id)
                : [...prev, item]
        );
    }

    useEffect(() => {
        const selectedIds = reduxSelectedAddOns.map((item) => item.id);
        console.log('selected IDS', selectedIds);
        // dispatchAddOns(selectAddOns(selectedIds));
        if (reduxSelectedAddOns.length > 0) {
            setSelectCard(selectedIds);
            setSelectedAddOns(reduxSelectedAddOns);
        }
    }, [reduxSelectedAddOns]);

    useEffect(() => {
        // console.log('Dispat', selectedAddOns);
        dispatchAddOns(selectAddOns(selectedAddOns));
    }, [selectedAddOns, dispatchAddOns]);
    return (
        <div className='w-full'>

            <Heading text="Pick add-ons" />
            <SubHeading text="Add-ons help enhance your gaming experience." />
            <div className='w-full md:w-2/3 lg:w-2/3 lg:px-0 px-4  m-auto flex flex-col items-center'>

                {
                    Datas?.map((item) => (
                        <div key={item.id} className={` flex border-2 w-full  p-4 rounded-md mt-4  hover:bg-gray-100 cursor-pointer hover:border-blue-500 ${selectCard.includes(item.id) ? 'border-blue-500' : 'border-gray-300'}`}>
                            <input
                                type="checkbox"
                                name={item.name}
                                className="mr-4"
                                checked={selectCard.includes(item.id)}
                                onClick={(e) => handleSelectBox(item.id, item)}
                            />
                            <div className='text-left flex-grow'>
                                <p className='font-medium'>{item.name}</p>
                                <p className='text-gray-600 text-sm font-medium'>{item.description}</p>

                            </div>
                            <div className='flex items-center text-blue-500 font-medium' ><p >+${item.price}/mo</p></div>
                        </div>
                    ))
                }

            </div>
            <Footer formIndex={3} />

        </div>
    )
}
