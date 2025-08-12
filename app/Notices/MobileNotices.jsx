// MobileNoticeCards.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiCalendar, FiFileText, FiDownload, FiSearch, FiFilter,
    FiStar, FiChevronDown, FiX, FiClock, FiBookmark, FiInfo,
    FiHeart, FiShare2, FiEye
} from 'react-icons/fi';
import { formatDate, formatTime } from '@/utils/dataUtilsForMobile';
import convertBengaliToEnglish from '@/utils/numberConverter';
import ShareNotice from '@/utils/ShareNotice';
const MobileNotices = ({ notices = [], isLoading = false }) => {
    // State management
    const [filteredNotices, setFilteredNotices] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterOpen, setFilterOpen] = useState(false);
    const [dateFilter, setDateFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(4);
    const [favorites, setFavorites] = useState([]);
    const [selectedNotice, setSelectedNotice] = useState(null);
    const [advancedFilters, setAdvancedFilters] = useState({
        hasAttachment: false,
        isImportant: false,
        category: 'all'
    });

    // Filter and sort notices
    useEffect(() => {
        let result = [...notices];

        // Apply search filter
        if (searchTerm) {
            result = result.filter(notice =>
                notice[1].title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                notice[1].description?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Apply date filter
        if (dateFilter !== 'all') {
            const now = new Date();
            const filterDate = new Date();

            if (dateFilter === 'week') filterDate.setDate(now.getDate() - 7);
            else if (dateFilter === 'month') filterDate.setMonth(now.getMonth() - 1);
            else if (dateFilter === 'year') filterDate.setFullYear(now.getFullYear() - 1);

            result = result.filter(notice => {
                const noticeDate = new Date(notice[1].date);
                return noticeDate >= filterDate;
            });
        }

        // Apply advanced filters
        if (advancedFilters.hasAttachment) {
            result = result.filter(notice => notice[1].hasAttachment);
        }

        if (advancedFilters.isImportant) {
            result = result.filter(notice => notice[1].isImportant);
        }

        setFilteredNotices(result);
        setCurrentPage(1);
    }, [notices, searchTerm, dateFilter, advancedFilters]);

    // Pagination
    const paginatedNotices = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredNotices.slice(startIndex, startIndex + itemsPerPage);
    }, [filteredNotices, currentPage, itemsPerPage]);

    const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);

    // Toggle favorite
    const toggleFavorite = (noticeId) => {
        setFavorites(prev =>
            prev.includes(noticeId)
                ? prev.filter(id => id !== noticeId)
                : [...prev, noticeId]
        );
    };

    // Loading skeleton
    const renderSkeleton = () => {
        return Array(itemsPerPage).fill(0).map((_, index) => (
            <motion.div
                key={`skeleton-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
                <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center">
                            <div className="w-5 h-5 bg-gray-200 rounded-full mr-2 animate-pulse"></div>
                            <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                        </div>
                        <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                    </div>
                    <div className="h-5 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                </div>
            </motion.div>
        ));
    };

    // Empty state
    const renderEmptyState = () => (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
        >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiFileText className="text-blue-500 text-4xl" />
            </div>
            <h3 className="text-lg font-medium text-gray-700 mb-1">কোনো নোটিশ পাওয়া যায়নি</h3>
            <p className="text-gray-500 mb-4">অন্য ফিল্টার ব্যবহার করে দেখুন</p>
            <button
                onClick={() => {
                    setSearchTerm('');
                    setDateFilter('all');
                    setAdvancedFilters({
                        hasAttachment: false,
                        isImportant: false,
                        category: 'all'
                    });
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
                ফিল্টার রিসেট করুন
            </button>
        </motion.div>
    );

    // Notice detail modal
    const renderNoticeModal = () => (
        <AnimatePresence>
            {selectedNotice && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedNotice(null)}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-white rounded-2xl shadow-xl w-full max-h-[90vh] overflow-hidden"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="p-5 border-b border-gray-200">
                            <div className="flex justify-between items-start">
                                <h2 className="text-xl font-bold text-gray-800">{selectedNotice[1].title}</h2>
                                <button
                                    onClick={() => setSelectedNotice(null)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <FiX size={24} />
                                </button>
                            </div>
                            {/* <div className="flex items-center mt-2 text-gray-600">
                                <FiCalendar className="mr-2" />
                                <span>{formatDate(selectedNotice[1].date)}</span>
                                {selectedNotice[1].isImportant && (
                                    <span className="ml-3 px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full flex items-center">
                                        গুরুত্বপূর্ণ
                                    </span>
                                )}
                            </div> */}
                        </div>

                        <div className="p-5 overflow-y-auto max-h-[60vh]">
                            {selectedNotice[1].description && (
                                <div className="mb-6">
                                    <p className="text-gray-700">{selectedNotice[1].description}</p>
                                </div>
                            )}

                            <div className="grid grid-cols-2 gap-3">
                                <a
                                    href={selectedNotice[1].link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
                                >
                                    <FiEye className="mr-2" /> দেখুন
                                </a>
                                {/* <a
                                    href={selectedNotice[1].link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center"
                                    download
                                >
                                    <FiDownload className="mr-2" /> ডাউনলোড
                                </a>
                                <button
                                    onClick={() => toggleFavorite(selectedNotice[0])}
                                    className={`px-4 py-3 rounded-lg transition-colors flex items-center justify-center ${favorites.includes(selectedNotice[0])
                                        ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    <FiHeart className={`mr-2 ${favorites.includes(selectedNotice[0]) ? 'fill-current' : ''}`} />
                                    {favorites.includes(selectedNotice[0]) ? 'সংরক্ষিত' : 'সংরক্ষণ'}
                                </button> */}
                                <button className="px-4 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center justify-center" onClick={() => ShareNotice({
                                    url: selectedNotice[1].link,
                                    title: selectedNotice[1].title
                                })} >
                                    <FiShare2 className="mr-2" /> শেয়ার
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    return (
        <>
            {renderNoticeModal()}

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="md:hidden space-y-4"
            >
                {/* Search and filter bar */}
                <div className="bg-white rounded-2xl shadow-lg p-4 mb-4">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="relative flex-1">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiSearch className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="নোটিশ খুঁজুন..."
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none focus:border-blue-500 transition-all"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            {searchTerm && (
                                <button
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    onClick={() => setSearchTerm('')}
                                >
                                    <FiX className="text-gray-400 hover:text-gray-600" />
                                </button>
                            )}
                        </div>

                        <button
                            onClick={() => setFilterOpen(!filterOpen)}
                            className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all"
                        >
                            <FiFilter size={20} />
                        </button>
                    </div>

                    {/* Filter dropdown */}
                    <AnimatePresence>
                        {filterOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="pt-4 border-t border-gray-100">
                                    <h4 className="text-sm font-medium text-gray-700 mb-3">ফিল্টার অপশন</h4>

                                    <div className="mb-4">
                                        {/* <h5 className="text-xs font-medium text-gray-500 mb-2">তারিখ অনুযায়ী</h5> */}
                                        <div className="grid grid-cols-2 gap-2">
                                            {['all', 'week', 'month', 'year'].map((option) => (
                                                <button
                                                    key={option}
                                                    onClick={() => setDateFilter(option)}
                                                    className={`px-3 py-2 rounded-lg text-sm ${dateFilter === option
                                                        ? 'bg-blue-500 text-white'
                                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                        }`}
                                                >
                                                    {option === 'all' && 'সব'}
                                                    {option === 'week' && 'গত সপ্তাহ'}
                                                    {option === 'month' && 'গত মাস'}
                                                    {option === 'year' && 'গত বছর'}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* <div className="mb-4">
                                        <h5 className="text-xs font-medium text-gray-500 mb-2">অতিরিক্ত ফিল্টার</h5>
                                        <div className="space-y-2">
                                            <label className="flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={advancedFilters.hasAttachment}
                                                    onChange={(e) => setAdvancedFilters(prev => ({ ...prev, hasAttachment: e.target.checked }))}
                                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">সংযুক্তিসহ নোটিশ</span>
                                            </label>
                                            <label className="flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={advancedFilters.isImportant}
                                                    onChange={(e) => setAdvancedFilters(prev => ({ ...prev, isImportant: e.target.checked }))}
                                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">গুরুত্বপূর্ণ নোটিশ</span>
                                            </label>
                                        </div>
                                    </div> */}

                                    <div className="flex justify-between">
                                        <button
                                            onClick={() => {
                                                setDateFilter('all');
                                                setAdvancedFilters({
                                                    hasAttachment: false,
                                                    isImportant: false,
                                                    category: 'all'
                                                });
                                            }}
                                            className="text-sm text-blue-600 hover:text-blue-800"
                                        >
                                            ফিল্টার রিসেট
                                        </button>
                                        {/* <button
                                            onClick={() => setFilterOpen(false)}
                                            className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600"
                                        >
                                            প্রয়োগ করুন
                                        </button> */}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Results count */}
                    <div className="text-sm text-gray-600 mt-3">
                        মোট {convertBengaliToEnglish(filteredNotices.length)} টি নোটিশ
                    </div>
                </div>

                {/* Notice cards */}
                {isLoading ? (
                    renderSkeleton()
                ) : paginatedNotices.length > 0 ? (
                    paginatedNotices.map((notice, index) => (
                        <motion.div
                            key={notice[0]}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                            onClick={() => setSelectedNotice(notice)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * index }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center text-sm text-gray-500">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-[-4px]">
                                            <FiCalendar className="text-blue-500" />
                                        </div>
                                        <div>
                                            <span>{formatDate(notice[1]?.date)}</span>
                                            {/* <div className="flex items-center text-xs text-gray-400 mt-1">
                                                <FiClock className="mr-1" />
                                                {new Date(notice[1]?.date).toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' })}
                                            </div> */}
                                        </div>
                                    </div>

                                    <div className="flex space-x-2">
                                        {/* <button
                                            onClick={() => toggleFavorite(notice[0])}
                                            className={`p-2 rounded-full ${favorites.includes(notice[0])
                                                ? 'bg-yellow-100 text-yellow-500'
                                                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                                }`}
                                        >
                                            <FiHeart className={favorites.includes(notice[0]) ? 'fill-current' : ''} />
                                        </button> */}
                                        <a
                                            href={notice[1].link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all hover:shadow-md"
                                            download
                                        >
                                            <FiDownload />
                                        </a>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <button
                                        onClick={() => setSelectedNotice(notice)}
                                        className="text-left w-full"
                                    >
                                        <a href={notice[1].link} target='__blank' className="text-lg font-medium text-gray-800 mb-1 hover:text-blue-600 transition-colors flex">
                                            <span className="min-w-8 max-w-8 min-h-8 max-h-8 rounded-full bg-blue-100  mr-3 group-hover:bg-blue-200 transition-colors flex justify-center items-center">
                                                <FiFileText className="text-blue-500" />
                                            </span>
                                            <span className='hover:underline decoration-dotted underline-offset-4 mt-[3px]'>{notice[1].title}</span>
                                        </a>
                                        {notice[1].description && (
                                            <p className="text-gray-600 text-sm line-clamp-2">
                                                {notice[1].description}
                                            </p>
                                        )}
                                    </button>
                                </div>

                                <div className="w-full flex justify-end items-center">
                                    {/* <div className="flex items-center">
                                        {notice[1].isImportant && (
                                            <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full flex items-center mr-2">
                                                গুরুত্বপূর্ণ
                                            </span>
                                        )}
                                        {notice[1].hasAttachment && (
                                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full flex items-center">
                                                <FiFileText className="mr-1" /> সংযুক্তি
                                            </span>
                                        )}
                                    </div> */}

                                    <button
                                        onClick={() => setSelectedNotice(notice)}
                                        className="text-blue-500 hover:text-blue-700 flex items-center text-md"
                                    >
                                        <FiInfo className="mr-1 mt-[-4px]" /> Options
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    renderEmptyState()
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center space-x-2 mt-6">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={`p-2 rounded-full ${currentPage === 1
                                ? 'bg-gray-200 text-gray-400'
                                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                }`}
                        >
                            <FiChevronDown className="rotate-90" />
                        </button>

                        <div className="text-sm text-gray-700">
                            {currentPage} / {totalPages}
                        </div>

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className={`p-2 rounded-full ${currentPage === totalPages
                                ? 'bg-gray-200 text-gray-400'
                                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                }`}
                        >
                            <FiChevronDown className="-rotate-90" />
                        </button>
                    </div>
                )}
            </motion.div>
        </>
    );
};

export default MobileNotices;