'use client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { push, ref, set } from "firebase/database";
import { database } from "@/lib/firebase";




export default function DashboardPage() {
    const { register, handleSubmit, reset } = useForm();
    const [submittedData, setSubmittedData] = useState(null);
    const [showForm, setShowForm] = useState(false)

    const router = useRouter();


    const getCookie = (name) => {
        const cookies = document.cookie.split('; ');
        for (const cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split('=');
            if (cookieName === name) return decodeURIComponent(cookieValue);
        }
        return null;
    }

    const onSubmit = async (data) => {
        try {
            const usersRef = ref(database, "Notices");
            const newDataRef = await push(usersRef);
            await set(newDataRef, data); // ✅ Use data directly

            reset(); // ✅ Reset after saving
            alert("Data submitted successfully!");
        } catch (error) {
            console.log(error);
            alert("Your Data is not submitted!!");
        }
    };

    useEffect(() => {

        const cookieEmail = getCookie('email');
        const cookiePass = getCookie('password');

        if (cookieEmail !== process.env.NEXT_PUBLIC_ADMIN_EMAIL && cookiePass !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
            router.push('/Admin');
        } else {
            setShowForm(true)
        }

    }, [])

    return (
        <div>
            {showForm ? (<div className="min-h-screen bg-gradient-to-br from-sky-100 via-indigo-100 to-white p-4 md:p-10">
                <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-10">
                    <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-indigo-700">নতুন নোটিশ যোগ করুন</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">তারিখ</label>
                            <input
                                type="date"
                                {...register('date', { required: true })}
                                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium text-gray-700">নোটিশের বিষয়</label>
                            <input
                                type="text"
                                {...register('title', { required: true })}
                                placeholder="যেমন: ২০২৫ সালের ভর্তি বিজ্ঞপ্তি"
                                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium text-gray-700">ডাউনলোড লিংক</label>
                            <input
                                type="url"
                                {...register('link', { required: true })}
                                placeholder="গুগল ড্রাইভ লিংক..."
                                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-300"
                        >
                            সংরক্ষণ করুন
                        </button>
                    </form>

                    {submittedData && (
                        <div className="mt-10 border-t pt-6">
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">সাবমিটকৃত ডেটা:</h3>
                            <p><span className="font-medium">তারিখ:</span> {submittedData.date}</p>
                            <p><span className="font-medium">বিষয়:</span> {submittedData.title}</p>
                            <p>
                                <span className="font-medium">ডাউনলোড লিংক:</span>{' '}
                                <a href={submittedData.link} className="text-blue-600 underline" target="_blank">
                                    {submittedData.link}
                                </a>
                            </p>
                        </div>
                    )}
                </div>
            </div>) : (<div>
                <div className="fixed inset-0 flex items-center justify-center bg-lc text-white z-50">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
                </div>
            </div>)}

        </div>

    );
}
