import { Link } from "react-router-dom";

import HomePageImage from "../assets/Images/homePageMainImage.png";
import HomeLayout from "../Layouts/HomeLayout";

function HomePage() {
    return (
        <HomeLayout>
            <div className="pt-10 text-white flex flex-col md:flex-row items-center justify-center gap-10 mx-4 md:mx-16 sm:h-[90vh] ">
                <div className="md:w-1/2 space-y-6 text-center md:text-left">
                    <h1 className="text-5xl font-semibold mt-20">
                       <span>Find out best</span>
                        <span className="text-yellow-500 font-bold"> Online Courses</span>
                    </h1>
                    <p className="text-xl text-gray-200">
                        We have a large library of courses taught by highly skilled and qualified faculties at a very affordable cost.
                    </p>

                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                        <Link to="/courses">
                            <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Explore courses
                            </button>
                        </Link>

                        <Link to="/contact">
                            <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="md:w-1/2 flex items-center justify-center">
                    <img alt="homepage image" src={HomePageImage} />
                </div>
            </div>
        </HomeLayout>
    );
}

export default HomePage;
