import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import FormWrapper from '../layout/FormWrapper'
import Footer from '../components/Footer'

export default function Wrapper() {

  
    return (
        <div className="flex flex-col lg:flex-row w-full overflow-x-hidden">

            <Sidebar className="lg:w-1/3 w-full" />


            <div className=" flex flex-col box-border py-9 mx-4 -mt-14 lg:m-0 lg:w-full bg-white rounded-md">

                <FormWrapper className="w-full " />


            </div>

        </div>



    );
}

