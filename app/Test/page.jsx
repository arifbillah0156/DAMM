"use client";
import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ref, onValue } from 'firebase/database';
import { database } from '@/lib/firebase';
import {
    FiUser,
    FiFileText,
    FiMessageSquare,
    FiUsers,
    FiCalendar,
    FiClock,
    FiBookOpen,
    FiFilter,
    FiSearch,
    FiArrowUp,
    FiX,
    FiChevronDown,
    FiStar,
    FiLoader
} from 'react-icons/fi';

const TeacherGuidelinesPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [expandedPost, setExpandedPost] = useState(null);
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

    // Improved search with debouncing
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 300); // 300ms debounce delay

        return () => {
            clearTimeout(timerId);
        };
    }, [searchTerm]);

    // Memoized filtered posts for better performance
    const filteredPosts = useMemo(() => {
        return posts.filter(post => {
            let audienceFilter = true;
            if (filter === 'students') audienceFilter = post.targetAudience === 'Students';
            if (filter === 'parents') audienceFilter = post.targetAudience === 'Parents';
            if (filter === 'both') audienceFilter = post.targetAudience === 'Students & Parents';

            const searchFilter = debouncedSearchTerm === '' ||
                post.postTitle.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                post.postContent.toLowerCase().includes(debouncedSearchTerm.toLowerCase());

            return audienceFilter && searchFilter;
        });
    }, [posts, filter, debouncedSearchTerm]);

    useEffect(() => {
        const fetchPosts = () => {
            const postsRef = ref(database, "TeachersGuidelines");
            onValue(postsRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    const postsArray = Object.keys(data).map(key => ({
                        id: key,
                        ...data[key]
                    }));
                    postsArray.sort((a, b) => new Date(b.postDate) - new Date(a.postDate));
                    setPosts(postsArray);
                } else {
                    setPosts([]);
                }
                setLoading(false);
            }, (error) => {
                console.error("Error fetching posts:", error);
                setError("Failed to load guidelines. Please try again later.");
                setLoading(false);
            });
        };
        fetchPosts();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('bn-BD', options);
    };

    const formatTime = (dateString) => {
        const options = { hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleTimeString('bn-BD', options);
    };

    const getAudienceLabel = (audience) => {
        switch (audience) {
            case 'Students': return 'লক্ষ্য: শিক্ষার্থী';
            case 'Parents': return 'লক্ষ্য: অভিভাবক';
            case 'Students & Parents': return 'লক্ষ্য: শিক্ষার্থী ও অভিভাবক';
            default: return audience;
        }
    };

    const getAudienceColor = (audience) => {
        switch (audience) {
            case 'Students': return 'bg-blue-100 text-blue-800';
            case 'Parents': return 'bg-green-100 text-green-800';
            case 'Students & Parents': return 'bg-purple-100 text-purple-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const clearSearch = () => {
        setSearchTerm('');
    };

    const togglePostExpansion = useCallback((id) => {
        setExpandedPost(expandedPost === id ? null : id);
    }, [expandedPost]);

    const handleFilterChange = useCallback((newFilter) => {
        setFilter(newFilter);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-6 px-4 lg:px-8 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-0">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-4 pt-2"
                >
                    <div className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full p-4 shadow-xl mb-6">
                        <FiBookOpen className="text-white text-3xl" />
                    </div>
                    <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent mb-1">
                        Teachers' Guidelines
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        শিক্ষকদের দেওয়া সর্বশেষ নির্দেশনা ও ঘোষণাসমূহ
                    </p>
                </motion.div>

                {/* Search Bar - Improved */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className={`mb-8 transition-all duration-300 ${isSearchFocused ? 'scale-[1.02]' : ''}`}
                >
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FiSearch className="text-gray-400 text-xl" />
                        </div>
                        <input
                            type="text"
                            placeholder="শিরোনাম বা বিষয়বস্তু অনুসন্ধান করুন..."
                            className="w-full pl-12 pr-12 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-lg transition-all duration-300 bg-white/90 backdrop-blur-sm outline-none focus:rounded-lg"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onFocus={() => setIsSearchFocused(true)}
                            onBlur={() => setIsSearchFocused(false)}
                        />
                        {searchTerm && (
                            <button
                                onClick={clearSearch}
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <FiX className="text-xl" />
                            </button>
                        )}
                        {/* Search indicator */}
                        {searchTerm && (
                            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-b-xl transition-all duration-300"
                                style={{ width: `${Math.min(100, searchTerm.length * 10)}%` }}>
                            </div>
                        )}
                    </div>
                    {/* Active search term display */}
                    {searchTerm && (
                        <div className="mt-2 text-sm text-gray-600 flex items-center">
                            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
                                অনুসন্ধান: "{searchTerm}"
                            </span>
                            {debouncedSearchTerm !== searchTerm && (
                                <span className="ml-2 text-gray-500 flex items-center">
                                    <FiLoader className="animate-spin mr-1" size={14} />
                                    অনুসন্ধান করা হচ্ছে...
                                </span>
                            )}
                        </div>
                    )}
                </motion.div>

                {/* Filter Controls - Improved */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-10"
                >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2 mb-3 sm:mb-0">
                            <FiFilter className="text-indigo-600" />
                            ফিল্টার করুন
                        </h2>
                        <span className="text-sm text-gray-500 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200">
                            {filteredPosts.length} টি নির্দেশনা {posts.length > 0 && `(মোট ${posts.length})`}
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={() => handleFilterChange('all')}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-1.5 transition-all duration-300 ${filter === 'all'
                                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg transform -translate-y-0.5'
                                : 'bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm hover:shadow-md'
                                }`}
                        >
                            সব
                        </button>
                        <button
                            onClick={() => handleFilterChange('students')}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-1.5 transition-all duration-300 ${filter === 'students'
                                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg transform -translate-y-0.5'
                                : 'bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm hover:shadow-md'
                                }`}
                        >
                            শিক্ষার্থী
                        </button>
                        <button
                            onClick={() => handleFilterChange('parents')}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-1.5 transition-all duration-300 ${filter === 'parents'
                                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg transform -translate-y-0.5'
                                : 'bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm hover:shadow-md'
                                }`}
                        >
                            অভিভাবক
                        </button>
                        <button
                            onClick={() => handleFilterChange('both')}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-1.5 transition-all duration-300 ${filter === 'both'
                                ? 'bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white shadow-lg transform -translate-y-0.5'
                                : 'bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm hover:shadow-md'
                                }`}
                        >
                            শিক্ষার্থী ও অভিভাবক
                        </button>
                    </div>
                </motion.div>

                {/* Content */}
                {loading ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col justify-center items-center h-64"
                    >
                        <div className="relative mb-6">
                            <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-indigo-600"></div>
                            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                                <FiBookOpen className="text-indigo-600 text-2xl" />
                            </div>
                        </div>
                        <p className="text-gray-600 font-medium">নির্দেশনা লোড হচ্ছে...</p>
                        <p className="text-gray-500 text-sm mt-2">অনুগ্রহপূর্বক অপেক্ষা করুন</p>
                    </motion.div>
                ) : error ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl shadow-lg backdrop-blur-sm"
                    >
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-lg font-medium text-red-700">{error}</p>
                            </div>
                        </div>
                    </motion.div>
                ) : filteredPosts.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-10 text-center border border-gray-100"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 mb-6">
                            <FiFileText className="text-indigo-600 text-3xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">
                            {posts.length === 0 ? 'কোনো নির্দেশনা পাওয়া যায়নি' : 'এই ফিল্টারে কোনো নির্দেশনা নেই'}
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-md mx-auto">
                            {posts.length === 0
                                ? 'এখনো কোনো নির্দেশনা পোস্ট করা হয়নি। অনুগ্রহপূর্বক পরে আবার চেক করুন।'
                                : 'অন্য ফিল্টার নির্বাচন করে দেখুন।'
                            }
                        </p>
                        {(searchTerm || filter !== 'all') && (
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setFilter('all');
                                }}
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                সব ফিল্টার মুছুন
                            </button>
                        )}
                    </motion.div>
                ) : (
                    <div className="space-y-6">
                        <AnimatePresence>
                            {filteredPosts.map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="p-6">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                            <div className="mb-4 md:mb-0">
                                                <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                                                    <FiStar className="text-indigo-500 mt-[-4px] " />
                                                    {post.postTitle}
                                                </h2>
                                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                                    <div className="flex items-center bg-indigo-50 px-3 py-1.5 rounded-full">
                                                        <FiUser className="mr-1.5 mt-[-4px] text-indigo-500" />
                                                        <span className="font-medium">{post.teacherName}</span>
                                                    </div>
                                                    <div className="flex items-center bg-purple-50 px-3 py-1.5 rounded-full">
                                                        <span>{post.teacherPosition}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end">
                                                <div className="flex items-center text-sm text-gray-500 mb-1.5 bg-blue-50 px-3 py-1.5 rounded-full">
                                                    <FiCalendar className="mr-1.5 mt-[-4px]" />
                                                    <span>{formatDate(post.postDate)}</span>
                                                </div>
                                                {/* <div className="flex items-center text-sm text-gray-500 bg-green-50 px-3 py-1.5 rounded-full">
                                                    <FiClock className="mr-1.5" />
                                                    <span>{formatTime(post.postDate)}</span>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="flex items-center mb-3">
                                                <span className={`text-sm px-3 py-1 rounded-full ${getAudienceColor(post.targetAudience)}`}>
                                                    {getAudienceLabel(post.targetAudience)}
                                                </span>
                                            </div>
                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-r-lg">
                                                <p className="text-gray-700 whitespace-pre-line">
                                                    {expandedPost === post.id || post.postContent.length < 200
                                                        ? post.postContent
                                                        : `${post.postContent.substring(0, 200)}...`}
                                                </p>
                                                {post.postContent.length > 200 && (
                                                    <button
                                                        onClick={() => togglePostExpansion(post.id)}
                                                        className="mt-3 text-indigo-600 hover:text-indigo-800 flex items-center gap-1 text-sm font-medium transition-colors"
                                                    >
                                                        {expandedPost === post.id ? 'কম দেখান' : 'আরও পড়ুন'}
                                                        <FiChevronDown className={`transition-transform ${expandedPost === post.id ? 'rotate-180' : ''}`} />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}

                {/* Scroll to top button - Improved */}
                <AnimatePresence>
                    {showScrollTop && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={scrollToTop}
                            className="fixed bottom-1 right-1 p-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-xl hover:from-indigo-700 hover:to-purple-700 transition-all z-0"
                            aria-label="Scroll to top"
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiArrowUp className="text-xl" />
                        </motion.button>
                    )}
                </AnimatePresence>
                <br />
            </div>

            <style jsx global>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
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
};

export default TeacherGuidelinesPage;