import React from "react";

export default function RulesPage() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-12 mt-4 text-gray-900 text-justify">
            <div className="mb-8 text-center">
                <h1 className="text-3xl md:text-4xl text-lc galada-regular underline underline-offset-8">
                    ছাত্রাবাসের নিয়মাবলী
                </h1>
            </div>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-white px-4 py-2 bg-gradient-to-r from-blue-900 to-gray-800 p-3 rounded-md">
                    ছাত্রাবাসের নিয়মাবলীঃ
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>মাদরাসা কর্তৃপক্ষের অনুনমোদিত (খিলাফে সুন্নত) কোনো পোশাকই গ্রহণযোগ্য নয়।</li>
                    <li>ছাত্ররা নিজ জিম্মায় নগদ অর্থ রাখতে পারবে না। পকেট খরচ অনূর্ধ ৫০০/- সংশ্লিষ্ট শিক্ষকের কাছে রাখা যাবে।</li>
                    <li>ছাত্রের চিঠিপত্র কর্তৃপক্ষ সেন্সর করতে পারবে।</li>
                    <li>ছুটি পেতে অভিভাবকদের আবেদন জমা দিতে হবে।</li>
                    <li>নির্ধারিত স্থানেই রাত্রী যাপন করতে হবে।</li>
                    <li>রাজনীতিতে জড়িত থাকা নিষেধ।</li>
                    <li>ছুটি চলাকালে রেজিস্টারে নাম লিখে ক্যাম্পাস ত্যাগ ও প্রবেশ করতে হবে।</li>
                </ul>

                <h2 className="text-xl font-semibold text-white px-4 py-2 bg-gradient-to-r from-blue-900 to-gray-800 p-3 rounded-md">
                    ছাত্রদের জ্ঞাতব্যঃ
                </h2>
                <ul className="list-decimal pl-6 space-y-2">
                    <li>মাদরাসার সব নিয়ম-কানুন ও শিক্ষকদের আদেশ মানতে হবে।</li>
                    <li>চুল, দাড়ি, গোঁফ ও পোশাক সুন্নতের অনুসারে হতে হবে।</li>
                    <li>রাজনীতি, সংগঠন, সমিতি সম্পূর্ণ নিষিদ্ধ।</li>
                </ul>

                <h2 className="text-xl font-semibold text-white px-4 py-2 bg-gradient-to-r from-blue-900 to-gray-800 p-3 rounded-md">
                    সাক্ষাতের নিয়ম ও সময়সূচিঃ
                </h2>
                <ul className="list-decimal pl-6 space-y-2">
                    <li>শুক্রবার সকাল ৮:৩০-১১টা, এবং আছরের পর থেকে মাগরিব পর্যন্ত।</li>
                    <li>জরুরী প্রয়োজনে ফোনে যোগাযোগ সম্ভব।</li>
                    <li>অনুমতি ছাড়া সাক্ষাৎ শৃঙ্খলা ভঙ্গ বলে বিবেচিত হবে।</li>
                    <li>ছুটি শেষে অভিভাবক দ্বারা আগমন ও নির্ধারিত সময়ে ফিরে আসা আবশ্যক।</li>
                    <li>ভর্তি বাতিলের ক্ষমতা কর্তৃপক্ষের রয়েছে।</li>
                </ul>

                <h2 className="text-xl font-semibold text-white px-4 py-2 bg-gradient-to-r from-blue-900 to-gray-800 p-3 rounded-md">
                    ছাত্রদের ছুটি প্রসঙ্গঃ
                </h2>
                <ul className="list-decimal pl-6 space-y-2">
                    <li>নতুন ছাত্র: সপ্তাহে একদিন (শুক্রবার)।</li>
                    <li>পুরাতন ছাত্র: মাসে দু’দিন।</li>
                    <li>৪র্থ শ্রেণির উপরে: বিশেষ ছুটি নিষিদ্ধ।</li>
                </ul>

                <h2 className="text-xl font-semibold text-white px-4 py-2 bg-gradient-to-r from-blue-900 to-gray-800 p-3 rounded-md">
                    সাক্ষাতের নিয়মাবলিঃ
                </h2>
                <ul className="list-decimal pl-6 space-y-2">
                    <li>সত্যায়িত ৩ কপি পাসপোর্ট ও স্ট্যাম্প সাইজ ছবি জমা দিতে হবে।</li>
                    <li>অন্য কারও মাধ্যমে সাক্ষাৎ হলে তারও ছবি ও অনুমতি লাগবে।</li>
                    <li>মাদরাসা পরিচয়পত্র ছাড়া সাক্ষাৎ অনুমোদিত নয়।</li>
                    <li>সাক্ষাৎ কার্ড বাধ্যতামূলক।</li>
                </ul>

                <h2 className="text-xl font-semibold text-white px-4 py-2 bg-gradient-to-r from-blue-900 to-gray-800 p-3 rounded-md">
                    মহিলা অভিভাবকের জন্য জ্ঞাতব্যঃ
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>সংকীর্ণতা বিবেচনায় মহিলা অভিভাবকের যাতায়াত কম হওয়া শ্রেয়।</li>
                    <li>ইসলামী শরীয়াহ মোতাবেক পোশাকে আসা আবশ্যক।</li>
                </ul>

                <h2 className="text-xl font-semibold text-white px-4 py-2 bg-gradient-to-r from-blue-900 to-gray-800 p-3 rounded-md">
                    ইউনিফর্মঃ
                </h2>
                <p><strong>ছাত্র:</strong> নেভীব্লু সেরওয়ানি, সাদা সেলোয়ার, কালো জুতা-মোজা ও সাদা টুপি।</p>
                <p><strong>ছাত্রী:</strong> একই রঙের কামিজ, সাদা পায়জামা-স্কার্ফ, কালো জুতা-মোজা।</p>
            </section>
        </div>
    );
}
