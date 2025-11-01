
export default function WhyChooseUs() {
  const features = [
    {
      icon: "fa-solid fa-chart-line",
      animatedIcon: "growth.gif",
      title: "সাফল্যের প্রমাণিত ইতিহাস",
      description: "আমরা আমাদের শিক্ষার্থীদের সর্বোচ্চ সাফল্য নিশ্চিত করতে দৃঢ় প্রতিজ্ঞ।"
    },
    {
      icon: "fa-solid fa-book-open-reader",
      animatedIcon: "management-consulting.gif",
      title: "আধুনিক ও টেকসই পাঠদান ব্যবস্থা",
      description: "সুপরিকল্পিত কারিকুলাম ও প্রযুক্তিনির্ভর শিক্ষাদান নিশ্চিত করি।"
    },
    {
      icon: "fas fa-circle-check",
      animatedIcon: "mentor.gif",
      title: "পরিপূর্ণ ও সুচারু ব্যবস্থাপনা",
      description: "মাদরাসার প্রতিটি দিকেই রয়েছে সুশৃঙ্খল প্রশাসনিক ও শিক্ষাগত ব্যবস্থাপনা।"
    },
    {
      icon: "fas fa-chalkboard-teacher",
      animatedIcon: "problem-solving.gif",
      title: "প্রতিটি শিক্ষার্থীর জন্য কাস্টমাইজড সমাধান",
      description: "আলাদা মনোযোগ ও প্রয়োজন অনুযায়ী সবার জন্য আলাদা শিক্ষাপদ্ধতি।"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl  font-bold text-center text-lc abril-fatface-regular">
          Why Choose Us
        </h2>
        {/* Divider */}
        <div className="w-full h-1 bg-lc mx-auto my-6"></div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.03]">
              <div className="flex items-center justify-center w-12 h-12 text-2xl bg-blue-100 rounded-full mb-4 text-lc">
                <img src={`/gif/${feature.animatedIcon}`} alt="AnimatedIcon" />
                {/* <i className={feature.icon}></i> */}
              </div>

              <h3 className="text-lg font-semibold text-lc">{feature.title}</h3>
              <p className="mt-2 text-gray-800 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

