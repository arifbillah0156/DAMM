import React from "react";
import Section_1 from "./Section_1";
import Section_2 from "./Section_2";
import Section_3 from "./Section_3";

export default function AdmissionFees() {
    return (
        <div className="px-4 py-8 max-w-6xl lg:text-lg mx-auto text-gray-900 mt-4 border-t">
            {/* <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white bg-gradient-to-r from-gray-900 to-gray-700 py-3 rounded">
                Addmission Fee
            </h2> */}

            <Section_1 />
            <Section_2 />
            <Section_3 />





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
