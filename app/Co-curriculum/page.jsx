// app/components/CoCurriculum.jsx

export default function CoCurriculum() {
    return (
        <div className="bg-white text-gray-900 mt-5 py-10 px-4 md:px-10 max-w-6xl mx-auto">
            <div className="mb-8 text-center">
                <h2 className="text-3xl md:text-4xl text-lc galada-regular underline underline-offset-4">
                    কো-কারিকুলাম
                </h2>
            </div>

            <h2 className="text-xl md:text-2xl font-semibold text-white bg-gradient-to-r from-blue-900 to-gray-800 p-3 px-4 py-2 rounded-md shadow mb-6 text-center">
                কো-কারিকুলাম সমূহ
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 text-lg font-medium">
                <div className="space-y-2 ml-[10%]">
                    <p>০১. হিফযুল করআন</p>
                    <p>০২. স্পোকেন ইংলিশ</p>
                    <p>০৩. ডিবেটিং ক্লাব</p>
                    <p>০৪. স্পোর্টস এন্ড হেল্থ ক্লাব</p>
                    <p>০৫. কম্পিউটার প্রশিক্ষণ</p>
                    <p>০৬. দেয়ালিকা ও সময়িকী প্রকাশ</p>
                    <p>০৭. ইসলামী গান ও কবিতা পাঠের আসর</p>
                    <p>০৮. হাতে কলমে আর্ট</p>
                    <p>০৯. সাহিত্য সভা</p>
                </div>
                <div className="space-y-2 ml-[10%] md:ml-0">
                    <p className="mt-2 md:mt-0">১০. হিফযুল হাদীস</p>
                    <p>১১. স্পোকেন এ্যারাবিক</p>
                    <p>১২. রিডার্স ফোরাম</p>
                    <p>১৩. সায়েন্স ক্লাব</p>
                    <p>১৪. লিডারশিপ ট্রেনিং</p>
                    <p>১৫. ক্বিরাত প্রশিক্ষণ</p>
                    <p>১৬. ইসলামী ক্যালিগ্রাফি</p>
                    <p>১৭. গল্প ও অভিনয়</p>
                    <p>১৮. কারাতে</p>
                </div>
            </div>

            <h2 className="text-xl md:text-2xl font-semibold text-white bg-gradient-to-r from-blue-900 to-gray-800 px-4 py-2 rounded-md shadow mt-10 mb-4 text-center">
                হিফযুল কুরআনের নির্ধারিত সিলেবাসঃ
            </h2>

            <div className="text-lg space-y-2 font-medium ml-[5%]">
                <p>* ১ম বর্ষে ৬ পারা</p>
                <p>* ২য় বর্ষে ৭ পারা</p>
                <p>* ৩য় বর্ষে ৭ পারা</p>
                <p>* ৪র্থ বর্ষে ৫ পারা</p>
                <p>* ৫ম বর্ষে ৫ পারা</p>
                <p>* ৬ষ্ঠ বর্ষে পূর্ণ করআন শুনানি</p>
            </div>
        </div>
    );
}
