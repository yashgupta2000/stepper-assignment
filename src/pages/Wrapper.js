import React from 'react'
import Sidebar from '../components/Sidebar'
import FormWrapper from '../layout/FormWrapper'
import Footer from '../components/Footer'

export default function Wrapper() {
    return (
        <div className="flex flex-col lg:flex-row">
            <Sidebar className="lg:w-1/3 w-full" />
            <div className="w-full flex flex-col ">
                <FormWrapper className="w-full" />
                <Footer />
            </div>
        </div>
    );
}

