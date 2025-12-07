"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { database } from '@/lib/firebase'; // Assuming you have firebase config in this path
import { FiUser, FiFileText, FiMessageSquare, FiUsers, FiCalendar, FiSave, FiSend, FiCheckCircle, FiX, FiClock } from 'react-icons/fi';
import { push, ref, set } from 'firebase/database';
const TeacherPostForm = () => {
    const [formData, setFormData] = useState({
        teacherName: '',
        teacherPosition: '', // Added last name field
        postTitle: '',
        postContent: '',
        targetAudience: 'Students',
        // dueDate: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [draftSaved, setDraftSaved] = useState(false);
    const [characterCount, setCharacterCount] = useState(0);
    const [activeField, setActiveField] = useState('');
    // Load draft from localStorage on component mount
    useEffect(() => {
        const savedDraft = localStorage.getItem('teacherPostDraft');
        if (savedDraft) {
            setFormData(JSON.parse(savedDraft));
            setCharacterCount(JSON.parse(savedDraft).postContent.length);
        }
    }, []);
    // Auto-save draft to localStorage when form data changes
    useEffect(() => {
        if (Object.values(formData).some(value => value !== '')) {
            localStorage.setItem('teacherPostDraft', JSON.stringify(formData));
            setDraftSaved(true);
            const timer = setTimeout(() => {
                setDraftSaved(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [formData]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (name === 'postContent') {
            setCharacterCount(value.length);
        }
    };
    const handleFocus = (fieldName) => {
        setActiveField(fieldName);
    };
    const handleBlur = () => {
        setActiveField('');
    };
    const saveDraft = () => {
        localStorage.setItem('teacherPostDraft', JSON.stringify(formData));
        setDraftSaved(true);
        setTimeout(() => setDraftSaved(false), 2000);
    };
    const clearForm = () => {
        setFormData({
            teacherName: '',
            teacherPosition: '', // Added last name field
            postTitle: '',
            postContent: '',
            targetAudience: 'Students',
            // dueDate: ''
        });
        setCharacterCount(0);
        localStorage.removeItem('teacherPostDraft');
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');
        try {
            // Get-current-date
            const currentDate = new Date().toISOString().split('T')[0];
            // Save to Firebase with current date
            const usersRef = ref(database, "TeachersGuidelines");
            const newDataRef = await push(usersRef);
            await set(newDataRef, {
                ...formData,
                postDate: currentDate,
            });
            // Save to localStorage as backup
            localStorage.setItem(`teacherPost_${Date.now()}`, JSON.stringify({
                ...formData,
                postDate: currentDate
            }));
            setIsSubmitting(false);
            setSubmitSuccess(true);
            // Reset form after success
            setTimeout(() => {
                setSubmitSuccess(false);
                clearForm();
            }, 3000);
        } catch (error) {
            console.error('Error submitting post:', error);
            setIsSubmitting(false);
            setSubmitError('Failed to submit post. Please try again.');
        }
    };
    const formFields = [
        {
            id: 'teacherName',
            label: "শিক্ষকের নাম",
            type: 'text',
            icon: <FiUser className="text-indigo-500 mt-[-4px]" />,
            placeholder: "আপনার নাম লিখুন...",
            required: true,
            animationDelay: 0.1
        },
        {
            id: 'teacherPosition',
            label: "শিক্ষকের পদবী",
            type: 'text',
            icon: <FiUser className="text-indigo-500 mt-[-4px]" />,
            placeholder: "যেমন: Lecturer, Assistant Teacher",
            required: true,
            animationDelay: 0.15
        },
        {
            id: 'postTitle',
            label: "নির্দেশনার বিষয়",
            type: 'text',
            icon: <FiFileText className="text-indigo-500 mt-[-4px]" />,
            placeholder: "যেই বিষয়ে নির্দেশনা দিতে চাচ্ছেন...",
            required: true,
            animationDelay: 0.25
        },
        {
            id: 'targetAudience',
            label: "টার্গেট অডিয়েন্স",
            type: 'select',
            icon: <FiUsers className="text-indigo-500 mt-[-4px]" />,
            options: [
                { value: 'Students', label: 'Students' },
                { value: 'Parents', label: 'Parents' },
                { value: 'Students & Parents', label: 'Students & Parents' }
            ],
            required: true,
            animationDelay: 0.35
        },
        // {
        //     id: 'dueDate',
        //     label: "Due Date (Optional)",
        //     type: 'date',
        //     icon: <FiCalendar className="text-indigo-500" />,
        //     animationDelay: 0.4
        // },
        {
            id: 'postContent',
            label: "পোস্ট লিখুন",
            type: 'textarea',
            icon: <FiMessageSquare className="text-indigo-500 mt-[-4px]" />,
            placeholder: "আপনার নির্দেশনা/ঘোষণাটি লিখুন। সর্বোচ্চ ১০০০ শব্দ...",
            required: true,
            rows: 6,
            animationDelay: 0.55
        }
    ];
    // Get today's date in YYYY-MM-DD format for the min attribute of due date
    const today = new Date().toISOString().split('T')[0];
    return (
        <div className="rounded-lg bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-start justify-center p-0 lg:p-4 ">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full bg-white/90 backdrop-blur-lg rounded-lg shadow-xl overflow-hidden z-0 border border-white/50"
            >
                {/* <div className="bg-gradient-to-r from-teal-600 to-emerald-600 p-6 text-white relative overflow-hidden">
                    <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-y-12 -translate-y-full animate-shimmer"></div>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl font-bold text-center relative z-0"
                    >
                        Teacher's Guidelines
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-center text-teal-100 mt-2 relative z-0"
                    >
                        Create guidelines for students and guardians.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="hidden text-center text-teal-200 mt-2 relative z-0 md:flex items-center justify-center gap-2"
                    >
                        <FiClock />
                        <span>Today: {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </motion.p>
                </div> */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="p-6"
                >
                    {submitSuccess ? (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-green-50 border-l-4 border-green-500 p-4 rounded"
                        >
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <FiCheckCircle className="h-6 w-6 text-green-500" />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-green-700 font-medium">
                                        Your post has been submitted successfully!
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {formFields.map((field) => (
                                <motion.div
                                    key={field.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: field.animationDelay }}
                                    className={`relative transition-all duration-300 ${activeField === field.id ? 'scale-[1.02]' : ''}`}
                                >
                                    <label htmlFor={field.id} className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                                        {field.icon}
                                        <span className="ml-2">{field.label}</span>
                                        {field.required && <span className="text-red-500 ml-1">*</span>}
                                    </label>
                                    {field.type === 'textarea' ? (
                                        <div className="relative">
                                            <motion.textarea
                                                whileFocus={{ scale: 1.01 }}
                                                minLength={10}
                                                maxLength={5000}
                                                id={field.id}
                                                name={field.id}
                                                value={formData[field.id]}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus(field.id)}
                                                onBlur={handleBlur}
                                                required={field.required}
                                                rows={field.rows}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 outline-none"
                                                placeholder={field.placeholder}
                                            />
                                            <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                                                {characterCount}/5000
                                            </div>
                                        </div>
                                    ) : field.type === 'select' ? (
                                        <motion.select
                                            whileFocus={{ scale: 1.01 }}
                                            id={field.id}
                                            name={field.id}
                                            value={formData[field.id]}
                                            onChange={handleChange}
                                            onFocus={() => handleFocus(field.id)}
                                            onBlur={handleBlur}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 outline-none"
                                        >
                                            {field.options.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </motion.select>
                                    ) : (
                                        <motion.input
                                            whileFocus={{ scale: 1.01 }}
                                            type={field.type}
                                            id={field.id}
                                            name={field.id}
                                            value={formData[field.id]}
                                            onChange={handleChange}
                                            onFocus={() => handleFocus(field.id)}
                                            onBlur={handleBlur}
                                            required={field.required}
                                            min={field.id === 'dueDate' ? today : undefined}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 outline-none"
                                            placeholder={field.placeholder}
                                        />
                                    )}
                                </motion.div>
                            ))}
                            {submitError && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-red-50 border-l-4 border-red-500 p-4 rounded"
                                >
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <FiX className="h-5 w-5 text-red-500" />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm text-red-700">
                                                {submitError}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="pt-4 flex flex-col sm:flex-row gap-3"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="button"
                                    onClick={saveDraft}
                                    disabled={isSubmitting}
                                    className="flex-1 py-3 px-4 rounded-lg text-indigo-700 font-medium bg-indigo-100 hover:bg-indigo-200 shadow-md transition duration-300 flex items-center justify-center gap-2"
                                >
                                    <FiSave className='mt-[-4px]' />
                                    {draftSaved ? 'Draft Saved!' : 'Save Draft'}
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`flex-1 py-3 px-4 rounded-lg text-white font-medium shadow-md transition duration-300 flex items-center justify-center gap-2 ${isSubmitting
                                        ? 'bg-indigo-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            <FiSend className='mt-[-3px]' />
                                            Submit Post
                                        </>
                                    )}
                                </motion.button>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="text-center pt-2"
                            >
                                <button
                                    type="button"
                                    onClick={clearForm}
                                    className="text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200 underline"
                                >
                                    Clear Form
                                </button>
                            </motion.div>
                        </form>
                    )}
                </motion.div>
            </motion.div>
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
                @keyframes shimmer {
                    0% { transform: translateY(-100%) translateX(-100%) rotate(30deg); }
                    100% { transform: translateY(100%) translateX(100%) rotate(30deg); }
                }
                .animate-shimmer {
                    animation: shimmer 3s infinite;
                }
            `}</style>
        </div>
    );
};
export default TeacherPostForm;