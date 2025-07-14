export default function HomeSection5() {
  return (
    <div className="h-max w-[100%] relative mt-12">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url(/Images/HomeS5Bg.jpg)`,
        }}
      ></div>

      {/* Main Content */}
      <section className="relative">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-0"></div>
        <div className="container mx-auto px-6 py-12 relative z-10">
          <div className="text-center">
            {/* Heading */}
            <h2 className="text-2xl sm:text-5xl font-bold text-purple-600 mb-4 [text-shadow:_3px_3px_3px_rgb(255_255_255_/_100%)]">
              Best Building Design{" "}
              <span className="text-green-500">Company In Bangladesh</span>
            </h2>
            {/* Divider */}
            <div className="w-full h-1 bg-green-500 mx-auto my-6"></div>
          </div>
          {/* Additional Content */}
          <div className="mt-12 space-y-8">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <p className="text-gray-70">
                At Studio Architect, we take pride in being the best building
                design company in Bangladesh. We were the first to introduce the{" "}
                <strong>Green Building Concept to Bangladesh</strong>. With
                years of experience and a team of skilled architects, we provide
                high-quality new building designs that meet the different needs
                of our clients.{" "}
                <strong>From house designs to commercial building plans</strong>
                , we provide a wide range of services that guarantee customer
                satisfaction.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <p className="text-gray-700">
                Our building plans stand out due to their unique and creative
                designs. We believe that a well-designed building plan can not
                only enhance aesthetic appeal but also improve functionality.
                Therefore, we offer customized house plan designs that allow our
                clients to <strong>build custom homes</strong> and create their
                own dream homes.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <p className="text-gray-700">
                Our commitment to quality and customer satisfaction has earned
                us the reputation of being the{" "}
                <strong>best building design company in Bangladesh</strong>. We
                believe that every building should be unique and productive, and
                our team works to achieve this goal with every project we work
                on.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
