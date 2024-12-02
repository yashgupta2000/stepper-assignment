
import Sidebar from '../components/Sidebar'
import FormWrapper from '../layout/FormWrapper'


export default function Wrapper() {

  
    return (
        <div className="flex flex-col lg:flex-row w-full overflow-x-hidden">

            <Sidebar className="lg:w-1/3 w-full" />


            <div className=" flex flex-col box-border lg:py-9 py-5 mx-4 -mt-14 lg:m-0 lg:w-full bg-white rounded-md">

                <FormWrapper className="w-full " />


            </div>

        </div>



    );
}

