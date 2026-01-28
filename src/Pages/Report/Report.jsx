import DropdownButton from "../../Shared/DropdownButton/DropdownButton";
import { RxCross2 } from "react-icons/rx";
import { ImPrinter } from "react-icons/im";
import { NavLink, Outlet } from "react-router-dom";

const Report = () => {
    const linkClass = ({ isActive }) =>
        `text-[14px] w-full text-center pt-3 px-2 py-1 rounded-md transition
     ${isActive
            ? "bg-blue-100 text-blue-700 font-semibold"
            : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
        }`;
    return (
        <div className='bg-[#F1F5F9] mt-5 py-3 px-5'>
            <h2 className='text-[#F2A531] text-xl font-semibold'>Reports</h2>
            <div className='bg-white className="bg-white grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-3 px-2 py-2 rounded-md mt-3"'>
                <NavLink to={'/user/report/categoryTable'} className={linkClass}>Category</NavLink>
                <NavLink to={'/user/report/productTable'} className={linkClass}>Product</NavLink>
                <NavLink to={'/user/report/designTable'} className={linkClass}>Design</NavLink>
                <NavLink to={'/user/report/skuTable'} className={linkClass}>SKU</NavLink>
                <button className="text-[14px]">SKU/Karigar Report</button>
                <button className="text-[14px]">Labelled Stock</button>
                <button className="text-[14px]">Packets</button>
                <button className="text-[14px]">Boxes</button>
                <button className="text-[14px]">Old Metal</button>
                <button className="text-[14px]">Transfer</button>
                <button className="text-[14px]">Stock Analysis</button>
            </div>

            <div className="text-[14px] mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-5 justify-items-center">
                <div>
                    <DropdownButton
                        label='Stock Type'
                        options={['A', 'B']}
                    ></DropdownButton>
                </div>

                <div>
                    <DropdownButton
                        label='Select Category'
                        options={['A', 'B']}
                    ></DropdownButton>
                </div>

                <div>
                    <DropdownButton
                        label='Select Purity'
                        options={['A', 'B']}
                    ></DropdownButton>
                </div>

                <div className="flex items-center gap-2">
                    <label htmlFor="date" className="block mb-1 text-sm  text-black font-bold">
                        Start Date
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        className="border border-gray-300 rounded-md px-3 py-2"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <label htmlFor="date" className="block mb-1 text-sm  text-black font-bold">
                        End Date
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        className="border border-gray-300 rounded-md px-3 py-2"
                    />
                </div>

                <div className='flex items-center relative'>
                    <RxCross2 className='absolute text-2xl py-1 mb-1' />
                    <button className='text-[14px] text-black border border-blue-700 px-2 py-1 pl-6 rounded-md'>Reset</button>
                </div>

                <div className='flex items-center relative'>
                    <ImPrinter className='absolute text-2xl py-1 mb-1' />
                    <button className='bg-green-400 text-[14px] text-black border border-blue-700 px-2 py-1 pl-6 rounded-md'>Print List</button>
                </div>

            </div>

            <Outlet></Outlet>
        </div>
    );
};

export default Report;