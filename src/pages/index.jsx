import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from './components/navbar';
import Footer from './components/footer';

function Home() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const eventDate = new Date('December 7, 2023 09:30:00 GMT');

    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeDifference = eventDate - now;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    const timeout = setTimeout(() => {
      setPageLoaded(true);
      updateCountdown();
    }, 500);

    const interval = setInterval(updateCountdown, 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Hour of Code | UCSC</title>
        <link rel="icon" href="/hoc.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <div className={`flex flex-col min-h-screen justify-center items-center opacity-0 transition-opacity ${pageLoaded ? 'opacity-100 duration-1000 ease-in-out' : ''}`}>
        <Navbar />
        <main className="text-center px-4 sm:px-8">
          <section>
            <Image
              src="/hoc.png"
              alt="Hour of Code Event"
              width={250}
              height={250}
              className="rounded-lg my-10 mx-auto"
            />
            <p className="text-base sm:text-lg text-gray-700 mb-8">
              This year, we are taking Hour of Code to new heights by offering coding opportunities that encompass both artificial intelligence AI and non-AI components.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-8">
              Join us on December 7th, 2023, for an hour of coding and fun!
            </p>
            <div className="text-base sm:text-lg text-gray-700 mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-2 sm:mt-4">
                <div className="countdown-item">
                  <div className=" bg-slate-200 border border-black text-black px-4 py-2 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:scale-105 mb-5">
                    <span className="font-bold">{countdown.days}</span> days
                  </div>
                </div>
                <div className="countdown-item">
                  <div className=" bg-slate-200 border border-black text-black px-4 py-2 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:scale-105 mb-5">
                    <span className="font-bold">{countdown.hours}</span> hours
                  </div>
                </div>
                <div className="countdown-item">
                  <div className=" bg-slate-200 border border-black text-black px-4 py-2 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:scale-105 mb-5">
                    <span className="font-bold">{countdown.minutes}</span> minutes
                  </div>
                </div>
                <div className="countdown-item">
                  <div className=" bg-slate-200 border border-black text-black px-4 py-2 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:scale-105 mb-5">
                    <span className="font-bold">{countdown.seconds}</span> seconds
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => window.location.href = '/event'}
              className="custom-color hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg cursor-pointer">See details</button>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Home;
