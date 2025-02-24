import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsPersonCircle } from 'react-icons/bs';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";
import { changepassword, getUserData, updateProfile } from "../../Redux/Slices/AuthSlice";
function ChangePassword(){
  
   
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [data, setData] = useState({
        
        oldPassword: "",
        newPassword: "",  
          });

//   console.log(data);

    function handleInputChange(e) {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    async function onFormSubmit(e) {
        e.preventDefault();
       // console.log(data.oldPassword);
    //    console.log(data);
        if(!data.oldPassword|| !data.newPassword) {
            toast.error("All fields are mandatory");
            return;
        }
        
      
        const response=await dispatch(changepassword(data));

        await dispatch(getUserData());

        if(response?.payload?.success)
            navigate("/user/profile");

      

         setData({
            oldPassword: "",
            newPassword: "",
        })
        // console.log(data);
    }

    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]">
                <form
               noValidate 
                    onSubmit={onFormSubmit}
                    className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-80 min-h-[26rem] shadow-[0_0_10px_black]"
                >
                    <h1 className="text-center text-2xl font-semibold">Change Password</h1>
                  
                  
                    <div className="flex flex-col gap-1">
                        <label htmlFor="oldPassword" className="text-lg font-semibold">Old Password</label>
                        <input 
                            required
                            type="text"
                            name="oldPassword"
                            id="oldPassword"
                            placeholder="Enter your old password"
                            className="bg-transparent px-2 py-1 border"
                            value={data.oldPassword}
                            onChange={handleInputChange}
                        
                        />
                          <label htmlFor="newPassword" className="text-lg font-semibold">New Password</label>
                        <input 
                            required
                            type="text"
                            name="newPassword"
                            id="newPassword"
                            placeholder="Enter your New password"
                            className="bg-transparent px-2 py-1 border"
                            value={data.newPassword}
                            onChange={handleInputChange}
                        
                        />
                    </div>
                    <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 text-lg cursor-pointer">
                        Change Password
                    </button>
                    <Link to="/user/profile">
                        <p className="link text-accent cursor-pointer flex items-center justify-center w-full gap-2">
                            <AiOutlineArrowLeft /> Go back to profile
                        </p>
                    </Link>
                </form>
            </div>
        </HomeLayout>
    );
}

export default ChangePassword;