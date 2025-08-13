// export default function Section_4() {
//     const OthersFee = [
//         "ভর্তি ফরম - 200/-",
//         "বই, খাতা, ডায়েরি ইত্যাদি বাবদ শ্রেণি অনুযায়ি ...",
//         "মাদরাসা ইউনিফর্ম: প্রতি সেট প্লে থেকে দ্বিতীয় শ্রেণি - 1400/-",
//         "মাদরাসা ইউনিফর্ম: প্রতি সেট তৃতীয় থেকে আলিম শ্রেণি - 1600/-",
//         "পরিচয়পত্র, সিলেবাস, আইসিটি ও লাইব্রেরী ফি বাবদ বার্ষিক - 800/-",
//         "ইংলিশ অ্যান্ড এ্যারাবিক ল্যাঙ্গুয়েজ কোর্স ফি তৃতীয় থেকে দশম শ্রেণির মাসিক চার্জ - 500/-",
//         "পরীক্ষার ফি : প্রতি সেমিস্টারে প্লে থেকে দ্বিতীয় 1000/- টাকা এবং তৃতীয় থেকে আলিম 1200/- টাকা",

//     ]
//     return (
//         <div className="mb-8">
//             <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-3 py-2 rounded text-center">
//                 অন্যান্য ফি সমূহ:-
//             </h3>
//             {
//                 OthersFee.map((item) => {
//                     return (
//                         <div key={item} className="px-3 md:px-8 py-1  text-lg list-disc list-inside space-y-1 text-justify">
//                             <p>
//                                 <i className="fa-solid fa-arrows-to-eye mr-3"></i>
//                                 {item}
//                             </p>
//                         </div>
//                     )
//                 })
//             }


//             <p className="mt-4 p-3 text-center italic text-md text-red-600 md:px-[10%]">
//                 বি: দ্র: সেশন চার্জ প্রত্যেক শিক্ষা বর্ষের প্রথমে এককালীন দিতে হবে। উল্লেখিত ফিস পরিবর্তন পরিবর্ধন করার এখতিয়ার কর্তৃপক্ষ কর্তৃক সংরক্ষিত।
//             </p>
//         </div>
//     )
// }