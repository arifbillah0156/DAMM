"use client";
import Image from "next/image";
import prospectus16 from "@/public/Images/Prospectus16.jpg";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/utils/motion";

export default function EducationSystem() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("departments");
    const [isSticky, setIsSticky] = useState(false);

    // Close modal when pressing Escape key
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape") setIsModalOpen(false);
        };
        window.addEventListener("keydown", handleEsc);
        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, []);

    // Handle scroll for sticky navigation
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const sections = [
        { id: "departments", title: "শিক্ষা বিভাগসমূহ" },
        { id: "curriculum", title: "পাঠ্যক্রমের মূলনীতি" },
        { id: "system", title: "শিক্ষাব্যবস্থা" },
        { id: "admission", title: "ভর্তির সময় ও নিয়মাবলী" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="text-center mb-16"
                >
                    <motion.h1
                        variants={textVariant(0.1)}
                        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-indigo-700 mb-4 pt-6"
                    >
                        আমাদের শিক্ষা ব্যবস্থা
                    </motion.h1>
                    <motion.div
                        variants={fadeIn("up", "tween", 0.2, 0.5)}
                        className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"
                    />
                </motion.div>

                {/* Sticky Navigation Tabs */}
                <div className={`${isSticky ? 'sticky top-4 z-40' : ''} transition-all duration-300`}>
                    <motion.div
                        variants={fadeIn("up", "tween", 0.3, 0.5)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className={`flex flex-wrap justify-center gap-2 mb-10 ${isSticky ? 'bg-white/90 backdrop-blur-sm py-4 px-6 rounded-2xl shadow-lg' : ''}`}
                    >
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => {
                                    setActiveSection(section.id);
                                    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${activeSection === section.id
                                    ? "bg-gradient-to-r from-blue-700 to-indigo-700 text-white shadow-lg"
                                    : "bg-white text-blue-900 hover:bg-blue-100 shadow"
                                    }`}
                            >
                                {section.title}
                            </button>
                        ))}
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Content Column */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                        className="space-y-8"
                    >
                        {/* Education Departments */}
                        <motion.div
                            variants={fadeIn("right", "tween", 0.2, 0.5)}
                            id="departments"
                            className={`bg-white rounded-2xl shadow-xl p-6 transition-all duration-300 ${activeSection === "departments" ? "ring-2 ring-blue-500" : ""
                                }`}
                        >
                            <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-800 to-indigo-800 p-4 rounded-lg mb-6 flex items-center">
                                <span className="mr-2">📚</span> শিক্ষা বিভাগসমূহ
                            </h2>
                            <ol className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "শিশু শ্রেণী (নাজেরা) শিক্ষাকাল ১বছর+",
                                    "প্রাইমারী (হিফজ বিভাগসহ) শিক্ষাকাল ৫ বছর",
                                    "মাধ্যমিক বিভাগ- শিক্ষাকাল ৫ বছর",
                                    "উচ্চমাধ্যমিক বিভাগ (আলিম) ২ বছর",
                                    "গার্লস বিভাগ-প্লে- নবম ১০ বছর",
                                    "হিফযুল কুরআন বিভাগ – শিক্ষাকাল ৩ বছর পাঠ্যক্রম"
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        variants={fadeIn("up", "tween", 0.1 * index, 0.3)}
                                        whileHover={{ scale: 1.03 }}
                                        className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 flex items-start"
                                    >
                                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                                            {index + 1}
                                        </span>
                                        <span className="text-gray-800">{item}</span>
                                    </motion.li>
                                ))}
                            </ol>
                            <motion.p
                                variants={fadeIn("up", "tween", 0.7, 0.5)}
                                className="mt-6 text-gray-700 bg-indigo-50 p-4 rounded-lg border border-indigo-100"
                            >
                                পৃথিবীর খ্যাতনামা ইসলামী শিক্ষায়তনগুলোর পাঠ্যক্রম এবং বাংলাদেশ মাদরাসা শিক্ষা বোর্ডের মাধ্যমিক ও উচ্চ মাধ্যমিক স্তরের পাঠ্যক্রমের সাথে সামঞ্জস্য বিধান করে আন্তর্জাতিক মানে এর সিলেবাস তৈরী করা হয়েছে।
                            </motion.p>
                        </motion.div>

                        {/* Curriculum Principles */}
                        <motion.div
                            variants={fadeIn("right", "tween", 0.3, 0.5)}
                            id="curriculum"
                            className={`bg-white rounded-2xl shadow-xl p-6 transition-all duration-300 ${activeSection === "curriculum" ? "ring-2 ring-blue-500" : ""
                                }`}
                        >
                            <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-800 to-indigo-800 p-4 rounded-lg mb-6 flex items-center">
                                <span className="mr-2">🎓</span> পাঠ্যক্রমের মূলনীতি
                            </h2>
                            <motion.p
                                variants={fadeIn("up", "tween", 0.1, 0.4)}
                                className="text-gray-700 mb-6 bg-blue-50 p-4 rounded-lg"
                            >
                                জ্ঞানের শাখা প্রশাখাগুলোকে প্রধানত তিন ভাগে ভাগ করা হয়েছে। যথা:
                                (১) ধর্মবিজ্ঞান (২) মানব বিজ্ঞান (৩) প্রকৃতি বিজ্ঞান। এ শাখাগুলোর সবই ধর্মবিজ্ঞানের মাধ্যমে
                                জ্ঞানের প্রকৃত উৎস আল্লাহ পাকের সাথে সম্পর্কিত।
                            </motion.p>
                            <div className="space-y-4">
                                {[
                                    {
                                        title: "ধর্মবিজ্ঞান",
                                        icon: "🕌",
                                        color: "bg-blue-100 border-blue-300",
                                        content: "তাফসীরুল কুরআন, হাদীস, ফিকহ, উসূলে ফিকাহ, আরবী সাহিত্য, আরবী কথোপকথন, আক্বীদা, বালাগাহ, ইসলামী সংস্কৃতি ও দর্শন।"
                                    },
                                    {
                                        title: "মানব বিজ্ঞান",
                                        icon: "👥",
                                        color: "bg-indigo-100 border-indigo-300",
                                        content: "বাংলা, ইংরেজি, ভূগোল, ইতিহাস, অর্থনীতি ও সমাজ বিজ্ঞান।"
                                    },
                                    {
                                        title: "প্রকৃতি বিজ্ঞান",
                                        icon: "🔬",
                                        color: "bg-green-100 border-green-300",
                                        content: "গণিত, রসায়ন, বিজ্ঞান, পদার্থ বিজ্ঞান, জীব বিজ্ঞান, কম্পিউটার ও স্বাস্থ্য বিজ্ঞান।"
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeIn("up", "tween", 0.2 * index, 0.4)}
                                        whileHover={{ y: -5 }}
                                        className={`${item.color} border rounded-xl p-5 transition-all duration-300`}
                                    >
                                        <h3 className="text-xl font-bold text-gray-800 flex items-center mb-3">
                                            <span className="text-2xl mr-2">{item.icon}</span>
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-700">{item.content}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Education System */}
                        <motion.div
                            variants={fadeIn("right", "tween", 0.4, 0.5)}
                            id="system"
                            className={`bg-white rounded-2xl shadow-xl p-6 transition-all duration-300 ${activeSection === "system" ? "ring-2 ring-blue-500" : ""
                                }`}
                        >
                            <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-800 to-indigo-800 p-4 rounded-lg mb-6 flex items-center">
                                <span className="mr-2">🏫</span> শিক্ষাব্যবস্থা
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <motion.div
                                    variants={fadeIn("up", "tween", 0.1, 0.3)}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-blue-50 p-5 rounded-xl border border-blue-100"
                                >
                                    <h3 className="font-bold text-lg text-blue-800 mb-3 flex items-center">
                                        <span className="mr-2">⏰</span> সময়সূচী
                                    </h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            <span>আবাসিক ছাত্ররা ২৪ ঘন্টাই শিক্ষকগণের নিয়ন্ত্রণে ও পর্যবেক্ষণে থাকে।</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            <span>ডে-কেয়ার ছাত্ররা সকাল ৮:০০ থেকে রাত ৯:০০ পর্যন্ত।</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            <span>শিক্ষাবর্ষঃ জানুয়ারি মাস থেকে ডিসেম্বর মাস পর্যন্ত।</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            <span>বছরে ৩টি সেমিস্টার, প্রত্যেক সেমিস্টারের শেষে পরীক্ষা ও ফলাফল প্রদান।</span>
                                        </li>
                                    </ul>
                                </motion.div>
                                <motion.div
                                    variants={fadeIn("up", "tween", 0.2, 0.3)}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-indigo-50 p-5 rounded-xl border border-indigo-100"
                                >
                                    <h3 className="font-bold text-lg text-indigo-800 mb-3 flex items-center">
                                        <span className="mr-2">📅</span> ছুটি
                                    </h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start">
                                            <span className="text-indigo-500 mr-2">•</span>
                                            <span>ঈদুল ফিতর - ১২ দিন</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-indigo-500 mr-2">•</span>
                                            <span>ঈদুল আযহা - ১২ দিন</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-indigo-500 mr-2">•</span>
                                            <span>১ম সেমিস্টার শেষে - ৮ দিন</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-indigo-500 mr-2">•</span>
                                            <span>২য় সেমিস্টার মধ্যকালীন - ৮ দিন</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-indigo-500 mr-2">•</span>
                                            <span>জাতীয় ও আন্তর্জাতিক দিবসে ক্লাস বন্ধ থাকবে।</span>
                                        </li>
                                    </ul>
                                </motion.div>
                            </div>
                            <motion.div
                                variants={fadeIn("up", "tween", 0.3, 0.3)}
                                className="bg-green-50 p-5 rounded-xl border border-green-100"
                            >
                                <h3 className="font-bold text-lg text-green-800 mb-3 flex items-center">
                                    <span className="mr-2">✨</span> বিশেষ বৈশিষ্ট্য
                                </h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>ধর্মবিজ্ঞানের বিষয়সমূহ আরবী মিডিয়ামে পড়ানো হয়।</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>ইংলিশ বিষয়সমূহ ইংলিশ মিডিয়ামে পড়ানো হয়।</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>প্রতিদিন শরীরচর্চা ও খেলাধূলার ব্যবস্থা রয়েছে।</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>প্রতি মাসে শিক্ষক প্রশিক্ষণ অনুষ্ঠিত হয়।</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>দক্ষ ভিজিটিং টিচার দ্বারা কোর্স তত্ত্বাবধান।</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </motion.div>

                        {/* Admission Info */}
                        <motion.div
                            variants={fadeIn("right", "tween", 0.5, 0.5)}
                            id="admission"
                            className={`bg-white rounded-2xl shadow-xl p-6 transition-all duration-300 ${activeSection === "admission" ? "ring-2 ring-blue-500" : ""
                                }`}
                        >
                            <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-800 to-indigo-800 p-4 rounded-lg mb-6 flex items-center">
                                <span className="mr-2">📝</span> ভর্তির সময় ও নিয়মাবলী
                            </h2>
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                                <ul className="space-y-4 text-gray-700">
                                    {[
                                        "১লা ডিসেম্বর থেকে ১৫ জানুয়ারির মধ্যে ভর্তি। বিশেষ ক্ষেত্রে সারা বছরেও ভর্তি হতে পারে।",
                                        "প্রাইমারী বিভাগে ভর্তির ন্যূনতম বয়স ৪ বছর।",
                                        "মাধ্যমিক বিভাগে ভর্তিতে ভর্তি পরীক্ষা (হিফজ, বাংলা, ইংরেজি, আরবী ও অংক)।",
                                        "ভর্তিতে বয়স, মেধা, আর্থিক সঙ্গতি ও স্বাস্থ্য বিবেচিত হবে।"
                                    ].map((item, index) => (
                                        <motion.li
                                            key={index}
                                            variants={fadeIn("up", "tween", 0.1 * index, 0.3)}
                                            whileHover={{ x: 5 }}
                                            className="flex items-start"
                                        >
                                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                                                {index + 1}
                                            </span>
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                                {/* <motion.div
                                    variants={fadeIn("up", "tween", 0.5, 0.3)}
                                    className="mt-6 text-center"
                                >
                                    <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                                        ভর্তি ফরম ডাউনলোড করুন
                                    </button>
                                </motion.div> */}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Image Column */}
                    <motion.div
                        variants={fadeIn("left", "tween", 0.3, 0.5)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="lg:sticky top-8 h-fit"
                    >
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="relative group">
                                <Image
                                    src={prospectus16}
                                    alt="Education System"
                                    placeholder="blur"
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="bg-white text-blue-800 font-bold py-2 px-6 rounded-full flex items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                                    >
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                        </svg> */}
                                        জুম করে দেখুন
                                    </button>
                                </div>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="absolute top-4 right-4 bg-white/80 hover:bg-white text-blue-800 rounded-full p-2 shadow-md transition-all duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </button>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">আমাদের শিক্ষা ব্যবস্থার বৈশিষ্ট্য</h3>
                                <div className="space-y-4">
                                    {[
                                        { icon: "🌟", title: "আন্তর্জাতিক মানের পাঠ্যক্রম", desc: "বিশ্বমানের শিক্ষা ব্যবস্থা" },
                                        { icon: "👨‍🏫", title: "অভিজ্ঞ শিক্ষকমন্ডলী", desc: "দক্ষ ও অভিজ্ঞ শিক্ষক" },
                                        { icon: "🏆", title: "শ্রেষ্ঠ ফলাফল", desc: "সাফল্যের ধারাবাহিকতা" },
                                        { icon: "🌍", title: "আধুনিক পরিবেশ", desc: "আদর্শ শিক্ষার পরিবেশ" }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            variants={fadeIn("up", "tween", 0.1 * index, 0.3)}
                                            whileHover={{ x: 5 }}
                                            className="flex items-start p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300"
                                        >
                                            <span className="text-2xl mr-3">{item.icon}</span>
                                            <div>
                                                <h4 className="font-bold text-gray-800">{item.title}</h4>
                                                <p className="text-sm text-gray-600">{item.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-xl text-white">
                                    <h3 className="text-xl font-bold mb-3">যোগাযোগ করুন</h3>
                                    <p className="mb-4">আরও তথ্যের জন্য আমাদের সাথে যোগাযোগ করুন</p>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <Link href={"tel:+8801627449269"} className="bg-white text-blue-700 hover:bg-blue-50 font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                                            ফোন করুন
                                        </Link>
                                        <Link href={"mailto:ksua1980@gmail.com"} className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                                            ইমেইল করুন
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Image Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setIsModalOpen(false)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative w-full max-w-5xl max-h-[90vh] overflow-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={prospectus16}
                            alt="Education System Full View"
                            placeholder="blur"
                            className="w-full h-auto rounded-lg"
                        />
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </motion.div>
                </div>
            )}
        </div>
    );
}