"use client"
import { get, ref } from "firebase/database";
import { database } from "@/lib/firebase";
import { useEffect, useState } from "react";
import { uid } from 'uid';



const notices = [
    {
        title: "২০২৫ সালের ভর্তি বিজ্ঞপ্তি",
        date: "২০ জুলাই ২০২৫",
        link: "/notices/admission-2025.pdf",
    },
    {
        title: "বার্ষিক পরীক্ষা সময়সূচি",
        date: "১৮ আগস্ট ২০২৫",
        link: "/notices/exam-schedule.pdf",
    },
    {
        title: "শিক্ষকদের মিটিং",
        date: "১৫ আগস্ট ২০২৫",
        link: "/notices/teachers-meeting.pdf",
    },
];

export default function NoticeBoard() {
    const [Notices, setNotices] = useState(null);

    useEffect(() => {
        const usersRef = ref(database, "Notices");
        get(usersRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const snapData = Object.entries(snapshot.val());
                    setNotices(snapData);
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
                            <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-6 border-b pb-2">
                                📝 নোটিশ বোর্ড
                            </h2>

                            <div className="overflow-x-auto rounded-lg text-md md:text-lg">
                                <table className="w-full min-w-[450px] bg-white border border-gray-200 shadow-sm rounded-md">
                                    <thead>
                                        <tr className="bg-blue-100 text-left">
                                            <th className="py-3 px-2 md:px-4 border-b">তারিখ</th>
                                            <th className="py-3 px-2 md:px-4 border-b">নোটিশ শিরোনাম</th>
                                            <th className="py-3 px-2 md:px-4 border-b text-center">ডাউনলোড</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Notices.map((Notice) => (
                                            <tr key={Notice[0]} className="hover:bg-gray-50">
                                                <td className="py-2 px-2 lg:px-4 border-b">{Notice[1].date}</td>
                                                <td className="py-2 px-2 lg:px-4 border-b underline underline-offset-4 text-black"><i className="fa-solid fa-file mr-2 text-lc"></i>{Notice[1].title}</td>

                                                <td className="py-2 px-2 border-b text-center">
                                                    <a
                                                        href={Notice[1].link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 hover:text-blue-800 inline-flex items-center"
                                                        download
                                                    >

                                                        <i className="fa-solid fa-cloud-arrow-down text-xl border p-4 rounded-lg"></i>

                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
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