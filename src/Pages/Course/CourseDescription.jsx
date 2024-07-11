import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { getAllCourses } from "../../Redux/Slices/CourseSlice";

function CourseDescription() {

 
    const { state } = useLocation();

    
    const navigate = useNavigate();
    const dispatch = useDispatch();
   

    const { role, data } = useSelector((state) => state.auth);
    useEffect(() => {
        if (!state) {
            navigate("/courses");
        }
    }, [state, navigate]);



    return (
        <HomeLayout>
            <div className="min-h-[90vh] pt-12 px-4 md:px-20 flex flex-col items-center justify-center text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 relative w-full mt-5">
                    <button
                        className="absolute left-0 top-0 text-xl text-green-500 "
                        onClick={() => navigate(-1)}
                    >
                        <AiOutlineArrowLeft />
                    </button>
                    <div className="space-y-5">
                    <img 
                            className="w-full h-64"
                            alt="thumbnail"
                            src={state?.thumbnail?.secure_url}
                        />
                        <div className="space-y-4">
                            <div className="flex flex-col items-center md:items-start text-xl space-y-2">
                                <p className="font-semibold">
                                    <span className="text-yellow-500 font-bold">
                                        Total lectures:{" "}
                                    </span>
                                    {state?.numberOfLectures}
                                </p>

                                <p className="font-semibold">
                                    <span className="text-yellow-500 font-bold">
                                        Instructor:{" "}
                                    </span>
                                    {state?.createdBy}
                                </p>
                            </div>

                            {role === "ADMIN" || data?.subscription?.status === "active" ? (
                                <button
                                    onClick={() => navigate("/course/displaylectures", { state: { ...state } })}
                                    className="bg-yellow-600 text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-yellow-500 transition-all ease-in-out duration-300"
                                >
                                    Watch lectures
                                </button>
                            ) : (
                                <button
                                    onClick={() => navigate("/checkout")}
                                    className="bg-yellow-600 text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-yellow-500 transition-all ease-in-out duration-300"
                                >
                                    Subscribe
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="space-y-2 text-xl">
                        <h1 className="text-3xl font-bold text-yellow-500 mb-5 text-center md:text-left">
                            {state?.title}
                        </h1>

                        <p className="text-yellow-500">Course description:</p>
                        <p>{state?.description}</p>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}

export default CourseDescription;