// import React from "react";

// const mealSchedule = [
//     {
//         day: "শনিবার",
//         fajr: "ড্রাই কেক",
//         morning: "খিচুড়ি + ডিম (হাফ)",
//         tiffin: "বিস্কুট",
//         noon: "মাছ + ভাত + ডাল",
//         evening: "ছোলাভাজি + মুড়ি",
//         night: "মুড়িঘন্ট + ভাত + ভর্তা",
//     },
//     {
//         day: "রবিবার",
//         fajr: "টোস্ট",
//         morning: "সবজি, ভাত, ডাল",
//         tiffin: "পাউরুটি, কলা",
//         noon: "মুরগী + ভাত + ডাল",
//         evening: "বিস্কুট",
//         night: "ছোটমাছ + ভাত + ডাল",
//     },
//     {
//         day: "সোমবার",
//         fajr: "বিস্কুট",
//         morning: "রুটি + ভাজি",
//         tiffin: "ড্রাই কেক",
//         noon: "মাছ + ভাত + সবজি/ভর্তা",
//         evening: "নুডুল্স / ফল",
//         night: "ডিম + ভাত + ডাল",
//     },
//     {
//         day: "মঙ্গলবার",
//         fajr: "ড্রাই কেক",
//         morning: "মুরগী + সবজি খিচুড়ী",
//         tiffin: "শিঙাড়া / সমুচা",
//         noon: "মোরগ পোলাউ + সালাদ",
//         evening: "প্লেইন কেক",
//         night: "সবজি, ভাত, ভর্তা",
//     },
//     {
//         day: "বুুধবার",
//         fajr: "মুড়ি + চানাচুর",
//         morning: "ভর্তা, ভাজি, ভাত",
//         tiffin: "প্লেইন কেক",
//         noon: "ডিম + ভাত + শাক + ডাল",
//         evening: "ছোলাভাজি + মুড়ি",
//         night: "মুড়িঘন্ট + ভাত + ভর্তা",
//     },
//     {
//         day: "বৃহস্পতি",
//         fajr: "বিস্কুট",
//         morning: "পাউরুটি, কলা, হালুয়া",
//         tiffin: "বিস্কুট",
//         noon: "গরুর গোশত + ভাত + ডাল",
//         evening: "সেমাই",
//         night: "ভাজি + ভাত + ডাল",
//     },
//     {
//         day: "শুক্রবার",
//         fajr: "টোস্ট + চা",
//         morning: "ভূনা খিচুড়ি, সালাদ",
//         tiffin: "টিফিন ব্রেড",
//         noon: "মাছ + ভাত + ডাল",
//         evening: "মুড়ি + চানাচুর",
//         night: "সবজি + ভাত + ভর্তা",
//     },
// ];

// // Furniture / supplies list
// const supplies = [
//     "০১. সেলোয়ারসহ এরাবিয়ান সাদা জুববা",
//     "০২. মাদরাসার নির্ধারিত ইউনিফর্ম সেট (২টি)",
//     "০৩. লুঙ্গি",
//     "০৪. গামছা",
//     "০৫. টুপি (২টি)",
//     "০৬. বিছানার চাদর (২টি)",
//     "০৭. ট্রাকসুট / পিটি ড্রেস",
//     "০৮. মশারি (দৈর্ঘ্য ৫ফিট-৬ইঞ্চি প্রস্থ ২ফিট ৬ ইঞ্চি উচ্চতা ৩ ফিট ৫ইঞ্চি)",
//     "০৯. তোষক (দৈর্ঘ্য ৫ফিট-৬ইঞ্চি, প্রস্থ ২.৫ ইঞ্চি)",
//     "১০. লেপ (দৈর্ঘ্য ৪.৫ হাত, প্রস্থ ২.৫ হাত)",
//     "১১. বালিশ",
//     "১২. নেইল কাটার",
//     "১৩. ক্লীপবোর্ড",
//     "১৪. ছোট ফ্লাস্ক (প্রয়োজনে)",
//     "১৫. পিটি সু (১ জোড়া)",
// ];

// // Rules list
// const rules = [
//     "মাদরাসা কর্তৃপক্ষের অনুনমোদিত (খিলাফে সুন্নত) কোনো পোশাকই গ্রহণযোগ্য নয়।",
//     "ছাত্ররা নিজ জিম্মায় নগদ কোনো অর্থ রাখতে পারবে না; পকেট খরচ হিসাবে অনূর্ধ্ব ৫০০/- টাকা সংশ্লিষ্ট শিক্ষকের কাছে রাখা যাবে।",
//     "ছাত্রের প্রাপ্য কিংবা প্রেরিত চিঠিপত্র কর্তৃপক্ষের সেন্সর করার অধিকার সংরক্ষিত।",
//     "বিশেষ ছুটির জন্য অভিভাবকদের পক্ষ থেকে আবেদন শিক্ষা দপ্তরে দিতে হবে।",
//     "রাতে নিজ নির্ধারিত স্থানেই শয়ন করতে হবে, অনুমতি ছাড়া স্থান ত্যাগ করা যাবে না।",
//     "রাজনীতির সাথে প্রত্যক্ষ বা পরোক্ষভাবে জড়িত থাকা নিষেধ।",
//     "ক্যাম্পাস ত্যাগ বা প্রবেশের সময় ‘আউট গোয়িং’ ও ‘ইনকামিং’ রেজিস্টারে নাম লিপিবদ্ধ করতে হবে।",
// ];

// const ResponsiveTable = ({ columns, rows, rowKey }) => {
//     return (
//         <div className="w-full">
//             {/* Standard table for sm and up */}
//             <div className="hidden sm:block overflow-x-auto rounded-md">
//                 <table className="w-full text-md xl:text-lg  border border-gray-300">
//                     <thead className="bg-gray-100 text-gray-900 font-semibold">
//                         <tr>
//                             {columns.map(col => (
//                                 <th
//                                     key={col.accessor}
//                                     className="border border-gray-300 px-3 py-2 text-center"
//                                 >
//                                     {col.header}
//                                 </th>
//                             ))}
//                         </tr>
//                     </thead>
//                     <tbody className="text-gray-900">
//                         {rows.map((row, idx) => (
//                             <tr
//                                 key={row[rowKey] || idx}
//                                 className="even:bg-gray-50 hover:bg-blue-50 transition-colors"
//                             >
//                                 {columns.map(col => (
//                                     <td
//                                         key={col.accessor}
//                                         className="border border-gray-200 px-3 py-2 align-top text-start"
//                                     >
//                                         {row[col.accessor]}
//                                     </td>
//                                 ))}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             {/* Card layout for extra small screens */}
//             <div className="sm:hidden space-y-4">
//                 {rows.map((row, idx) => (
//                     <div
//                         key={row[rowKey] || idx}
//                         className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden"
//                     >
//                         <div className="px-4 py-2 font-bold text-blue-600 bg-blue-50">
//                             {row.day || `#${idx + 1}`}
//                         </div>
//                         <dl className="divide-y divide-gray-200">
//                             {columns
//                                 .filter(c => c.accessor !== "day")
//                                 .map(col => (
//                                     <div key={col.accessor} className="flex px-2 md:px-4 py-2">
//                                         <dt className="w-32 shrink-0 text-sm text-start font-semibold text-gray-600">
//                                             {col.header}
//                                         </dt>
//                                         <dd className="text-md text-gray-900 text-start">{row[col.accessor]}</dd>
//                                     </div>
//                                 ))}
//                         </dl>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// const MealScheduleAndRules = () => {
//     return (
//         <section className="space-y-14 p-6 md:p-10 bg-white text-gray-800">
//             {/* Meal Schedule */}
//             <div className="w-full text-center pt-8 mt-[-14px]">
//                 <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-900 to-gray-800 text-white px-8 py-3 rounded shadow inline-block galada-regular">
//                     থাকা খাওয়ার ব্যবস্থা
//                 </h2>

//                 <div className="mt-4" aria-label="সাপ্তাহিক খাবার সূচি">
//                     <ResponsiveTable
//                         rowKey="day"
//                         columns={[
//                             { header: "বার", accessor: "day" },
//                             { header: "ফজরের পর", accessor: "fajr" },
//                             { header: "সকাল [৭.৪৫টা]", accessor: "morning" },
//                             { header: "টিফিন [১১.১৫টা]", accessor: "tiffin" },
//                             { header: "দুপুর [১.৪৫টা]", accessor: "noon" },
//                             { header: "বিকাল [মাগরিবের পূর্বে]", accessor: "evening" },
//                             { header: "রাত [এশার পর]", accessor: "night" },
//                         ]}
//                         rows={mealSchedule}
//                     />
//                 </div>
//             </div>

//             {/* Supplies */}
//             <div>
//                 <h3 className="text-xl md:text-3xl font-bold mb-3 text-center text-lc galada-regular">আবাসিক আসবাবপত্র তালিকা</h3>
//                 <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 list-none p-0 md:mx-[10%]" aria-label="আসবাবপত্র তালিকা">
//                     {supplies.map(item => (
//                         <li
//                             key={item}
//                             className="flex items-start gap-2 p-3 rounded-lg border border-gray-200 bg-gray-50 shadow-sm hover:shadow-md transition-shadow"
//                         >
//                             <span className="mt-1 inline-block h-2 w-2 rounded-full bg-lc" aria-hidden="true" />
//                             <span className="text-md leading-relaxed">{item}</span>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Rules */}
//             <div>
//                 <h3 className="text-2xl md:text-3xl font-bold mb-3 text-center text-lc galada-regular">ছাত্রাবাসের নিয়মাবলিঃ</h3>
//                 <ol className="space-y-3 list-decimal pl-6 text-md md:text-base md:mx-[10%]" aria-label="নিয়মাবলি">
//                     {rules.map((rule, i) => (
//                         <li
//                             key={i}
//                             className="bg-white/60 border border-blue-100 rounded-md p-4 shadow-sm text-justify hover:border-blue-300 transition-colors"
//                         >
//                             {rule}
//                         </li>
//                     ))}
//                 </ol>
//             </div>
//         </section>
//     );
// };

// export default MealScheduleAndRules;

"use client"
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Meal schedule data
const mealSchedule = [
    {
        day: "শনিবার",
        fajr: "ড্রাই কেক",
        morning: "খিচুড়ি + ডিম (হাফ)",
        tiffin: "বিস্কুট",
        noon: "মাছ + ভাত + ডাল",
        evening: "ছোলাভাজি + মুড়ি",
        night: "মুড়িঘন্ট + ভাত + ভর্তা",
    },
    {
        day: "রবিবার",
        fajr: "টোস্ট",
        morning: "সবজি, ভাত, ডাল",
        tiffin: "পাউরুটি, কলা",
        noon: "মুরগী + ভাত + ডাল",
        evening: "বিস্কুট",
        night: "ছোটমাছ + ভাত + ডাল",
    },
    {
        day: "সোমবার",
        fajr: "বিস্কুট",
        morning: "রুটি + ভাজি",
        tiffin: "ড্রাই কেক",
        noon: "মাছ + ভাত + সবজি/ভর্তা",
        evening: "নুডুল্স / ফল",
        night: "ডিম + ভাত + ডাল",
    },
    {
        day: "মঙ্গলবার",
        fajr: "ড্রাই কেক",
        morning: "মুরগী + সবজি খিচুড়ী",
        tiffin: "শিঙাড়া / সমুচা",
        noon: "মোরগ পোলাউ + সালাদ",
        evening: "প্লেইন কেক",
        night: "সবজি, ভাত, ভর্তা",
    },
    {
        day: "বুুধবার",
        fajr: "মুড়ি + চানাচুর",
        morning: "ভর্তা, ভাজি, ভাত",
        tiffin: "প্লেইন কেক",
        noon: "ডিম + ভাত + শাক + ডাল",
        evening: "ছোলাভাজি + মুড়ি",
        night: "মুড়িঘন্ট + ভাত + ভর্তা",
    },
    {
        day: "বৃহস্পতি",
        fajr: "বিস্কুট",
        morning: "পাউরুটি, কলা, হালুয়া",
        tiffin: "বিস্কুট",
        noon: "গরুর গোশত + ভাত + ডাল",
        evening: "সেমাই",
        night: "ভাজি + ভাত + ডাল",
    },
    {
        day: "শুক্রবার",
        fajr: "টোস্ট + চা",
        morning: "ভূনা খিচুড়ি, সালাদ",
        tiffin: "টিফিন ব্রেড",
        noon: "মাছ + ভাত + ডাল",
        evening: "মুড়ি + চানাচুর",
        night: "সবজি + ভাত + ভর্তা",
    },
];

// Furniture / supplies list
const supplies = [
    "০১. সেলোয়ারসহ এরাবিয়ান সাদা জুববা",
    "০২. মাদরাসার নির্ধারিত ইউনিফর্ম সেট (২টি)",
    "০৩. লুঙ্গি",
    "০৪. গামছা",
    "০৫. টুপি (২টি)",
    "০৬. বিছানার চাদর (২টি)",
    "০৭. ট্রাকসুট / পিটি ড্রেস",
    "০৮. মশারি (দৈর্ঘ্য ৫ফিট-৬ইঞ্চি প্রস্থ ২ফিট ৬ ইঞ্চি উচ্চতা ৩ ফিট ৫ইঞ্চি)",
    "০৯. তোষক (দৈর্ঘ্য ৫ফিট-৬ইঞ্চি, প্রস্থ ২.৫ ইঞ্চি)",
    "১০. লেপ (দৈর্ঘ্য ৪.৫ হাত, প্রস্থ ২.৫ হাত)",
    "১১. বালিশ",
    "১২. নেইল কাটার",
    "১৩. ক্লীপবোর্ড",
    "১৪. ছোট ফ্লাস্ক (প্রয়োজনে)",
    "১৫. পিটি সু (১ জোড়া)",
];

// Rules list
const rules = [
    "মাদরাসা কর্তৃপক্ষের অনুনমোদিত (খিলাফে সুন্নত) কোনো পোশাকই গ্রহণযোগ্য নয়।",
    "ছাত্ররা নিজ জিম্মায় নগদ কোনো অর্থ রাখতে পারবে না; পকেট খরচ হিসাবে অনূর্ধ্ব ৫০০/- টাকা সংশ্লিষ্ট শিক্ষকের কাছে রাখা যাবে।",
    "ছাত্রের প্রাপ্য কিংবা প্রেরিত চিঠিপত্র কর্তৃপক্ষের সেন্সর করার অধিকার সংরক্ষিত।",
    "বিশেষ ছুটির জন্য অভিভাবকদের পক্ষ থেকে আবেদন শিক্ষা দপ্তরে দিতে হবে।",
    "রাতে নিজ নির্ধারিত স্থানেই শয়ন করতে হবে, অনুমতি ছাড়া স্থান ত্যাগ করা যাবে না।",
    "রাজনীতির সাথে প্রত্যক্ষ বা পরোক্ষভাবে জড়িত থাকা নিষেধ।",
    "ক্যাম্পাস ত্যাগ বা প্রবেশের সময় 'আউট গোয়িং' ও 'ইনকামিং' রেজিস্টারে নাম লিপিবদ্ধ করতে হবে।",
];

// Animated meal card component
const MealCard = ({ meal, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
        >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4">
                <h3 className="text-xl font-bold text-white text-center">{meal.day}</h3>
            </div>
            <div className="p-4 grid grid-cols-2 gap-4">
                {Object.entries(meal).filter(([key]) => key !== 'day').map(([key, value], idx) => (
                    <motion.div
                        key={key}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 + (idx * 0.05) }}
                        className="bg-gray-50 rounded-lg p-3 border border-gray-100"
                    >
                        <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
                            {key === 'fajr' && 'ফজরের পর'}
                            {key === 'morning' && 'সকাল [৭.৪৫টা]'}
                            {key === 'tiffin' && 'টিফিন [১১.১৫টা]'}
                            {key === 'noon' && 'দুপুর [১.৪৫টা]'}
                            {key === 'evening' && 'বিকাল [মাগরিবের পূর্বে]'}
                            {key === 'night' && 'রাত [এশার পর]'}
                        </div>
                        <div className="text-gray-800 font-medium">{value}</div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

// Animated supply item component
const SupplyItem = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300"
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 + (index * 0.05), type: "spring" }}
                className="mt-1 flex-shrink-0 h-4 w-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
            />
            <span className="text-gray-800 leading-relaxed">{item}</span>
        </motion.div>
    );
};

// Animated rule item component
const RuleItem = ({ rule, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + (index * 0.1), type: "spring" }}
                className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold"
            >
                {index + 1}
            </motion.div>
            <span className="text-gray-800 text-justify leading-relaxed">{rule}</span>
        </motion.div>
    );
};

// Tab navigation component
const TabNavigation = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { id: 'meal', label: 'খাবার সূচি' },
        { id: 'supplies', label: 'আসবাবপত্র' },
        { id: 'rules', label: 'নিয়মাবলী' }
    ];

    return (
        <div className="flex justify-center mb-4">
            <div className="inline-flex p-1 bg-white rounded-md ring-2 ring-offset-2 ring-indigo-600">
                {tabs.map((tab) => (
                    <motion.button
                        key={tab.id}
                        className={`px-5 py-2 text-sm md:text-lg font-medium rounded-lg transition-colors ${activeTab === tab.id
                            ? 'bg-indigo-600 shadow text-white'
                            : 'text-gray-600 underline underline-offset-2 hover:text-gray-900'
                            }`}
                        onClick={() => setActiveTab(tab.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {tab.label}
                    </motion.button>
                ))}
            </div>
        </div>
    );
};

// Main component
const MealScheduleAndRules = () => {
    const [activeTab, setActiveTab] = useState('meal');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 border-t-4 border-blue-600 border-solid rounded-full"
                />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <motion.h1
                        className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-800 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        মাদরাসার ছাত্রাবাস তথ্য
                    </motion.h1>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "6rem" }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    />
                </motion.div>

                {/* Tab Navigation */}
                <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

                {/* Content Sections */}
                <AnimatePresence mode="wait">
                    {activeTab === 'meal' && (
                        <motion.div
                            key="meal"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="mb-8 text-center">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">থাকা খাওয়ার ব্যবস্থা</h2>
                                <p className="text-gray-600">সাপ্তাহিক খাবার সূচি</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {mealSchedule.map((meal, index) => (
                                    <MealCard key={meal.day} meal={meal} index={index} />
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'supplies' && (
                        <motion.div
                            key="supplies"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="mb-8 text-center">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">আবাসিক আসবাবপত্র তালিকা</h2>
                                <p className="text-gray-600">প্রয়োজনীয় সামগ্রী</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {supplies.map((item, index) => (
                                    <SupplyItem key={index} item={item} index={index} />
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'rules' && (
                        <motion.div
                            key="rules"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="mb-8 text-center">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">ছাত্রাবাসের নিয়মাবলী</h2>
                                <p className="text-gray-600">অবশ্যই পালনীয়</p>
                            </div>

                            <div className="space-y-4">
                                {rules.map((rule, index) => (
                                    <RuleItem key={index} rule={rule} index={index} />
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>


            </div>
        </div>
    );
};

export default MealScheduleAndRules;