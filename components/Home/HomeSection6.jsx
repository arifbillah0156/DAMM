import SplitText from "../Others/SplitText";

export default function HomeSection6() {
  return (
    <section className="relative bg-gray-50 py-16">
      {/* Shape Divider */}
      {/* <div className="absolute inset-x-0 bottom-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-16"
        >
          <path
            className="fill-current text-gray-50"
            d="M0,6V0h1000v100L0,6z"
          />
        </svg>
      </div> */}

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 lg:mt-24 abril-fatface-regular">
              Recognized as a{" "} <br />
              <SplitText text="Premier Model Madrasah" className="text-lc md:mt-1" />
              {/* <p className="text-lc md:mt-1">Premier Model Madrasah</p> */}
            </h2>

            <SplitText text="We are committed to providing quality Islamic education with a modern approach, nurturing students with values, knowledge, and character. Our mission is to build an enlightened generation rooted in faith and ethics." className="mt-4 text-gray-800 text-justify merriweather tracking-wider" />
            {/* <p className="mt-4 text-gray-700 text-justify">
              We are committed to providing quality Islamic education with a modern approach, nurturing students with values, knowledge, and character. Our mission is to build an enlightened generation rooted in faith and ethics.
            </p> */}
          </div>

          {/* Right Column */}
          <div className="space-y-6 noto-sans-bengali-damm">
            {/* Feature Box 1 */}
            <div className="p-6 bg-white shadow-lg rounded-lg bg-gradient-to-r from-[#17c9fa] to-[#0088AE] text-white transition-all hover:scale-[1.03]">
              <h3 className="text-xl font-semibold">
                <i className="fa-solid fa-book-quran mr-3"></i>
                আধুনিক ও ইসলামী শিক্ষার সমন্বয়
              </h3>
              <SplitText text="দারুল আজহার মাদরাসায় ইসলামী আদর্শের সাথে আধুনিক পাঠ্যক্রমের অপূর্ব সমন্বয় ঘটানো হয়েছে, যা একজন শিক্ষার্থীকে যুগোপযোগী করে তোলে।" className="mt-2 text-lg text-justify" />
              {/* <p className="mt-2 text-lg text-justify">
                দারুল আজহার মাদরাসায় ইসলামী আদর্শের সাথে আধুনিক পাঠ্যক্রমের অপূর্ব সমন্বয় ঘটানো হয়েছে, যা একজন শিক্ষার্থীকে যুগোপযোগী করে তোলে।
              </p> */}
            </div>

            {/* Feature Box 2 */}
            <div className="p-6 bg-white shadow-lg rounded-lg bg-gradient-to-r from-[#00a24f] to-[#58be66] text-white lg:ml-12 lg:mr-[-48px] transition-all hover:scale-[1.03]">
              <h3 className="text-xl font-semibold">
                <i className="fa-solid fa-user-graduate mr-3"></i>
                নৈতিক ও আদর্শ চরিত্র গঠনে অঙ্গীকারবদ্ধ
              </h3>
              <SplitText text="শুধুমাত্র শিক্ষা নয়, বরং চারিত্রিক গঠন, শৃঙ্খলা, ও আদর্শিক জীবনচর্যায় শিক্ষার্থীদের গড়ে তোলাই আমাদের অন্যতম লক্ষ্য।" className="mt-2 text-lg text-justify" />
              {/* <p className="mt-2 text-lg text-justify">
                শুধুমাত্র শিক্ষা নয়, বরং চারিত্রিক গঠন, শৃঙ্খলা, ও আদর্শিক জীবনচর্যায় শিক্ষার্থীদের গড়ে তোলাই আমাদের অন্যতম লক্ষ্য।
              </p> */}
            </div>

            {/* Feature Box 3 */}
            <div className="p-6 bg-white shadow-lg rounded-lg bg-gradient-to-r from-[#5416fc] to-[#0088AE] text-white transition-all hover:scale-[1.03]">
              <h3 className="text-xl font-semibold">
                <i className="fa-solid fa-chalkboard-user mr-3"></i>
                অভিজ্ঞ শিক্ষক ও প্রযুক্তি-সমৃদ্ধ পরিবেশ
              </h3>
              <SplitText text="আমাদের অভিজ্ঞ আলেম ও মডার্ন টিচারগণ যুগোপযোগী প্রযুক্তি ব্যবহার করে শিক্ষাদান করেন, যাতে শিক্ষার্থীরা সময়ের সঙ্গে তাল মিলিয়ে এগিয়ে যেতে পারে।" className="mt-2 text-lg text-justify" />
              {/* <p className="mt-2 text-lg text-justify">
                আমাদের অভিজ্ঞ আলেম ও মডার্ন টিচারগণ যুগোপযোগী প্রযুক্তি ব্যবহার করে শিক্ষাদান করেন, যাতে শিক্ষার্থীরা সময়ের সঙ্গে তাল মিলিয়ে এগিয়ে যেতে পারে।
              </p> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
