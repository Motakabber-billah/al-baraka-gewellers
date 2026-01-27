import Logo from '../../assets/images/Logo.jpg';
import DropdownButton from '../../Shared/DropdownButton/DropdownButton';
import { MdShoppingBag } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { TbFileInvoice } from "react-icons/tb";
import { AiOutlineTransaction } from "react-icons/ai";
import { TbTransactionDollar } from "react-icons/tb";
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import MobileItem from '../../Shared/MobileItem/MobileItem';

const User = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div>
            {/* Main Header */}
            <div className=''>
                <header className="bg-gray-200 sticky top-0 z-50">
                    <div className="flex items-center justify-evenly px-4 py-2">

                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={Logo} alt="Logo" />
                            <h2 className="text-lg font-bold text-black ">
                                আল বারাকাহ জুয়েলার্স
                            </h2>
                        </div>

                        {/* Desktop Grid Menu (Large only) */}
                        <div className="hidden lg:grid lg:grid-cols-5 gap-4">
                            <DropdownButton label="User Master" />
                            <DropdownButton label="Product Master" />
                            <DropdownButton label="Trading" />
                            <DropdownButton
                                label="Reports"
                                options={[<Link to={'/user/report'}>Generate Reports</Link>, 'Daily Reports']}
                            />
                            <DropdownButton label="Settings" />
                        </div>

                        {/* Admin Badge (Large only) */}
                        <div className="lg:flex chat chat-start">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img src={Logo} />
                                </div>
                            </div>
                            <div className="chat-bubble">ADMIN</div>
                        </div>

                        {/* Mobile Menu Button (sm + md) */}
                        <button
                            className="lg:hidden text-2xl"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            ☰
                        </button>
                    </div>

                    {/* Mobile Menu (sm + md) */}
                    {menuOpen && (
                        <div className="lg:hidden bg-gray-100 px-4 py-3 space-y-2">
                            <MobileItem label="User Master" />
                            <MobileItem label="Product Master" />
                            <MobileItem label="Trading" />
                            <MobileItem label="Reports"
                                options={[<Link to={'/user/report'}>Generate Reports</Link>, 'Daily Reports']}
                            />
                            <MobileItem label="Settings" />
                        </div>
                    )}
                </header>


            </div>

            {/* Main Header */}

            {/* Second Header */}
            <div className='mt-5 grid grid-cols-2 lg:grid-cols-6 gap-5 justify-items-center'>
                <div className='flex items-center relative'>
                    <MdShoppingBag className='absolute text-2xl py-1 mb-1' />
                    <button className='text-base text-black border border-blue-700 px-2 py-1 pl-6 rounded-md'>Purchase Entry</button>
                </div>

                <div className='flex items-center relative'>
                    <FaPlus className='absolute text-2xl py-1 mb-1' />
                    <button className='text-base text-black border border-blue-700 px-2 py-1 pl-6 rounded-md'>Add Stock</button>
                </div>
                <div className='flex items-center relative'>
                    <TiShoppingCart className='absolute text-2xl py-1 mb-1' />
                    <button className='text-base text-black border border-blue-700 px-2 py-1 pl-6 rounded-md'>WholeSale</button>
                </div>
                <div className='flex items-center relative'>
                    <TbFileInvoice className='absolute text-2xl py-1 mb-1' />
                    <button className='text-base text-black border border-blue-700 px-2 py-1 pl-6 rounded-md'>Invoice</button>
                </div>
                <div className='flex items-center relative'>
                    <AiOutlineTransaction className='absolute text-2xl py-1 mb-1' />
                    <button className='text-base text-black border border-blue-700 px-2 py-1 pl-6 rounded-md'>Vendor Transaction</button>
                </div>
                <div className='flex items-center relative'>
                    <TbTransactionDollar className='absolute text-2xl py-1 mb-1' />
                    <button className='text-base text-black border border-blue-700 px-2 py-1 pl-6 rounded-md'>Customer Transaction</button>
                </div>
            </div>
            {/* Second Header */}

            <Outlet></Outlet>
        </div >
    );

};

export default User;