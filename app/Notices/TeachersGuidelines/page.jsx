"use client";
import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
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
    FiLoader,
    FiChevronLeft,
    FiChevronRight,
    FiMaximize2,
    FiMinimize2
} from 'react-icons/fi';
import AnimatedTeachersGuidelines from './AnimatedTeachersGuidelines';
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
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedPost, setSelectedPost] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const postsPerPage = 9; // Changed to show 9 posts per page (3 rows of 3 columns)
    const topPostRef = useRef(null);
    // Improved search with debouncing
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 300);
        return () => clearTimeout(timerId);
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
    // Calculate paginated posts
    const paginatedPosts = useMemo(() => {
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        return filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    }, [filteredPosts, currentPage]);
    // Calculate total pages
    const totalPages = useMemo(() => {
        return Math.ceil(filteredPosts.length / postsPerPage);
    }, [filteredPosts]);
    // Reset to page 1 when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [filter, debouncedSearchTerm]);
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
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            setTimeout(() => {
                scrollToTop();
                if (topPostRef.current) {
                    topPostRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    topPostRef.current.classList.add('ring-4', 'ring-indigo-300', 'rounded-xl');
                    setTimeout(() => {
                        if (topPostRef.current) {
                            topPostRef.current.classList.remove('ring-4', 'ring-indigo-300', 'rounded-xl');
                        }
                    }, 2000);
                }
            }, 100);
        }
    };
    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            setTimeout(() => {
                scrollToTop();
                if (topPostRef.current) {
                    topPostRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    topPostRef.current.classList.add('ring-4', 'ring-indigo-300', 'rounded-xl');
                    setTimeout(() => {
                        if (topPostRef.current) {
                            topPostRef.current.classList.remove('ring-4', 'ring-indigo-300', 'rounded-xl');
                        }
                    }, 2000);
                }
            }, 100);
        }
    };
    const goToPage = (pageNum) => {
        setCurrentPage(pageNum);
        setTimeout(() => {
            scrollToTop();
            if (topPostRef.current) {
                topPostRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                topPostRef.current.classList.add('ring-4', 'ring-indigo-300', 'rounded-xl');
                setTimeout(() => {
                    if (topPostRef.current) {
                        topPostRef.current.classList.remove('ring-4', 'ring-indigo-300', 'rounded-xl');
                    }
                }, 2000);
            }
        }, 100);
    };
    const openPostModal = (post) => {
        setSelectedPost(post);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };
    const closePostModal = () => {
        setIsModalOpen(false);
        setTimeout(() => {
            setSelectedPost(null);
            document.body.style.overflow = 'auto';
        }, 300);
    };
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-6 px-4 lg:px-8 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>
            <div className="max-w-7xl mx-auto relative z-0">
                {/* Header */}
                <div className="text-center mb-4 pt-2">
                    <AnimatedTeachersGuidelines />
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
                        শিক্ষকদের দেওয়া সর্বশেষ নির্দেশনা ও ঘোষণাসমূহ
                    </p>
                </div>
                {/* Search Bar */}
                <div className={`mb-8 transition-all duration-300 ${isSearchFocused ? 'scale-[1.02]' : ''}`}>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FiSearch className="text-gray-400 text-xl z-10 mt-[-4px]" />
                        </div>
                        <input
                            type="text"
                            placeholder="নির্দেশনা খুজুন..."
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
                        {searchTerm && (
                            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-b-xl transition-all duration-300"
                                style={{ width: `${Math.min(100, searchTerm.length * 10)}%` }}>
                            </div>
                        )}
                    </div>
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
                </div>
                {/* Filter Controls */}
                <div className="mb-10">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2 mb-3 sm:mb-0">
                            <FiFilter className="text-indigo-600 mt-[-4px] " />
                            ফিল্টার করুন
                        </h2>
                        <span className="text-sm text-gray-500 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200">
                            {filteredPosts.length} টি নির্দেশনা {posts.length > 0 && `(মোট ${posts.length})`}
                        </span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
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
                </div>
                {/* Content */}
                {loading ? (
                    <div className="flex flex-col justify-center items-center h-64">
                        <div className="relative mb-6">
                            <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-indigo-600"></div>
                            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                                <FiBookOpen className="text-indigo-600 text-2xl" />
                            </div>
                        </div>
                        <p className="text-gray-600 font-medium">নির্দেশনা লোড হচ্ছে...</p>
                        <p className="text-gray-500 text-sm mt-2">অনুগ্রহপূর্বক অপেক্ষা করুন</p>
                    </div>
                ) : error ? (
                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl shadow-lg backdrop-blur-sm">
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
                    </div>
                ) : filteredPosts.length === 0 ? (
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-10 text-center border border-gray-100">
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
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {paginatedPosts.map((post, index) => (
                                <div
                                    key={post.id}
                                    ref={index === 0 ? topPostRef : null}
                                    className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:transform hover:-translate-y-1"
                                >
                                    <div className="p-6 h-full flex flex-col">
                                        <div className="flex-grow">
                                            {/* Date moved to top */}
                                            <div className="mb-3">
                                                <div className="flex justify-center items-center text-sm text-gray-500 bg-blue-50 px-3 py-1.5 rounded-full">
                                                    <FiCalendar className="mr-1.5 mt-[-4px]" />
                                                    <span>{formatDate(post.postDate)}</span>
                                                </div>
                                            </div>
                                            {/*  */}
                                            <div className="flex justify-center flex-wrap items-center gap-4 text-sm text-gray-600 mb-2">
                                                <div className="flex items-center bg-green-50 px-3 py-1.5 rounded-full">
                                                    <FiUser className="mr-1.5 mt-[-4px] text-indigo-500" />
                                                    <span className="font-medium">{post.teacherName}</span>
                                                </div>
                                                <div className="flex items-center bg-purple-50 px-3 py-1.5 rounded-full">
                                                    <span>{post.teacherPosition}</span>
                                                </div>
                                            </div>
                                            {/*  */}
                                            <div className="flex items-center mb-1">
                                                <span className={`text-sm px-3 mt-1 py-1 rounded-full ${getAudienceColor(post.targetAudience)}`}>
                                                    {getAudienceLabel(post.targetAudience)}
                                                </span>
                                            </div>
                                            {/* Title with star icon */}
                                            <div className="mb-3">
                                                <h2 className="text-lg text-gray-800">
                                                    <span className="font-bold text-indigo-700">বিষয়:</span>{" "}
                                                    <span className="italic font-medium">{post.postTitle}</span>
                                                </h2>
                                            </div>
                                            <div className="mb-4">
                                                <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-r-lg">
                                                    <p className="text-gray-700 whitespace-pre-line">
                                                        {expandedPost === post.id || post.postContent.length < 150
                                                            ? post.postContent
                                                            : `${post.postContent.substring(0, 150)}...`}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center mt-4">
                                            <button
                                                onClick={() => openPostModal(post)}
                                                className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors"
                                            >
                                                <FiMaximize2 className="text-lg" />
                                                সম্পূর্ণ পড়ুন
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Desktop Pagination (centered below content) */}
                        {totalPages > 1 && (
                            <div className="hidden sm:flex justify-center mt-8 mb-12">
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={goToPrevPage}
                                        disabled={currentPage === 1}
                                        className={`flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${currentPage === 1
                                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm hover:shadow-md'
                                            }`}
                                    >
                                        <FiChevronLeft className="mr-1" />
                                        পূর্ববর্তী
                                    </button>
                                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
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
                                                onClick={() => goToPage(pageNum)}
                                                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${currentPage === pageNum
                                                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm'
                                                    }`}
                                            >
                                                {pageNum}
                                            </button>
                                        );
                                    })}
                                    <button
                                        onClick={goToNextPage}
                                        disabled={currentPage === totalPages}
                                        className={`flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${currentPage === totalPages
                                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:from-indigo-700 hover:to-purple-700'
                                            }`}
                                    >
                                        পরবর্তী
                                        <FiChevronRight className="ml-1" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                )}
                {/* Mobile Pagination (fixed at bottom) */}
                {totalPages > 1 && (
                    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-gray-200 py-4 px-1 sm:px-6 z-10 sm:hidden">
                        <div className="max-w-7xl mx-auto flex justify-between items-center">
                            <button
                                onClick={goToPrevPage}
                                disabled={currentPage === 1}
                                className={`flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${currentPage === 1
                                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm hover:shadow-md'
                                    }`}
                            >
                                <FiChevronLeft className="mr-1" />
                                পূর্ববর্তী
                            </button>
                            <div className="flex items-center space-x-2">
                                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
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
                                            onClick={() => goToPage(pageNum)}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${currentPage === pageNum
                                                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                                                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm'
                                                }`}
                                        >
                                            {pageNum}
                                        </button>
                                    );
                                })}
                            </div>
                            <button
                                onClick={goToNextPage}
                                disabled={currentPage === totalPages}
                                className={`flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${currentPage === totalPages
                                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:from-indigo-700 hover:to-purple-700'
                                    }`}
                            >
                                পরবর্তী
                                <FiChevronRight className="ml-1" />
                            </button>
                        </div>
                    </div>
                )}
                {/* Post Modal */}
                {selectedPost && (
                    <div
                        className={`fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0'}`}
                        onClick={closePostModal}
                    >
                        <div
                            className={`bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${isModalOpen ? 'scale-100' : 'scale-90'}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-6">
                                    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                        <FiStar className="hidden md:block text-indigo-500 mt-[-4px] " />
                                        {selectedPost.postTitle}
                                    </h2>
                                    <button
                                        onClick={closePostModal}
                                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                    >
                                        <FiX className="text-gray-500 text-xl" />
                                    </button>
                                </div>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                                    <div className="flex items-center bg-indigo-50 px-3 py-1.5 rounded-full">
                                        <FiUser className="mr-1.5 mt-[-4px] text-indigo-500" />
                                        <span className="font-medium">{selectedPost.teacherName}</span>
                                    </div>
                                    <div className="flex items-center bg-purple-50 px-3 py-1.5 rounded-full">
                                        <span>{selectedPost.teacherPosition}</span>
                                    </div>
                                    <div className="flex items-center bg-blue-50 px-3 py-1.5 rounded-full">
                                        <FiCalendar className="mr-1.5 mt-[-4px]" />
                                        <span>{formatDate(selectedPost.postDate)}</span>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="flex items-center mb-4">
                                        <span className={`text-sm px-3 py-1 rounded-full ${getAudienceColor(selectedPost.targetAudience)}`}>
                                            {getAudienceLabel(selectedPost.targetAudience)}
                                        </span>
                                    </div>
                                    <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-r-lg">
                                        <p className="text-gray-700 whitespace-pre-line text-lg leading-relaxed">
                                            {selectedPost.postContent}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-8">
                                    <button
                                        onClick={closePostModal}
                                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                                    >
                                        <FiMinimize2 />
                                        বন্ধ করুন
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
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