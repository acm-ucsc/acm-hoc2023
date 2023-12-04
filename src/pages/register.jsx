import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import Footer from './components/footer';
import Link from 'next/link';
import Navbar from './components/navbar';

function Register() {
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//embed.typeform.com/next/embed.js";
        script.async = true;

        const handleScriptLoad = () => {
            setPageLoaded(true);
        };

        script.onload = handleScriptLoad;

        document.body.appendChild(script);

        return () => {
            // Clean up script on component unmount if needed
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <div className={` container opacity-0 transition-opacity ${pageLoaded ? 'opacity-100 duration-1000 ease-in-out' : ''}`}>
                <Head>
                    <title>Registration | HOC</title>
                    <link rel="icon" href="/hoc.png" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                </Head>

                <Navbar />

                <div className='flex flex-col h-screen justify-center items-center'>
                    <h1 className="text-4xl font-bold text-center mt-10 mb-5">
                        Registration - Closed
                    </h1>
                    <p className="text-center text-lg">
                        Invitations will be sent within 2 days.
                    </p>

                   
                    <div className='flex flex-col items-center'>
                        <button
                            onClick={() => window.location.href = '/event'}
                            className=" custom-color hover:bg-teal-700 text-white font-bold py-2 px-4 mt-9 rounded-lg cursor-pointer">See event details</button>
                    </div>
                </div>
                <div>
                    <br />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Register;
