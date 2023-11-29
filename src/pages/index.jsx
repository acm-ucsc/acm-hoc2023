import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image'; // Import the Image component from next/image
import Navbar from './components/Navbar';

function Home() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Set the pageLoaded state to true after a short delay
    const timeout = setTimeout(() => {
      setPageLoaded(true);
    }, 500); // You can adjust the delay as needed

    // Clear the timeout to avoid setting the state after unmounting
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Head>
        <title>Hour of Code | UCSC</title>
        <link rel="icon" href="/hoc.png" />
      </Head>
      <div className={`flex flex-col h-screen justify-center items-center opacity-0 transition-opacity ${pageLoaded ? 'opacity-100 duration-1000 ease-in-out' : ''}`}>
        <Navbar />
        <main className="text-center px-4 sm:px-8">
          <section>
            {/* Replace <img> with <Image> */}
            <Image
              src="/hoc.png" // Assuming the image is in the public folder
              alt="Hour of Code Event"
              width={250} // Adjust width as needed
              height={250} // Adjust height as needed
              className="rounded-lg my-10 mx-auto"
            />
            <p className="text-lg text-gray-700 mb-8">
              This year, we are taking Hour of Code to new heights by offering coding opportunities that encompass both artificial intelligence AI and non-AI components.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Join us on December 7th, 2023, for an hour of coding and fun!
            </p>
            <button
              onClick={() => window.location.href = '/register'}
              className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg cursor-pointer">Register now</button>
          </section>
        </main>
      </div>
    </>
  );
}

export default Home;
