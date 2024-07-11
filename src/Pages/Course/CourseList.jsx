import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CourseCard from "../../Components/CourseCard";
import HomeLayout from "../../Layouts/HomeLayout";
import { getAllCourses } from "../../Redux/Slices/CourseSlice";

function CourseList() {
    const dispatch = useDispatch();
    const { courseData } = useSelector((state) => state.course);

    async function loadCourses() {
        await dispatch(getAllCourses());
    }

    useEffect(() => {
        loadCourses();
    }, []);

    return (
        <HomeLayout>
              <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-center text-3xl font-semibold mb-5  mt-5">
                    <span className="text-white">Explore the courses made by </span>
                    <span className="font-bold text-yellow-500">Industry experts</span>
                </h1>
                <div className="flex flex-wrap justify-center  gap-6">
                    {courseData?.map((element) => (
                        <CourseCard key={element._id} data={element} />
                    ))}
                </div>
            </div>
        </HomeLayout>
    );
}

export default CourseList;
