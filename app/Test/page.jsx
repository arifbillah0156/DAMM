"use client"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Principal from "@/public/DAMM-Principal.jpeg";
import { useState } from "react";

export default function PrincipalMessage() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [imageHovered, setImageHovered] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1.0],
            },
        },
    };

    const imageVariants = {
        hidden: { scale: 0.9, opacity: 0, rotateY: -10 },
        visible: {
            scale: 1,
            opacity: 1,
            rotateY: 0,
            transition: {
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1.0],
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1.0],
            },
        }),
    };

    const paragraphVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1.0],
            },
        },
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            {/* Animated background elements */}
            <div className="absolute inset-0 z-0">


                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                    <div className="h-full w-full" style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>
            </div>

            <motion.section
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={containerVariants}
                className="relative z-0 min-h-screen flex items-center justify-center py-12 px-4 md:px-8"
            >
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        variants={itemVariants}
                        className="backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl overflow-hidden border border-white/20"
                    >
                        {/* Header with decorative element */}
                        <div className="relative h-24 md:h-32 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                >
                                    <h1 className="text-3xl md:text-4xl font-bold text-white galada-regular">অধ্যক্ষের বাণী</h1>
                                    <div className="mt-2 h-1 w-32 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
                                </motion.div>
                            </div>

                            {/* Decorative circles */}
                            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-500 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
                        </div>

                        <div className="p-6 md:p-10">
                            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                                {/* Image Section with enhanced animation */}
                                <motion.div
                                    variants={imageVariants}
                                    className="flex-shrink-0 mx-auto lg:mx-0"
                                    onHoverStart={() => setImageHovered(true)}
                                    onHoverEnd={() => setImageHovered(false)}
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-xl opacity-50"></div>
                                        <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-2xl shadow-2xl border-2 border-white/20">
                                            <Image
                                                src={Principal}
                                                alt="Principal"
                                                fill
                                                className="object-cover"
                                                quality={100}
                                                placeholder="blur"
                                            />

                                            {/* Overlay effect on hover */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: imageHovered ? 1 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            ></motion.div>

                                            {/* Quote on hover */}
                                            <motion.div
                                                className="absolute bottom-0 left-0 right-0 p-4 text-white"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: imageHovered ? 1 : 0, y: imageHovered ? 0 : 20 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <p className="text-sm italic">"শিক্ষা বাণিজ্য ও ব্যক্তিস্বার্থের ঊর্ধ্বে সমাজকে একটি তাক্বওয়াভিত্তিক জনগোষ্ঠী উপহার দেব।"</p>
                                            </motion.div>
                                        </div>

                                        {/* Decorative elements */}
                                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/30 rounded-full backdrop-blur-sm flex items-center justify-center">
                                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Content Section */}
                                <div className="flex-1 text-white">
                                    <motion.h2
                                        custom={0}
                                        variants={textVariants}
                                        className="text-2xl md:text-3xl font-bold mb-2 text-center lg:text-left galada-regular"
                                    >
                                        মাওলানা সাইফ উদ্দিন আহমেদ
                                    </motion.h2>

                                    <motion.p
                                        custom={1}
                                        variants={textVariants}
                                        className="text-md md:text-lg font-medium mb-6 text-center lg:text-left text-blue-200 galada-regular"
                                    >
                                        অধ্যক্ষ, দারুল আজহার মডেল মাদরাসা
                                    </motion.p>

                                    <motion.div
                                        custom={2}
                                        variants={textVariants}
                                        className="mb-8 text-center lg:text-left"
                                    >
                                        <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-full shadow-lg border border-white/20">
                                            <p className="text-xl font-medium">বিসমিল্লাহির রাহমানির রাহীম</p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        variants={paragraphVariants}
                                        className="space-y-6 leading-relaxed text-justify text-white/90"
                                    >
                                        {[
                                            "আমরা স্বপ্ন দেখতে ভালবাসি। আমরা একটি সুন্দর সমাজ গড়তে পছন্দ করি। আমরা একটি নিরাপদ জনপথ চাই। আমরা একটি উন্নত নৈতিক মূল্যবোধভিত্তিক জাতি গড়তে চাই। সমাজকে পাপ পঙ্কিলতা ও কলঙ্কমুক্ত দেখতে চাই। কিন্তু কীভাবে? কীভাবে একটি ঘুণেধরা জাহেলী সমাজ যা আপাদমস্তক ডুবে আছে অপসংস্কৃতির বেড়াজালে, যেখানে মানবতা নেই, মূল্যবোধ নেই, নেই স্রষ্টার সাথে সৃষ্টি ও প্রকৃতির সাথে মানুষের কোন নৈতিক বন্ধন, যেখানে প্রতিটি সূর্যোদয় হচ্ছে মজলুম মানবতার রক্তে স্নাত হয়ে। না, আমি কোন হতাশার কথা বলছি না বরং আমাদের বোধশক্তিটুকু জাগ্রত করার মধ্য দিয়েই একটি সুন্দর জাতি, সমাজ, দেশ, রাষ্ট্র, সর্বোপরি সুন্দর ভবিষ্যৎ গড়া সম্ভব। প্রয়োজন ত্যাগের মন-মানসিকতাসম্পন্ন একঝাঁক তরুণ, উদ্যমী ও সাহসী সন্তান। যারা শিক্ষা বাণিজ্য ও ব্যক্তিস্বার্থের ঊর্ধ্বে সমাজকে একটি তাক্বওয়াভিত্তিক জনগোষ্ঠী উপহার দেবে।",
                                            "তারাবীহ নামাজ শেষে দোতলায় অফিসে ঢোকার সময় হাত বাড়িয়ে দিলেন মাওলানা মিজানুর রহমান। সালাম-মোসাফাহ্ শেষে অফিসে বসলাম। ২০০৬ সালের শুরু থেকেই ভাবনাগুলো এক বন্ধুর দেয়া আল-আরাফাহ ইসলামী ব্যাংকের একটি ডায়েরিতে লিপিবদ্ধ করছিলাম। অনেকগুলো নাম সিলেক্ট করা ছিল। মিজান ভাইকে এক নিঃশ্বাসে সব পরিকল্পনার কথা জানালাম। তাঁর উৎসাহে আরো একধাপ এগিয়ে পরামর্শ নিলাম বেশ কয়েক জনের। অতঃপর ২০০৭ সালের সেপ্টেম্বরে নোয়াখালীর মাইজদীতে এক গুরুত্বপূর্ণ সভায় সিদ্ধান্ত হল দারুল আজহার মডেল মাদরাসা প্রতিষ্ঠার। এতে জোরালো সমর্থন জানালেন বড় ভাই সাহাবউদ্দিন আহমদ খন্দকার, মাওঃ জিয়াউর রহমান, ইকরামুল হকসহ আরো অনেকে। সিদ্ধান্ত অনুযায়ী ১ম ক্যাম্পাসটি উদ্বোধন করা হলো মাইজদীতে। শত প্রতিবন্ধকতা ও সমস্যা পেরিয়ে উদ্বোধনী মাহফিল দেয়া হল স্থানীয় একটি স্কুল মাঠে। প্রভাবশালী একটি মহল শুরুতে প্রতিরোধের ডাক দিলেও পরে আল্লাহর অশেষ কৃপায় সবকিছু সুন্দরভাবেই সম্পন্ন হল।",
                                            "প্রথম বছরের অভিজ্ঞতা নিয়ে ভয়ে ভয়ে দ্বিতীয় বছর ২০০৯ সালে শুরু হল ঢাকা স্বপ্নের সূচনা যেখানে দক্ষিণখান ক্যাম্পাস। সে এক ব্যতিক্রমী অভিজ্ঞতা! বাড়ি ভাড়া তাও আবার দরাসার জন্য, শুরুতেই নাকচ করে দেন বাড়িওয়ালা। অবশ্য কোরআনের সংরক্ষণকারী তাঁর কিতাব ও তাঁর হাবীবের বাণী প্রচারের মারকাযগুলো সুরক্ষিত রাখবেন এটাই স্বাভাবিক। তাই হলো, বাড়ী মিলল। শিক্ষা কার্যক্রম শুরু হল। আমাদের ব্যস্ততার শেষ নেই। কারণ ঘোষণা ছিল ৬৪ জেলায় হবে দারুল আজহার, ইতোমধ্যে লন্ডন প্রবাসী সিরাজুল ইসলাম হায়দার মামা জানালেন তার ইচ্ছের কথা। আমিতো অবাক। যেখানে একটি বাড়ী নিয়ে এত দ্বিধা-দ্বন্দ্ব সেখানে ১০০ শতাংশ জমি, সাথে আধা-পাকা টিনের ঘর, খেলার মাঠ, চারপাশে বাউন্ডারি ওয়ালসহ নানা আয়োজনে প্রস্তুত ফেনী সদর লেমুয়া শাখা। যেই কথা সেই কাজ। হাসান মামার সহযোগিতায় ফেনী ক্যাম্পাস দারুল আজহার শুরু হলো। নিজস্ব জায়গায় বিশাল উদ্বোধনী মাহফিল। লন্ডন থেকে নানু আসলেন। স্বচক্ষে দারুল আজহার-এর কার্যক্রম দেখে আনন্দে অশ্রুসজল চোখে কান্নাজড়িত কণ্ঠে বললেন, আজ আপনার নানার বিদেহী আত্মা প্রশান্তি পাবে। তিনি ঢাকা ক্যাম্পাস পরিদর্শন করে অনুদান দিলেন। আর মুরাদ মামা দিলেন ২০০০০০ (দুই লক্ষ) টাকা।",
                                            "আমরা ক'জন মেতে উঠলাম শিক্ষা সম্প্রসারণকল্পে। ২০১১ সালে শুরু হল লক্ষ্মীপুর ক্যাম্পাস। বড় ভাই সাহাব উদ্দিন তো নাওয়া-খাওয়া ভুলে দিবারাত্রি শ্রম দিচ্ছেন আজহারকে এগিয়ে নিতে। ইউনিভার্সিটির চাকরি ছেড়ে তাকে নিয়ে আসলাম দারুল আজহার ঢাকা ক্যাম্পাসে। এ দিকে লক্ষ্মীপুর ক্যাম্পাসের উদ্বোধনী মাহফিল। প্রধান অতিথি অধ্যাপক খালেকুজ্জামান। খালেকুজ্জামান ভাইসহ আমরা একসাথে যাওয়ার কথা। ড্রাইভার ছুটিতে। অবশেষে সাহস করে নিজেই বসলাম ড্রাইভিং সিটে। প্রায় ৫০০ কিলোমিটার ড্রাইভ করে অনুষ্ঠানশেষে রাতেই ফিরলাম ঢাকা। কোনো ক্লান্তি অনুভব করিনি। কী এক অজানা শক্তি সাহস যুগিয়েছে! পরবর্তী টার্গেট নির্ধারিত হল ঢাকার উত্তরায় প্রধান ক্যাম্পাস এর বহু ঘাতপ্রতিঘাত অতিক্রম করে মানবসৃষ্ট জটিলতার করনে এক বছরে তিন তিনবার পরিবর্তন করতে হল ক্যাম্পাসটি। অবশেষে ২০১৫ সালে সকল প্রতিবন্ধকতার জাল ছিন্ন করে উত্তরা মডেল টাউনে প্রতিষ্ঠিত হল প্রধান ক্যাম্পাস।",
                                            "স্বল্প অতীতের ক্ষুদ্র ক্ষুদ্র অর্জনগুলো আমাদের সাহস যুগিয়েছে, বিশেষ করে আমাদের ছাত্র-ছাত্রীদের কাক্সিক্ষত মানে ফলাফল অর্জনে আমরা গর্বিত। প্রতিষ্ঠালগ্ন থেকে দারুল আজহারের ৫ম, ৮ম ও দাখিল দশম শ্রেণীর ছাত্র-ছাত্রীদের অ+ সহ শতভাগ সাফল্য এবং জেলা পর্যায়ে ১ম ২০ টি আসনের মধ্যে ১ম ২য় ৩য় ৪র্থ ৫মসহ ধারাবাহিক ১২টি স্থান অর্জনে ব্যতিক্রমী সাড়া মিলেছে আমাদের নোয়াখালী ক্যাম্পাসে। আজ আরশের মালিকের কাছে একটাই কামনা, দারুল আজহার যেন হয় মুসলিম জাতি গঠনে এ উপমহাদেশের শ্রেষ্ঠ বিদ্যাপীঠ। তিনি যেন কিয়ামত পর্যন্ত এ পুণ্য অর্জনের মারকাজকে কবুল করেন এবং জারি রাখেন। আর ঘোষণা অনুযায়ী ৬৪ জেলায় যেন দেখতে পাই দারুল আজহারের স্থায়ী ক্যাম্পাস।",
                                            "পরিশেষে আমি আমার অন্তরের অন্ত:স্থল থেকে দারুল আজহার ক্যাডেট মাদরাসার শিক্ষক-শিক্ষিকা, ছাত্র-ছাত্রী, অভিভাবক, পরিচালক, শেয়ার হোল্ডার, সকল কর্মকর্তা-কর্মচারি শুভানুধ্যায়ীকে ধন্যবাদ ও কৃতজ্ঞতা জ্ঞাপন করছি। এই স্মারক গ্রন্থ প্রকাশে যারা আমাকে সার্বিক সহযোগিতা করেছেন, বিশেষভাবে জনাব সাহাব উদ্দিন খন্দকার, এনামুল হক হাসানসহ সকলের শুকরিয়া জ্ঞাপন করছি। সময়ের স্বল্পতার কারণে কিছু অনিচ্ছাকৃত ত্রুটি পরিলক্ষিত হলে আমাদেরকে অবগত করবেন। আল্লাহ আমাদের সকল প্রচেষ্টাকে তার সন্তুষ্টি ও জান্নাতের বিনিময়ে কবুল করুন। আমীন।"
                                        ].map((paragraph, index) => (
                                            <motion.p
                                                key={index}
                                                className="relative pl-6 border-l-2 border-blue-400/30 hover:border-blue-400/60 transition-all duration-300"
                                                whileHover={{ x: 5 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <span className="absolute -left-2 top-0 text-3xl text-blue-400 font-bold">"</span>
                                                {paragraph}
                                                <span className="absolute bottom-0 right-0 text-3xl text-blue-400 font-bold">"</span>
                                            </motion.p>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Custom animation styles */}
            <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </div>
    );
}