import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import NavbarTwo from './components/navbar2';
import Footer from './components/footer';

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
            <div className={`container mx-auto opacity-0 transition-opacity ${pageLoaded ? 'opacity-100 duration-1000 ease-in-out' : ''}`}>
                <Head>
                    <title>Unleash Your Coding Potential | Dec 7th, 2023 | UCSC</title>
                    <link rel="icon" href="/hoc.png" />
                </Head>

                <NavbarTwo />

                <section className="mx-auto my-[100px] p-8 bg-white rounded-md shadow-lg">
                    <h2 className="text-4xl font-bold mb-8 text-center">Event Details</h2>

                    <div className="mb-12">
                        <p className="text-gray-700 text-lg text-center">
                            This event is a fantastic opportunity to unlock your coding potential. From beginners to experts, everyone is welcome to join us for an enlightening journey into Python basics, demystifying coding and shaping an AI-powered future.
                        </p>
                    </div>

                    <div className="mb-12 text-center">
                        <p className="text-gray-700 text-lg mb-8">
                            <span className="block">
                                <strong className="font-bold">Date:</strong> December 07, 2023
                            </span>
                            <span className="block">
                                <strong className="font-bold">Time:</strong> 3:00 PM - 5:00 PM
                            </span>
                            <span className="block">
                                <strong className="font-bold">Location:</strong> Hall xxxx, UCSC
                            </span>
                            <span className="block">
                                <strong className="font-bold">Requirements:</strong> Laptop and the invitation email.
                            </span>
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-3xl font-bold my-[80px] text-center">Frequently Asked Questions</h2>

                        <div className="mb-4">
                            <details className="border-b border-gray-300 pb-4">
                                <summary className="cursor-pointer font-semibold mb-2 transition-all duration-300 ease-in-out">What is the event about?</summary>
                                <p className="text-gray-700 text-lg transition-all duration-300 ease-in-out">This event is a Python basics session scheduled for December 7th, 2023, at the University of Colombo School of Computing. It aims to unleash coding potential, catering to individuals of all skill levels, from beginners to professionals.</p>
                            </details>
                        </div>

                        <div className="mb-4">
                            <details className="border-b border-gray-300 pb-4">
                                <summary className="cursor-pointer font-semibold mb-2 transition-all duration-300 ease-in-out">Who is organizing the event?</summary>
                                <p className="text-gray-700 text-lg transition-all duration-300 ease-in-out">The event is organized by the ACM Student Chapter in celebration of Computer Science Education Week, aligning with the global initiative, Hour of Code.</p>
                            </details>
                        </div>

                        <div className="mb-4">
                            <details className="border-b border-gray-300 pb-4">
                                <summary className="cursor-pointer font-semibold mb-2 transition-all duration-300 ease-in-out">What is the theme of the event?</summary>
                                <p className="text-gray-700 text-lg transition-all duration-300 ease-in-out">The event celebrates the theme "Creativity with AI," showcasing the exciting possibilities that coding and artificial intelligence bring to the table.</p>
                            </details>
                        </div>

                        <div className="mb-4">
                            <details className="border-b border-gray-300 pb-4">
                                <summary className="cursor-pointer font-semibold mb-2 transition-all duration-1300 ease-in-out">Is this related to the global Hour of Code movement?</summary>
                                <p className="text-gray-700 text-lg transition-all duration-300 ease-in-out">Yes, this event is part of the Hour of Code initiative, a global movement reaching 180+ countries. In 2023 alone, 16,524 events have been registered worldwide.</p>
                            </details>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Event;
