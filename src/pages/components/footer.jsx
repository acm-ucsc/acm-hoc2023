import React from 'react';
import Link from 'next/link';

function Footer() {
    return (
        <footer className="bg-white-100 text-black mt-10 py-8 border-t ">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center h-full">
                <div className="mb-4 md:mb-0">
                    <p className="text-lg font-semibold">Hour of Code | UCSC</p>
                    <p className="text-sm">Unlocking Coding Potential</p>
                </div>


                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <Link href="/">
                        <div className="hover:text-teal-500 cursor-pointer text-center">Home</div>
                    </Link>
                    <Link href="/event">
                        <div className="hover:text-teal-500 cursor-pointer text-center">Event</div>
                    </Link>
                    <Link href="/register">
                        <div className="hover:text-teal-500 cursor-pointer text-center">Register</div>
                    </Link>
                    <Link href="https://www.ko-de.org/">
                        <p className="text-slate-400 hover:text-teal-500 cursor-pointer text-center">&copy; 2023 kode</p>
                    </Link>
                </div>


                

            </div>

        </footer>
    );
}

export default Footer;
