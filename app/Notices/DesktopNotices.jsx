// NoticeTable.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiFileText, FiDownload, FiSearch, FiFilter, FiChevronDown, FiChevronUp, FiX } from 'react-icons/fi';
import { formatDateWithBengaliMonth } from '@/utils/dateUtils';
import convertBengaliToEnglish from '@/utils/numberConverter';

const DesktopNotices = ({ notices, isLoading = false }) => {
    const [filteredNotices, setFilteredNotices] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'descending' });
    const [filterOpen, setFilterOpen] = useState(false);
    const [dateFilter, setDateFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Filter and sort notices
    useEffect(() => {
        let result = [...notices];

        // Apply search filter
        if (searchTerm) {
            result = result.filter(notice =>
                notice[1].title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Apply date filter
        if (dateFilter !== 'all') {
            const now = new Date();
            const filterDate = new Date();

            if (dateFilter === 'week') {
                filterDate.setDate(now.getDate() - 7);
            } else if (dateFilter === 'month') {
                filterDate.setMonth(now.getMonth() - 1);
            } else if (dateFilter === 'year') {
                filterDate.setFullYear(now.getFullYear() - 1);
            }

            result = result.filter(notice => {
                const noticeDate = new Date(notice[1].date);
                return noticeDate >= filterDate;
            });
        }

        // Apply sorting
        if (sortConfig.key) {
            result.sort((a, b) => {
                if (a[1][sortConfig.key] < b[1][sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[1][sortConfig.key] > b[1][sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }

        setFilteredNotices(result);
        setCurrentPage(1); // Reset to first page when filters change
    }, [notices, searchTerm, sortConfig, dateFilter]);

    // Handle sorting
    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    // Pagination
    const paginatedNotices = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredNotices.slice(startIndex, startIndex + itemsPerPage);
    }, [filteredNotices, currentPage]);

    const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);

    // Loading skeleton
    const renderSkeleton = () => {
        return Array(itemsPerPage).fill(0).map((_, index) => (
            <motion.tr
                key={`skeleton-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border-b border-gray-100"
            >
                <td className="py-4 px-6">
                    <div className="flex items-center">
                        <div className="w-5 h-5 bg-gray-200 rounded-full mr-2 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                    </div>
                </td>
                <td className="py-4 px-6">
                    <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                </td>
                <td className="py-4 px-6 text-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mx-auto animate-pulse"></div>
                </td>
            </motion.tr>
        ));
    };

    // Empty state
    const renderEmptyState = () => (
        <motion.tr
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border-b border-gray-100"
        >
            <td colSpan="3" className="py-12 px-6 text-center">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FiFileText className="text-blue-500 text-4xl" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-700 mb-1">কোনো নোটিশ পাওয়া যায়নি</h3>
                    <p className="text-gray-500">অন্য ফিল্টার ব্যবহার করে দেখুন</p>
                </div>
            </td>
        </motion.tr>
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
            {/* Search and filter bar */}
            <div className="p-4 md:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="relative flex-1 max-w-md">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiSearch className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="নোটিশ খুঁজুন..."
                            className="w-full outline-none pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
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

                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <button
                                onClick={() => setFilterOpen(!filterOpen)}
                                className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                <FiFilter className="mr-2 text-gray-600" />
                                <span className="text-gray-700">ফিল্টার</span>
                                {filterOpen ? <FiChevronUp className="ml-2" /> : <FiChevronDown className="ml-2" />}
                            </button>

                            <AnimatePresence>
                                {filterOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 border border-gray-200"
                                    >
                                        <div className="p-3">
                                            <h4 className="text-sm font-medium text-gray-700 mb-2">তারিখ অনুযায়ী ফিল্টার</h4>
                                            <div className="space-y-2">
                                                {['all', 'week', 'month', 'year'].map((option) => (
                                                    <label key={option} className="flex items-center cursor-pointer">
                                                        <input
                                                            type="radio"
                                                            name="dateFilter"
                                                            checked={dateFilter === option}
                                                            onChange={() => setDateFilter(option)}
                                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                                        />
                                                        <span className="ml-2 text-sm text-gray-700">
                                                            {option === 'all' && 'সব'}
                                                            {option === 'week' && 'গত সপ্তাহ'}
                                                            {option === 'month' && 'গত মাস'}
                                                            {option === 'year' && 'গত বছর'}
                                                        </span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="text-sm text-gray-600 bg-white px-3 py-2 rounded-lg border border-gray-200">
                            মোট {convertBengaliToEnglish(filteredNotices.length)} টি নোটিশ
                        </div>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="">
                <table className="w-full">
                    <thead className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                        <tr>
                            <th
                                className="py-4 px-6 text-left font-semibold rounded-tl-xl cursor-pointer hover:bg-blue-700 transition-colors"
                                onClick={() => requestSort('date')}
                            >
                                <div className="flex items-center">
                                    <span>তারিখ</span>
                                    {sortConfig.key === 'date' && (
                                        sortConfig.direction === 'ascending' ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />
                                    )}
                                </div>
                            </th>
                            <th
                                className="py-4 px-6 text-left font-semibold cursor-pointer hover:bg-blue-700 transition-colors"
                                onClick={() => requestSort('title')}
                            >
                                <div className="flex items-center">
                                    <span>নোটিশ শিরোনাম</span>
                                    {sortConfig.key === 'title' && (
                                        sortConfig.direction === 'ascending' ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />
                                    )}
                                </div>
                            </th>
                            <th className="py-4 px-6 text-center font-semibold rounded-tr-xl">ডাউনলোড</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {isLoading ? (
                            renderSkeleton()
                        ) : paginatedNotices.length > 0 ? (
                            paginatedNotices.map((notice, index) => (
                                <motion.tr
                                    key={notice[0]}
                                    className="hover:bg-blue-50 transition-colors duration-200"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 * index }}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                >
                                    <td className="py-4 px-6">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                                <FiCalendar className="text-blue-500" />
                                            </div>
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
                                            className="text-blue-600 hover:text-blue-800 font-medium flex items-center group"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                                                <FiFileText className="text-blue-500" />
                                            </div>
                                            <span className="text-lg">{notice[1].title}</span>
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
                            ))
                        ) : (
                            renderEmptyState()
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {filteredNotices.length > itemsPerPage && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 w-full flex justify-center align-middle items-center">
                    {/* <div className="text-sm text-gray-700">
                        দেখানো হচ্ছে <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> থেকে{' '}
                        <span className="font-medium">
                            {Math.min(currentPage * itemsPerPage, filteredNotices.length)}
                        </span>{' '}
                        এর মধ্যে <span className="font-medium">{filteredNotices.length}</span> টি নোটিশ
                    </div> */}

                    <div className="flex space-x-4">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={`px-3 py-1 rounded-md ${currentPage === 1
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                                }`}
                        >
                            পূর্ববর্তী
                        </button>

                        {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                            let pageNum;
                            if (totalPages <= 5) {
                                pageNum = i + 1;
                            } else if (currentPage <= 3) {
                                pageNum = i + 1;
                            } else if (currentPage >= totalPages - 2) {
                                pageNum = totalPages - 4 + i;
                            } else {
                                pageNum = currentPage - 2 + i;
                            }

                            return (
                                <button
                                    key={pageNum}
                                    onClick={() => setCurrentPage(pageNum)}
                                    className={`w-8 h-8 rounded-full ${currentPage === pageNum
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                                        }`}
                                >
                                    {pageNum}
                                </button>
                            );
                        })}

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className={`px-3 py-1 rounded-md ${currentPage === totalPages
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                                }`}
                        >
                            পরবর্তী
                        </button>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export default DesktopNotices;