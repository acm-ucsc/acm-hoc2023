// pages/register.js
import React from 'react';
import Head from 'next/head';
import Navbar from './components/Navbar';

function Register() {
    return (
        <>
            <Head>
                <title>Register | Hour of Code</title>
                <link rel="icon" href="/hoc.png" />
            </Head>
            <div className="flex flex-col h-screen justify-center items-center">
                <Navbar />
                <main className="text-center">
                    <section>
                        <h1 className="text-3xl font-bold text-teal-500 mb-4">Register for Hour of Code</h1>
                        <iframe
                            src="YOUR_TYPEFORM_EMBED_URL"
                            style={{ width: '100%', height: '500px', border: '0' }}
                            allow="fullscreen"
                            loading="lazy"
                            title="Hour of Code Registration Form"
                        />
                    </section>
                </main>
            </div>
        </>
    );
}

export default Register;
