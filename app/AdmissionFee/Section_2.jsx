// export default function Section_2() {
//     return (
//         <div className="mb-2 rounded-lg">
//             <h3 className="text-xl w-full font-semibold mb-1 bg-gradient-to-r from-gray-900 to-gray-700 text-white py-3 rounded text-center">
//                 মাসিক ফি
//             </h3>
//             <div className="w-full overflow-x-auto rounded-md">
//                 <table className="table-auto border border-gray-300 min-w-[400px]  sm:w-full">
//                     <thead>
//                         <tr className="bg-gray-200">
//                             <th rowSpan="2" className="border p-2 text-center align-middle border-r-gray-300">বিবরণ</th>
//                             <th colSpan="2" className="border p-2 text-center border-r-gray-300">আবাসিক</th>
//                             <th colSpan="2" className="border p-2 text-center">ডে-কেয়ার</th>
//                         </tr>
//                         <tr className="bg-gray-100">
//                             <th className="border p-2 text-center">হিফজ</th>
//                             <th className="border p-2 text-center">একাডেমিক</th>
//                             <th className="border p-2 text-center">খাবার সহ</th>
//                             <th className="border p-2 text-center">খাবার ছাড়া</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {[
//                             ["টিউশন ফি", 2500, 3000, 3500, 3500],
//                             ["হোস্টেল এন্ড ডাইনিং ফি", 6000, 6000, 3500, 1500],
//                             ["একাডেমিক কেয়ার", 2500, 2500, 2500, 2500],
//                             ["মোট", 11000, 11500, 9500, 7500],
//                         ].map(([label, hifz, academic, mealWith, mealWithout], idx) => (
//                             <tr key={idx}
//                                 className={idx === 3 ? "bg-gray-100 font-semibold text-center" : ""}>
//                                 <td className="border p-2">{label}</td>
//                                 <td className="border p-2 text-center">{hifz}</td>
//                                 <td className="border p-2 text-center">{academic}</td>
//                                 <td className="border p-2 text-center">{mealWith}</td>
//                                 <td className="border p-2 text-center">{mealWithout}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//             <p className="text-center mt-1">(নোট: ডে-কেয়ার খাট বরাদ্দ মাসে-১৫০০ টাকা)</p>
//         </div>
//     )
// }