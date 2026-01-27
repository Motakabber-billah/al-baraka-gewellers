import DropdownButton from "../../Shared/DropdownButton/DropdownButton";
import { RxCross2 } from "react-icons/rx";
import { ImPrinter } from "react-icons/im";

const Report = () => {
    return (
        <div className='bg-[#F1F5F9] mt-5 py-3 px-5'>
            <h2 className='text-[#F2A531] text-xl font-semibold'>Reports</h2>
            <div className='bg-white grid grid-cols-2 lg:grid-cols-6 xl:grid-cols-11 gap-5 justify-items-center px-2 py-2 rounded-md mt-3'>
                <button>Category</button>
                <button>Product</button>
                <button>Design</button>
                <button>SKU</button>
                <button>SKU/Karigar Report</button>
                <button>Labelled Stock</button>
                <button>Packets</button>
                <button>Boxes</button>
                <button>Old Metal</button>
                <button>Transfer</button>
                <button>Stock Analysis</button>
            </div>

            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-7 gap-5 justify-items-center">
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
                    <button className='text-base text-black border border-blue-700 px-2 py-1 pl-6 rounded-md'>Reset</button>
                </div>

                <div className='flex items-center relative'>
                    <ImPrinter className='absolute text-2xl py-1 mb-1' />
                    <button className='bg-green-400 text-base text-black border border-blue-700 px-2 py-1 pl-6 rounded-md'>Print List</button>
                </div>

            </div>
        </div>
    );
};

export default Report;