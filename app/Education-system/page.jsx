import Image from "next/image";
import prospectus16 from "@/public/Images/Prospectus16.jpg"
import Link from "next/link";

export default function EducationSystem() {
    return (
        <div className="container mx-auto px-4 mt-2 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6 text-justify">
                    <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-900 to-gray-800 p-3 rounded-md">
                        শিক্ষা বিভাগসমূহ
                    </h2>
                    <ol className="list-decimal list-inside space-y-2 text-gray-900">
                        <li>শিশু শ্রেণী (নাজেরা) শিক্ষাকাল ১বছর+</li>
                        <li>প্রাইমারী (হিফয বিভাগসহ) শিক্ষাকাল ৫ বছর</li>
                        <li>মাধ্যমিক বিভাগ- শিক্ষাকাল ৫ বছর</li>
                        <li>উচ্চমাধ্যমিক বিভাগ (আলিম) ২ বছর</li>
                        <li>গার্লস বিভাগ-প্লে- নবম ১০ বছর</li>
                        <li>হিফযুল কুরআন বিভাগ – শিক্ষাকাল ৩ বছর পাঠ্যক্রম</li>
                    </ol>
                    <p className="text-gray-900">
                        পৃথিবীর খ্যাতনামা ইসলামী শিক্ষায়তনগুলোর পাঠ্যক্রম এবং বাংলাদেশ মাদরাসা শিক্ষা বোর্ডের মাধ্যমিক ও উচ্চ মাধ্যমিক স্তরের পাঠ্যক্রমের সাথে সামঞ্জস্য বিধান করে আন্তর্জাতিক মানে এর সিলেবাস তৈরী করা হয়েছে।
                    </p>
                    <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-900 to-gray-800 p-3 rounded-md">
                        পাঠ্যক্রমের মূলনীতি
                    </h2>
                    <p className="text-gray-900">
                        জ্ঞানের শাখা প্রশাখাগুলোকে প্রধানত তিন ভাগে ভাগ করা হয়েছে। যথা:
                        (১) ধর্মবিজ্ঞান (২) মানব বিজ্ঞান (৩) প্রকৃতি বিজ্ঞান। এ শাখাগুলোর সবই ধর্মবিজ্ঞানের মাধ্যমে
                        জ্ঞানের প্রকৃত উৎস আল্লাহ পাকের সাথে সম্পর্কিত।
                    </p>

                    <ul className="list-disc list-inside space-y-1 text-gray-900">
                        <li>
                            <strong>ধর্মবিজ্ঞান:</strong> তাফসীরুল কুরআন, হাদীস, ফিকহ, উসূলে ফিকাহ, আরবী সাহিত্য, আরবী কথোপকথন, আক্বীদা,
                            বালাগাহ, ইসলামী সংস্কৃতি ও দর্শন।
                        </li>
                        <li>
                            <strong>মানব বিজ্ঞান:</strong> বাংলা, ইংরেজি, ভূগোল, ইতিহাস, অর্থনীতি ও সমাজ বিজ্ঞান।
                        </li>
                        <li>
                            <strong>প্রকৃতি বিজ্ঞান:</strong> গণিত, রসায়ন, বিজ্ঞান, পদার্থ বিজ্ঞান, জীব বিজ্ঞান, কম্পিউটার ও স্বাস্থ্য বিজ্ঞান।
                        </li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-900 to-gray-800 p-3 rounded-md">
                        শিক্ষাব্যবস্থা
                    </h2>
                    <ul className="list-disc list-inside space-y-1 text-gray-900">
                        <li>আবাসিক ছাত্ররা ২৪ ঘন্টাই শিক্ষকগণের নিয়ন্ত্রণে ও পর্যবেক্ষণে থাকে।</li>
                        <li>ডে-কেয়ার ছাত্ররা সকাল ৮:০০ থেকে রাত ৯:০০ পর্যন্ত।</li>
                        <li>শিক্ষাবর্ষঃ জানুয়ারি মাস থেকে ডিসেম্বর মাস পর্যন্ত।</li>
                        <li>বছরে ৩টি সেমিস্টার, প্রত্যেক সেমিস্টারের শেষে পরীক্ষা ও ফলাফল প্রদান।</li>
                    </ul>

                    <p className="text-gray-900 font-semibold">ছুটিঃ</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-900">
                        <li>ঈদুল ফিতর - ১২ দিন</li>
                        <li>ঈদুল আযহা - ১২ দিন</li>
                        <li>১ম সেমিস্টার শেষে - ৮ দিন</li>
                        <li>২য় সেমিস্টার মধ্যকালীন - ৮ দিন</li>
                        <li>জাতীয় ও আন্তর্জাতিক দিবসে ক্লাস বন্ধ থাকবে।</li>
                    </ul>

                    <ul className="list-disc list-inside space-y-1 text-gray-900">
                        <li>ধর্মবিজ্ঞানের বিষয়সমূহ আরবী মিডিয়ামে পড়ানো হয়।</li>
                        <li>ইংলিশ বিষয়সমূহ ইংলিশ মিডিয়ামে পড়ানো হয়।</li>
                        <li>প্রতিদিন শরীরচর্চা ও খেলাধূলার ব্যবস্থা রয়েছে।</li>
                        <li>প্রতি মাসে শিক্ষক প্রশিক্ষণ অনুষ্ঠিত হয়।</li>
                        <li>দক্ষ ভিজিটিং টিচার দ্বারা কোর্স তত্ত্বাবধান।</li>
                    </ul>

                    <h2 className="text-xl font-bold mt-4">ভর্তির সময় ও নিয়মাবলীঃ</h2>
                    <ul className="list-disc list-inside space-y-1 text-gray-900">
                        <li>১লা ডিসেম্বর থেকে ১৫ জানুয়ারির মধ্যে ভর্তি। বিশেষ ক্ষেত্রে সারা বছরেও ভর্তি হতে পারে।</li>
                        <li>প্রাইমারী বিভাগে ভর্তির ন্যূনতম বয়স ৪ বছর।</li>
                        <li>মাধ্যমিক বিভাগে ভর্তিতে ভর্তি পরীক্ষা (হিফয, বাংলা, ইংরেজি, আরবী ও অংক)।</li>
                        <li>ভর্তিতে বয়স, মেধা, আর্থিক সঙ্গতি ও স্বাস্থ্য বিবেচিত হবে।</li>
                    </ul>
                </div>
                <div>
                    <div
                        className="bg-white text-lc underline underline-offset-4 rounded-lg shadow p-2 text-center textGradient relative hover:shadow-lg border"
                    >
                        <Image
                            src={prospectus16}
                            alt="Image"
                            placeholder="blur"
                            className="h-full w-full object-cover rounded-md md:rounded-lg"
                        />

                        <div className="absolute top-0 left-1  text-lc text-start text-lg md:text-2xl p-4">
                            <Link
                                href={"/Images/Prospectus16.jpg"}
                            >
                                <i className="fa-solid fa-expand"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
