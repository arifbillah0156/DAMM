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
              Best Model{" "} <br />
              <span className="text-green-500">Madrasah In Bangladesh</span>
            </h2>
            {/* Divider */}
            <div className="w-full h-1 bg-green-500 mx-auto my-6"></div>
          </div>
          {/* Additional Content */}
          <div className="mt-12 space-y-8">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <p className="text-gray-70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis perspiciatis aliquam repellat vero quisquam iusto facere rem perferendis sequi repellendus omnis dolores commodi, fugiat eaque eveniet nesciunt provident delectus consequatur?
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos debitis assumenda molestias possimus ipsa distinctio laborum. Odit quo dolores fugit placeat doloremque? Iste nisi quas aut autem labore facere, culpa suscipit, distinctio doloremque tenetur commodi dolores deserunt fuga odio laboriosam!
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rem laboriosam ad adipisci fuga modi et, error debitis possimus consequatur officiis recusandae? Ipsum, aperiam, omnis iste fuga possimus quo porro ut architecto voluptate harum praesentium repudiandae perferendis animi quae nulla. Quisquam repellendus ratione, architecto cum voluptatem asperiores ut laboriosam incidunt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
