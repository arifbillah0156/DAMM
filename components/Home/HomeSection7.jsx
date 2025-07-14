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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel voluptas itaque, veniam libero praesentium numquam assumenda fugiat delectus eveniet ipsa sunt soluta, cum, dicta tempore illo omnis mollitia deserunt doloribus.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sequi quam, sed rerum alias veniam tempore, fuga quidem explicabo autem officia voluptatibus voluptates harum? Enim, libero vero? Id, beatae quis?
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos error vitae similique harum iste reiciendis? Cumque provident nostrum ut voluptatum magni, blanditiis asperiores debitis quasi velit explicabo. Ducimus, ipsum! Praesentium!
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
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est, cum aliquam quae iusto, corrupti, ut quo error harum repellendus cupiditate placeat consectetur distinctio quod ullam odio aperiam minima! Laboriosam?
            </p>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default HomeSection7;
