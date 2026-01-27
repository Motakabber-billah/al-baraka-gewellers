import DropdownButton from "../../Shared/DropdownButton/DropdownButton";
import { RxCross2 } from "react-icons/rx";
import { ImPrinter } from "react-icons/im";
import ProductTable from "../../Tables/ProductTable/ProductTable";
import { Link, Outlet } from "react-router-dom";

const Report = () => {
    return (
        <div className='bg-[#F1F5F9] mt-5 py-3 px-5'>
            <h2 className='text-[#F2A531] text-xl font-semibold'>Reports</h2>
            <div className='bg-white grid grid-cols-2 lg:grid-cols-6 xl:grid-cols-11 gap-5 justify-items-start px-2 py-2 rounded-md mt-3'>
                <Link to={'/user/report/categoryTable'}><button className="text-[14px]">Category</button></Link>
                <Link to={'/user/report/productTable'}><button className="text-[14px]">Product</button></Link>
                <Link to={'/user/report/designTable'}><button className="text-[14px]">Design</button></Link>
                <Link to={'/user/report/skuTable'}><button className="text-[14px]">SKU</button></Link>
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

            {/* <div className="mt-5">
                <ProductTable></ProductTable>
            </div> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Report;