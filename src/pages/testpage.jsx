// pages/EventPage.js

import Head from 'next/head';

const EventPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">

            <div className="max-w-3xl w-full p-8 border rounded-lg shadow-lg">
                <h1 className="text-4xl font-semibold mb-8 text-center">Event Details</h1>

                <div className="mb-8">
                    <p className="text-gray-700 text-lg mb-4 text-center">
                        Event Description:
                    </p>
                    {/* Add your event description here */}
                    <p className="text-gray-700 text-lg mb-4 text-center">
                        This is a fantastic event that you don't want to miss! Join us for an exciting time filled with fun activities and more.
                    </p>
                </div>

                <div className="mb-8">
                    <p className="text-gray-700 text-lg mb-4 text-center">
                        Find the event location on the map:
                    </p>
                    {/* Google Map Embed Code for the event location */}
                    <div className="aspect-w-16 aspect-h-10">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.883902567741!2d80.07374727577123!3d7.022930717156562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ffc9d06183d3%3A0xc7b1038ddbb587d2!2sHapuarachchi%20Furniture!5e0!3m2!1sen!2slk!4v1700980727363!5m2!1sen!2slk"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

                <div className="mb-8">
                    <p className="text-gray-700 text-lg mb-4 text-center">
                        Event Details:
                    </p>
                    {/* Add your event details here */}
                    <p className="text-gray-700 text-lg mb-4 text-center">
                        Date: January 15, 2024<br />
                        Time: 2:00 PM - 5:00 PM<br />
                        Location: Hapuarachchi Furniture Showroom<br />
                        Requirements: Just bring your enthusiasm!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EventPage;
