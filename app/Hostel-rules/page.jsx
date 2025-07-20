import React from "react";

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
    "ক্যাম্পাস ত্যাগ বা প্রবেশের সময় ‘আউট গোয়িং’ ও ‘ইনকামিং’ রেজিস্টারে নাম লিপিবদ্ধ করতে হবে।",
];

const ResponsiveTable = ({ columns, rows, rowKey }) => {
    return (
        <div className="w-full">
            {/* Standard table for sm and up */}
            <div className="hidden sm:block overflow-x-auto rounded-md">
                <table className="w-full text-md xl:text-lg  border border-gray-300">
                    <thead className="bg-gray-100 text-gray-900 font-semibold">
                        <tr>
                            {columns.map(col => (
                                <th
                                    key={col.accessor}
                                    className="border border-gray-300 px-3 py-2 text-center"
                                >
                                    {col.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="text-gray-900">
                        {rows.map((row, idx) => (
                            <tr
                                key={row[rowKey] || idx}
                                className="even:bg-gray-50 hover:bg-blue-50 transition-colors"
                            >
                                {columns.map(col => (
                                    <td
                                        key={col.accessor}
                                        className="border border-gray-200 px-3 py-2 align-top text-start"
                                    >
                                        {row[col.accessor]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Card layout for extra small screens */}
            <div className="sm:hidden space-y-4">
                {rows.map((row, idx) => (
                    <div
                        key={row[rowKey] || idx}
                        className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden"
                    >
                        <div className="px-4 py-2 font-bold text-blue-600 bg-blue-50">
                            {row.day || `#${idx + 1}`}
                        </div>
                        <dl className="divide-y divide-gray-200">
                            {columns
                                .filter(c => c.accessor !== "day")
                                .map(col => (
                                    <div key={col.accessor} className="flex px-2 md:px-4 py-2">
                                        <dt className="w-32 shrink-0 text-sm text-start font-semibold text-gray-600">
                                            {col.header}
                                        </dt>
                                        <dd className="text-md text-gray-900 text-start">{row[col.accessor]}</dd>
                                    </div>
                                ))}
                        </dl>
                    </div>
                ))}
            </div>
        </div>
    );
};

const MealScheduleAndRules = () => {
    return (
        <section className="space-y-14 p-6 md:p-10 bg-white text-gray-800">
            {/* Meal Schedule */}
            <div className="w-full text-center pt-8 mt-[-14px]">
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-900 to-gray-800 text-white px-8 py-3 rounded shadow inline-block galada-regular">
                    থাকা খাওয়ার ব্যবস্থা
                </h2>

                <div className="mt-4" aria-label="সাপ্তাহিক খাবার সূচি">
                    <ResponsiveTable
                        rowKey="day"
                        columns={[
                            { header: "বার", accessor: "day" },
                            { header: "ফজরের পর", accessor: "fajr" },
                            { header: "সকাল [৭.৪৫টা]", accessor: "morning" },
                            { header: "টিফিন [১১.১৫টা]", accessor: "tiffin" },
                            { header: "দুপুর [১.৪৫টা]", accessor: "noon" },
                            { header: "বিকাল [মাগরিবের পূর্বে]", accessor: "evening" },
                            { header: "রাত [এশার পর]", accessor: "night" },
                        ]}
                        rows={mealSchedule}
                    />
                </div>
            </div>

            {/* Supplies */}
            <div>
                <h3 className="text-xl md:text-3xl font-bold mb-3 text-center text-lc galada-regular">আবাসিক আসবাবপত্র তালিকা</h3>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 list-none p-0 md:mx-[10%]" aria-label="আসবাবপত্র তালিকা">
                    {supplies.map(item => (
                        <li
                            key={item}
                            className="flex items-start gap-2 p-3 rounded-lg border border-gray-200 bg-gray-50 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-lc" aria-hidden="true" />
                            <span className="text-md leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Rules */}
            <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-center text-lc galada-regular">ছাত্রাবাসের নিয়মাবলিঃ</h3>
                <ol className="space-y-3 list-decimal pl-6 text-md md:text-base md:mx-[10%]" aria-label="নিয়মাবলি">
                    {rules.map((rule, i) => (
                        <li
                            key={i}
                            className="bg-white/60 border border-blue-100 rounded-md p-4 shadow-sm text-justify hover:border-blue-300 transition-colors"
                        >
                            {rule}
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default MealScheduleAndRules;