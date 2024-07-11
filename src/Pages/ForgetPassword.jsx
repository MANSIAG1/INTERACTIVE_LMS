import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import HomeLayout from '../Layouts/HomeLayout';
import { login, reset } from '../Redux/Slices/AuthSlice';

function ForgetPassword() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [emailData, setemailData] = useState({
        email: "",
        
    });

    function handleUserInput(e) {
        const {name, value} = e.target;
        setemailData({
            ...emailData,
            [name]: value
        })
    }

    async function onLogin(event) {
        event.preventDefault();
        if(!emailData.email ) {
            toast.error("Please fill all the details");
            return;
        }

        // dispatch create account action
        // In this context, createAccount(formData) is an action creator function that returns an action object. The dispatch function is used to send this action to the Redux store, triggering a state change.
        const response = await dispatch(reset(emailData));
        // console.log(response);

        if(response?.payload?.success)
            navigate("/login");

        setemailData({
            email: "",
           
        });
    }

    return (
        <HomeLayout>
            <div className='flex overflow-x-auto items-center justify-center h-[100vh]'>
                <form noValidate onSubmit={onLogin} className='flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]'>
                    <h1 className="text-center text-2xl font-bold">Forget Password</h1>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email" className='font-semibold'> Email </label>
                        <input 
                            type="email" 
                            required
                            name="email"
                            id="email"
                            placeholder="Enter your email.."
                            className="bg-transparent px-2 py-1 border"
                            onChange={handleUserInput}
                            value={emailData.email}
                        />
                    </div>
                

                    <button type="submit" className='mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer'>
                       Submit
                    </button>

                   

                </form>
            </div>
        </HomeLayout>
    );
}

export default ForgetPassword;
