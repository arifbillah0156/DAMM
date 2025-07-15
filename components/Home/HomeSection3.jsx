const HomeSection3 = () => {

  return (
    <div>
      <div
        className="w-full h-max  bg-cover transition-all duration-1000 tracking-wider font-semibold text-start flex justify-center items-center px-4 pt-8 pb-14"
        style={{
          backgroundImage: `url(/Images/Home-S3-BG.jpg)`,
        }}
      >
        <div className="h-full max-w-[1000px]">
          {/* <p className="text-[25px] md:text-[34px] text-start text-green-600">
            Lorem ipsum dolor sit amet
          </p> */}
          <h1 className="text-[28px] sm:text-[35px] md:text-[60px] text-center font-extrabold bg-gradient-to-r from-green-700 via-sky-500 to-purple-700 bg-clip-text text-transparent drop-shadow-md galada-regular">
            দারুল আজহার মডেল মাদরাসা
          </h1>

          <p className="mt-2 text-[20px] sm:text-[24px] text-blue-600  text-justify tiro-bangla-regular">
            *** ঔপনিবেশিক শিক্ষার বিকল্প হিসেবে কুরআন-সুন্নাহভিত্তিক পাঠ্যক্রম ও বিজ্ঞানভিত্তিক আধুনিক জ্ঞান একত্রে তুলে ধরতে প্রতিষ্ঠিত হয়েছে দারুল আজহার মডেল মাদরাসা। এখানে শিক্ষার্থীরা পায় হিফজ, হাদিস, গণিত, ইংরেজি, কম্পিউটারসহ
            একটি পূর্ণাঙ্গ শিক্ষাব্যবস্থা।
          </p>
          <div className="ml-[2%] text-start text-[18px] sm:text-[22px] text-blue-600 mt-3 tiro-bangla-regular">
            <p>
              <i className="fa-solid fa-arrow-right mr-2 text-green-600 mb-2"></i>
              দ্বীনি ও আধুনিক শিক্ষার সমন্বিত পথ
            </p>
            <p>
              <i className="fa-solid fa-arrow-right mr-2 text-green-600 mb-2"></i>
              হিফজুল কুরআন ও দ্বীনি শিক্ষার সাথে আধুনিক বিষয়াবলী
            </p>
            <p>
              <i className="fa-solid fa-arrow-right mr-2 text-green-600"></i>
              বাংলা, ইংরেজি ও গণিত – সবই অভিজ্ঞ শিক্ষকের তত্ত্বাবধানে
            </p>
            <p>
              <i className="fa-solid fa-arrow-right mr-2 text-green-600"></i>
              জাতীয় ও আন্তর্জাতিক মানের সিলেবাস অনুযায়ী শিক্ষা প্রদান
            </p>
          </div>{" "}
          {/* <Link
            href="/services"
            className="p-4 rounded-lg border border-lc text-lc text-xl font-mono hover:bg-lc hover:text-white hover:ring duration-100 tracking-normal"
          >
            Read More...
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default HomeSection3;
