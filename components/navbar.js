
// import Image from "next/image";
// import logo from '../public/resources/images/logo.svg'
// const Navbar = () => {

//     return (
//         <div class="flex flex-col bg-white border-b border-gray-200 w-full z-2">
//             <div class="flex justify-between items-center w-[calc(100%-80px)] mx-10 my-4">

//                 <div class="flex items-center space-x-3">
//                     <div class="w-8 h-8 rounded-full overflow-hidden">
//                         <Image src={logo} alt="logo-image" />
//                     </div>
//                     <h4 class="text-2xl font-bold text-gray-800">Vybri</h4>
//                 </div>
//                 <div class="flex items-center space-x-4">
//                     <button class="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200">
//                         About Us
//                     </button>
//                     <button class="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200">
//                         Login
//                     </button>
//                 </div>

//             </div>
//         </div>
//     )

// }


// export default Navbar;

"use client";

import { useState } from "react";
import Image from "next/image";
import logo from '../public/resources/images/logo.svg'
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex flex-col bg-white border-b border-gray-200 w-full z-10">
            {/* Desktop and Mobile Navbar */}
            <div className="flex justify-between items-center w-full px-6 py-4 md:px-10">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                        <Image src={logo} alt="logo-image" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800">Vybri</h4>
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <button className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                        About Us
                    </button>
                    <button className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                        Login
                    </button>
                </div>

                {/* Hamburger Menu Button for Mobile */}
                <button
                    className="md:hidden px-3 py-2 rounded text-gray-700 hover:bg-gray-100 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="flex flex-col space-y-2 px-6 py-4 bg-gray-100 md:hidden">
                    <button className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white rounded-full hover:bg-gray-200 transition">
                        About Us
                    </button>
                    <button className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white rounded-full hover:bg-gray-200 transition">
                        Login
                    </button>
                </div>
            )}
        </div>
    );
};
export default Navbar;
