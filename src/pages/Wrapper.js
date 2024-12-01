import React from 'react'
import Sidebar from '../components/Sidebar'
import FormWrapper from '../layout/FormWrapper'
import Footer from '../components/Footer'

export default function Wrapper() {
    return (
        <div className="flex flex-col lg:flex-row w-full overflow-x-hidden">
            {/* Sidebar */}
            <Sidebar className="lg:w-1/3 w-full" />

            {/* Form Wrapper and Footer */}
            <div className=" flex flex-col box-border py-9 mx-4 -mt-14 lg:m-0 lg:w-full bg-white rounded-md">

                <FormWrapper className="w-full "  />

                {/* Footer (conditionally placed) */}
                {/* <div className="hidden lg:block">
                    <Footer />
                </div> */}
            </div>

            {/* Footer for mobile (outside wrapper) */}
            {/* <div className="block lg:hidden">
                <Footer />
            </div> */}
        </div>



    );
}

