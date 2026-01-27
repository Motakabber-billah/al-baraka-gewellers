import Logo from '../../assets/images/Logo.jpg';
import DropdownButton from '../../Shared/DropdownButton/DropdownButton';
import { MdShoppingBag } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { TbFileInvoice } from "react-icons/tb";
import { AiOutlineTransaction } from "react-icons/ai";
import { TbTransactionDollar } from "react-icons/tb";
import { Link, Outlet } from 'react-router-dom';

const User = () => {
    return (
        <div>
            {/* Main Header */}
            <div className='flex items-center bg-gray-200 justify-evenly py-2'>
                <div>
                    <img className='w-16 h-16 rounded-full' src={Logo} alt="" />
                </div>
                <div>
                    <h2 className='text-xl text-black font-bold'>আল বারাকাহ জুয়েলার্স</h2>
                </div>
                <div className='flex items-center gap-4'>
                    <DropdownButton
                        label="User Master"
                        options={["View Profile", "Edit Profile", "Logout"]}
                    ></DropdownButton>
                    <DropdownButton
                        label="Product Master"
                        options={["View Profile", "Edit Profile", "Logout"]}
                    ></DropdownButton>
                    <DropdownButton
                        label="Trading"
                        options={["View Profile", "Edit Profile", "Logout"]}
                    ></DropdownButton>
                    <DropdownButton
                        label="Repotrs"
                        options={[<Link to={'/user/report'}>Generate Report</Link>, "Edit Profile", "Logout"]}
                    ></DropdownButton>
                    <DropdownButton
                        label="Setting"
                        options={["View Profile", "Edit Profile", "Logout"]}
                    ></DropdownButton>
                </div>

                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img src={Logo} />
                        </div>
                    </div>
                    <div className="chat-bubble">ADMIN</div>
                </div>
            </div>
            {/* Main Header */}

            {/* Second Header */}
            <div className='mt-5 flex items-center gap-5 justify-center'>
                <div className='flex items-center relative'>
                    <MdShoppingBag className='absolute text-2xl py-1 mb-1' />
                    <button className='text-base text-black border border-blue-700 px-2 py-1 pl-6 rounded-md'>Purchase Entry</button>
                </div>

                <div className='flex items-center relative'>
                    <FaPlus  className='absolute text-2xl py-1 mb-1' />
                    <button className='text-base text-black border border-blue-700 px-2 py-1 pl-6 rounded-md'>Add Stock</button>
                </div>
                <div className='flex items-center relative'>
                    <TiShoppingCart  className='absolute text-2xl py-1 mb-1' />
                    <button className='text-base text-black border border-blue-700 px-2 py-1 pl-6 rounded-md'>WholeSale</button>
                </div>
                <div className='flex items-center relative'>
                    <TbFileInvoice  className='absolute text-2xl py-1 mb-1' />
                    <button className='text-base text-black border border-blue-700 px-2 py-1 pl-6 rounded-md'>Invoice</button>
                </div>
                <div className='flex items-center relative'>
                    <AiOutlineTransaction   className='absolute text-2xl py-1 mb-1' />
                    <button className='text-base text-black border border-blue-700 px-2 py-1 pl-6 rounded-md'>Vendor Transaction</button>
                </div>
                <div className='flex items-center relative'>
                    <TbTransactionDollar   className='absolute text-2xl py-1 mb-1' />
                    <button className='text-base text-black border border-blue-700 px-2 py-1 pl-6 rounded-md'>Customer Transaction</button>
                </div>
            </div>
            {/* Second Header */}

            <Outlet></Outlet>
        </div>
    );
};

export default User;