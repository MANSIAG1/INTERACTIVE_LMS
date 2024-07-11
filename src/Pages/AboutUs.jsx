import aboutMainImage from "../assets/Images/aboutMainImage.png";

import HomeLayout from "../Layouts/HomeLayout";

function AboutUs() {
  return (
    <HomeLayout >
      <div className="px-5 py-10 md:pl-20 md:pt-20 text-white  md:h-[90vh] ">
        <div className="flex flex-col lg:flex-row items-center gap-5 mx-5 md:mx-10">
          <section className="w-full lg:w-1/2 space-y-6 md:space-y-10 mt-6">
            <h1 className="text-3xl md:text-5xl text-yellow-500 font-semibold">
              Affordable and quality education
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Our goal is to provide affordable and quality education to the world. We are providing a platform for aspiring teachers and students to share their skills, creativity, and knowledge to empower and contribute to the growth and wellness of mankind.
            </p>
          </section>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              alt="about main image"
              className="drop-shadow-2xl max-w-full h-auto"
              src={aboutMainImage}
            />
          </div>
        </div>

    
      </div>
    </HomeLayout>
  );
}

export default AboutUs;
