
"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="text-black">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-center items-center h-16 ">
                <a href="/" className="text-2xl font-bold font-mono" style={{ fontSize: '40px' }}>

                        Todo App
                    </a>
                    {/* <ul className="hidden md:flex space-x-4 gap-9" >
                        <li className="hover:text-gray-300" style={{ cursor: 'pointer' }}>Home</li>
                        <li className="hover:text-gray-300" style={{ cursor: 'pointer' }}>Profile</li>
                        <li className="hover:text-gray-300" style={{ cursor: 'pointer' }}>About</li>
                        <li className="hover:text-gray-300" style={{ cursor: 'pointer' }}>Contact</li>

                    </ul>
                    <div className="md:hidden">
                        <button onClick={toggleMenu}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div> */}
                </div>
            </div>
            {/* {isOpen && (
                <div className="md:hidden text-center">
                    <ul className="px-2 pt-2 pb-3 space-y-1  sm:px-3 ">
                        <li className="hover:text-gray-300 w=[90%]" style={{ cursor: 'pointer' }}>Home</li>
                        <li className="hover:text-gray-300" style={{ cursor: 'pointer' }}>Profile</li>
                        <li className="hover:text-gray-300" style={{ cursor: 'pointer' }}>About</li>
                        <li className="hover:text-gray-300" style={{ cursor: 'pointer' }}>Contact</li>
                    </ul>
                </div>
            )} */}
        </nav>
    );
};

export default Navbar;