export default function HomeSection6() {
  return (
    <section className="relative bg-gray-50 py-16">
      {/* Shape Divider */}
      <div className="absolute inset-x-0 bottom-0">
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
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 lg:mt-24">
              We Are The Best Building Design{" "}
              <span className="text-green-600">Company In Bangladesh</span>
            </h2>
            <p className="mt-4 text-gray-600">
              Studio Architect is the leading building design company in
              Bangladesh, offering innovative and sustainable solutions for
              residential and commercial projects. Whether you need a modern
              villa, a green office, or a smart city, we have the expertise and
              experience to make your vision a reality.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6 font-sans">
            {/* Icon Box 1 */}
            <div className="p-6 bg-white shadow-lg rounded-lg bg-gradient-to-r from-[#17c9fa] to-[#0088AE] text-white">
              <h3 className="text-xl font-semibold">
                Designs that make you say 'wow'
              </h3>
              <p className="mt-2 text-lg">
                We build extraordinary designs that leave a lasting impression
                and make you say 'Wow' every time!
              </p>
            </div>
            {/* Icon Box 2 */}
            <div className="p-6 bg-white shadow-lg rounded-lg bg-gradient-to-r from-[#00a24f] to-[#58be66] text-white  lg:ml-12 lg:mr-[-48px]">
              <h3 className="text-xl font-semibold">
                100% Eco-friendly, Sustainable Design
              </h3>
              <p className="mt-2 text-lg">
                We are the only company in Bangladesh that guarantees 100%
                eco-friendly and sustainable buildings.
              </p>
            </div>
            {/* Icon Box 3 */}
            <div className="p-6 bg-white shadow-lg rounded-lg bg-gradient-to-r from-[#5416fc] to-[#0088AE] text-white">
              <h3 className="text-xl font-semibold">
                Cost effective, Expert Solutions
              </h3>
              <p className="mt-2">
                Get the design of your dream building without going over budget
                with professional solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
