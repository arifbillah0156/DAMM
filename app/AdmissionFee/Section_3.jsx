// export default function Section_3() {
//     return (
//         <div className="mb-12 rounded-lg">
//             <div className="w-full overflow-x-auto rounded-md">
//                 <table className="table-auto border border-gray-300 min-w-[420px]  sm:w-full">
//                     <thead>
//                         {/* Row 1: Main header */}
//                         <tr className="bg-gray-200">
//                             <th rowSpan="3" className="border p-2 text-center align-middle border-r-gray-300">
//                                 বিবরণ
//                             </th>
//                             <th colSpan="4" className="border p-2 text-center border-r-gray-300">
//                                 অনাবাসিক
//                             </th>
//                         </tr>

//                         {/* Row 2: Subcategory under অনাবাসিক */}
//                         <tr className="bg-gray-100">
//                             <th colSpan="1" className="border p-2 text-center border-r-gray-300">
//                                 প্রি-হিফজ
//                             </th>
//                             <th colSpan="3" className="border p-2 text-center border-r-gray-300">
//                                 জেনারেল
//                             </th>
//                         </tr>

//                         {/* Row 3: Actual class ranges */}
//                         <tr className="bg-gray-50">
//                             <th className="border p-2 text-center">প্লে নার্সারী-কেজি</th>
//                             <th className="border p-2 text-center">১ম-২য়</th>
//                             <th className="border p-2 text-center">৩য়-আলিম</th>
//                         </tr>
//                     </thead>

//                     <tbody>
//                         {[
//                             ["টিউশন ফি", 2500, 3500, 4000],
//                             ["মেইনটেন্যান্স", 500, "–", "–"],
//                             ["প্রি-হিফয (নূরাণী/নাযেরা) ক্লাস", 1000, 1000, 1000],
//                             ["মোট", 4000, 4500, 5000],
//                         ].map(([label, hifz, academic, mealWith], idx) => (
//                             <tr key={idx}
//                                 className={idx === 3 ? "bg-gray-100 font-semibold text-center" : ""}>
//                                 <td className="border p-2">{label}</td>
//                                 <td className="border p-2 text-center">{hifz}</td>
//                                 <td className="border p-2 text-center">{academic}</td>
//                                 <td className="border p-2 text-center">{mealWith}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }