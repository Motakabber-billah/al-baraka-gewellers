import Logo from '../../assets/images/Logo.jpg';
import Delivery from '../../assets/images/delivery.gif';
import { FaCartArrowDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const LogoSearch = () => {
    return (
        <div className='w-full bg-[#F2A531]/80 py-1 mt-2 md:mt-0'>
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center md:px-2 lg:px-2'>
                <div className='w-full md:w-1/3 flex flex-row md:flex-col gap-3 md:gap-0 items-center md:items-start justify-center md:justify-start '>
                    <img className='w-20 h-20 ml-8 rounded-full' src={Logo} alt="" />
                    <h2 className='text-xl text-black font-bold'>আল বারাকাহ জুয়েলার্স</h2>
                </div>

                <div className='w-full md:w-1/3 flex justify-center mt-4 md:mt-0 mb-4 md:mb-0 items-center relative'>
                    <input className=" border-0 border-b-2 border-gray-400 focus:outline-none focus:ring-0
                    focus:border-indigo-500 bg-transparent px-2 py-2 text-lg placeholder-gray-500 transition-colors duration-300" type="search" name="" id="" placeholder="Search for special item" />
                    <FaSearch className='text-white text-2xl absolute left-[310px] md:left-56 lg:left-64 xl:left-80'/>
                </div>
                <div className='w-full sm:w-1/3 flex items-center justify-evenly mb-4 md:mb-0'>
                    <img className='w-24 h-10 rounded-md' src={Delivery} alt="" />
                    <FaCartArrowDown className='h-10 w-14'/>
                </div>
            </div>
        </div>
    )
}

export default LogoSearch