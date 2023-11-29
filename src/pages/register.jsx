// pages/register.js
import React from 'react';
import Head from 'next/head';
import Navbar from './components/Navbar';

function Register() {
    return (
        <>
            <div className="container">
                <Head>
                    <title>Hour of Code | UCSC</title>
                    <link rel="icon" href="/hoc.png" />
                </Head>

                <Navbar />

                <div className='mt-[120px]'>
                    <h1 className="text-4xl font-bold text-center mt-10 mb-5">
                        Register
                    </h1>
                    <p className="text-center text-lg mb-10">
                        Register for the event by filling out the form below.
                    </p>


                    <div className="tf-live-embed mb-10 mx-28">
                        <div data-tf-live="01HFYHP17PJQC6AYQ1YBDPDB25"></div>
                        <script src="//embed.typeform.com/next/embed.js"></script>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
