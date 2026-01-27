import React, { useState } from 'react'

export const MobileItem = ({ label, options }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative inline-block">
            {/* Button */}
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
                {label}
                <svg
                    className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown */}
            {open && (
                <ul className="absolute mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
                    {options.map((item, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => setOpen(false)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}




export default MobileItem