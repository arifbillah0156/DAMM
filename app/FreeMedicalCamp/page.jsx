"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer, textVariant } from '@/utils/motion';
import Link from 'next/link';
import EventCounter from './EventCounter';

export default function FreeMedicalCamp() {
    const [isClient, setIsClient] = useState(false);
    const [daysLeft, setDaysLeft] = useState(0);
    const [hoursLeft, setHoursLeft] = useState(0);
    const [minutesLeft, setMinutesLeft] = useState(0);
    const [secondsLeft, setSecondsLeft] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setIsClient(true);
        setMounted(true);

        const calculateTimeLeft = () => {
            const currentYear = new Date().getFullYear();
            // Use UTC to ensure consistent dates between server and client
            const eventDate = new Date(Date.UTC(currentYear, 7, 22, 8, 0, 0, 0)); // August 22, 8 AM UTC

            if (eventDate < new Date()) {
                eventDate.setUTCFullYear(currentYear + 1);
            }

            const now = new Date();
            const difference = eventDate.getTime() - now.getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setDaysLeft(days);
                setHoursLeft(hours);
                setMinutesLeft(minutes);
                setSecondsLeft(seconds);
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 py-12 pt-4 px-4 flex items-center justify-center relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            </div>

            <div className="max-w-4xl w-full relative z-0">
                {/* Header with decorative elements */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="text-center mb-10"
                >
                    <motion.div variants={fadeIn("down", "spring", 0.2, 0.75)} className="inline-block p-3 bg-green-100 rounded-full mb-4 relative">
                        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
                        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </motion.div>

                    <motion.h1 variants={textVariant(0.3)} className="text-4xl md:text-5xl font-extrabold text-green-800 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-700 pt-6 to-teal-700">
                        🩺 ফ্রি মেডিকেল ক্যাম্প
                    </motion.h1>

                    <motion.p variants={textVariant(0.4)} className="text-xl md:text-2xl font-semibold text-gray-700">
                        আসসালামু আলাইকুম, প্রিয় উত্তরাবাসী
                    </motion.p>
                </motion.div>

                {/* Main content card */}
                <div
                    className="bg-gradient-to-b from-green-50 via-white to-green-50 p-6 md:p-8 rounded-3xl shadow-xl border-2 border-green-200 overflow-hidden transform transition-all duration-500 hover:shadow-2xl"
                >
                    {/* Decorative top border */}
                    <div className="h-1 w-full bg-gradient-to-r from-green-400 to-teal-500 mb-6 rounded-full"></div>
                    {/* Countdown timer - only rendered on client */}
                    {isClient && (
                        <>
                            <EventCounter />
                        </>
                    )}
                    {/* Date and time */}
                    <motion.div
                        variants={fadeIn("up", "spring", 0.3, 0.5)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="bg-green-100 rounded-2xl p-5 md:p-6 text-center mb-8 border-2 border-green-300 shadow-lg"
                    >
                        <p className="text-gray-800 font-medium text-lg md:text-xl mb-3">
                            <span className="text-green-600 font-bold text-xl md:text-2xl underline underline-offset-4">২২ ই আগস্ট, শুক্রবার</span>
                        </p>
                        <p className="text-gray-800 font-medium text-base md:text-lg">
                            সকাল <span className="text-green-600 font-bold">৮ টা</span> থেকে দুপুর <span className="text-green-600 font-bold">১২ টা</span> পর্যন্ত
                        </p>
                        <p className="text-gray-600 mt-3 text-base md:text-lg">দেশের অভিজ্ঞ চিকিৎসকদের সমন্বয়ে অনুষ্ঠিত হবে একটি বিশেষ মেডিকেল ক্যাম্প।</p>
                    </motion.div>
                    {/* Location */}
                    <motion.div
                        variants={fadeIn("right", "spring", 0.3, 0.75)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="bg-white rounded-2xl p-5 md:p-6 mb-8 shadow-lg border-2 border-green-200 flex items-start"
                    >
                        <div className="bg-gradient-to-r from-green-500 to-teal-500 p-3 rounded-full mr-4 shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-lg md:text-xl font-bold text-green-700 mb-2">📍 স্থান:</h2>
                            <p className="text-gray-800 text-base md:text-lg">
                                চালাবন চৈতি গার্মেন্টস সংলগ্ন,
                                <span className="font-semibold text-green-700"> দারুল আজহার মডেল মাদরাসা প্রাঙ্গন</span>
                            </p>
                        </div>
                    </motion.div>
                    {/* Services */}
                    <motion.div
                        variants={fadeIn("left", "spring", 0.3, 0.75)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="bg-green-50 rounded-2xl p-5 md:p-6 mb-8 border-2 border-green-200"
                    >
                        <h2 className="text-lg md:text-xl font-bold text-green-700 mb-4 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            যা যা প্রদান করা হবে:
                        </h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                                'সাধারণ স্বাস্থ্যপরীক্ষা',
                                'প্রাথমিক চিকিৎসা',
                                'প্রেসক্রিপশন ও পরামর্শ',
                                'বিনামূল্যে ওষুধ বিতরণ'
                            ].map((service, index) => (
                                <motion.li
                                    key={index}
                                    variants={fadeIn("up", "spring", 0.1 * index, 0.75)}
                                    whileHover={{ y: -5, scale: 1.03 }}
                                    className="flex items-center bg-white rounded-xl p-3 md:p-4 shadow-md"
                                >
                                    <div className="bg-green-100 rounded-full p-1.5 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-800">{service}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    {/* Sponsor */}
                    <motion.div
                        variants={fadeIn("right", "spring", 0.3, 0.75)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="bg-white rounded-2xl p-5 md:p-6 mb-8 shadow-lg border-2 border-green-200"
                    >
                        <h2 className="text-lg md:text-xl font-bold text-green-700 mb-4 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                            এই মহৎ উদ্যোগের পৃষ্ঠপোষক:
                        </h2>
                        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-4 md:p-5 border-2 border-green-200">
                            <p className="text-gray-800 text-base md:text-lg">
                                আপনাদেরই প্রিয় মুখ,
                                <span className="text-green-700 font-semibold"> অধ্যাপক মাওলানা সাইফ উদ্দিন আহমদ খন্দকার</span>,
                                ঢাকা-১৮ আসনে খেলাফত মজলিস মনোনীত
                                <span className="text-green-700 font-bold"> "দেয়াল ঘড়ি মার্কা"</span> সংসদ সদস্য পদপ্রার্থী।
                            </p>
                        </div>
                    </motion.div>
                    {/* Organizers */}
                    <motion.div
                        variants={fadeIn("up", "spring", 0.3, 0.75)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="text-center mb-8"
                    >
                        <div className="inline-block bg-gradient-to-r from-green-100 to-teal-100 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 shadow-md border border-green-200">
                            <p className="text-gray-800 font-medium text-base md:text-lg">
                                আয়োজনে:
                                <span className="text-green-700 font-semibold"> খেলাফত মজলিস, ঢাকা মহানগরী উত্তর</span>
                            </p>
                        </div>
                        <div className="inline-block bg-gradient-to-r from-teal-100 to-green-100 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-md border border-green-200">
                            <p className="text-gray-800 font-medium text-base md:text-lg">
                                সহযোগিতায়:
                                <span className="text-green-700 font-semibold"> হাফেজ্জী হুজুর (র.) সেবা ফাউন্ডেশন</span>
                            </p>
                        </div>
                    </motion.div>
                    {/* Contact */}
                    <motion.div
                        variants={fadeIn("up", "spring", 0.3, 0.75)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-4 md:p-5 text-center shadow-xl"
                    >
                        <p className="text-white font-semibold flex flex-col md:flex-row items-center justify-center text-base md:text-lg">
                            <span className="flex items-center mb-2 md:mb-0 md:mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                যোগাযোগ:
                            </span>
                            <Link href={"tel:+8801608026999"} className="bg-white text-green-700 px-4 py-2 rounded-full font-bold text-base md:text-lg shadow-lg">
                                ০১৬০৮-০২৬৯৯৯
                            </Link>
                        </p>
                    </motion.div>
                    {/* Decorative bottom border */}
                    <div className="h-1 w-full bg-gradient-to-r from-green-400 to-teal-500 mt-8 rounded-full"></div>
                </div>


            </div>
        </div>
    )
}