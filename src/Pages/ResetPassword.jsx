import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import HomeLayout from '../Layouts/HomeLayout';
import {  Reset_Password, login, reset } from '../Redux/Slices/AuthSlice';
import { useParams } from 'react-router-dom';


function ResetPassword() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {resetToken} = useParams();
    useEffect(() => {
        console.log(resetToken);
    }, [resetToken]);

    const [passwordData, setpasswordData] = useState({
        password: "",
        
    });

    function handleUserInput(e) {
        const {name, value} = e.target;
        setpasswordData({
            ...passwordData,
            [name]: value
        })
    }

    async function onLogin(event) {
        event.preventDefault();
        if(!passwordData.password ) {
            toast.error("Please fill all the details");
            return;
        }

        // dispatch create account action
        // In this context, createAccount(formData) is an action creator function that returns an action object. The dispatch function is used to send this action to the Redux store, triggering a state change.
        const response =  await dispatch(Reset_Password([resetToken, passwordData]));

        // console.log(response);

        if(response?.payload?.success)
            navigate("/login");

        setpasswordData({
            password: "",
           
        });
    }

    return (
        <HomeLayout>
            <div className='flex overflow-x-auto items-center justify-center h-[100vh]'>
                <form noValidate onSubmit={onLogin} className='flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]'>
                    <h1 className="text-center text-2xl font-bold">Reset Password</h1>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="password" className='font-semibold'> Password </label>
                        <input 
                            type="password" 
                            required
                            name="password"
                            id="password"
                            placeholder="Enter your email.."
                            className="bg-transparent px-2 py-1 border"
                            onChange={handleUserInput}
                            value={passwordData.password}
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

export default ResetPassword;
