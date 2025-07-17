import React from "react";

export default function AdmissionFees() {
    return (
        <div className="px-4 py-8 max-w-6xl lg:text-lg mx-auto text-gray-900 mt-4 border-t">
            {/* <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white bg-gradient-to-r from-gray-900 to-gray-700 py-3 rounded">
                Addmission Fee
            </h2> */}

            {/* ভর্তি ও বেতন ফি */}
            <div className="overflow-x-auto mb-12 rounded-lg">
                <h3 className="text-xl font-semibold mb-1 bg-gradient-to-r from-gray-900 to-gray-700 text-white py-3 rounded text-center">
                    ভর্তিকালিন ফি
                </h3>
                <table className="table-auto w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">বিবরণ</th>
                            <th className="border p-2 text-center">আবাসিক</th>
                            <th className="border p-2 text-center">ডে-কেয়ার</th>
                            <th className="border p-2 text-center">অনাবাসিক</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            ["ভর্তি ফি", 9000, 9000, 9000],
                            ["সংস্থাপন ফি", 5000, 3000, "–"],
                            ["সেশন চার্জ", 9000, 9000, 9000],
                            ["মোট", 23500, 21000, 18000],
                        ].map(([title, res, nonres, daycare], idx) => (
                            <tr
                                key={idx}
                                className={idx === 3 ? "bg-gray-100 font-semibold" : ""}
                            >
                                <td className="border p-2">{title}</td>
                                <td className="border p-2 text-center">{res}</td>
                                <td className="border p-2 text-center">{nonres}</td>
                                <td className="border p-2 text-center">{daycare}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

            {/* আবাসন ও খাবার খরচ */}
            <div className="overflow-x-auto mb-12 rounded-lg">
                <h3 className="text-xl max-w-full font-semibold mb-1 bg-gradient-to-r from-gray-900 to-gray-700 text-white py-3 rounded text-center">
                    মাসিক ফি
                </h3>
                <table className="table-auto w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th rowSpan="2" className="border p-2 text-center align-middle border-r-gray-300">বিবরণ</th>
                            <th colSpan="2" className="border p-2 text-center border-r-gray-300">আবাসিক</th>
                            <th colSpan="2" className="border p-2 text-center">ডে-কেয়ার</th>
                        </tr>
                        <tr className="bg-gray-100">
                            <th className="border p-2 text-center">হিফজ</th>
                            <th className="border p-2 text-center">একাডেমিক</th>
                            <th className="border p-2 text-center">খাবার সহ</th>
                            <th className="border p-2 text-center">খাবার ছাড়া</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            ["টিউশন ফি", 10500, 10500, 9000, 7500],
                            ["হোস্টেল এন্ড ডাইনিং ফি", 10500, 10500, 9000, 7500],
                            ["একাডেমিক কেয়ার", 11000, 11000, 9500, 8500],
                            ["মোট", 11000, 11500, 9500, 7500],
                        ].map(([label, hifz, academic, mealWith, mealWithout], idx) => (
                            <tr key={idx}
                                className={idx === 3 ? "bg-gray-100 font-semibold" : ""}>
                                <td className="border p-2">{label}</td>
                                <td className="border p-2 text-center">{hifz}</td>
                                <td className="border p-2 text-center">{academic}</td>
                                <td className="border p-2 text-center">{mealWith}</td>
                                <td className="border p-2 text-center">{mealWithout}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p className="text-center mt-1">(নোট: ডে-কেয়ার খাট বরাদ্দ মাসে-১৫০০ টাকা)</p>
            </div>





            {/* সেশন চার্জের খাতসমূহ */}
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-3 py-2 rounded">
                    সেশন চার্জের খাতসমূহ
                </h3>
                <ul className="list-disc list-inside space-y-1">
                    <li>ক) মেনটেইনেন্স</li>
                    <li>খ) স্বাস্থ্য পরিচর্যা</li>
                    <li>গ) খেলাধূলা</li>
                    <li>ঘ) লাইব্রেরী</li>
                    <li>ঙ) আসবাবপত্র</li>
                    <li>চ) সাংস্কৃতিক প্রোগ্রাম</li>
                    <li>ছ) কম্পিউটার ফি</li>
                </ul>
                <p className="mt-4 italic text-sm text-red-600">
                    বিঃ দ্রঃ সেশন চার্জ প্রত্যেক শিক্ষা বর্ষের প্রথমে এককালীন দিতে হবে। উল্লেখিত ফিস পরিবর্তন পরিবর্ধন করার এখতিয়ার কর্তৃপক্ষ কর্তৃক সংরক্ষিত।
                </p>
            </div>
        </div>
    );
}
