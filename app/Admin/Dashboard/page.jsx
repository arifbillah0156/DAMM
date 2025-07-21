'use client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';




export default function DashboardPage() {
    const { register, handleSubmit, reset } = useForm();
    const [submittedData, setSubmittedData] = useState(null);

    const router = useRouter();


    const getCookie = (name) => {
        const cookies = document.cookie.split('; ');
        for (const cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split('=');
            if (cookieName === name) return decodeURIComponent(cookieValue);
        }
        return null;
    }

    const onSubmit = (data) => {
        setSubmittedData(data);
        reset();
    };

    useEffect(() => {

        const cookieEmail = getCookie('email');
        if (cookieEmail) console.log(cookieEmail);
        const cookiePass = getCookie('password');
        if (cookiePass) console.log(cookiePass);

        if (cookieEmail !== "arifbillah0156@gmail.com" && cookiePass !== "arif") {
            router.push('/Admin');
        }

    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-100 via-indigo-100 to-white p-4 md:p-10">
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
                            placeholder="যেমন: /notices/admission-2025.pdf"
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
        </div>
    );
}
