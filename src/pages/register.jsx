import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import NavbarOne from './components/navbar1';
import Footer from './components/footer';
import Link from 'next/link';

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
            <div className={`container opacity-0 transition-opacity ${pageLoaded ? 'opacity-100 duration-1000 ease-in-out' : ''}`}>
                <Head>
                    <title>Registration | HOC</title>
                    <link rel="icon" href="/hoc.png" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                </Head>

                <NavbarOne />

                <div className='mt-[120px]'>
                    <h1 className="text-4xl font-bold text-center mt-10 mb-5">
                        Registration
                    </h1>
                    <p className="text-center text-lg">
                        Register for the event by filling out the form below.
                    </p>

                    <div className='mx-4 md:mx-28'>
                        <p className='text-center mb-10 text-slate-400'>Takes a few seconds to load. If not, please <Link href="#" as="/register" passHref><span className=' text-blue-700'>click here.</span> </Link></p>
                        <div className="tf-live-embed mb-10 mx-4 md:mx-28">
                            <div data-tf-live="01HFYHP17PJQC6AYQ1YBDPDB25"></div>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        </>
    );
}

export default Register;
