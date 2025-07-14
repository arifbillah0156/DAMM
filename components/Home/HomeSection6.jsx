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
              We Are The Best ...........{" "} <br />
              <span className="text-green-600">Madrasah In Bangladesh</span>
            </h2>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut iste quam at rem molestias beatae, accusamus dignissimos natus architecto. Accusamus autem neque rem illo cupiditate mollitia necessitatibus illum ipsum dicta blanditiis. Culpa impedit dignissimos eveniet.
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis cum deserunt, quasi officia possimus temporibus voluptatibus! Qui facere aperiam, tempora esse aspernatur quidem obcaecati eaque? Sequi error quae iusto blanditiis.
              </p>
            </div>
            {/* Icon Box 2 */}
            <div className="p-6 bg-white shadow-lg rounded-lg bg-gradient-to-r from-[#00a24f] to-[#58be66] text-white  lg:ml-12 lg:mr-[-48px]">
              <h3 className="text-xl font-semibold">
                100% Eco-friendly, Sustainable Design
              </h3>
              <p className="mt-2 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tenetur quaerat odit nemo id deserunt dicta molestiae ducimus voluptatibus doloremque, dolorum odio illo? Sit deserunt molestias eos odio, nostrum ipsa.
              </p>
            </div>
            {/* Icon Box 3 */}
            <div className="p-6 bg-white shadow-lg rounded-lg bg-gradient-to-r from-[#5416fc] to-[#0088AE] text-white">
              <h3 className="text-xl font-semibold">
                Cost effective, Expert Solutions
              </h3>
              <p className="mt-2">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Non possimus sed ipsum? Esse beatae eum eaque rem molestias hic tenetur quia, possimus, voluptatum dolor placeat!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
