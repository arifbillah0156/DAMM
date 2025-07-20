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
    return (
        <section className="py-10 px-4 md:px-10 bg-white">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-6 border-b pb-2">
                    📝 নোটিশ বোর্ড
                </h2>

                <div className="overflow-x-auto rounded-lg text-md md:text-lg">
                    <table className="w-full min-w-[340px] bg-white border border-gray-200 shadow-sm rounded-md">
                        <thead>
                            <tr className="bg-blue-100 text-left">
                                <th className="py-3 px-2 md:px-4 border-b">তারিখ</th>
                                <th className="py-3 px-2 md:px-4 border-b">নোটিশ শিরোনাম</th>
                                <th className="py-3 px-2 md:px-4 border-b text-center">ডাউনলোড</th>
                            </tr>
                        </thead>
                        <tbody>
                            {notices.map((notice, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="py-2 px-2 border-b">{notice.date}</td>

                                    <td className="py-2 px-2 border-b underline underline-offset-4 text-black"><i className="fa-solid fa-file mr-2 text-lc"></i>{notice.title}</td>

                                    <td className="py-2 px-2 border-b text-center">
                                        <a
                                            href={notice.link}
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
    );
}