"use client"
import Link from 'next/link';
export default function Custom404() {
    return (
        <>
            <div className='hidden lg:block'>
                <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-700 flex items-center justify-center overflow-hidden relative m-1 rounded-lg">
                    {/* Static decorative elements - fixed positions */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                        {[...Array(15)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-20"
                                style={{
                                    left: `${20 + i * 5}%`,
                                    top: `${10 + (i % 5) * 15}%`
                                }}
                            ></div>
                        ))}
                    </div>
                    <div className="z-0 max-w-3xl mx-auto text-center bg-black bg-opacity-10 backdrop-blur-sm rounded-3xl p-12 border border-purple-400/30">
                        {/* Animated 404 Number */}
                        <div className="relative mb-8">
                            <div className="text-9xl font-bold text-purple-300 italic tracking-wider animate-pulse">
                                404
                            </div>
                            <div className="absolute -top-16 -right-16 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
                        </div>
                        {/* Main Content */}
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">পেজটি খুঁজে পাওয়া যায়নি</h2>
                            <p className="text-xl text-purple-100 leading-relaxed drop-shadow-md">
                                আপনি যে পাতাটি খুঁজছেন তা বর্তমানে নেই বা সরিয়ে ফেলা হয়েছে।
                            </p>
                            {/* Blue-themed Illustration */}
                            <div className="my-8 flex justify-center">
                                <div className="relative w-64 h-64">
                                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-bounce">
                                        <defs>
                                            <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#8b5cf6" />
                                                <stop offset="100%" stopColor="#3b82f6" />
                                            </linearGradient>
                                        </defs>
                                        {/* Broken Chain */}
                                        <path d="M30,60 Q50,40 70,60 Q90,80 110,60 Q130,40 150,60"
                                            stroke="url(#blueGrad)" strokeWidth="8" fill="none" strokeLinecap="round" />
                                        <circle cx="30" cy="60" r="12" fill="url(#blueGrad)" />
                                        <circle cx="150" cy="60" r="12" fill="url(#blueGrad)" />
                                        {/* Sad Face */}
                                        <circle cx="100" cy="140" r="35" fill="none" stroke="url(#blueGrad)" strokeWidth="4" />
                                        <circle cx="85" cy="130" r="4" fill="url(#blueGrad)" />
                                        <circle cx="115" cy="130" r="4" fill="url(#blueGrad)" />
                                        <path d="M75,155 Q100,170 125,155" stroke="url(#blueGrad)" strokeWidth="3" fill="none" />
                                    </svg>
                                </div>
                            </div>
                            {/* Action Button */}
                            <div className="pt-4">
                                <Link href="/" passHref>
                                    <button className="group relative inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        <span className="mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-big-left-dash-icon lucide-arrow-big-left-dash"><path d="M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" /><path d="M20 9v6" /></svg></span>
                                        হোমপেজে ফিরে যান
                                        <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Custom Animations */}
                    <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce {
          animation: bounce 4s ease-in-out infinite;
        }
      `}</style>
                </div>
            </div>
            {/*  */}
            {/*  */}
            <div className='block lg:hidden'>
                <div className="min-h-[80vh]  bg-gradient-to-br from-gray-100 to-blue-100 flex items-center justify-center px-6 py-12">
                    <div className="max-w-3xl mx-auto text-center bg-white shadow-xl rounded-2xl p-10 border border-blue-200">
                        <div className="mb-6">
                            <h1 className="text-7xl font-extrabold text-red-600 italic tracking-wider">404</h1>
                            <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">পেজটি খুঁজে পাওয়া যায়নি</h2>
                            <p className="text-gray-700 mt-2 text-md">
                                আপনি যে পাতাটি খুঁজছেন তা বর্তমানে নেই বা সরিয়ে ফেলা হয়েছে।
                            </p>
                        </div>

                        {/* <div className="mt-6">
                    <img
                        src="/images/not-found.svg"
                        alt="Not Found"
                        className="w-64 mx-auto"
                    />
                </div> */}

                        <div className="mt-8 ">
                            <Link href="/">
                                <span className="px-1 py-3 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 transition flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-big-left-dash-icon lucide-arrow-big-left-dash"><path d="M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" /><path d="M20 9v6" /></svg> <span className='ml-2'>হোমপেজে ফিরে যান</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>


    );
}