import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.jpg';
import { FaEye } from "react-icons/fa6";
import { useState } from 'react';
import { FaRegEyeSlash } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleSignIn = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password)

        if(!email){
            toast('Please Enter a Email.');
            return;
        }
        else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            toast('Please Enter a Valid Email.');
            return;
        }

        if(!password){
            toast('Enter a password.');
            return;
        }
        else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password))
        {
            toast('Enter at least 8 Charecter, including 1 number, 1 special character, 1 Upper Letter.');
            return;
        }

    }

    return (
        <div className='bg-[#F8FAFC] h-lvh'>
            <div className='pt-20 drop-shadow-lg '>
                <div className="max-w-4xl mx-auto rounded-lg border border-gray-200 bg-[#002C2D] pl-3">
                    <h2 className='text-4xl text-center mt-5 text-[#EAA130] font-bold'>আল বারাকাহ জুয়েলার্স</h2>
                    <div className='flex mb-10'>
                        <div className='md:w-1/3 hidden md:flex items-center '>
                            <img className='w-60 h-60 rounded-full' src={Logo} alt="" />
                        </div>
                        <div className='md:w-2/3 flex flex-col items-center'>
                            <h2 className='text-xl text-center mt-5 text-[#EAA130] font-semibold'>আল বারাকাহ জুয়েলার্স এ আপনাকে স্বাগতম</h2>
                            <form onSubmit={handleSignIn}>
                                <div className='bg-[#EAA130] w-96 p-5 mt-5 rounded-md border-2 border-white'>
                                    <div>
                                        <h2 className='text-black mb-2'>User ID</h2>
                                        <input className='mb-2 w-full rounded-md px-2 py-1' type="email" name="email" id="" placeholder='@ Emter your email'/>
                                    </div>

                                    <div className='relative'>
                                        <h2 className='text-black mb-2'>Password</h2>
                                        <input
                                            className='mb-2 w-full rounded-md px-2 py-1'
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            id="" />
                                        <span
                                            onClick={() => setShowPassword(!showPassword)}
                                            className='absolute right-5 bottom-4'>
                                            {showPassword ? <FaRegEyeSlash /> : <FaEye />}
                                        </span>
                                    </div>

                                    <div className='mt-3'>
                                        <input className='border border-[#002C2D] px-2 py-1 rounded-md bg-white hover:bg-[#EAA130] hover:text-white hover:scale-110' type="submit" value="Login" />
                                    </div>
                                </div>
                            </form>

                            <div className='mt-5'>
                                <h2 className='text-white'>
                                    Already have Account? Please <Link to={'/register'}><span className='text-red-600 font-bold'>Reagister</span></Link>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <ToastContainer 
                position="bottom-right"
            />
        </div>
    )
}

export default Login