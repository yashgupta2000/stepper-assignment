import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { setFormIndex } from '../utils/formsSlice';

export default function Sidebar() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userDetails = useSelector((store) => store.details.userDetails);
    const selectedPlan = useSelector((store) => store.selectPlan.plan);
    const selectedAddOns = useSelector((store) => store.addOns.addOns);
    const reduxFormIndex = useSelector((store) => store.form.formIndex);



    // const handleNavigation = (formIndex) => {
    //     if (formIndex === 1) {
    //         navigate('/');
    //     } else if (formIndex === 2) {
    //         if (!userDetails.name || !userDetails.email || !userDetails.phone) {
    //             alert('Please fill in your details to proceed!');
    //         } else {
    //             navigate('/select-plan');
    //         }
    //     } else if (formIndex === 3) {
    //         if (!selectedPlan) {
    //             alert('Please select a plan to proceed!');
    //         } else {
    //             navigate('/add-ons');
    //         }
    //     } else if (formIndex === 4) {
    //         if (selectedAddOns.length === 0) {
    //             alert('Please select at least one add-on to proceed!');
    //         } else {
    //             navigate('/summary');
    //         }
    //     }
    // };

    const Datas = [{ step: 1, description: 'YOUR INFO', path: '/' },
    { step: 2, description: 'SELECT PLAN', path: '/select-plan' },
    { step: 3, description: 'ADD-ONS', path: '/add-ons' },
    { step: 4, description: 'SUMMARY', path: '/summary' },

    ]

    const handleStepClick = (item) => {
        if (item.step <= reduxFormIndex) {
            dispatch(setFormIndex(item.step));
            navigate(item.path);

        }
    }

    return (
        <div className="bg-blue-700 lg:h-screen lg:w-3/12 rounded-md sm:w-full sm:h-1/3 sm:rounded-none">

            <div className='mb-7 pt-4 flex lg:flex-col md:flex-row sm:flex-row  w-full justify-around  '>
                {
                    Datas.map((item) => (
                        <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col lg:ml-8 ml:0 gap-5 mb-10 justify-start ">

                            <button onClick={() => handleStepClick(item)} className="w-8 h-8 flex  items-center justify-center rounded-full border-2 border-white-500     text-white font-bold">
                                {item.step}
                            </button>


                            <div className='sm:hidden md:hidden lg:block hidden '>
                                <p className="text-xs text-gray-300  text-left">STEP </p>
                                <p className="text-sm text-white font-medium text-left">{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}
