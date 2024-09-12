/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faLocationDot, faCar, faCheckCircle, faPaperclip, faTimes, faCamera, faBook, faFileContract } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import Dropdown from '@/components/Dropdown';
import { SubmitHandler } from 'react-hook-form';
interface Inputs {
    purposeOfbusiness: string;
    nearestPoliceStation: string;
    tenantsName: string;
    tenantsContactNo: string;
    permanentAddress: string;
    previousResidentialAddress: string;
    leaseStartDate: string;
    leaseEndDate: string;
    totalFamilyMembers: string;
    landlordName: string;
    landlordAddress: string;
    agreementType: string;
    brokerName: string;
    brokerContactNo: string;
    [key: string]: any; // For dynamic fields like file inputs

}
const CommercialForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
        watch,
    } = useForm<Inputs>({
        defaultValues: {
            purposeOfbusiness: '',
            nearestPoliceStation: 'APMC',
            tenantsName: '',
            tenantsContactNo: '',
            permanentAddress: '',
            previousResidentialAddress: '',
            leaseStartDate: '',
            leaseEndDate: '',
            totalFamilyMembers: '',
            landlordName: '',
            landlordAddress: '',
            agreementType: 'fixedTerm',
            brokerName: '',
            brokerContactNo: '',
        },
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        alert('Form submitted');
        console.log('Form data:', data);
        reset(); // Reset form after submission
    };

    const fileInputIds = [
        'upload-contract',
        'latest-agreement-bills',
        'owner-aadhaar',
        'tenant-aadhaar',
        'roommate-aadhaar',
        'employee-id',
        'bonafide-certificate',
        'student-id',
        'owner-photos',
        'tenant-photos',
        'owner-signature',
        'tenant-signature',
        'owner-tenant-photos',
        'roommate-photos',
    ];

    const fileLabels = [
        'Agreement Copy',
        "Latest electricity bill for the leased premise",
        "Owner's Aadhaar card",
        "Tenant's Aadhaar card",
        "Roommate's Aadhaar card",
        'Company Employee ID',
        'Company Bonafide Certificate',
        'Student ID Card',
        'Photographs of owner',
        'Photographs of tenants',
        'Signature of owner',
        'Signature of tenant',
        'Photographs of owner and tenant',
        'Photographs of roommate',
    ];
    const watchFiles = fileInputIds.map((id) => watch(id as string));

    const [fileArray, setFileArray] = useState<File[]>([]);
    const [roommateFiles, setRoommateFiles] = useState<File[]>([]);
    const [ownerFiles, setOwnerFiles] = useState<File[]>([]);
    const [tenantFiles, setTenantFiles] = useState<File[]>([]);
    const [tenantSignatureFiles, setTenantSignatureFiles] = useState<File[]>([]);
    const [ownerSignatureFiles, setOwnerSignatureFiles] = useState<File[]>([]);
    const handleFileChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        setFiles: React.Dispatch<React.SetStateAction<File[]>>
    ) => {
        const newFiles = event.target.files;
        if (newFiles) {
            const newFileArray = Array.from(newFiles);
            // Combine the new files with the existing files
            setFiles((prevFiles) => [...prevFiles, ...newFileArray]);
        }
    };
    const removeFile = (index: any) => {
        const updatedArray = [...fileArray]; // Create a copy of the array
        updatedArray.splice(index, 1); // Remove the file at the specified index
        setFileArray(updatedArray);
    };

    return (
        <div>
            <div className="mt-8">
                <p className="text-sm sm:text-lg mt-4 ">
                    <FontAwesomeIcon icon={faBook} className="mr-2 text-lg" />
                    <span className="font-bold">Form Commercial</span>
                </p>
                <hr className="mt-4" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="relative mt-8">
                    <div className="relative">
                        <select
                            {...register('purposeOfbusiness', { required: true })}
                            id="purposeOfbusiness"
                            className="appearance-none border w-full py-5 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md select-arrow"
                        >
                            <option value="" disabled>Industries</option>
                            <option value="Hotel">Hotel</option>
                            <option value="Office Building">Office Building</option>
                            <option value="Multifamily">Multifamily</option>
                            <option value="Office Space">Office Space</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <FontAwesomeIcon icon={faAngleDown} className="text-gray-600 h-4 w-8" />
                        </div>
                    </div>
                    <Dropdown
                        label="Nearest Police Station"
                        options={["APMC", "Vashi", "Nerul", "Belapur"]}
                        register={register}
                        name="nearestPoliceStation"
                        required={true}
                    />

                    <div className="relative mb-4 mt-6">
                        <label htmlFor="tenantsName" className="block text-md font-bold leading-6 text-gray-900">
                            Tenant's Name
                        </label>
                        <div className="mt-2">
                            <input
                                {...register('tenantsName', { required: "tenant name is required" })}
                                id="tenantsName"
                                type="text"
                                className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                            {errors.tenantsName && <p className="text-red-500 text-sm">{errors.tenantsName.message}</p>}
                        </div>
                    </div>
                    <div className="relative mb-4 mt-6">
                        <label htmlFor="tenantsContactNo" className="block text-md font-bold leading-6 text-gray-900">
                            Tenant's Contact No
                        </label>
                        <div className="mt-2">
                            <input
                                {...register('tenantsContactNo', { required: "tenant contact's name is required" })}
                                id="tenantsContactNo"
                                type="tel"
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                            {errors.tenantsContactNo && <p className="text-red-500 text-sm">{errors.tenantsContactNo.message}</p>}
                        </div>
                    </div>

                    <div className="relative mb-4 mt-6">
                        <label htmlFor="permanentAddress" className="block text-md font-bold leading-6 text-gray-900">
                            Permanent Address
                        </label>
                        <div className="mt-2">
                            <input
                                {...register('permanentAddress', { required: "Permanent address is required" })}
                                type="text"
                                id="permanentAddress"
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                            {errors.permanentAddress && <p className="text-red-500 text-sm">{errors.permanentAddress.message}</p>}
                        </div>
                    </div>

                    <div className="relative mb-4 mt-6">
                        <label htmlFor="previousResidentialAddress" className="block text-md font-bold leading-6 text-gray-900">
                            Previous Residential Address
                        </label>
                        <div className="mt-2">
                            <input
                                {...register('previousResidentialAddress', { required: "previous residential address address is required" })}
                                id="previousResidentialAddress"
                                type="text"
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                            {errors.previousResidentialAddress && <p className="text-red-500 text-sm">{errors.previousResidentialAddress.message}</p>}
                        </div>
                    </div>
                    <h4 className="mt-8 mb-4 font-bold text-xl leading-7">Period of Lease</h4>
                    <div className="flex space-x-4">
                        <div className="relative mb-4 w-1/2">
                            <label htmlFor="leaseStartDate" className="block text-md font-bold leading-6 text-gray-900">
                                Start Date
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register('leaseStartDate', { required: "lease Start Date address is required" })}
                                    id="leaseStartDate"
                                    type="date"
                                    className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                                />
                                {errors.leaseStartDate && <p className="text-red-500 text-sm">{errors.leaseStartDate.message}</p>}
                            </div>
                        </div>
                        <div className="relative mb-4 w-1/2">
                            <label htmlFor="leaseEndDate" className="block text-md font-bold leading-6 text-gray-900">
                                End Date
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register('leaseEndDate', { required: "lease End Date address is required" })}
                                    id="leaseEndDate"
                                    type="date"
                                    className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                                />
                                {errors.leaseEndDate && <p className="text-red-500 text-sm">{errors.leaseEndDate.message}</p>}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="relative mb-4 mt-6">
                    <label htmlFor="landlordName" className="block text-md font-bold leading-6 text-gray-900">
                        Landlord Name
                    </label>
                    <div className="mt-2">
                        <input
                            {...register('landlordName', { required: "landlordName address is required" })}
                            id="landlordName"
                            type="text"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.landlordName && <p className="text-red-500 text-sm">{errors.landlordName.message}</p>}
                    </div>
                </div>
                <div className="relative mb-4 mt-6">
                    <label htmlFor="landlordAddress" className="block text-md font-bold leading-6 text-gray-900">
                        Landlord Address
                    </label>
                    <div className="mt-2">
                        <input
                            {...register('landlordAddress', { required: "landlord Address address is required" })}
                            id="landlordAddress"
                            type="text"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.landlordAddress && <p className="text-red-500 text-sm">{errors.landlordAddress.message}</p>}
                    </div>
                </div>

                <div className="relative mb-4 mt-6">
                    <label
                        htmlFor="agreementType"
                        className="block text-md font-bold leading-6 text-gray-900"
                    >
                        Agreement Type
                    </label>
                    <div className="mt-2">
                        <select
                            {...register('agreementType', { required: "agreementType address is required" })}
                            id="agreementType"
                            className="appearance-none shadow border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md"
                        >
                            <option value="fixedTerm">Fixed Term</option>
                            <option value="periodic">Periodic</option>
                            <option value="indefinite">Indefinite</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <FontAwesomeIcon icon={faAngleDown} className="text-gray-600 h-4 w-8" />
                        </div>
                        {errors.agreementType && <p className="text-red-500 text-sm">{errors.agreementType.message}</p>}
                    </div>
                </div>

                <div className="relative mb-4 mt-6">
                    <label
                        htmlFor="brokerName"
                        className="block text-md font-bold leading-6 text-gray-900"
                    >
                        Broker's Name
                    </label>
                    <div className="mt-2">
                        <input
                            {...register('brokerName', { required: "broker Name address is required" })}
                            id="brokerName"
                            type="text"
                            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.brokerName && <p className="text-red-500 text-sm">{errors.brokerName.message}</p>}
                    </div>
                </div>

                <div className="relative mb-4 mt-6">
                    <label
                        htmlFor="brokerContactNo"
                        className="block text-md font-bold leading-6 text-gray-900"
                    >
                        Broker's Contact No
                    </label>
                    <div className="mt-2">
                        <input
                            {...register('brokerContactNo', { required: "broker Contact No address is required" })}
                            id="brokerContactNo"
                            type="tel"
                            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.brokerContactNo && <p className="text-red-500 text-sm">{errors.brokerContactNo.message}</p>}
                    </div>
                </div>
                <div className="relative mb-4 mt-8">

                    <div className="flex flex-col gap-4">
                        <div className="text-gray-900 dark:text-gray-100">
                            <div className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faPaperclip} className="text-gray-500 dark:text-gray-400 text-xl font-bold" />
                                <h3 className="text-xl font-bold">Assignment</h3>
                            </div>
                            <hr className="border-gray-500 dark:border-gray-400 mt-2" />
                        </div>
                        {fileInputIds.map((id, index) => {
                            const fileName = watchFiles[index]?.[0]?.name; // Get the file name if a file is selected

                            return (
                                <div
                                    key={id}
                                    className="flex items-center py-3 px-3 bg-white text-gray-700 "
                                >
                                    <input
                                        type="file"
                                        id={id}
                                        className="hidden"
                                        {...register(id)}
                                        multiple
                                    />

                                    <FontAwesomeIcon
                                        icon={faFileContract}
                                        className="h-4 w-8 mr-2 cursor-pointer"
                                        onClick={() => document.getElementById(id)?.click()}
                                    />
                                    <span className="ml-2">
                                        {fileName || fileLabels[index]}
                                    </span>

                                    {/* Conditionally render the cross button if a file is selected */}
                                    {fileName && (
                                        <FontAwesomeIcon
                                            icon={faTimes} // Cross icon
                                            className="ml-2 h-4 w-4 text-red-500 cursor-pointer"
                                            onClick={() => {
                                                // Clear the selected file
                                                const element = document.getElementById(id);
                                                if (element) {
                                                    (element as HTMLInputElement).value = '';
                                                }

                                                // Update form state and UI
                                                setValue(id, null);
                                            }}
                                        />
                                    )}
                                </div>
                            );
                        })}

                    </div>

                </div>
                <div className="flex items-center py-3 px-3 bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-lg shadow-md">
                    {/* File Upload Section */}
                    <label className="flex items-center cursor-pointer">
                        <FontAwesomeIcon
                            icon={faCamera}
                            className="h-5 w-5 text-gray-600 mr-2"
                        />
                        <span className="text-md text-gray-700 py-2">Photograph of Roommate</span>
                        <input
                            type="file"
                            id="fileInput"
                            multiple
                            {...register('files')}
                            onChange={(e) => handleFileChange(e, setFileArray)}
                            hidden
                        />
                    </label>

                    {/* Horizontal File List Section */}
                    {fileArray.length > 0 && (
                        <ul className="flex items-center gap-4 ml-4">
                            {fileArray.map((file, index) => (
                                <li key={index} className="flex items-center p-2 bg-gray-100 rounded-lg">
                                    <span className="text-sm text-gray-800 mr-2">{file.name}</span>
                                    <FontAwesomeIcon
                                        icon={faTimes}
                                        className="cursor-pointer text-red-500 hover:text-red-700"
                                        onClick={() => removeFile(index)}
                                    />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="flex items-center py-3 px-3 bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-lg shadow-md">
                    {/* File Upload Section */}
                    <label className="flex items-center cursor-pointer">
                        <FontAwesomeIcon
                            icon={faCamera}
                            className="h-5 w-5 text-gray-600 mr-2"
                        />
                        <span className="text-md text-gray-700 py-2">Photograph of Owner</span>
                        <input
                            type="file"
                            id="fileInput"
                            multiple
                            {...register('files')}
                            onChange={(e) => handleFileChange(e, setOwnerFiles)}
                            hidden
                        />
                    </label>

                    {/* Horizontal File List Section */}
                    {ownerFiles.length > 0 && (
                        <ul className="flex items-center gap-4 ml-4">
                            {ownerFiles.map((file, index) => (
                                <li key={index} className="flex items-center p-2 bg-gray-100 rounded-lg">
                                    <span className="text-sm text-gray-800 mr-2">{file.name}</span>
                                    <FontAwesomeIcon
                                        icon={faTimes}
                                        className="cursor-pointer text-red-500 hover:text-red-700"
                                        onClick={() => removeFile(index)}
                                    />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="flex items-center py-3 px-3 bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-lg shadow-md">
                    {/* File Upload Section */}
                    <label className="flex items-center cursor-pointer">
                        <FontAwesomeIcon
                            icon={faCamera}
                            className="h-5 w-5 text-gray-600 mr-2"
                        />
                        <span className="text-md text-gray-700 py-2">Photograph of Tenant</span>
                        <input
                            type="file"
                            id="fileInput"
                            multiple
                            {...register('files')}
                            onChange={(e) => handleFileChange(e, setTenantFiles)}
                            hidden
                        />
                    </label>

                    {/* Horizontal File List Section */}
                    {tenantFiles.length > 0 && (
                        <ul className="flex items-center gap-4 ml-4">
                            {tenantFiles.map((file, index) => (
                                <li key={index} className="flex items-center p-2 bg-gray-100 rounded-lg">
                                    <span className="text-sm text-gray-800 mr-2">{file.name}</span>
                                    <FontAwesomeIcon
                                        icon={faTimes}
                                        className="cursor-pointer text-red-500 hover:text-red-700"
                                        onClick={() => removeFile(index)}
                                    />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="flex items-center py-3 px-3 bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-lg shadow-md">
                    {/* File Upload Section */}
                    <label className="flex items-center cursor-pointer">
                        <FontAwesomeIcon
                            icon={faCamera}
                            className="h-5 w-5 text-gray-600 mr-2"
                        />
                        <span className="text-md text-gray-700 py-2"> Tenant Signature Copy</span>
                        <input
                            type="file"
                            id="fileInput"
                            multiple
                            {...register('files')}
                            onChange={(e) => handleFileChange(e, setTenantSignatureFiles)}
                            hidden
                        />
                    </label>

                    {/* Horizontal File List Section */}
                    {tenantSignatureFiles.length > 0 && (
                        <ul className="flex items-center gap-4 ml-4">
                            {tenantSignatureFiles.map((file, index) => (
                                <li key={index} className="flex items-center p-2 bg-gray-100 rounded-lg">
                                    <span className="text-sm text-gray-800 mr-2">{file.name}</span>
                                    <FontAwesomeIcon
                                        icon={faTimes}
                                        className="cursor-pointer text-red-500 hover:text-red-700"
                                        onClick={() => removeFile(index)}
                                    />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="flex items-center py-3 px-3 bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-lg shadow-md">
                    {/* File Upload Section */}
                    <label className="flex items-center cursor-pointer">
                        <FontAwesomeIcon
                            icon={faCamera}
                            className="h-5 w-5 text-gray-600 mr-2"
                        />
                        <span className="text-md text-gray-700 py-2">Owner Signature Copy</span>
                        <input
                            type="file"
                            id="fileInput"
                            multiple
                            {...register('files')}
                            onChange={(e) => handleFileChange(e, setOwnerSignatureFiles)}
                            hidden
                        />
                    </label>

                    {/* Horizontal File List Section */}
                    {ownerSignatureFiles.length > 0 && (
                        <ul className="flex items-center gap-4 ml-4">
                            {ownerSignatureFiles.map((file, index) => (
                                <li key={index} className="flex items-center p-2 bg-gray-100 rounded-lg">
                                    <span className="text-sm text-gray-800 mr-2">{file.name}</span>
                                    <FontAwesomeIcon
                                        icon={faTimes}
                                        className="cursor-pointer text-red-500 hover:text-red-700"
                                        onClick={() => removeFile(index)}
                                    />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="flex items-center justify-center mt-8 mb-32">
                    <button
                        type="submit"
                        className="bg-yellow-400 text-black font-bold py-4 px-32 rounded-full focus:outline-none focus:shadow-outline mb-4 w-full sm:w-auto sm:mb-32 mb-20"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CommercialForm;
