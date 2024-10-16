"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faTimes, faPaperclip } from '@fortawesome/free-solid-svg-icons';
export default function PCCForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [passportFiles, setPassportFiles] = useState<File[]>([]);
    const [birthCertFiles, setBirthCertFiles] = useState<File[]>([]);
    const [visaWorkFiles, setVisaWorkFiles] = useState<File[]>([]);

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        setFiles: React.Dispatch<React.SetStateAction<File[]>>
    ) => {
        const fileList = Array.from(e.target.files || []);
        setFiles(fileList);
    };

    const removeFile = (index: number, setFiles: React.Dispatch<React.SetStateAction<File[]>>, files: File[]) => {
        const updatedFiles = files.filter((_, i) => i !== index);
        setFiles(updatedFiles);
    };


    const onSubmit = (data: any) => {
        console.log(data); // Logs form data on submit
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-screen-lg mx-auto px-4">
            {/* Full Name */}
            <div className="relative mb-4 mt-6">
                <label htmlFor="fullName" className="block text-md font-bold leading-6 text-gray-900">
                    Full Name
                </label>
                <div className="mt-2">
                    <input
                        {...register("fullName", { required: "Full name is required" })}
                        type="text"
                        id="fullName"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                    {errors.fullName?.message?.toString() && (
                        <p className="text-red-500 text-sm">{errors.fullName.message.toString()}</p>
                    )}  </div>
            </div>

            {/* Present Address */}
            <div className="relative mb-4">
                <label htmlFor="presentAddress" className="block text-md font-bold leading-6 text-gray-900">
                    Present Address
                </label>
                <div className="mt-2">
                    <input
                        {...register("presentAddress", { required: "Present address is required" })}
                        type="text"
                        id="presentAddress"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                    {errors.presentAddress?.message && (
                        <p className="text-red-500 text-sm">{errors.presentAddress.message.toString()}</p>
                    )}
                </div>
            </div>

            {/* Passport Number */}
            <div className="relative mb-4">
                <label htmlFor="passportNumber" className="block text-md font-bold leading-6 text-gray-900">
                    Passport Number
                </label>
                <div className="mt-2">
                    <input
                        {...register("passportNumber", { required: "Passport number is required" })}
                        type="text"
                        id="passportNumber"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                    {errors.passportNumber?.message && (
                        <p className="text-red-500 text-sm">{errors.passportNumber.message.toString()}</p>
                    )}
                </div>
            </div>

            {/* Email Address */}
            <div className="relative mb-4">
                <label htmlFor="email" className="block text-md font-bold leading-6 text-gray-900">
                    Email Address
                </label>
                <div className="mt-2">
                    <input
                        {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } })}
                        type="email"
                        id="email"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                    {errors.email?.message && (
                        <p className="text-red-500 text-sm">{errors.email?.message?.toString()}</p>
                    )}
                </div>
            </div>

            {/* Overseas Employer's Name */}
            <div className="relative mb-4">
                <label htmlFor="employerName" className="block text-md font-bold leading-6 text-gray-900">
                    Overseas Employer's Name
                </label>
                <div className="mt-2">
                    <input
                        {...register("employerName", { required: "Employer's name is required" })}
                        type="text"
                        id="employerName"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                    {errors.employerName?.message && (
                        <p className="text-red-500 text-sm">{String(errors.employerName.message)}</p>
                    )}
                </div>
            </div>

            {/* Country of Employment */}
            <div className="relative mb-4">
                <label htmlFor="country" className="block text-md font-bold leading-6 text-gray-900">
                    Country of Employment
                </label>
                <div className="mt-2">
                    <input
                        {...register("country", { required: "Country is required" })}
                        type="text"
                        id="country"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                    {errors.country?.message && (
                        <p className="text-red-500 text-sm">{errors.country.message.toString()}</p>
                    )}
                </div>
            </div>

            {/* Job/Title Position */}
            <div className="relative mb-4">
                <label htmlFor="jobTitle" className="block text-md font-bold leading-6 text-gray-900">
                    Job/Title Position
                </label>
                <div className="mt-2">
                    <input
                        {...register("jobTitle", { required: "Job title is required" })}
                        type="text"
                        id="jobTitle"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                    {errors.jobTitle?.message && (
                        <p className="text-red-500 text-sm">{String(errors.jobTitle.message)}</p>
                    )}
                </div>
            </div>

            {/* Expected Start Date */}
            <div className="relative mb-4">
                <label htmlFor="startDate" className="block text-md font-bold leading-6 text-gray-900">
                    Expected Start Date
                </label>
                <div className="mt-2">
                    <input
                        {...register("startDate", { required: "Start date is required" })}
                        type="date"
                        id="startDate"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                    {errors.startDate?.message && (
                        <p className="text-red-500 text-sm">{String(errors.startDate.message)}</p>
                    )}
                </div>
            </div>

            {/* Work Permit/Visa Status */}
            <div className="relative mb-4">
                <label htmlFor="visaStatus" className="block text-md font-bold leading-6 text-gray-900">
                    Work Permit/Visa Status
                </label>
                <div className="mt-2">
                    <input
                        {...register("visaStatus", { required: "Visa status is required" })}
                        type="text"
                        id="visaStatus"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                    {errors.visaStatus?.message && (
                        <p className="text-red-500 text-sm">{String(errors.visaStatus.message)}</p>
                    )}
                </div>
            </div>

            {/* Countries Visited in Last 5 Years */}
            <div className="relative mb-4">
                <label htmlFor="countriesVisited" className="block text-md font-bold leading-6 text-gray-900">
                    Countries Visited in Last 5 Years
                </label>
                <div className="mt-2">
                    <textarea
                        {...register("countriesVisited", { required: "This field is required" })}
                        id="countriesVisited"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                    {errors.countriesVisited?.message && (
                        <p className="text-red-500 text-sm">{String(errors.countriesVisited.message)}</p>
                    )}
                </div>
            </div>

            {/* Have You Lived in Foreign Countries for More Than 6 Months */}
            <div className="relative mb-4">
                <label className="block text-md font-bold leading-6 text-gray-900">
                    Have You Lived in Foreign Countries for More Than 6 Months?
                </label>
                <div className="mt-2">
                    <label className="mr-4">
                        <input
                            {...register("livedInForeignCountries", { required: "This field is required" })}
                            type="radio"
                            value="Yes"
                            className="mr-1"
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            {...register("livedInForeignCountries", { required: "This field is required" })}
                            type="radio"
                            value="No"
                            className="mr-1"
                        />
                        No
                    </label>
                    {errors.livedInForeignCountries && (
                        <p className="text-red-500 text-sm">Please select an option</p>
                    )}
                </div>
            </div>

            {/* Provide Details If Yes */}
            <div className="relative mb-4">
                <label htmlFor="foreignCountryDetails" className="block text-md font-bold leading-6 text-gray-900">
                    If Yes, Please Provide Details
                </label>
                <div className="mt-2">
                    <textarea
                        {...register("foreignCountryDetails")}
                        id="foreignCountryDetails"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                </div>
            </div>

            {/* Have You Ever Been Arrested */}
            <div className="relative mb-4">
                <label className="block text-md font-bold leading-6 text-gray-900">
                    Have You Ever Been Arrested?
                </label>
                <div className="mt-2">
                    <label className="mr-4">
                        <input
                            {...register("arrested", { required: "This field is required" })}
                            type="radio"
                            value="Yes"
                            className="mr-1"
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            {...register("arrested", { required: "This field is required" })}
                            type="radio"
                            value="No"
                            className="mr-1"
                        />
                        No
                    </label>
                    {errors.arrested && <p className="text-red-500 text-sm">Please select an option</p>}
                </div>
            </div>

            {/* Are You Involved in Politics */}
            <div className="relative mb-4">
                <label className="block text-md font-bold leading-6 text-gray-900">
                    Have You Ever Been Involved in Politics?
                </label>
                <div className="mt-2">
                    <label className="mr-4">
                        <input
                            {...register("politics", { required: "This field is required" })}
                            type="radio"
                            value="Yes"
                            className="mr-1"
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            {...register("politics", { required: "This field is required" })}
                            type="radio"
                            value="No"
                            className="mr-1"
                        />
                        No
                    </label>
                    {errors.politics && <p className="text-red-500 text-sm">Please select an option</p>}
                </div>
            </div>

            {/* Information of Close Acquaintance */}
            <div className="relative mb-4">
                <label htmlFor="acquaintanceInfo" className="block text-md font-bold leading-6 text-gray-900">
                    Information of Close Acquaintance
                </label>
                <div className="mt-2">
                    <input
                        {...register("acquaintanceInfo", { required: "This field is required" })}
                        type="text"
                        id="acquaintanceInfo"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                    {errors.acquaintanceInfo?.message?.toString() && (
                        <p className="text-red-500 text-sm">{errors.acquaintanceInfo.message.toString()}</p>
                    )}
                </div>
            </div>

            {/* Contact Number */}
            <div className="relative mb-4">
                <label htmlFor="contactNumber" className="block text-md font-bold leading-6 text-gray-900">
                    Contact Number
                </label>
                <div className="mt-2">
                    <input
                        {...register("contactNumber", { required: "Contact number is required" })}
                        type="tel"
                        id="contactNumber"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                    {errors.contactNumber?.message && (
                        <p className="text-red-500 text-sm">{errors.contactNumber.message.toString()}</p>
                    )}
                </div>
            </div>


            <div className="text-gray-900 dark:text-gray-100">
                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faPaperclip} className="text-gray-500 dark:text-gray-400 text-xl font-bold" />
                    <h3 className="text-xl font-bold">Assignment</h3>
                </div>
                <hr className="border-gray-500 dark:border-gray-400 mt-2" />
            </div>
            {/* Passport-sized Photograph */}
            <div className="flex items-center py-3 px-3 bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-lg shadow-md">
                <label className="flex items-center cursor-pointer">
                    <FontAwesomeIcon icon={faCamera} className="h-5 w-5 text-gray-600 mr-2" />
                    <span className="text-md text-gray-700 py-2">Passport-Sized Photograph</span>
                    <input
                        type="file"
                        multiple
                        {...register('passportPhoto')}
                        onChange={(e) => handleFileChange(e, setPassportFiles)}
                        hidden
                    />
                </label>

                {/* Horizontal File List */}
                {passportFiles.length > 0 && (
                    <ul className="flex items-center gap-4 ml-4">
                        {passportFiles.map((file, index) => (
                            <li key={index} className="flex items-center p-2 bg-gray-100 rounded-lg">
                                <span className="text-sm text-gray-800 mr-2">{file.name}</span>
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className="cursor-pointer text-red-500 hover:text-red-700"
                                    onClick={() => removeFile(index, setPassportFiles, passportFiles)}
                                />
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Birth Certificate */}
            <div className="flex items-center py-3 px-3 bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-lg shadow-md">
                <label className="flex items-center cursor-pointer">
                    <FontAwesomeIcon icon={faCamera} className="h-5 w-5 text-gray-600 mr-2" />
                    <span className="text-md text-gray-700 py-2">Birth Certificate</span>
                    <input
                        type="file"
                        multiple
                        {...register('birthCertificate')}
                        onChange={(e) => handleFileChange(e, setBirthCertFiles)}
                        hidden
                    />
                </label>

                {/* Horizontal File List */}
                {birthCertFiles.length > 0 && (
                    <ul className="flex items-center gap-4 ml-4">
                        {birthCertFiles.map((file, index) => (
                            <li key={index} className="flex items-center p-2 bg-gray-100 rounded-lg">
                                <span className="text-sm text-gray-800 mr-2">{file.name}</span>
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className="cursor-pointer text-red-500 hover:text-red-700"
                                    onClick={() => removeFile(index, setBirthCertFiles, birthCertFiles)}
                                />
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Visa/Work Permit */}
            <div className="flex items-center py-3 px-3 bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-lg shadow-md">
                <label className="flex items-center cursor-pointer">
                    <FontAwesomeIcon icon={faCamera} className="h-5 w-5 text-gray-600 mr-2" />
                    <span className="text-md text-gray-700 py-2">Visa/Work Permit</span>
                    <input
                        type="file"
                        multiple
                        {...register('visaWorkPermit')}
                        onChange={(e) => handleFileChange(e, setVisaWorkFiles)}
                        hidden
                    />
                </label>

                {/* Horizontal File List */}
                {visaWorkFiles.length > 0 && (
                    <ul className="flex items-center gap-4 ml-4">
                        {visaWorkFiles.map((file, index) => (
                            <li key={index} className="flex items-center p-2 bg-gray-100 rounded-lg">
                                <span className="text-sm text-gray-800 mr-2">{file.name}</span>
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className="cursor-pointer text-red-500 hover:text-red-700"
                                    onClick={() => removeFile(index, setVisaWorkFiles, visaWorkFiles)}
                                />
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center mt-8 mb-32">
                <button
                    type="submit"
                    className="bg-yellow-400 text-black font-bold py-4 px-32 rounded-full focus:outline-none focus:shadow-outline mb-4 w-full sm:w-auto sm:mb-32 mb-20"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}
