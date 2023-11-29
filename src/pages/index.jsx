// pages/index.js
import React from 'react';
import Head from 'next/head';
import Navbar from './components/Navbar';

function Home() {
  return (
    <>
      <Head>
        <title>Hour of Code | UCSC</title>
        <link rel="icon" href="/hoc.png" />
      </Head>
      <div className="flex flex-col h-screen justify-center items-center">
        <Navbar />
        <main className="text-center">
          <section>
            <img
              src="/hoc.png" // Assuming the image is in the public folder
              alt="Hour of Code Event"
              className="w-[250px] rounded-lg my-10 mx-auto"
            />
            <p className="text-lg text-gray-700 mb-8">
              This year, we're taking Hour of Code to new heights by offering coding opportunities that encompass both artificial intelligence (AI) and non-AI components.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Join us on December 7th, 2023 for an hour of coding and fun!
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
