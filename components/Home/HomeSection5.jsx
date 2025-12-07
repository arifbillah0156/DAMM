"use client"
import SplitText from "../Others/SplitText";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function HomeSection5() {
  // const [activeSection, setActiveSection] = useState("our-words");
  const sectionRefs = {
    "our-words": useRef(null),
    "why-this-event": useRef(null),
    "our-uniqueness": useRef(null),
    "our-specialty": useRef(null),
  };

  return (
    <section className="h-max w-[100%] relative mt-12 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 ">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url(/Images/HomeS5BG.jpg)`,
          }}
        ></div>
      </div>

      {/* Main Content */}
      <section className="relative z-10">
        <div className="container mx-auto px-6 py-12 relative z-10">
          {/* Heading */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SplitText
                text="A Unique Model Madrasah In Bangladesh"
                className="text-2xl sm:text-4xl font-bold text-lc mb-6 abril-fatface-regular"
              />
              <div className="w-full mx-auto border-b-4 border-lc mb-6"></div>

            </motion.div>
          </div>



          {/* Content Cards */}
          <div className="mt-12 space-y-8">
            {/* Our Words */}
            <motion.div
              ref={sectionRefs["our-words"]}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl border border-white/20"
              id="our-words"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xl mr-4">
                  <i className="fa-solid fa-book-open"></i>
                </div>
                <h3 className="text-2xl font-bold text-lc ">আমাদের কথা</h3>
              </div>
              <p className="text-gray-800 leading-relaxed text-justify">
                উপনিবেশ আমল থেকে প্রচলিত সেক্যুলার শিক্ষাব্যবস্থার পরিবর্তন সময়ের দাবি। সেই প্রয়োজন পূরণে "দারুল আজহার মডেল মাদরাসা" একটি প্রতিশ্রুতিশীল উদ্যোগ হিসেবে আত্মপ্রকাশ করেছে। এখানে ইসলামিক শিক্ষা, আধুনিক বিজ্ঞান ও হিফজুল কুরআনের সমন্বিত সিলেবাস চালু হয়েছে, যা আল-আজহারসহ আন্তর্জাতিক মানের পাঠ্যক্রম অনুসরণে প্রস্তুত। প্রাথমিকভাবে দেশের বিভিন্ন জেলায় ক্যাম্পাস চালু হয়েছে, ভবিষ্যতে প্রতিটি জেলায় ক্যাম্পাস স্থাপন ও একটি পূর্ণাঙ্গ ইসলামী বিশ্ববিদ্যালয় প্রতিষ্ঠার লক্ষ্য রয়েছে। আমরা চাই, এক ও অভিন্ন শিক্ষাব্যবস্থায় দেশব্যাপী শিক্ষার্থীরা সমভাবে উপকৃত হোক।
              </p>
            </motion.div>

            {/* Why This Event */}
            <motion.div
              ref={sectionRefs["why-this-event"]}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl border border-white/20"
              id="why-this-event"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl mr-4">
                  <i className="fa-solid fa-question"></i>
                </div>
                <h3 className="text-2xl font-bold text-lc">কেন এ আয়োজন</h3>
              </div>
              <p className="text-gray-800 leading-relaxed text-justify">
                নতুন শতাব্দীর চ্যালেঞ্জ মোকাবিলায় জাগতিক বিদ্যা ও প্রযুক্তির পাশাপাশি দ্বীনি শিক্ষা ও নৈতিকতা অর্জন অপরিহার্য। অথচ দেশে এমন সার্বজনীন শিক্ষাব্যবস্থা প্রায় অনুপস্থিত। এই শূন্যতা পূরণে "দারুল আজহার মডেল মাদরাসা" গড়ে তোলা হয়েছে, যার লক্ষ্য হলো বিশ্বমানের শিক্ষার মাধ্যমে যুগোপযোগী, দক্ষ ও চারিত্রিকভাবে গঠিত মানুষ তৈরি করা।
              </p>
            </motion.div>

            {/* Our Uniqueness */}
            <motion.div
              ref={sectionRefs["our-uniqueness"]}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl border border-white/20"
              id="our-uniqueness"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white text-xl mr-4">
                  <i className="fa-solid fa-star"></i>
                </div>
                <h3 className="text-2xl font-bold text-lc">আমাদের স্বাতন্ত্র্য</h3>
              </div>
              <p className="text-gray-800 leading-relaxed text-justify">
                মাধ্যমিক ও উচ্চ মাধ্যমিক স্তরে ধর্মীয় জ্ঞানের পাশাপাশি বাংলা, ইংরেজি, গণিত, বিজ্ঞান, ইতিহাস, ভূগোল ও সমাজবিজ্ঞান শিক্ষা দেওয়া হয়, যাতে শিক্ষার্থীরা যুগোপযোগী, আধুনিক জ্ঞানসমৃদ্ধ আলেম হিসেবে গড়ে উঠতে পারে। হিফজ বিভাগের শিক্ষার্থীদের জন্যও বাংলা, ইংরেজি, গণিত ও আরবি ভাষা শিক্ষার বিশেষ ব্যবস্থা রয়েছে।
              </p>
            </motion.div>

            {/* Our Specialty */}
            <motion.div
              ref={sectionRefs["our-specialty"]}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl border border-white/20"
              id="our-specialty"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-red-600 flex items-center justify-center text-white text-xl mr-4">
                  <i className="fa-solid fa-handshake"></i>                </div>
                <h3 className="text-2xl font-bold text-lc">আমাদের বৈশিষ্ঠ্য</h3>
              </div>
              <p className="text-gray-800 leading-relaxed text-justify">
                "দারুল আজহার মডেল মাদরাসা"-তে বিশুদ্ধ কুরআন তেলাওয়াত ও মর্মার্থ অনুধাবনের পাশাপাশি বলিষ্ঠ ইসলামী স্কলার তৈরির লক্ষ্যে কুরআনের আহকাম সম্পর্কিত আয়াতসহ ন্যূনতম ৫ পারা ও ৩০০ সহিহ হাদিস হিফজ বাধ্যতামূলক। পাঠদানে ইংরেজি ভাষায় দক্ষতা অর্জনের জন্য শ্রেণিভিত্তিক প্র্যাকটিক্যাল ইংলিশ কোর্স, ব্রিটিশ IELTS ধাঁচের মূল্যায়ন পদ্ধতি এবং আরবি ও ইংরেজি ভাষায় বিশুদ্ধ উচ্চারণে কথোপকথনের বিশেষ ব্যবস্থা রয়েছে। জাতীয় ও আন্তর্জাতিক শিক্ষাবিদ ও আলেমদের তত্ত্বাবধানে পরিচালিত এই প্রতিষ্ঠানে ছাত্রদের মেধা বিকাশে রয়েছে বক্তৃতা, বিতর্ক, লেখনী চর্চা ও ইসলামী সঙ্গীতের সুযোগ। ব্যস্ত ও প্রবাসী অভিভাবকদের জন্য পূর্ণ অভিভাবকত্ব গ্রহণের ব্যবস্থাসহ আবাসিক ছাত্রদের ২৪ ঘণ্টা শিক্ষকগণের সরাসরি তত্ত্বাবধানে রাখা হয়। নিরাপদ ক্যাম্পাসে রয়েছে সার্বক্ষণিক নিরাপত্তা, নিরবচ্ছিন্ন বিদ্যুৎ, স্বাস্থ্যসেবা, মাল্টি-সিস্টেম জেনারেটর, সিসিটিভি এবং প্রজেক্টরযুক্ত আধুনিক শ্রেণিকক্ষ। ছাত্রদের জন্য নির্ধারিত খাট, লন্ড্রি সার্ভিস, স্বাস্থ্যসম্মত উন্নতমানের খাবার, ইনডোর গেমস, শরীরচর্চা ও খেলাধুলার সুযোগ, কম্পিউটার ল্যাব ও সমৃদ্ধ লাইব্রেরির ব্যবস্থা রয়েছে। শিক্ষার মান উন্নয়নে শিক্ষকদের প্রশিক্ষণ ও প্রতিটি বিষয় অভিজ্ঞ ভিজিটিং শিক্ষকদের তত্ত্বাবধানে পরিচালিত হয়।
              </p>
            </motion.div>
          </div>


        </div>
      </section>
    </section>
  );
}