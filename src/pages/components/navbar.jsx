import React from 'react';
import Link from 'next/link';

function Navbar() {
    return (
        <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/"> 
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        
                        <span className="text-xl font-bold text-gray-900 md:hover:text-teal-500">HOC</span>
                    </div>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Link href="https://hourofcode.com/us/learn">
                        <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img
                                src="https://hourofcode.com/us/en/images/hour-of-code-logo.png"
                                className="h-8"
                                alt="HOC"
                            />
                        </div>
                    </Link>
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5 text-teal-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="#0f9fa0"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <Link href="/">
                                <div className="block py-2 px-3 text-white bg-teal-500 rounded md:bg-transparent md:text-teal-500 md:p-0 m" aria-current="page">
                                    Home
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://ucsc.acm.org/home">
                                <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-500 md:p-0 ">
                                    ACM - UCSC
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
