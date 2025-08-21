"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function EventCounter() {
    const [isClient, setIsClient] = useState(false);
    const [daysLeft, setDaysLeft] = useState(0);
    const [hoursLeft, setHoursLeft] = useState(0);
    const [minutesLeft, setMinutesLeft] = useState(0);
    const [secondsLeft, setSecondsLeft] = useState(0);
    const [eventStatus, setEventStatus] = useState("upcoming");
    // "upcoming" | "running" | "ended"

    useEffect(() => {
        setIsClient(true);

        const calculateTimeLeft = () => {
            const currentYear = new Date().getFullYear();

            // বাংলাদেশ সময় অনুযায়ী ইভেন্টের তারিখ সেট করলাম
            const eventStart = new Date(currentYear, 7, 22, 8, 0, 0); // 22 Aug, 8:00 AM (Local BD Time)
            const eventEnd = new Date(currentYear, 7, 22, 12, 0, 0);   // 22 Aug, 12:00 PM (Local BD Time)
            const now = new Date();

            if (now < eventStart) {
                setEventStatus("upcoming");
                const difference = eventStart.getTime() - now.getTime();
                setDaysLeft(Math.floor(difference / (1000 * 60 * 60 * 24)));
                setHoursLeft(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
                setMinutesLeft(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
                setSecondsLeft(Math.floor((difference % (1000 * 60)) / 1000));
            } else if (now >= eventStart && now < eventEnd) {
                setEventStatus("running");
            } else {
                setEventStatus("ended");
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            {isClient && (
                <>
                    {/* Upcoming Event */}
                    {eventStatus === "upcoming" && (
                        <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 text-center mb-6 sm:mb-8 md:mb-10 shadow-xl max-w-6xl mx-auto">
                            <p className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4 md:mb-5">
                                মেডিকেল ক্যাম্পটি শুরু হতে সময় বাকি:
                            </p>
                            <div className="flex justify-center space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4">
                                {[
                                    { value: daysLeft, label: "দিন" },
                                    { value: hoursLeft, label: "ঘন্টা" },
                                    { value: minutesLeft, label: "মিনিট" },
                                    { value: secondsLeft, label: "সেকেন্ড" }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-2 sm:p-3 md:p-4 min-w-[50px] sm:min-w-[60px] md:min-w-[70px] lg:min-w-[80px] shadow-lg transition-all duration-300 hover:bg-opacity-30"
                                    >
                                        <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
                                            {item.value}
                                        </div>
                                        <div className="text-white text-xs sm:text-xs md:text-sm mt-1 sm:mt-1 md:mt-2">
                                            {item.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Running Event */}
                    {eventStatus === "running" && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="relative bg-green-600 rounded-2xl p-6 text-center mb-6 shadow-xl max-w-6xl mx-auto overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-green-400 blur-2xl opacity-40 animate-pulse"></div>
                            <motion.p
                                initial={{ y: -20 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="relative text-white text-3xl md:text-4xl font-extrabold drop-shadow-xl tracking-wide"
                            >
                                🟢 মেডিকেল ক্যাম্পটি চলমান
                            </motion.p>
                        </motion.div>
                    )}

                    {/* Ended Event */}
                    {eventStatus === "ended" && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="relative bg-red-600 rounded-2xl p-6 text-center mb-6 shadow-xl max-w-6xl mx-auto overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-red-400 blur-2xl opacity-40 animate-pulse"></div>
                            <motion.p
                                initial={{ y: -20 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="relative text-white text-3xl md:text-4xl font-extrabold drop-shadow-xl tracking-wide"
                            >
                                🔴 মেডিকেল ক্যাম্পটি শেষ হয়েছে
                            </motion.p>
                        </motion.div>
                    )}
                </>
            )}
        </div>
    );
}
