import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import Footer from './components/footer';
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
            <div className={`container opacity-0 transition-opacity ${pageLoaded ? 'opacity-100 duration-1000 ease-in-out' : ''}`}>
                <Head>
                    <title>Registration | HOC</title>
                    <link rel="icon" href="/hoc.png" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>

                <Navbar />

                <div className='mt-[120px] mx-4 md:mx-28'>
                    <h1 className="text-4xl font-bold text-center mt-10 mb-5">
                        Registration
                    </h1>
                    <p className="text-center text-lg">
                        Register for the event by filling out the form below.
                    </p>

                    <div className='mt-6'>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdl3JgJMr5YrB0xsbi7VrN3jafI1XdHT2iE5jGNU6c-JkYtJA/viewform?embedded=true" width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0">
                            Loading…
                        </iframe>
                    </div>

                </div>

                <Footer />
            </div>
        </>
    );
}

export default Register;
