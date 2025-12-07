import CountUp from 'react-countup';
import CountUpNumber from '../Others/CountUp';



const HomeSection8 = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 text-center  max-w-6xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-green-600 abril-fatface-regular">
          In Our <span className="text-lc">20 Years Of Journey,</span> We
          Have
        </h2>
        {/* Divider */}
        <div className="w-full h-1 bg-lc mx-auto my-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Counter 1 */}
          <div className="bg-white px-4 py-8 shadow rounded-lg hover:scale-105 duration-100">
            <div className='w-full flex justify-center mt-[-20px] mb-1'>
              <img width={70} src="/gif/teacher.gif" alt="students" />
            </div>
            {/* <i className="fa-solid fa-chalkboard-user text-4xl text-green-600"></i>{" "} */}
            <h3 className="text-3xl font-bold mb-3 abril-fatface-regular text-gray-800">
              Teachers
            </h3>
            <div className="text-4xl font-bold text-green-600">
              <CountUpNumber num="80" />
              <span className="">+</span>
            </div>
          </div>
          {/* Counter 2 */}
          <div className="bg-white p-8 shadow rounded-lg hover:scale-105 duration-100">
            <div className='w-full flex justify-center mt-[-20px] mb-1'>
              <img width={75} src="/gif/students.gif" alt="students" />
            </div>
            {/* <i className="fa-solid fa-users-viewfinder text-4xl text-green-600"></i>{" "} */}
            <h3 className="text-3xl font-bold tracking-wide mb-3 abril-fatface-regular text-gray-800">
              Students
            </h3>
            <div className="text-4xl font-bold text-green-600">
              <CountUpNumber num="1000" /><span className="">+</span>
            </div>
          </div>
          {/* Counter 3 */}
          <div className="bg-white p-8 shadow rounded-lg hover:scale-105 duration-100">
            <div className='w-full flex justify-center mt-[-20px] mb-1'>
              <img width={70} src="/gif/teamwork.gif" alt="students" />
            </div>
            {/* <i className="fa-solid fa-people-carry-box text-4xl text-green-600"></i>  */}
            <h3 className="text-2xl font-bold tracking-wide mb-3 abril-fatface-regular text-gray-800">
              Staff
            </h3>
            <div className="text-4xl font-bold text-green-600">
              <CountUpNumber num="20" /><span className="">+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection8;
