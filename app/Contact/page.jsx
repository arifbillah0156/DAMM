import ContactCard from "./ContactCard";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-blue-50  py-12 px-3 md:px-6  mt-2 rounded-xl border">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl mt-4 font-bold text-indigo-700 galada-regular">যোগাযোগ</h1>
                <p className="mt-2 text-gray-700 lg:text-lg">মাদরাসার শিক্ষকবৃন্দের সাথে যোগাযোগের জন্য নিচের তথ্য ব্যবহার করুন।</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <ContactCard
                    title="Principal"
                    phone="01919-916222"
                    whatsapp="+8801919916222"
                    name="Saif Uddin Ahmed Khondoker"
                    email="ksua1980@gmail.com"
                />
                <ContactCard
                    title="Admin Officer"
                    phone="01627-449269"
                    whatsapp="+8801627449269"
                    name="Khondoker Ibrahim Jasim"
                    email="azharmedia14@gmail.com"
                />
                <ContactCard
                    title="Sr. Teacher & Co-ord"
                    phone="01997-049300"
                    whatsapp="+8801997049300"
                    name="Mohammad Abu Saleh"
                    email="mdabusaleh9996@gmail.com"
                />
                <ContactCard
                    title="Sci. Teacher & Asst. Co-ord"
                    phone="01770-823945"
                    whatsapp="+8801770823945"
                    name="Md. Tanzil Alam"
                    email="tanzilalom02@gmail.com"
                />
                <ContactCard
                    title="IT Officer"
                    phone="01844-838723"
                    whatsapp="+8801844838723"
                    name="Arif Billah"
                    email="arifbillah0156@gmail.com"
                />

            </div>
        </div>
    );
}
