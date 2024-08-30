import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

type FormValues = {
    name: string;
    phoneNumber: string;
    email: string;
    reportReference: string;
    make: string;
    model: string;
    color: string;
    imeiNumber: string;
    placeLost: string;
    dateTimeLost: string;
    uniqueIdentifiers: string;
};

const LostForm: React.FC = () => {
    const { handleSubmit, control, formState: { errors } } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        alert("form is submitted")
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            {/* Contact Information */}
            <div className="grid grid-cols-1 gap-y-6">
                {/* Name Input */}
                <div className="relative">
                    <label
                        htmlFor="name"
                        className="block text-md font-bold leading-6 text-gray-900"
                    >
                        Name
                    </label>
                    <div className="mt-2">
                        <Controller
                            name="name"
                            control={control}
                            rules={{ required: 'Name is required' }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    id="name"
                                    type="text"
                                    className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md`}
                                />
                            )}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                </div>

                {/* Phone Number Input */}
                <div className="relative">
                    <label
                        htmlFor="phoneNumber"
                        className="block text-md font-bold leading-6 text-gray-900"
                    >
                        Phone Number
                    </label>
                    <div className="mt-2">
                        <Controller
                            name="phoneNumber"
                            control={control}
                            rules={{ required: 'Phone number is required' }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    id="phoneNumber"
                                    type="text"
                                    className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md`}
                                />
                            )}
                        />
                        {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
                    </div>
                </div>

                {/* Email Input */}
                <div className="relative">
                    <label
                        htmlFor="email"
                        className="block text-md font-bold leading-6 text-gray-900"
                    >
                        Email Address
                    </label>
                    <div className="mt-2">
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    id="email"
                                    type="email"
                                    className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md `}
                                />
                            )}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                </div>

                {/* Report Reference Input */}
                <div className="relative">
                    <label
                        htmlFor="reportReference"
                        className="block text-md font-bold leading-6 text-gray-900"
                    >
                        Report Reference Number
                    </label>
                    <div className="mt-2">
                        <Controller
                            name="reportReference"
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    id="reportReference"
                                    type="text"
                                    className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md`}
                                />
                            )}
                        />
                        {errors.reportReference && <p className="text-red-500 text-sm mt-1">{errors.reportReference.message}</p>}
                    </div>
                </div>

                {/* Make & Manufacturer Input */}
                <div className="relative">
                    <label
                        htmlFor="make"
                        className="block text-md font-bold leading-6 text-gray-900"
                    >
                        Make & Manufacturer
                    </label>
                    <div className="mt-2">
                        <Controller
                            name="make"
                            control={control}
                            rules={{ required: 'Make is required' }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    id="make"
                                    type="text"
                                    className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md`}
                                />
                            )}
                        />
                        {errors.make && <p className="text-red-500 text-sm mt-1">{errors.make.message}</p>}
                    </div>
                </div>

                {/* Model Input */}
                <div className="relative">
                    <label
                        htmlFor="model"
                        className="block text-md font-bold leading-6 text-gray-900"
                    >
                        Model
                    </label>
                    <div className="mt-2">
                        <Controller
                            name="model"
                            control={control}
                            rules={{ required: 'Model is required' }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    id="model"
                                    type="text"
                                    className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md `}
                                />
                            )}
                        />
                        {errors.model && <p className="text-red-500 text-sm mt-1">{errors.model.message}</p>}
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 gap-y-6 mt-4">
                {/* Color Input */}
                <div className="relative">
                    <label
                        htmlFor="color"
                        className="block text-md font-bold leading-6 text-gray-900"
                    >
                        Color
                    </label>
                    <div className="mt-2">
                        <Controller
                            name="color"
                            control={control}
                            rules={{ required: 'Color is required' }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    id="color"
                                    type="text"
                                    className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md`}
                                />
                            )}
                        />
                        {errors.color && (
                            <p className="text-red-500 text-sm mt-1">{errors.color.message}</p>
                        )}
                    </div>
                </div>

                {/* IMEI Number Input */}
                <div className="relative">
                    <label
                        htmlFor="imeiNumber"
                        className="block text-md font-bold leading-6 text-gray-900"
                    >
                        IMEI Number
                    </label>
                    <div className="mt-2">
                        <Controller
                            name="imeiNumber"
                            control={control}
                            rules={{ required: 'IMEI number is required' }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    id="imeiNumber"
                                    type="text"
                                    className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md `}
                                />
                            )}
                        />
                        {errors.imeiNumber && (
                            <p className="text-red-500 text-sm mt-1">{errors.imeiNumber.message}</p>
                        )}
                    </div>
                </div>

                {/* Place Where Phone Was Lost Input */}
                <div className="relative">
                    <label
                        htmlFor="placeLost"
                        className="block text-md font-bold leading-6 text-gray-900"
                    >
                        Place Where Phone Was Lost
                    </label>
                    <div className="mt-2">
                        <Controller
                            name="placeLost"
                            control={control}
                            rules={{ required: 'Place where phone was lost is required' }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    id="placeLost"
                                    type="text"
                                    className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md`}
                                />
                            )}
                        />
                        {errors.placeLost && (
                            <p className="text-red-500 text-sm mt-1">{errors.placeLost.message}</p>
                        )}
                    </div>
                </div>

                {/* Date and Time Lost Input */}
                <div className="relative">
                    <label
                        htmlFor="dateTimeLost"
                        className="block text-md font-bold leading-6 text-gray-900"
                    >
                        Date and Time Lost
                    </label>
                    <div className="mt-2">
                        <Controller
                            name="dateTimeLost"
                            control={control}
                            rules={{ required: 'Date and time lost is required' }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    id="dateTimeLost"
                                    type="datetime-local"
                                    className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md`}
                                />
                            )}
                        />
                        {errors.dateTimeLost && (
                            <p className="text-red-500 text-sm mt-1">{errors.dateTimeLost.message}</p>
                        )}
                    </div>
                </div>

                {/* Unique Identifiers Input */}
                <div className="relative">
                    <label
                        htmlFor="uniqueIdentifiers"
                        className="block text-md font-bold leading-6 text-gray-900"
                    >
                        Unique Identifiers
                    </label>
                    <div className="mt-2">
                        <Controller
                            name="uniqueIdentifiers"
                            control={control}
                            render={({ field }) => (
                                <textarea
                                    {...field}
                                    id="uniqueIdentifiers"
                                    rows={4}
                                    className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md`}
                                />
                            )}
                        />
                        {errors.uniqueIdentifiers && (
                            <p className="text-red-500 text-sm mt-1">{errors.uniqueIdentifiers.message}</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center mt-12 mb-24">
                <button
                    type="submit"
                    className="bg-yellow-400 text-black font-bold py-4 px-32 rounded-full focus:outline-none focus:shadow-outline mb-4 w-full sm:w-auto sm:mb-32 mb-20"
                >
                    Submit
                </button>
            </div>

        </form>
    );
};

export default LostForm;
