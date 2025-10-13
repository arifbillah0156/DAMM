"use client"
import { useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { FaUser, FaBook, FaPhone, FaCalendar, FaBuilding, FaMapMarkerAlt, FaShieldAlt, FaMoneyBill, FaSave, FaCheck, FaTrash, FaCloudUploadAlt } from 'react-icons/fa';

// Reusable Form Input Component
const FormInput = ({
    label,
    id,
    name,
    type = "text",
    value,
    onChange,
    placeholder = "",
    required = false,
    className = "outline-none",
    icon = null
}) => {
    return (
        <div className="relative group">
            <label
                htmlFor={id}
                className="block text-sm md:text-[15px] font-medium text-gray-800 mb-1 transition-colors group-hover:text-blue-600"
            >
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <div className="relative">
                {icon && (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        {icon}
                    </div>
                )}
                <input
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={`w-full px-4 py-3 ${icon ? 'pl-10' : 'pl-4'} border border-gray-300 rounded-lg 
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                     transition-all duration-300 shadow-sm hover:shadow-md 
                     focus:shadow-lg ${className}`}
                    placeholder={placeholder}
                    required={required}
                />
            </div>
        </div>
    );
};

// Reusable Image Upload Component
const ImageUpload = ({ imagePreview, onChange }) => {
    return (
        <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Image Upload <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex flex-col items-center justify-center pt-5 pb-6">
                        {imagePreview ? (
                            <div className="relative group/image">
                                <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover/image:scale-105" />
                                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                                    <span className="text-white text-sm font-medium">Change Image</span>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="p-3 bg-blue-100 rounded-full mb-3 transition-transform duration-300 group-hover:scale-110">
                                    <FaCloudUploadAlt className="w-10 h-10 text-blue-600" />
                                </div>
                                <p className="mb-2 text-sm text-gray-700">
                                    <span className="font-semibold text-blue-600">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 5MB)</p>
                            </>
                        )}
                    </div>
                    <input
                        id="image-upload"
                        type="file"
                        className="hidden"
                        onChange={onChange}
                        accept="image/*"
                    />
                </label>
            </div>
        </div>
    );
};

// Form Section Component
const FormSection = ({ title, children, className = "" }) => {
    return (
        <div className={`mb-8 ${className}`}>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200 flex items-center">
                <span className="h-5 w-1 bg-blue-600 rounded-full mr-2"></span>
                {title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {children}
            </div>
        </div>
    );
};

// Main Component
const MainComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        class: '',
        localName: '',
        fatherName: '',
        fatherOccupation: '',
        motherName: '',
        motherOccupation: '',
        mobile: '',
        dateOfBirth: '',
        campusName: '',
        institutionAddress: '',
        previousScholarship: '',
        class2: '',
        session: '',
        scholarshipAmount: ''
    });

    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    // Helper function to check if draft has actual data
    const hasDraftData = (data) => {
        if (!data || !data.formData) return false;

        // Check if any form field has a value
        return Object.values(data.formData).some(value => value && value.trim() !== '') ||
            data.imagePreview;
    };

    // Load draft from localStorage on component mount
    useEffect(() => {
        const savedDraft = localStorage.getItem('scholarshipFormDraft');
        if (savedDraft) {
            try {
                const draftData = JSON.parse(savedDraft);

                // Only show notification and set form data if draft has actual content
                if (hasDraftData(draftData)) {
                    setFormData(draftData.formData);
                    setImagePreview(draftData.imagePreview);
                    toast.success('Draft loaded successfully!');
                }
            } catch (error) {
                console.error('Error loading draft:', error);
            }
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImage(file);

            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const clearForm = () => {
        setFormData({
            name: '',
            class: '',
            localName: '',
            fatherName: '',
            fatherOccupation: '',
            motherName: '',
            motherOccupation: '',
            mobile: '',
            dateOfBirth: '',
            campusName: '',
            institutionAddress: '',
            previousScholarship: '',
            class2: '',
            session: '',
            scholarshipAmount: ''
        });
        setImage(null);
        setImagePreview(null);
        toast.success('Form cleared successfully!');
    };

    const saveDraft = async () => {
        setIsSaving(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));

        // Save to localStorage
        const draftData = {
            formData,
            imagePreview,
            savedAt: new Date().toISOString()
        };

        localStorage.setItem('scholarshipFormDraft', JSON.stringify(draftData));
        setIsSaving(false);
        toast.success('Draft saved successfully!');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Form submission logic here
        console.log({ ...formData, image });
        setIsSubmitting(false);

        // Clear draft after successful submission
        localStorage.removeItem('scholarshipFormDraft');

        // Show success message
        toast.success("Form submitted successfully!");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
            <Toaster position="top-right" />

            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent drop-shadow-sm mb-4 mt-4">
                        Scholarship Registration Form
                    </h1>

                    <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
                        Please fill in all the required information carefully to apply for the scholarship program.
                    </p>

                    {/* Optional underline decoration */}
                    <div className="mt-4 flex justify-center">
                        <span className="inline-block w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></span>
                    </div>
                </div>


                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-800 p-6 rounded-t-2xl shadow-md">
                        <div className="flex justify-center items-center space-x-3">
                            {/* Form / Document Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7 text-white drop-shadow-sm mt-[-4px] "
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 
           2 0 012-2h5.586a1 1 0 01.707.293l5.414 
           5.414A1 1 0 0119 9.414V19a2 2 0 01-2 2z"
                                />
                            </svg>

                            <h2 className="text-2xl font-bold text-white tracking-wide drop-shadow">
                                Registration Form
                            </h2>
                        </div>
                    </div>



                    <div className="w-full flex justify-center">
                        <p className="mt-4 flex items-center gap-2 text-sm font-medium text-red-600 bg-red-50 border border-red-200 px-4 py-2 rounded-full shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-red-500 mt-[-4px]"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M12 9v2m0 4h.01M12 5c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7 3.134-7 7-7z" />
                            </svg>
                            All fields marked with <span className="font-bold">*</span> are required
                        </p>
                    </div>


                    <div className="p-6 sm:p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Personal Information Section */}
                            <FormSection title="Personal Information">
                                <FormInput
                                    label="Name (বাংলায়)"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                    icon={<FaUser className="h-5 w-5 text-gray-400" />}
                                />
                                <FormInput
                                    label="Class"
                                    id="class"
                                    name="class"
                                    value={formData.class}
                                    onChange={handleChange}
                                    placeholder="Enter your class"
                                    required
                                    icon={<FaBook className="h-5 w-5 text-gray-400" />}
                                />
                                <FormInput
                                    label="Name (ইংরেজি বড় অক্ষরে)"
                                    id="localName"
                                    name="localName"
                                    value={formData.localName}
                                    onChange={handleChange}
                                    placeholder="Enter your name in English"
                                    icon={<FaUser className="h-5 w-5 text-gray-400" />}
                                />
                                <FormInput
                                    label="Mobile"
                                    id="mobile"
                                    name="mobile"
                                    type="tel"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    placeholder="Enter mobile number"
                                    required
                                    icon={<FaPhone className="h-5 w-5 text-gray-400" />}
                                />
                                <FormInput
                                    label="Date of Birth"
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    type="date"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                    required
                                    icon={<FaCalendar className="h-5 w-5 text-gray-400" />}
                                />
                            </FormSection>

                            {/* Family Information Section */}
                            <FormSection title="Family Information">
                                <FormInput
                                    label="Father's Name"
                                    id="fatherName"
                                    name="fatherName"
                                    value={formData.fatherName}
                                    onChange={handleChange}
                                    placeholder="Enter father's name"
                                    required
                                    icon={<FaUser className="h-5 w-5 text-gray-400" />}
                                />
                                <FormInput
                                    label="Father's Occupation"
                                    id="fatherOccupation"
                                    name="fatherOccupation"
                                    value={formData.fatherOccupation}
                                    onChange={handleChange}
                                    placeholder="Enter father's occupation"
                                    required
                                    icon={<FaBuilding className="h-5 w-5 text-gray-400" />}
                                />
                                <FormInput
                                    label="Mother's Name"
                                    id="motherName"
                                    name="motherName"
                                    value={formData.motherName}
                                    onChange={handleChange}
                                    placeholder="Enter mother's name"
                                    required
                                    icon={<FaUser className="h-5 w-5 text-gray-400" />}
                                />
                                <FormInput
                                    label="Mother's Occupation"
                                    id="motherOccupation"
                                    name="motherOccupation"
                                    value={formData.motherOccupation}
                                    onChange={handleChange}
                                    placeholder="Enter mother's occupation"
                                    required
                                    icon={<FaBuilding className="h-5 w-5 text-gray-400" />}
                                />
                            </FormSection>

                            {/* Educational Information Section */}
                            <FormSection title="Educational Information">
                                <FormInput
                                    label="Campus Name"
                                    id="campusName"
                                    name="campusName"
                                    value={formData.campusName}
                                    onChange={handleChange}
                                    placeholder="Enter campus name"
                                    required
                                    icon={<FaBuilding className="h-5 w-5 text-gray-400" />}
                                />
                                <FormInput
                                    label="Institution Address"
                                    id="institutionAddress"
                                    name="institutionAddress"
                                    value={formData.institutionAddress}
                                    onChange={handleChange}
                                    placeholder="Enter institution address"
                                    required
                                    icon={<FaMapMarkerAlt className="h-5 w-5 text-gray-400" />}
                                />
                                <FormInput
                                    label="Class"
                                    id="class2"
                                    name="class2"
                                    value={formData.class2}
                                    onChange={handleChange}
                                    placeholder="Enter your class"
                                    required
                                    icon={<FaBook className="h-5 w-5 text-gray-400" />}
                                />
                                <FormInput
                                    label="Session"
                                    id="session"
                                    name="session"
                                    value={formData.session}
                                    onChange={handleChange}
                                    placeholder="Enter session"
                                    required
                                    icon={<FaCalendar className="h-5 w-5 text-gray-400" />}
                                />
                            </FormSection>

                            {/* Scholarship Information Section */}
                            <FormSection title="Scholarship Information">
                                <FormInput
                                    label="Previous scholarship organization (if any)"
                                    id="previousScholarship"
                                    name="previousScholarship"
                                    value={formData.previousScholarship}
                                    onChange={handleChange}
                                    placeholder="Enter previous scholarship organization"
                                    icon={<FaShieldAlt className="h-5 w-5 text-gray-400" />}
                                />
                                <FormInput
                                    label="Scholarship Amount"
                                    id="scholarshipAmount"
                                    name="scholarshipAmount"
                                    value={formData.scholarshipAmount}
                                    onChange={handleChange}
                                    placeholder="Enter scholarship amount"
                                    required
                                    icon={<FaMoneyBill className="h-5 w-5 text-gray-400" />}
                                />
                            </FormSection>

                            {/* Image Upload */}
                            <ImageUpload
                                imagePreview={imagePreview}
                                onChange={handleImageChange}
                            />

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
                                <button
                                    type="button"
                                    onClick={clearForm}
                                    className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-medium rounded-lg 
                                              hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 
                                              focus:ring-red-500 transition-all duration-300 transform hover:-translate-y-0.5 
                                              hover:shadow-lg flex items-center justify-center"
                                >
                                    <FaTrash className="w-5 h-5 mr-2" />
                                    Clear Form
                                </button>

                                <button
                                    type="button"
                                    onClick={saveDraft}
                                    disabled={isSaving}
                                    className={`px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-medium rounded-lg 
                                              hover:from-gray-700 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 
                                              focus:ring-gray-500 transition-all duration-300 transform hover:-translate-y-0.5 
                                              hover:shadow-lg flex items-center justify-center ${isSaving ? 'opacity-75 cursor-not-allowed' : ''}`}
                                >
                                    {isSaving ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Saving...
                                        </>
                                    ) : (
                                        <>
                                            <FaSave className="w-5 h-5 mr-2" />
                                            Save Draft
                                        </>
                                    )}
                                </button>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg 
                                              hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 
                                              focus:ring-blue-500 transition-all duration-300 transform hover:-translate-y-0.5 
                                              hover:shadow-lg flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            <FaCheck className="w-5 h-5 mr-2" />
                                            Submit Application
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainComponent;