"use client"
import { get, ref } from "firebase/database";
import { database } from "@/lib/firebase";
import { useEffect, useState } from "react";



export default function NoticeBoard() {
    const [Notices, setNotices] = useState(null);

    function convertDateYYYYMMDDtoDDMMYYYY(dateStr) {
        if (!dateStr) return '';

        const [yyyy, mm, dd] = dateStr.split('-');
        return `${dd}/${mm}/${yyyy}`;
    }

    useEffect(() => {
        const usersRef = ref(database, "Notices");
        get(usersRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const snapData = Object.entries(snapshot.val());
                    setNotices(snapData.reverse());
                } else {
                    alert("Somthing wrong! No data found!!");
                }
            })
            .catch((error) => console.log(error));
    }, []);


    return (
        <div>
            {
                Notices ? (
                    <section className="min-h-[80vh] py-10 px-4 md:px-10 bg-white">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-semibold text-lc galada-regular mb-6 border-b pb-2 text-center mt-4">
                                📝 নোটিশ বোর্ড
                            </h2>

                            <div className="overflow-x-auto rounded-lg text-md md:text-lg">
                                <table className="w-full min-w-[450px] bg-white border border-gray-200 shadow-sm rounded-md">
                                    <thead>
                                        <tr className="bg-lc text-white text-left border border-lc">
                                            <th className="py-3 px-2 md:px-4 border-b">তারিখ</th>
                                            <th className="py-3 px-2 md:px-4 border-b">নোটিশ শিরোনাম</th>
                                            <th className="py-3 px-2 md:px-4 border-b text-center">ডাউনলোড</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Notices.map((Notice) => (
                                            <tr key={Notice[0]} className="hover:bg-blue-50">

                                                <td className="py-2 px-2 lg:px-4 border-b text-sm">
                                                    {convertDateYYYYMMDDtoDDMMYYYY(Notice[1]?.date)}
                                                </td>

                                                <td className="py-2 px-2 lg:px-4 border-b underline decoration-dotted underline-offset-4 text-black">
                                                    <a href={Notice[1].link}
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                        <i className="fa-solid fa-file mr-2 text-lc"></i>{Notice[1].title}
                                                    </a>
                                                </td>

                                                <td className="py-2 px-2 border-b text-right md:text-center">
                                                    <a
                                                        href={Notice[1].link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 hover:text-white hover:bg-blue-500 hover:rounded-lg  inline-flex items-center  transition-all duration-300 "
                                                        download
                                                    >

                                                        <i className="fa-solid fa-cloud-arrow-down text-xl border p-4 rounded-lg md:hover:scale-105 border-blue-400"></i>

                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                        <tr className="w-full h-2 md:hidden"></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                ) : (<div className="fixed inset-0 flex items-center justify-center bg-lc text-white z-50">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
                </div>)
            }

        </div>
    );
}