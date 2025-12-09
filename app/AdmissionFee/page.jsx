// import React from "react";
// import Section_1 from "./Section_1";
// import Section_2 from "./Section_2";
// import Section_3 from "./Section_3";
// import Section_4 from "./Section_4";

// export default function AdmissionFees() {
//     return (
//         <div className="px-4 py-8 max-w-5xl lg:text-lg mx-auto text-gray-900 mt-4">
//             {/* <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white bg-gradient-to-r from-blue-900 to-indigo-800 py-3 rounded">
//                 Addmission Fee
//             </h2> */}

//             <Section_1 />
//             <Section_2 />
//             <Section_3 />
//             <Section_4 />






//         </div>
//     );
// }
"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import ImageViewer from '@/components/Others/ImageViewer';

const FeeStructure = () => {
    const [activeTab, setActiveTab] = useState('admission');

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const tableRowVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.3
            }
        })
    };

    // Fee data
    const admissionFees = [
        { description: 'ভর্তি ফি', residential: '9000', daycare: '9000', nonResidential: '9000' },
        { description: 'সংস্থাপন ফি', residential: '5000', daycare: '3000', nonResidential: '–' },
        { description: 'সেশন চার্জ', residential: '9000', daycare: '9000', nonResidential: '9000' },
        { description: 'মোট', residential: '23500', daycare: '21000', nonResidential: '18000', isTotal: true }
    ];

    const monthlyFees = [
        { description: 'টিউশন ফি', residentialHifz: '2500', residentialAcademic: '3000', daycareWithFood: '3500', daycareWithoutFood: '3500' },
        { description: 'হোস্টেল এন্ড ডাইনিং ফি', residentialHifz: '6000', residentialAcademic: '6000', daycareWithFood: '3500', daycareWithoutFood: '1500' },
        { description: 'একাডেমিক কেয়ার', residentialHifz: '2500', residentialAcademic: '2500', daycareWithFood: '2500', daycareWithoutFood: '2500' },
        { description: 'মোট', residentialHifz: '11000', residentialAcademic: '11500', daycareWithFood: '9500', daycareWithoutFood: '7500', isTotal: true }
    ];

    const nonResidentialFees = [
        { description: 'টিউশন ফি', preHifz: '2500', generalFirstSecond: '3500', generalThirdAlim: '4000' },
        { description: 'মেইনটেন্যান্স', preHifz: '500', generalFirstSecond: '–', generalThirdAlim: '–' },
        { description: 'প্রি-হিফয (নূরাণী/নাযেরা) ক্লাস', preHifz: '1000', generalFirstSecond: '1000', generalThirdAlim: '1000' },
        { description: 'মোট', preHifz: '4000', generalFirstSecond: '4500', generalThirdAlim: '5000', isTotal: true }
    ];

    const otherFees = [
        { icon: 'fa-solid fa-arrows-to-eye', text: 'ভর্তি ফরম - 200/-' },
        { icon: 'fa-solid fa-arrows-to-eye', text: 'বই, খাতা, ডায়েরি ইত্যাদি বাবদ শ্রেণি অনুযায়ি ...' },
        { icon: 'fa-solid fa-arrows-to-eye', text: 'মাদরাসা ইউনিফর্ম: প্রতি সেট প্লে থেকে দ্বিতীয় শ্রেণি - 1400/-' },
        { icon: 'fa-solid fa-arrows-to-eye', text: 'মাদরাসা ইউনিফর্ম: প্রতি সেট তৃতীয় থেকে আলিম শ্রেণি - 1600/-' },
        { icon: 'fa-solid fa-arrows-to-eye', text: 'পরিচয়পত্র, সিলেবাস, আইসিটি ও লাইব্রেরী ফি বাবদ বার্ষিক - 800/-' },
        { icon: 'fa-solid fa-arrows-to-eye', text: 'ইংলিশ অ্যান্ড এ্যারাবিক ল্যাঙ্গুয়েজ কোর্স ফি তৃতীয় থেকে দশম শ্রেণির মাসিক চার্জ - 500/-' },
        { icon: 'fa-solid fa-arrows-to-eye', text: 'পরীক্ষার ফি : প্রতি সেমিস্টারে প্লে থেকে দ্বিতীয় 1000/- এবং তৃতীয় থেকে আলিম 1200/- ' }
    ];

    return (
        <>
            <Head>
                <title>Fee Structure</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-indigo-700 pt-2">মাদরাসার ফি কাঠামো</h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">শিক্ষার্থীদের জন্য বিস্তারিত ফি কাঠামো ও পেমেন্ট তথ্য</p>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-4 rounded-full"></div>
                    </motion.div>

                    {/* Navigation Tabs */}
                    <motion.div
                        className="flex flex-wrap justify-center mb-10 gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {['admission', 'monthly', 'nonResidential', 'other'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${activeTab === tab
                                    ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                                    }`}
                            >
                                {tab === 'admission' && 'ভর্তিকালিন ফি'}
                                {tab === 'monthly' && 'মাসিক ফি'}
                                {tab === 'nonResidential' && 'অনাবাসিক ফি'}
                                {tab === 'other' && 'অন্যান্য ফি'}
                            </button>
                        ))}
                    </motion.div>

                    {/* Fee Structure Content */}
                    <motion.div
                        className="bg-white rounded-2xl shadow-xl overflow-hidden"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Admission Fees */}
                        {activeTab === 'admission' && (
                            <motion.div variants={itemVariants} className="p-6">
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-4 rounded-xl shadow-lg">
                                        ভর্তিকালিন ফি
                                    </h2>
                                    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                                        <table className="table-auto w-full min-w-[380px]">
                                            <thead>
                                                <tr className="bg-gradient-to-r from-gray-100 to-gray-200">
                                                    <th className="border border-gray-300 p-3 font-semibold">বিবরণ</th>
                                                    <th className="border border-gray-300 p-3 font-semibold text-center">আবাসিক</th>
                                                    <th className="border border-gray-300 p-3 font-semibold text-center">ডে-কেয়ার</th>
                                                    <th className="border border-gray-300 p-3 font-semibold text-center">অনাবাসিক</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {admissionFees.map((fee, index) => (
                                                    <motion.tr
                                                        key={index}
                                                        custom={index}
                                                        variants={tableRowVariants}
                                                        className={`${fee.isTotal ? 'bg-gradient-to-r from-gray-50 to-gray-100 font-semibold' : 'hover:bg-gray-50'} transition-colors duration-200`}
                                                    >
                                                        <td className="border border-gray-300 p-3">{fee.description}</td>
                                                        <td className="border border-gray-300 p-3 text-center">{fee.residential}</td>
                                                        <td className="border border-gray-300 p-3 text-center">{fee.daycare}</td>
                                                        <td className="border border-gray-300 p-3 text-center">{fee.nonResidential}</td>
                                                    </motion.tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Monthly Fees */}
                        {activeTab === 'monthly' && (
                            <motion.div variants={itemVariants} className="p-6">
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-4 rounded-xl shadow-lg">
                                        মাসিক ফি
                                    </h2>
                                    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                                        <table className="table-auto w-full min-w-[400px]">
                                            <thead>
                                                <tr className="bg-gradient-to-r from-gray-100 to-gray-200">
                                                    <th rowSpan={2} className="border border-gray-300 p-3 font-semibold text-center align-middle">বিবরণ</th>
                                                    <th colSpan={2} className="border border-gray-300 p-3 font-semibold text-center">আবাসিক</th>
                                                    <th colSpan={2} className="border border-gray-300 p-3 font-semibold text-center">ডে-কেয়ার</th>
                                                </tr>
                                                <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                                                    <th className="border border-gray-300 p-3 font-semibold text-center">হিফজ</th>
                                                    <th className="border border-gray-300 p-3 font-semibold text-center">একাডেমিক</th>
                                                    <th className="border border-gray-300 p-3 font-semibold text-center">খাবার সহ</th>
                                                    <th className="border border-gray-300 p-3 font-semibold text-center">খাবার ছাড়া</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {monthlyFees.map((fee, index) => (
                                                    <motion.tr
                                                        key={index}
                                                        custom={index}
                                                        variants={tableRowVariants}
                                                        className={`${fee.isTotal ? 'bg-gradient-to-r from-gray-50 to-gray-100 font-semibold' : 'hover:bg-gray-50'} transition-colors duration-200`}
                                                    >
                                                        <td className="border border-gray-300 p-3">{fee.description}</td>
                                                        <td className="border border-gray-300 p-3 text-center">{fee.residentialHifz}</td>
                                                        <td className="border border-gray-300 p-3 text-center">{fee.residentialAcademic}</td>
                                                        <td className="border border-gray-300 p-3 text-center">{fee.daycareWithFood}</td>
                                                        <td className="border border-gray-300 p-3 text-center">{fee.daycareWithoutFood}</td>
                                                    </motion.tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text-center mt-4 text-gray-600 italic">(নোট: ডে-কেয়ার খাট বরাদ্দ মাসে-১৫০০ টাকা)</p>
                                </div>
                            </motion.div>
                        )}

                        {/* Non-Residential Fees */}
                        {activeTab === 'nonResidential' && (
                            <motion.div variants={itemVariants} className="p-6">
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-4 rounded-xl shadow-lg">
                                        অনাবাসিক ফি
                                    </h2>
                                    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                                        <table className="table-auto w-full min-w-[420px]">
                                            <thead>
                                                <tr className="bg-gradient-to-r from-gray-100 to-gray-200">
                                                    <th rowSpan={3} className="border border-gray-300 p-3 font-semibold text-center align-middle">বিবরণ</th>
                                                    <th colSpan={4} className="border border-gray-300 p-3 font-semibold text-center">অনাবাসিক</th>
                                                </tr>
                                                <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                                                    <th colSpan={1} className="border border-gray-300 p-3 font-semibold text-center">প্রি-হিফজ</th>
                                                    <th colSpan={3} className="border border-gray-300 p-3 font-semibold text-center">জেনারেল</th>
                                                </tr>
                                                <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                                                    <th className="border border-gray-300 p-3 font-semibold text-center">প্লে নার্সারী-কেজি</th>
                                                    <th className="border border-gray-300 p-3 font-semibold text-center">১ম-২য়</th>
                                                    <th className="border border-gray-300 p-3 font-semibold text-center">৩য়-আলিম</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {nonResidentialFees.map((fee, index) => (
                                                    <motion.tr
                                                        key={index}
                                                        custom={index}
                                                        variants={tableRowVariants}
                                                        className={`${fee.isTotal ? 'bg-gradient-to-r from-gray-50 to-gray-100 font-semibold' : 'hover:bg-gray-50'} transition-colors duration-200`}
                                                    >
                                                        <td className="border border-gray-300 p-3">{fee.description}</td>
                                                        <td className="border border-gray-300 p-3 text-center">{fee.preHifz}</td>
                                                        <td className="border border-gray-300 p-3 text-center">{fee.generalFirstSecond}</td>
                                                        <td className="border border-gray-300 p-3 text-center">{fee.generalThirdAlim}</td>
                                                    </motion.tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Other Fees */}
                        {activeTab === 'other' && (
                            <motion.div variants={itemVariants} className="p-6">
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-4 rounded-xl shadow-lg">
                                        অন্যান্য ফি সমূহ
                                    </h2>
                                    <div className="space-y-3">
                                        {otherFees.map((fee, index) => (
                                            <motion.div
                                                key={index}
                                                custom={index}
                                                variants={tableRowVariants}
                                                className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
                                            >
                                                <i className={`${fee.icon} text-blue-600 mt-1 mr-3`}></i>
                                                <p className="text-lg text-gray-800">{fee.text}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="mt-8 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-200">
                                        <p className="text-center italic text-red-600">
                                            বি: দ্র: সেশন চার্জ প্রত্যেক শিক্ষা বর্ষের প্রথমে এককালীন দিতে হবে। উল্লেখিত ফিস পরিবর্তন পরিবর্ধন করার এখতিয়ার কর্তৃপক্ষ কর্তৃক সংরক্ষিত।
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Prospectus */}
                    <div>
                        <ImageViewer src={"/Images/AdmissionFee.jpg"} alt={"AdmissionFee Image"} />
                    </div>

                    {/* Footer Note */}
                    <motion.div
                        className="mt-10 text-center text-gray-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <p>ফি সংক্রান্ত যেকোনো প্রশ্নের জন্য অফিসে যোগাযোগ করুন</p>
                        <div className="mt-2 flex justify-center space-x-4">
                            <Link href={"tel:+8801627449269"} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:opacity-90 transition-opacity shadow-md">
                                <i className="fas fa-phone mr-2"></i> ফোন করুন
                            </Link>
                            <Link href={"mailto:ksua1980@gmail.com"} className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg hover:opacity-90 transition-opacity shadow-md">
                                <i className="fas fa-envelope mr-2"></i> ইমেল করুন
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default FeeStructure;