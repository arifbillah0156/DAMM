// "use client"
// import { useState } from "react";
// import { ZoomIn, ZoomOut, Download, Share2 } from "lucide-react";

// export default function ImageViewer({ src, alt }) {
//     const [zoom, setZoom] = useState(1);

//     const handleDownload = () => {
//         const link = document.createElement("a");
//         link.href = src;
//         link.download = "image.jpg";
//         link.click();
//     };

//     const handleShare = async () => {
//         if (navigator.share) {
//             try {
//                 await navigator.share({ title: alt, url: src });
//             } catch (err) {
//                 console.log("Share canceled");
//             }
//         } else {
//             alert("Sharing not supported in this browser.");
//         }
//     };

//     return (
//         <div className="relative w-full max-w-md mx-auto">
//             <div className="overflow-hidden rounded-2xl shadow-lg">
//                 <img
//                     src={src}
//                     alt={alt}
//                     style={{ transform: `scale(${zoom})`, transition: "0.3s ease" }}
//                     className="w-full h-auto"
//                 />
//             </div>

//             {/* Buttons */}
//             <div className="absolute top-2 right-2 flex flex-col gap-2">
//                 <button
//                     onClick={() => setZoom((z) => Math.min(z + 0.2, 3))}
//                     className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
//                 >
//                     <ZoomIn size={18} />
//                 </button>
//                 <button
//                     onClick={() => setZoom((z) => Math.max(z - 0.2, 1))}
//                     className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
//                 >
//                     <ZoomOut size={18} />
//                 </button>
//                 <button
//                     onClick={handleDownload}
//                     className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
//                 >
//                     <Download size={18} />
//                 </button>
//                 <button
//                     onClick={handleShare}
//                     className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
//                 >
//                     <Share2 size={18} />
//                 </button>
//             </div>
//         </div>
//     );
// }

"use client";
import Image from "next/image";
import prospectus1 from "@/public/Images/AdmissionFee.jpg";
import prospectus2 from "@/public/Images/AdmissionOthersFee.jpg";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

export default function EducationSystem() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);

    // Close modal when pressing Escape key
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape") setIsModalOpen(false);
        };
        window.addEventListener("keydown", handleEsc);
        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, []);

    return (
        <div className="py-8 px-2">
            <div className="mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    {/* Left Content Column */}
                    <motion.div
                        variants={fadeIn("left", "tween", 0.3, 0.5)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="lg:sticky top-8 h-fit"
                    >
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="relative group">
                                <Image
                                    src={prospectus1}
                                    alt="Education System"
                                    placeholder="blur"
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="bg-white text-blue-800 font-bold py-2 px-6 rounded-full flex items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                                    >
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                        </svg> */}
                                        জুম করে দেখুন
                                    </button>
                                </div>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="absolute top-4 right-4 bg-white/80 hover:bg-white text-blue-800 rounded-full p-2 shadow-md transition-all duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </button>
                            </div>

                        </div>
                    </motion.div>
                    {/* Right Image Column */}
                    <motion.div
                        variants={fadeIn("left", "tween", 0.3, 0.5)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="lg:sticky top-8 h-fit"
                    >
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="relative group">
                                <Image
                                    src={prospectus2}
                                    alt="Education System"
                                    placeholder="blur"
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <button
                                        onClick={() => setIsModalOpen2(true)}
                                        className="bg-white text-blue-800 font-bold py-2 px-6 rounded-full flex items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                                    >
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                        </svg> */}
                                        জুম করে দেখুন
                                    </button>
                                </div>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="absolute top-4 right-4 bg-white/80 hover:bg-white text-blue-800 rounded-full p-2 shadow-md transition-all duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </button>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Image Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setIsModalOpen(false)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative w-full max-w-5xl max-h-[90vh] overflow-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={prospectus1}
                            alt="Education System Full View"
                            placeholder="blur"
                            className="w-full h-auto rounded-lg"
                        />
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </motion.div>
                </div>
            )}
            {/* Image Modal 2 */}
            {isModalOpen2 && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setIsModalOpen2(false)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative w-full max-w-5xl max-h-[90vh] overflow-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={prospectus2}
                            alt="Education System Full View"
                            placeholder="blur"
                            className="w-full h-auto rounded-lg"
                        />
                        <button
                            onClick={() => setIsModalOpen2(false)}
                            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </motion.div>
                </div>
            )}
        </div>
    );
}