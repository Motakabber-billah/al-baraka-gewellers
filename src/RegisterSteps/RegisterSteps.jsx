import { useState } from "react";
import Logo from '../assets/images/Logo.jpg';

const RegisterSteps = () => {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        // Personal
        fullName: "",
        email: "",
        phone: "",

        // Organization
        organization: "",
        role: "",

        // Address
        address: "",
        city: "",
        country: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
        <div className="bg-[#F8FAFC]">
            <div className=' h-lvh flex max-w-5xl mx-auto'>
                <div className="w-1/2">
                    <h2 className='text-4xl text-center mt-5 text-[#EAA130] font-bold mb-5'>আল বারাকাহ জুয়েলার্স</h2>
                    <div className='md:w-1/3 h-48 hidden md:flex items-center justify-center'>
                        <img className='w-40 h-40 rounded-full' src={Logo} alt="" />
                    </div>
                </div>
                <div className="w-1/2">
                    <h2 className='text-4xl text-center mt-5 text-[#EAA130] font-bold mb-5'>আল বারাকাহ জুয়েলার্স</h2>
                    <div className=" flex items-center justify-center">
                        <div className="w-full bg-white p-6 rounded-xl shadow">

                            {/* Step Indicator */}
                            <div className="flex justify-between mb-6">
                                {["Personal", "Organization", "Address"].map((label, index) => {
                                    const stepNumber = index + 1;
                                    return (
                                        <div key={label} className="flex flex-col items-center">
                                            <div
                                                className={`w-9 h-9 flex items-center justify-center rounded-full
                  ${step >= stepNumber ? "bg-blue-600 text-white" : "bg-gray-300"}`}
                                            >
                                                {stepNumber}
                                            </div>
                                            <span className="text-xs mt-1">{label}</span>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* STEP 1 – Personal Details */}
                            {step === 1 && (
                                <>
                                    <h2 className="text-xl font-semibold mb-4">Personal Details</h2>

                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Full Name"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full mb-3 p-2 border rounded"
                                    />

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full mb-3 p-2 border rounded"
                                    />

                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full mb-4 p-2 border rounded"
                                    />

                                    <button
                                        onClick={nextStep}
                                        className="w-full bg-blue-600 text-white py-2 rounded"
                                    >
                                        Next
                                    </button>
                                </>
                            )}

                            {/* STEP 2 – Organization Details */}
                            {step === 2 && (
                                <>
                                    <h2 className="text-xl font-semibold mb-4">Organization Details</h2>

                                    <input
                                        type="text"
                                        name="organization"
                                        placeholder="Organization Name"
                                        value={formData.organization}
                                        onChange={handleChange}
                                        className="w-full mb-3 p-2 border rounded"
                                    />

                                    <input
                                        type="text"
                                        name="role"
                                        placeholder="Your Role"
                                        value={formData.role}
                                        onChange={handleChange}
                                        className="w-full mb-4 p-2 border rounded"
                                    />

                                    <div className="flex justify-between">
                                        <button
                                            onClick={prevStep}
                                            className="px-4 py-2 bg-gray-400 text-white rounded"
                                        >
                                            Back
                                        </button>
                                        <button
                                            onClick={nextStep}
                                            className="px-4 py-2 bg-blue-600 text-white rounded"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </>
                            )}

                            {/* STEP 3 – Address Details */}
                            {step === 3 && (
                                <>
                                    <h2 className="text-xl font-semibold mb-4">Address Details</h2>

                                    <textarea
                                        name="address"
                                        placeholder="Street Address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="w-full mb-3 p-2 border rounded"
                                    />

                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="w-full mb-3 p-2 border rounded"
                                    />

                                    <input
                                        type="text"
                                        name="country"
                                        placeholder="Country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className="w-full mb-4 p-2 border rounded"
                                    />

                                    <div className="flex justify-between">
                                        <button
                                            onClick={prevStep}
                                            className="px-4 py-2 bg-gray-400 text-white rounded"
                                        >
                                            Back
                                        </button>
                                        <button
                                            onClick={() => console.log("Submitted Data:", formData)}
                                            className="px-4 py-2 bg-green-600 text-white rounded"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterSteps;
