import ContactCard from "./ContactCard";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-100 to-indigo-100 py-12 px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl mt-4 font-bold text-indigo-700 galada-regular">যোগাযোগ</h1>
                <p className="mt-2 text-gray-700">মাদরাসার শিক্ষকবৃন্দের সাথে যোগাযোগের জন্য নিচের তথ্য ব্যবহার করুন।</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <ContactCard
                    title="Principal Sir"
                    phone="01919-916222"
                    whatsapp="+8801919916222"
                    email="ksua1980@gmail.com"
                />
                <ContactCard
                    title="Admin Sir"
                    phone="01627-449269"
                    whatsapp="+8801627449269"
                    email="azharmedia14@gmail.com"
                />
                <ContactCard
                    title="Sr. Teacher (Asst. Coordinator)"
                    phone="01997-049300"
                    whatsapp="+8801997049300"
                    email="mdabusaleh9996@gmail.com"
                />
                <ContactCard
                    title="IT Officer"
                    phone="01844-838723"
                    whatsapp="+8801844838723"
                    email="arifbillah0156@gmail.com"
                />
            </div>
        </div>
    );
}
