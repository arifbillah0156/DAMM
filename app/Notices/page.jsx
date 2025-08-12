"use client"
import { get, ref } from "firebase/database";
import { database } from "@/lib/firebase";
import { useEffect, useState } from "react";
import Loading from "./loading";
import { motion } from "framer-motion";
import { FiCalendar, FiDownload, FiFileText, FiSearch, FiChevronUp } from "react-icons/fi";
import AnimatedNoticeHeader from "./AnimatedNoticeHeader";
import DesktopNotices from "./DesktopNotices";
import MobileNotices from "./MobileNotices";

export default function NoticeBoard() {
    const [notices, setNotices] = useState(null);
    const [filteredNotices, setFilteredNotices] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    function convertDateYYYYMMDDtoDDMMYYYY(dateStr) {
        if (!dateStr) return '';
        const [yyyy, mm, dd] = dateStr.split('-');
        return `${dd}/${mm}/${yyyy}`;
    }
    // Filter notices based on search term
    useEffect(() => {
        if (notices && searchTerm) {
            const filtered = notices.filter(notice =>
                notice[1]?.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredNotices(filtered);
        } else if (notices) {
            setFilteredNotices(notices);
        }
    }, [searchTerm, notices]);

    // Show scroll to top button when scrolling down
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const usersRef = ref(database, "Notices");
        get(usersRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const snapData = Object.entries(snapshot.val());
                    setNotices([...snapData].reverse());
                    setFilteredNotices([...snapData].reverse());
                } else {
                    setNotices([]);
                    setFilteredNotices([]);
                }
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <div className="text-center mb-2">
                        <AnimatedNoticeHeader />
                        {/* <p className="text-gray-600 max-w-2xl mx-auto mt-2">
                            সর্বশেষ তথ্য ও নোটিশ সমূহ এখানে প্রকাশ করা হয়েছে। নোটিশ ডাউনলোড করতে ডাউনলোড বাটনে ক্লিক করুন।
                        </p> */}
                    </div>
                </motion.div>

                {/* Search Bar */}
                {/* {notices && notices.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-2 max-w-2xl mx-auto"
                    >
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="নোটিশ অনুসন্ধান করুন..."
                                className="w-full py-3 px-4 pl-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                        </div>
                    </motion.div>
                )} */}

                {/* Content Section */}
                {isLoading ? (
                    <Loading />
                ) : filteredNotices && filteredNotices.length > 0 ? (
                    <>
                        {/* Desktop View - Table */}
                        <div className="hidden md:block">
                            <DesktopNotices notices={notices} isLoading={isLoading} />
                        </div>

                        {/* <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="hidden md:block bg-white rounded-2xl shadow-xl overflow-hidden"
                        >
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                                        <tr>
                                            <th className="py-4 px-6 text-left font-semibold rounded-tl-xl">তারিখ</th>
                                            <th className="py-4 px-6 text-left font-semibold">নোটিশ শিরোনাম</th>
                                            <th className="py-4 px-6 text-center font-semibold rounded-tr-xl">ডাউনলোড</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {filteredNotices.map((notice, index) => (
                                            <motion.tr
                                                key={notice[0]}
                                                className="hover:bg-blue-50 transition-colors duration-200"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: 0.1 * index }}
                                            >
                                                <td className="py-4 px-6">
                                                    <div className="flex items-center">
                                                        <FiCalendar className="text-blue-500 mr-2 mt-[-5px]" />
                                                        <span className="font-medium text-gray-700">
                                                            {formatDateWithBengaliMonth(notice[1]?.date)}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6">
                                                    <a
                                                        href={notice[1].link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center group text-lg"
                                                    >
                                                        <FiFileText className="mr-2 text-blue-500 group-hover:scale-110 transition-transform" />
                                                        {notice[1].title}
                                                    </a>
                                                </td>
                                                <td className="py-4 px-6 text-center">
                                                    <a
                                                        href={notice[1].link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
                                                        download
                                                    >
                                                        <FiDownload className="text-xl" />
                                                    </a>
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div> */}

                        {/* Mobile View - Cards */}
                        <div className="block md:hidden">
                            <MobileNotices notices={notices} isLoading={isLoading} />
                        </div>
                        {/* <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="md:hidden space-y-4"
                        >
                            {filteredNotices.map((notice, index) => (
                                <motion.div
                                    key={notice[0]}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 * index }}
                                >
                                    <div className="p-5">
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="flex items-center text-sm text-gray-500">
                                                <FiCalendar className="mr-1 text-lc mt-[-5px]" />
                                                <span>{convertDateYYYYMMDDtoDDMMYYYY(notice[1]?.date)}</span>
                                            </div>
                                            <a
                                                href={notice[1].link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors hover:bg-gradient-to-r from-blue-500 to-indigo-600 hover:text-white"
                                                download
                                            >
                                                <FiDownload />
                                            </a>
                                        </div>
                                        <a
                                            href={notice[1].link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-md font-medium text-lc underline decoration-dotted underline-offset-4 hover:text-blue-600 transition-colors"
                                        >
                                            <span className="flex">
                                                <FiFileText className="mr-2 mt-1 text-blue-500 group-hover:scale-110 transition-transform" />
                                                {notice[1].title}
                                            </span>

                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div> */}
                    </>
                ) : (
                    // Empty State
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-2xl mx-auto"
                    >
                        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FiFileText className="text-blue-500 text-4xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">কোন নোটিশ পাওয়া যায়নি</h3>
                        <p className="text-gray-600 mb-6">
                            {searchTerm ? "আপনার অনুসন্ধানের সাথে মেলে এমন কোন নোটিশ পাওয়া যায়নি। অন্য শব্দ দিয়ে চেষ্টা করুন।" : "বর্তমানে কোন নোটিশ প্রদর্শনের জন্য নেই। পরে আবার চেক করুন।"}
                        </p>
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm("")}
                                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                অনুসন্ধান পরিষ্কার করুন
                            </button>
                        )}
                    </motion.div>
                )}

                {/* Scroll to Top Button */}
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={scrollToTop}
                        className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl z-10"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FiChevronUp className="text-xl" />
                    </motion.button>
                )}
            </div>
        </div>
    );
}