import React from "react";

const HomeSection7 = () => {
  return (
    <section className="relative bg-gray-50 px-4 pb-4 md:px-0">
      {" "}
      <hr />
      <div className="container mx-auto py-16">
        <h2 className="text-center text-4xl font-bold mb-6">
          Why <span className="text-green-600">Choose Us</span>
        </h2>
        <div className="w-20 mx-auto mb-8 border-b-2 border-gray-300"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Proven Track Record of Success */}
          <div className="p-6 bg-white shadow-md rounded-lg transform transition-transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
              <i className="fas fa-chart-line text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Proven Track Record of Success
            </h3>
            <p className="text-gray-600">
              Our portfolio speaks for itself. With a history of delivering
              high-quality designs on time and within budget, we’ve built a
              reputation for reliability and excellence that our clients trust
              and recommend.
            </p>
          </div>

          {/* Expertise in Sustainable Design */}
          <div className="p-6 bg-white shadow-md rounded-lg transform transition-transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
              <i className="fas fa-user-tie text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Expertise in Sustainable Design
            </h3>
            <p className="text-gray-600">
              With years of experience, we specialize in creating eco-friendly,
              energy-efficient buildings that align with the latest
              sustainability standards. Our designs not only reduce
              environmental impact but also maximize long-term savings.
            </p>
          </div>

          {/* Complete and Smooth Project Delivery */}
          <div className="p-6 bg-white shadow-md rounded-lg transform transition-transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
              <i className="fas fa-handshake text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Complete and Smooth Project Delivery
            </h3>
            <p className="text-gray-600">
              From initial concept to final construction, we oversee every
              detail of your project. Our expert team handles all aspects of
              design, planning, and execution, ensuring that your vision is
              brought to life without any hassle or delays.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Customized Solutions for Every Project */}
          <div className="p-6 bg-white shadow-md rounded-lg transform transition-transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
              <i className="fas fa-people-carry text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Customized Solutions for Every Project
            </h3>
            <p className="text-gray-600">
              Every project is unique, and so is our approach. We take the time
              to understand your needs and tailor each design to reflect your
              vision, ensuring functional spaces that suit your lifestyle or
              business requirements.
            </p>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default HomeSection7;
