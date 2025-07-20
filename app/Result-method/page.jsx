export default function ResultSystem() {
    return (
        <div className="max-w-4xl mx-auto px-4 mt-4 py-6">
            <div className="space-y-6">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-lc underline underline-offset-4 galada-regular">
                        ফলাফল পদ্ধতি
                    </h1>
                </div>

                {/* Section: পরীক্ষা পদ্ধতি */}
                <div className="bg-white rounded-xl shadow-md p-6 border border-indigo-100">
                    <h2 className="text-xl font-bold text-indigo-700 mb-2">
                        📘 পরীক্ষা পদ্ধতি
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        বছরে ৩টি সেমিস্টার ফাইনাল পরীক্ষা নেওয়া হয়। সাথে শ্রেণি অভিক্ষা এবং প্রতি সেমিস্টারে ৩টি পাক্ষিক পাঠ মূল্যায়ন অনুষ্ঠিত হয়।
                    </p>
                </div>

                {/* Section: নাম্বার বন্টন */}
                <div className="bg-white rounded-xl shadow-md p-6 border border-green-100">
                    <h2 className="text-xl font-bold text-green-700 mb-2">
                        📊 নাম্বার বন্টন
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>শ্রেণি অভিক্ষা – ২০ নম্বর</li>
                        <li>সেমিস্টার ফাইনাল – ৮০ নম্বর</li>
                        <li>মোট – ১০০ নম্বর</li>
                    </ul>
                </div>

                {/* Section: ফলাফল গ্রেডিং পদ্ধতি */}
                <div className="bg-white rounded-xl shadow-md p-6 border border-purple-100">
                    <h2 className="text-xl font-bold text-purple-700 mb-4">
                        🏅 ফলাফল গ্রেডিং পদ্ধতি
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto text-left text-gray-700">
                            <thead>
                                <tr className="bg-purple-100 text-purple-800">
                                    <th className="py-2 px-4 font-semibold">গ্রেড</th>
                                    <th className="py-2 px-4 font-semibold">প্রাপ্ত নম্বর</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["A+", "80% বা তার বেশি"],
                                    ["A", "70% - 79%"],
                                    ["A-", "60% - 69%"],
                                    ["B+", "55% - 59%"],
                                    ["B", "50% - 54%"],
                                    ["C", "45% - 49%"],
                                    ["D", "40% - 44%"],
                                    ["F", "৪০% এর নিচে (ব্যর্থ)"],
                                ].map(([grade, range]) => (
                                    <tr key={grade} className="border-t hover:bg-purple-50">
                                        <td className="py-2 px-4 font-medium">{grade}</td>
                                        <td className="py-2 px-4">{range}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
