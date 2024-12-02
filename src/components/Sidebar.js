
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { setFormIndex } from '../utils/formsSlice';

export default function Sidebar() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    //Subsribing to store
    const reduxFormIndex = useSelector((store) => store.form.formIndex);

    //JSON data
    const Datas = [{ step: 1, description: 'YOUR INFO', path: '/' },
    { step: 2, description: 'SELECT PLAN', path: '/select-plan' },
    { step: 3, description: 'ADD-ONS', path: '/add-ons' },
    { step: 4, description: 'SUMMARY', path: '/summary' },

    ]

    //functions
    const handleStepClick = (item) => {
        if (item.step <= reduxFormIndex) {
            dispatch(setFormIndex(item.step));
            navigate(item.path);
        }
    }

    return (
        <div className="bg-blue-700 lg:h-screen lg:w-4/12 lg:rounded-lg sm:w-full sm:h-1/3   sm:rounded-none lg:pt-8">

            <div className='mb-7 pt-3 flex lg:flex-col md:flex-row sm:flex-row  w-full justify-around  '>
                {
                    Datas.map((item) => (
                        <div className={`flex flex-col pb-4 mt-4 lg:pb-0 lg:mt-0  lg:flex-row md:flex-col sm:flex-col lg:ml-8 ml:0 gap-5 mb-10 justify-start `}>

                            <button onClick={() => handleStepClick(item)} className={` w-8 h-8 flex  items-center justify-center rounded-full border-2  ${reduxFormIndex === item.step ? 'text-blue-800 border-blue-200 font-bold bg-blue-200' : `border-white-500 text-white font-bold`}      `}>
                                {item.step}
                            </button>

                            <div className='sm:hidden md:hidden lg:block hidden '>
                                <p className="text-xs text-gray-300  text-left">STEP {item.step} </p>
                                <p className="text-sm text-white font-medium text-left">{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}
