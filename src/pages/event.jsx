import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import NavbarTwo from './components/navbar2';

function Event() {
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setPageLoaded(true);
        }, 500);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <div className={`container opacity-0 transition-opacity ${pageLoaded ? 'opacity-100 duration-1000 ease-in-out' : ''}`}>
                <Head>
                    <title>Hour of Code | UCSC</title>
                    <link rel="icon" href="/hoc.png" />
                </Head>

                <NavbarTwo />

                <div className='mt-[120px]'>
                    <h1 className="text-4xl font-bold text-center mt-10 mb-5">
                        Event details
                    </h1>
                    <p className="text-center text-lg">
                        This is the decription for the event.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Event;
