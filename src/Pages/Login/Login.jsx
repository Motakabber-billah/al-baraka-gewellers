import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.jpg';

const Login = () => {
    return (
        <div className='bg-[#F8FAFC] h-lvh'>
            <div className='pt-32 drop-shadow-lg '>
                <div className="max-w-4xl mx-auto rounded-lg border border-gray-200 bg-[#002C2D] ">
                    <h2 className='text-4xl text-center mt-5 text-[#EAA130] font-bold'>আল বারাকাহ জুয়েলার্স</h2>
                    <div className='flex mb-10'>
                        <div className='w-1/3 flex items-center'>
                            <img className='w-60 h-60 rounded-full' src={Logo} alt="" />
                        </div>
                        <div className='w-2/3 flex flex-col items-center'>
                            <h2 className='text-xl text-center mt-5 text-[#EAA130] font-semibold'>আল বারাকাহ জুয়েলার্স এ আপনাকে স্বাগতম</h2>
                            <div className='bg-[#EAA130] w-96 p-5 mt-5 rounded-md border-2 border-white'>
                                <div>
                                    <h2 className='text-black mb-2'>User Name</h2>
                                    <input className='mb-2 w-full rounded-md' type="text" name="name" id="" />
                                </div>

                                <div>
                                    <h2 className='text-black mb-2'>Password</h2>
                                    <input className='mb-2 w-full rounded-md' type="password" name="password" id="" />
                                </div>

                                <div className='mt-3'>
                                    <input className='border border-[#002C2D] px-2 py-1 rounded-md bg-white hover:bg-[#EAA130] hover:text-white hover:scale-110' type="submit" value="Login" />
                                </div>
                            </div>

                            <div className='mt-5'>
                                <h2 className='text-white'>
                                    Already have Account? Please <Link><span className='text-red-600 font-bold'>Reagister</span></Link>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login