'use client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { push, ref, set } from "firebase/database";
import { database } from "@/lib/firebase";
import TeacherPostForm from './TeachersGuidelines';
import { motion, AnimatePresence } from 'framer-motion';

export default function DashboardPage() {
    const { register, handleSubmit, reset } = useForm();
    const [submittedData, setSubmittedData] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const router = useRouter();

    const getCookie = (name) => {
        const cookies = document.cookie.split('; ');
        for (const cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split('=');
            if (cookieName === name) return decodeURIComponent(cookieValue);
        }
        return null;
    };

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            const usersRef = ref(database, "Notices");
            const newDataRef = await push(usersRef);
            await set(newDataRef, data);
            reset();
            setSubmittedData(data);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        } catch (error) {
            console.log(error);
            alert("Your Data is not submitted!!");
        } finally {
            setIsSubmitting(false);
        }
    };



    useEffect(() => {
        const cookieEmail = getCookie('email');
        const cookiePass = getCookie('password');
        if (cookieEmail !== process.env.NEXT_PUBLIC_ADMIN_EMAIL && cookiePass !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
            router.push('/Admin');
        } else {
            setShowForm(true);
        }
    }, []);

    return (
        <div>
            {showForm ? (<div><div className='min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 md:p-8'>
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-10"
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-2">অ্যাডমিন ড্যাশবোর্ড</h1>
                        <p className="text-gray-600">নোটিশ এবং শিক্ষক নির্দেশিকা পরিচালনা করুন</p>
                    </motion.div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12'>
                        {/* Left Column - Teacher Guidelines */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden"
                        >
                            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-4 text-center">
                                <h2 className="text-xl font-bold text-white">"Teachers' Guidelines" পোস্ট করুন</h2>
                            </div>
                            <div className="md:p-6">
                                <TeacherPostForm />
                            </div>
                        </motion.div>

                        {/* Right Column - Notice Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="rounded-2xl overflow-hidden"
                        >
                            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-4 text-center">
                                <h2 className="text-xl font-bold text-white">"Official Announcements" আপলোড করুন</h2>
                            </div>

                            {showForm ? (
                                <div className="p-4 md:p-6 bg-white shadow-lg rounded-b-2xl">
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            <label className=" mb-2 font-medium text-gray-700 flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600 mt-[-4px]" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                </svg>
                                                তারিখ
                                            </label>
                                            <input
                                                type="date"
                                                {...register('date', { required: true })}
                                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-300"
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <label className=" mb-2 font-medium text-gray-700 flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600 mt-[-4px]" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                                </svg>
                                                নোটিশের বিষয়
                                            </label>
                                            <input
                                                type="text"
                                                {...register('title', { required: true })}
                                                placeholder="যেমন: ২০২৫ সালের ভর্তি বিজ্ঞপ্তি"
                                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-300"
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <label className=" mb-2 font-medium text-gray-700 flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600 mt-[-4px]" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                                ডাউনলোড লিংক
                                            </label>
                                            <input
                                                type="url"
                                                {...register('link', { required: true })}
                                                placeholder="গুগল ড্রাইভ লিংক..."
                                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-300"
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                            className="w-full pt-4 flex justify-center"
                                        >
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={`w-max py-3 px-8  lg:px-12 rounded-lg font-semibold transition duration-300 flex items-center justify-center ${isSubmitting
                                                    ? 'bg-indigo-400 cursor-not-allowed'
                                                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
                                                    }`}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        সংরক্ষণ হচ্ছে...
                                                    </>
                                                ) : (
                                                    <>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                        সংরক্ষণ করুন
                                                    </>
                                                )}
                                            </button>
                                        </motion.div>
                                    </form>

                                    <AnimatePresence>
                                        {showSuccess && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-green-700">নোটিশ সফলভাবে সংরক্ষিত হয়েছে!</span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {submittedData && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="mt-8 border-t pt-6"
                                        >
                                            <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                                </svg>
                                                সর্বশেষ সংরক্ষিত নোটিশ:
                                            </h3>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <p className="mb-2"><span className="font-medium text-gray-700">তারিখ:</span> <span className="text-gray-900">{submittedData.date}</span></p>
                                                <p className="mb-2"><span className="font-medium text-gray-700">বিষয়:</span> <span className="text-gray-900">{submittedData.title}</span></p>
                                                <p>
                                                    <span className="font-medium text-gray-700">ডাউনলোড লিংক:</span>{' '}
                                                    <a href={submittedData.link} className="text-indigo-600 hover:text-indigo-800 underline inline-flex items-center transition duration-300" target="_blank" rel="noopener noreferrer">
                                                        {submittedData.link}
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                                        </svg>
                                                    </a>
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            ) : (
                                <div className="flex items-center justify-center h-96">
                                    <div className="text-center">
                                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-600"></div>
                                        <p className="mt-4 text-gray-600">অনুমোদন যাচাই করা হচ্ছে...</p>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div></div>) : (<div className="fixed inset-0 flex items-center justify-center bg-lc text-white z-50">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
            </div>)}
        </div>
    );
}