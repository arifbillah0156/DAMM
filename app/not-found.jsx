import Link from 'next/link';

export default function Custom404() {
    return (
        <div className="min-h-[80vh] bg-gradient-to-br from-gray-100 to-blue-100 flex items-center justify-center px-6 py-12">
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

                <div className="mt-8">
                    <Link href="/">
                        <span className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 transition">
                            🔙 হোমপেজে ফিরে যান
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
