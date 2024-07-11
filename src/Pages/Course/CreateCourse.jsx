import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";
import { createNewCourse } from "../../Redux/Slices/CourseSlice";

function CreateCourse() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userInput, setUserInput] = useState({
        title: "",
        category: "",
        createdBy: "",
        description: "",
        thumbnail: null,
        previewImage: ""
    });

    function handleImageUpload(e) {
        e.preventDefault();
        const uploadedImage = e.target.files[0];
        if(uploadedImage) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function () {
                setUserInput({
                    ...userInput,
                    previewImage: this.result,
                    thumbnail: uploadedImage
                });
            });
        }
    }

    function handleUserInput(e) {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        });
    }

    async function onFormSubmit(e) {
        e.preventDefault();

        if(!userInput.title || !userInput.description || !userInput.category || !userInput.thumbnail || !userInput.createdBy) {
            toast.error("All fields are mandatory");
            return;
        }

        const response = await dispatch(createNewCourse(userInput));
        if(response?.payload?.success) {
            setUserInput({
                title: "",
                category: "",
                createdBy: "",
                description: "",
                thumbnail: null,
                previewImage: ""
            });
            navigate("/courses");
        }
    }

    return (
        <HomeLayout>
            <div className="flex flex-col items-center justify-center ">
                <form onSubmit={onFormSubmit} className="w-full max-w-lg  text-white rounded-lg p-8 shadow-[0_0_10px_black] relative  my-20">
                    {/* <Link to="/courses" className="absolute top-4 left-4 text-2xl text-accent cursor-pointer">
                        <AiOutlineArrowLeft />
                    </Link> */}
                    <button onClick={()=>{
                        navigate(-1);
                    }}
                          className="absolute top-4 left-4 text-2xl text-accent cursor-pointer"
                    >
                         <AiOutlineArrowLeft />

                    </button>
                    <h1 className="text-3xl font-bold text-center mb-8">Create New Course</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="image_uploads" className="cursor-pointer block mb-4">
                                {userInput.previewImage ? (
                                    <img 
                                        className="w-full h-48 object-cover border border-gray-600"
                                        src={userInput.previewImage}
                                        alt="Course Thumbnail"
                                    />
                                ) : (
                                    <div className="w-full h-48 flex items-center justify-center border border-gray-600">
                                        <h1 className="font-bold text-lg text-center">Upload your course thumbnail</h1>
                                    </div>
                                )}
                            </label>
                            <input 
                                className="hidden"
                                type="file"
                                id="image_uploads"
                                accept=".jpg, .jpeg, .png"
                                name="image_uploads"
                                onChange={handleImageUpload}
                            />
                        </div>
                        <div className="space-y-4">
                            <input
                                required
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Enter course title"
                                className="w-full px-4 py-2 border rounded-md bg-transparent"
                                value={userInput.title}
                                onChange={handleUserInput}
                            />
                            <input
                                required
                                type="text"
                                name="createdBy"
                                id="createdBy"
                                placeholder="Enter course instructor"
                                className="w-full px-4 py-2 border rounded-md bg-transparent"
                                value={userInput.createdBy}
                                onChange={handleUserInput}
                            />
                            <input
                                required
                                type="text"
                                name="category"
                                id="category"
                                placeholder="Enter course category"
                                className="w-full px-4 py-2 border rounded-md bg-transparent"
                                value={userInput.category}
                                onChange={handleUserInput}
                            />
                            <textarea
                                required
                                name="description"
                                id="description"
                                placeholder="Enter course description"
                                className="w-full px-4 py-2 border rounded-md bg-transparent h-36 resize-none"
                                value={userInput.description}
                                onChange={handleUserInput}
                            />
                        </div>
                    </div>
                    <button type="submit" className="w-full py-2 mt-8 rounded-sm font-semibold text-lg cursor-pointer bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300">
                        Create Course
                    </button>
                </form>
            </div>
        </HomeLayout>
    );
}

export default CreateCourse;
