import React from 'react'

export default function Heading({ text }) {
    return (
        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-950 text-left w-full md:w-2/3 lg:w-2/3 flex m-auto px-4 lg:px-0">
            {text}</div>
    )
}
