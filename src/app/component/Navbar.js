"use client"
import React from 'react'
import { useRouter } from 'next/navigation';


const Navbar = ({ transparentBackground }) => {
    const router = useRouter();
    console.log('transparentBackground:', transparentBackground);

    return (

        <div className={`w-full z-50 top-0 py-3 sm:py-5 absolute ${transparentBackground ? 'bg-transparent' : 'bg-[#4C3799]'} `}  >
            <div className="container flex items-center justify-between " >
                <div>

                </div>
                <div className="hidden lg:block" >
                    <ul className="flex items-center">

                        <li className="group pl-6">
                            <a href="#about">
                                <span
                                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                >About</span></a>

                            <span
                                className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                            ></span>
                        </li>

                        <li className="group pl-6">
                            <a href='#services'>
                                <span
                                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                >Services</span></a>

                            <span
                                className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                            ></span>
                        </li>

                        <li className="group pl-6">
                            <a href='#projects'>
                                <span
                                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                >Projects</span></a>

                            <span
                                className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                            ></span>
                        </li>
                        <li className="group pl-6">
                            <a href='#work'>
                                <span
                                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                >Work</span ></a>

                            <span
                                className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                            ></span>
                        </li>

                        <li className="group pl-6">
                            <a href='#portfolio'>
                                <span
                                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                >Resume</span></a>

                            <span
                                className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                            ></span>
                        </li>

                        <li className="group pl-6">
                            <a href='#blog'>
                                <span
                                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                >Blog</span></a>

                            <span
                                className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                            ></span>
                        </li>

                        <li className="group pl-6">
                            <a href='#contact'>
                                <span
                                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                >Contact</span></a>

                            <span
                                className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                            ></span>
                        </li>

                    </ul>
                </div>
                <div className="block lg:hidden">
                    <button>
                        <i className="bx bx-menu text-4xl text-white"></i>
                    </button>
                </div>
            </div>
            
        </div>
        


    )
}

export default Navbar
