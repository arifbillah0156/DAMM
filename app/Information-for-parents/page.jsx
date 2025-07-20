import React from 'react';

const points = [
    "প্রত্যেক অভিভাবকের মাসে ১ বার হলেও কর্তৃপক্ষের সাথে সাক্ষাৎ জরুরি।",
    "প্রত্যেক অভিভাবককে মাসিক প্রদেয় প্রতি ইংরেজি মাসের ৭ তারিখের মধ্যে অবশ্যই প্রদান করতে হবে।",
    "কোনো ছাত্র কোনো মাসের কিছুদিন বা অধিকাংশ দিন অনুপস্থিত থাকলে এর জন্য মাসিক প্রদেয় থেকে কোনো টাকা ফেরত দেয়া হয় না।",
    "উল্লেখিত মাসিক প্রদেয় খাবার, আবাসিক চার্জ ও বেতন বাবদ নেয়া অর্থের বাইরের যে কোনো খরচ অভিভাবককে বহন করতে হবে।",
    "বিশেষ কোনো সমস্যা না থাকলে আর্থিক লেনদেন অভিভাবককেই করতে হবে।",
    "ভর্তির পর তা বাতিল করতে চাইলে ভর্তিসংক্রান্ত কোনো টাকা ফেরত দেয়া হবে না।",
    "মাদরাসা কর্তৃপক্ষ ছাত্রের সার্বিক নিরাপত্তা ব্যবস্থা গ্রহণ করে, তা সত্ত্বেও কোনো ছাত্র পালালে কিংবা কোনো দুর্ঘটনায় পড়লে কর্তৃপক্ষকে দায়ী করা যাবে না।",
    "মাসিক প্রদেয় প্রদান ১৪ তারিখ পর্যন্ত বিলম্ব হলে ১৫ তারিখ থেকে ডাইনিং মিল বন্ধ থাকবে, অনাবাসিকদের ক্ষেত্রে ক্লাসে বসার সুযোগ স্থগিত হবে।",
];

export default function GuardianInfo() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-8">
            <div className="bg-gradient-to-r from-blue-900 to-gray-800 text-white text-center py-4 rounded-t-xl shadow-md">
                <h2 className="text-2xl md:text-3xl font-bold galada-regular">অভিভাবকের জ্ঞাতব্য</h2>
            </div>
            <div className="bg-white border border-t-0 shadow-md rounded-b-xl">
                <ul className="space-y-4 p-6 list-decimal list-inside text-gray-900 text-justify leading-relaxed lg:text-lg">
                    {points.map((point, index) => (
                        <li key={index} className="relative pl-2">
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
