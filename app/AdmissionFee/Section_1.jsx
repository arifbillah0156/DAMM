// export default function Section_1() {
//     return (
//         <div className="mb-12 rounded-lg">
//             <h3 className="text-xl font-semibold mb-1 bg-gradient-to-r from-gray-900 to-gray-700 text-white py-3 rounded text-center">
//                 ভর্তিকালিন ফি
//             </h3>
//             <div className="w-full overflow-x-auto rounded-md">
//                 <table className="table-auto w-full min-w-[380px]  border border-gray-300">
//                     <thead>
//                         <tr className="bg-gray-200">
//                             <th className="border p-2">বিবরণ</th>
//                             <th className="border p-2 text-center">আবাসিক</th>
//                             <th className="border p-2 text-center">ডে-কেয়ার</th>
//                             <th className="border p-2 text-center">অনাবাসিক</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {[
//                             ["ভর্তি ফি", 9000, 9000, 9000],
//                             ["সংস্থাপন ফি", 5000, 3000, "–"],
//                             ["সেশন চার্জ", 9000, 9000, 9000],
//                             ["মোট", 23500, 21000, 18000],
//                         ].map(([title, res, nonres, daycare], idx) => (
//                             <tr
//                                 key={idx}
//                                 className={idx === 3 ? "bg-gray-100 font-semibold text-center" : ""}
//                             >
//                                 <td className="border p-2">{title}</td>
//                                 <td className="border p-2 text-center">{res}</td>
//                                 <td className="border p-2 text-center">{nonres}</td>
//                                 <td className="border p-2 text-center">{daycare}</td>
//                             </tr>
//                         ))}

//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }