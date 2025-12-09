"use client"
import { get, ref } from "firebase/database";
import { database } from "@/lib/firebase";
import { useEffect, useState } from "react";
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

                    </div>
                </motion.div>



                {/* Content Section */}
                {isLoading ? (
                    <div className="fixed inset-0 flex items-center justify-center bg-lc text-white z-50">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
                    </div>
                ) : filteredNotices && filteredNotices.length > 0 ? (
                    <>
                        {/* Desktop View - Table */}
                        <div className="hidden md:block">
                            <DesktopNotices notices={notices} isLoading={isLoading} />
                        </div>



                        {/* Mobile View - Cards */}
                        <div className="block md:hidden">
                            <MobileNotices notices={notices} isLoading={isLoading} />
                        </div>

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


            </div>
        </div>
    );
}