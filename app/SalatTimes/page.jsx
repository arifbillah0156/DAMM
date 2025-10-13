"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMosque, FaSun, FaMoon, FaCloudSun, FaPrayingHands, FaStarAndCrescent, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { format, addDays, startOfWeek, endOfWeek, eachDayOfInterval, isSameDay, startOfMonth, endOfMonth, addMonths, subMonths, eachWeekOfInterval } from "date-fns";
import { bn } from "date-fns/locale";

// Custom Loading Component
function LoadingSpinner() {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="text-6xl text-blue-600"
            >
                <FaStarAndCrescent />
            </motion.div>
        </div>
    );
}

// সময় ফরম্যাটিং ফাংশন (24 ঘন্টা থেকে 12 ঘন্টায় রূপান্তর)
function formatTime(time24) {
    if (!time24) return "";

    // সময় থেকে ঘন্টা এবং মিনিট আলাদা করা
    const [hours, minutes] = time24.split(':').map(Number);

    // 12-ঘন্টার ফরম্যাটে রূপান্তর
    const period = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12; // 0 হলে 12 হবে
    const formattedMinutes = minutes.toString().padStart(2, '0');

    // ফরম্যাট করা সময় রিটার্ন করা
    return `${hours12}:${formattedMinutes} ${period}`;
}

// Month and Year Selector Component
function MonthYearSelector({ currentMonth, setCurrentMonth, isMobile = false }) {
    const months = [
        'জানুয়ারী', 'ফেব্রুয়ারী', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
        'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
    ];
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 21 }, (_, i) => currentYear - 10 + i); // 10 years back and 10 years forward
    const handleMonthChange = (e) => {
        const monthIndex = months.indexOf(e.target.value);
        setCurrentMonth(new Date(currentMonth.getFullYear(), monthIndex, 1));
    };
    const handleYearChange = (e) => {
        setCurrentMonth(new Date(parseInt(e.target.value), currentMonth.getMonth(), 1));
    };
    return (
        <motion.div
            className={`flex gap-2 ${isMobile ? 'flex-col' : ''}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <select
                value={months[currentMonth.getMonth()]}
                onChange={handleMonthChange}
                className={`px-3 py-2 border rounded-md bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${isMobile ? 'text-sm' : ''}`}
            >
                {months.map(month => (
                    <option key={month} value={month}>{month}</option>
                ))}
            </select>
            <select
                value={currentMonth.getFullYear()}
                onChange={handleYearChange}
                className={`px-3 py-2 border rounded-md bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${isMobile ? 'text-sm' : ''}`}
            >
                {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>
        </motion.div>
    );
}

// Desktop View Component
function DesktopView({
    currentMonth,
    setCurrentMonth,
    selectedDate,
    setSelectedDate,
    prayerTimes,
    hijriDate,
    isLoadingPrayerTimes
}) {
    const prayerNames = [
        {
            key: "Fajr",
            name: "ফজর",
            icon: <FaMoon className="text-indigo-600" />,
            color: "from-indigo-500 to-purple-600",
            endTimeKey: "Sunrise",
            description: "ভোরের নামাজ"
        },
        {
            key: "Dhuhr",
            name: "যোহর",
            icon: <FaSun className="text-orange-500" />,
            color: "from-orange-400 to-red-500",
            endTimeKey: "Asr",
            description: "দুপুরের নামাজ"
        },
        {
            key: "Asr",
            name: "আসর",
            icon: <FaCloudSun className="text-amber-500" />,
            color: "from-amber-400 to-yellow-600",
            endTimeKey: "Maghrib",
            description: "বিকেলের নামাজ"
        },
        {
            key: "Maghrib",
            name: "মাগরিব",
            icon: <FaSun className="text-red-500" />,
            color: "from-red-500 to-pink-600",
            endTimeKey: "Isha",
            description: "সূর্যাস্তের নামাজ"
        },
        {
            key: "Isha",
            name: "ইশা",
            icon: <FaMoon className="text-blue-800" />,
            color: "from-blue-700 to-indigo-900",
            endTimeKey: "Midnight",
            description: "রাতের নামাজ"
        }
    ];
    const goToPreviousMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };
    const goToNextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };
    const goToCurrentMonth = () => {
        setCurrentMonth(new Date());
    };
    // Generate calendar days
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });
    const days = [];
    let currentDate = startDate;
    while (currentDate <= endDate) {
        days.push(new Date(currentDate));
        currentDate = addDays(currentDate, 1);
    }
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };
    return (
        <motion.div
            className="hidden md:flex flex-col justify-center lg:flex-row gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Calendar Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full lg:w-2/5 bg-white rounded-2xl shadow-xl p-6"
            >
                <div className="flex justify-between items-center mb-6">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100"
                        onClick={goToPreviousMonth}
                    >
                        <FaChevronLeft />
                    </motion.button>
                    <div className="text-center">
                        <MonthYearSelector currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-2 text-sm text-blue-600 hover:text-blue-800"
                            onClick={goToCurrentMonth}
                        >
                            বর্তমান মাসে যান
                        </motion.button>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100"
                        onClick={goToNextMonth}
                    >
                        <FaChevronRight />
                    </motion.button>
                </div>
                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                    {["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহস্পতি", "শুক্র", "শনি"].map((day, index) => (
                        <div key={index} className="text-center text-sm font-medium text-gray-500 py-2">
                            {day}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                    {days.map((day, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`h-12 flex items-center justify-center rounded-lg cursor-pointer transition-colors ${isSameDay(day, new Date())
                                ? 'bg-blue-500 text-white'
                                : isSameDay(day, selectedDate)
                                    ? 'bg-indigo-500 text-white'
                                    : day.getMonth() !== currentMonth.getMonth()
                                        ? 'text-gray-300'
                                        : 'hover:bg-blue-100'
                                }`}
                            onClick={() => setSelectedDate(day)}
                        >
                            {format(day, "d")}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            {/* Prayer Times Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-xl lg:w-3/5 bg-white rounded-2xl shadow-xl p-6"
            >
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">
                            {format(selectedDate, "EEEE, d MMMM yyyy", { locale: bn })}
                        </h2>
                        {hijriDate && (
                            <p className="text-gray-600">
                                {hijriDate.day} {hijriDate.month.bn} {hijriDate.year} হিজরী
                            </p>
                        )}
                    </div>
                    <motion.div
                        className="text-3xl text-blue-600"
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, 0, -5, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        <FaMosque />
                    </motion.div>
                </div>
                {isLoadingPrayerTimes ? (
                    <div className="flex justify-center items-center h-64">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="text-4xl text-blue-600"
                        >
                            <FaStarAndCrescent />
                        </motion.div>
                    </div>
                ) : prayerTimes ? (
                    <div className="space-y-4">
                        <AnimatePresence>
                            {prayerNames.map((prayer, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                    className={`p-4 rounded-xl ${index % 2 === 0 ? 'bg-blue-50' : 'bg-indigo-50'} border border-gray-100`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <motion.div
                                                className="mr-3 text-xl"
                                                whileHover={{ scale: 1.2 }}
                                            >
                                                {prayer.icon}
                                            </motion.div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-800">{prayer.name}</h3>
                                                <p className="text-sm text-gray-600">{prayer.description}</p>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-xl font-bold text-gray-800">
                                                {formatTime(prayerTimes[prayer.key])} - {formatTime(prayerTimes[prayer.endTimeKey])}
                                            </div>
                                            <div className="text-xs text-gray-500">শুরু - শেষ</div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className="text-center py-8">
                        <p className="text-gray-600">নামাজের সময়সূচী লোড করা যাচ্ছে না</p>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
}

// Mobile View Component
function MobileView({
    currentMonth,
    setCurrentMonth,
    selectedDate,
    setSelectedDate,
    prayerTimes,
    hijriDate,
    isLoadingPrayerTimes
}) {
    const prayerNames = [
        {
            key: "Fajr",
            name: "ফজর",
            icon: <FaMoon className="text-indigo-600" />,
            color: "from-indigo-500 to-purple-600",
            endTimeKey: "Sunrise",
            description: "ভোরের নামাজ"
        },
        {
            key: "Dhuhr",
            name: "যোহর",
            icon: <FaSun className="text-orange-500" />,
            color: "from-orange-400 to-red-500",
            endTimeKey: "Asr",
            description: "দুপুরের নামাজ"
        },
        {
            key: "Asr",
            name: "আসর",
            icon: <FaCloudSun className="text-amber-500" />,
            color: "from-amber-400 to-yellow-600",
            endTimeKey: "Maghrib",
            description: "বিকেলের নামাজ"
        },
        {
            key: "Maghrib",
            name: "মাগরিব",
            icon: <FaSun className="text-red-500" />,
            color: "from-red-500 to-pink-600",
            endTimeKey: "Isha",
            description: "সূর্যাস্তের নামাজ"
        },
        {
            key: "Isha",
            name: "ইশা",
            icon: <FaMoon className="text-blue-800" />,
            color: "from-blue-700 to-indigo-900",
            endTimeKey: "Midnight",
            description: "রাতের নামাজ"
        }
    ];
    const goToPreviousMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };
    const goToNextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };
    const goToCurrentMonth = () => {
        setCurrentMonth(new Date());
    };
    // Generate calendar days
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });
    const days = [];
    let currentDate = startDate;
    while (currentDate <= endDate) {
        days.push(new Date(currentDate));
        currentDate = addDays(currentDate, 1);
    }
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };
    return (
        <motion.div
            className="md:hidden flex flex-col gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Calendar Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="bg-white rounded-2xl shadow-xl p-4"
            >
                <div className="flex justify-between items-center mb-4">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100"
                        onClick={goToPreviousMonth}
                    >
                        <FaChevronLeft />
                    </motion.button>
                    <div className="text-center">
                        <MonthYearSelector currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} isMobile={true} />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-2 text-sm text-blue-600 hover:text-blue-800"
                            onClick={goToCurrentMonth}
                        >
                            বর্তমান মাসে যান
                        </motion.button>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100"
                        onClick={goToNextMonth}
                    >
                        <FaChevronRight />
                    </motion.button>
                </div>
                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                    {["র", "সো", "ম", "বু", "বৃ", "শু", "শ"].map((day, index) => (
                        <div key={index} className="text-center text-xs font-medium text-gray-500 py-1">
                            {day}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                    {days.map((day, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`h-10 flex items-center justify-center rounded-lg cursor-pointer transition-colors ${isSameDay(day, new Date())
                                ? 'bg-blue-500 text-white'
                                : isSameDay(day, selectedDate)
                                    ? 'bg-indigo-500 text-white'
                                    : day.getMonth() !== currentMonth.getMonth()
                                        ? 'text-gray-300'
                                        : 'hover:bg-blue-100'
                                }`}
                            onClick={() => setSelectedDate(day)}
                        >
                            {format(day, "d")}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            {/* Prayer Times Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="bg-white rounded-2xl shadow-xl p-4"
            >
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">
                            {format(selectedDate, "EEEE, d MMMM", { locale: bn })}
                        </h2>
                        {hijriDate && (
                            <p className="text-gray-600 text-sm">
                                {hijriDate.day} {hijriDate.month.bn} {hijriDate.year} হিজরী
                            </p>
                        )}
                    </div>
                    <motion.div
                        className="text-2xl text-blue-600"
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, 0, -5, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        <FaMosque />
                    </motion.div>
                </div>
                {isLoadingPrayerTimes ? (
                    <div className="flex justify-center items-center h-32">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="text-3xl text-blue-600"
                        >
                            <FaStarAndCrescent />
                        </motion.div>
                    </div>
                ) : prayerTimes ? (
                    <div className="space-y-3">
                        <AnimatePresence>
                            {prayerNames.map((prayer, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                    className={`p-3 rounded-xl ${index % 2 === 0 ? 'bg-blue-50' : 'bg-indigo-50'} border border-gray-100`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <motion.div
                                                className="mr-2"
                                                whileHover={{ scale: 1.2 }}
                                            >
                                                {prayer.icon}
                                            </motion.div>
                                            <div>
                                                <h3 className="font-semibold text-gray-800">{prayer.name}</h3>
                                                <p className="text-xs text-gray-600">{prayer.description}</p>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-lg font-bold text-gray-800">
                                                {formatTime(prayerTimes[prayer.key])} - {formatTime(prayerTimes[prayer.endTimeKey])}
                                            </div>
                                            <div className="text-xs text-gray-500">শুরু - শেষ</div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className="text-center py-6">
                        <p className="text-gray-600">নামাজের সময়সূচী লোড করা যাচ্ছে না</p>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
}

export default function PrayerTimesCalendar() {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [prayerTimes, setPrayerTimes] = useState(null);
    const [hijriDate, setHijriDate] = useState(null);
    const [isLoadingPrayerTimes, setIsLoadingPrayerTimes] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPrayerTimes() {
            setIsLoadingPrayerTimes(true);
            setError(null);
            try {
                const dateStr = format(selectedDate, 'dd-MM-yyyy');
                const res = await fetch(
                    `https://api.aladhan.com/v1/timingsByCity/${dateStr}?city=Dhaka&country=Bangladesh&method=1`
                );
                const data = await res.json();
                if (data.code === 200) {
                    setPrayerTimes(data.data.timings);
                    setHijriDate(data.data.date.hijri);
                } else {
                    throw new Error(`API error: ${data.status}`);
                }
            } catch (error) {
                console.error("Error fetching prayer times:", error);
                setError(error.message);
            } finally {
                setIsLoadingPrayerTimes(false);
            }
        }
        fetchPrayerTimes();
    }, [selectedDate]);

    if (error) {
        return (
            <motion.div
                className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md"
                >
                    <motion.div
                        className="text-5xl text-red-500 mb-4"
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, 0, -10, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        <FaStarAndCrescent />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">নামাজের সময়সূচী লোড করা যাচ্ছে না</h2>
                    <p className="text-gray-600 mb-4">{error || "দুঃখিত, সার্ভার থেকে ডেটা আনতে সমস্যা হচ্ছে।"}</p>
                    <p className="text-gray-500 text-sm mb-6">অনুগ্রহ করে কিছুক্ষণ পরে আবার চেষ্টা করুন।</p>
                    <div className="flex gap-3 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-medium shadow-md"
                            onClick={() => window.location.reload()}
                        >
                            পুনরায় চেষ্টা করুন
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        );
    }

    return (
        <motion.section
            className="min-h-screen py-8 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-8"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-2 shadow-lg"
                    >
                        <FaMosque className="text-white text-3xl" />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-800 mb-3 pt-4">
                        নামাজের সময়সূচী
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">ঢাকা, বাংলাদেশ</p>
                </motion.div>

                {/* Desktop View */}
                <DesktopView
                    currentMonth={currentMonth}
                    setCurrentMonth={setCurrentMonth}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    prayerTimes={prayerTimes}
                    hijriDate={hijriDate}
                    isLoadingPrayerTimes={isLoadingPrayerTimes}
                />

                {/* Mobile View */}
                <MobileView
                    currentMonth={currentMonth}
                    setCurrentMonth={setCurrentMonth}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    prayerTimes={prayerTimes}
                    hijriDate={hijriDate}
                    isLoadingPrayerTimes={isLoadingPrayerTimes}
                />

                {/* Footer */}
                {/* <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 text-center text-gray-600"
                >
                    <p>তথ্য সরবরাহ করেছে আলাদান এপিআই • সময়সূচী সামান্য ভিন্ন হতে পারে</p>
                </motion.div> */}
            </div>
        </motion.section>
    );
}