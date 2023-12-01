import React from 'react';
import Link from 'next/link';

function Footer() {
    return (
        <footer className="bg-teal-100 text-black mt-10 py-8">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <div>
                    <p className="text-lg font-semibold">Hour of Code | UCSC</p>
                    <p className="text-sm">Unlocking Coding Potential</p>
                </div>

                <div className="flex space-x-4">
                    <Link href="/">
                        <div className="hover:text-teal-500 cursor-pointer">Home</div>
                    </Link>
                    <Link href="/event">
                        <div className="hover:text-teal-500 cursor-pointer">Event</div>
                    </Link>
                    <Link href="/register">
                        <div className="hover:text-teal-500 cursor-pointer">Register</div>
                    </Link>
                </div>
                <Link href="https://www.ko-de.org/">
                <div>
                    <p className="text-sm text-slate-400">&copy; 2023 kode</p>
                </div>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
