import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
    vehicleType: string;
    make: string;
    model: string;
    year: number;
    color: string;
    licensePlateNo: string;
    location: string;
    tenantsName: string;
};

const LostOthers: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const [photos, setPhotos] = useState<File[]>([]);
    const [rcBookCopies, setRcBookCopies] = useState<File[]>([]);

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        // Prepare the form data
        const formData = {
            ...data,
            photos: photos.map(file => file.name), // Capture only the file names or the files themselves
            rcBookCopies: rcBookCopies.map(file => file.name), // Same here
        };

        alert("Form submitted");
        console.log(formData);
        // Handle form submission logic here
    };

    // Handle multiple photo uploads for the vehicle photographs
    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files);
            setPhotos((prevPhotos) => [...prevPhotos, ...filesArray]);
        }
    };

    // Handle multiple RC book uploads
    const handleRcBookUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files);
            setRcBookCopies((prevFiles) => [...prevFiles, ...filesArray]);
        }
    };

    // Remove an individual photo from the photos array
    const removePhoto = (index: number) => {
        setPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
    };

    // Remove an individual RC book copy from the rcBookCopies array
    const removeRcBookCopy = (index: number) => {
        setRcBookCopies((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    return (
        <div className="mx-auto max-w-screen-lg px-4 md:px-8 lg:px-16">
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                {/* Make & Manufacturer */}
                <div className="relative mb-4 mt-8">
                    <label htmlFor="make" className="block text-md font-bold leading-6 text-gray-900">
                        Make & Manufacturer
                    </label>
                    <div className="mt-2">
                        <input
                            {...register('make', { required: 'Make is required' })}
                            id="make"
                            type="text"
                            className={`shadow appearance-none border w-full py-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${errors.make ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.make && (
                            <p className="text-red-500 text-sm">{errors.make.message}</p>
                        )}
                    </div>
                </div>

                {/* Model */}
                <div className="relative mb-4 mt-8">
                    <label htmlFor="model" className="block text-md font-bold leading-6 text-gray-900">
                        Model
                    </label>
                    <div className="mt-2">
                        <input
                            {...register('model', { required: 'Model is required' })}
                            id="model"
                            type="text"
                            className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${errors.model ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.model && (
                            <p className="text-red-500 text-sm">{errors.model.message}</p>
                        )}
                    </div>
                </div>

                {/* Year */}
                <div className="relative mb-4 mt-8">
                    <label htmlFor="year" className="block text-md font-bold leading-6 text-gray-900">
                        Year
                    </label>
                    <div className="mt-2">
                        <input
                            {...register('year', { required: 'Year is required' })}
                            id="year"
                            type="number"
                            className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${errors.year ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.year && (
                            <p className="text-red-500 text-sm">{errors.year.message}</p>
                        )}
                    </div>
                </div>

                {/* Photographs of the Vehicle */}
                <div className="flex items-center mt-4">
                    <label className="mr-2 text-md font-bold">Photographs of the Vehicle:</label>
                    <div className="flex items-center">
                        <label className="cursor-pointer">
                            <FontAwesomeIcon icon={faCamera} className="text-gray-600" />
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                className="hidden"
                                onChange={handlePhotoUpload}
                            />
                        </label>

                        {/* Display the uploaded file names beside the label */}
                        <div className="flex flex-wrap ml-4 space-x-2">
                            {photos.map((photo, index) => (
                                <div key={index} className="relative flex items-center">
                                    <p className="text-sm text-gray-600 mr-2">{photo.name}</p>
                                    <FontAwesomeIcon
                                        icon={faTimes}
                                        className="text-red-500 cursor-pointer"
                                        onClick={() => removePhoto(index)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RC Book/Card Copy */}
                <div className="flex items-center mt-4">
                    <label className="mr-2 text-md font-bold">RC Book/Card Copy:</label>
                    <div className="flex items-center">
                        <label className="cursor-pointer">
                            <FontAwesomeIcon icon={faCamera} className="text-gray-600" />
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                className="hidden"
                                onChange={handleRcBookUpload}
                            />
                        </label>

                        {/* Display the uploaded file names beside the label */}
                        <div className="flex flex-wrap ml-4 space-x-2">
                            {rcBookCopies.map((file, index) => (
                                <div key={index} className="relative flex items-center">
                                    <p className="text-sm text-gray-600 mr-2">{file.name}</p>
                                    <FontAwesomeIcon
                                        icon={faTimes}
                                        className="text-red-500 cursor-pointer"
                                        onClick={() => removeRcBookCopy(index)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-center mt-8 mb-4">
                    <button
                        type="submit"
                        className="w-full md:w-auto bg-yellow-500 text-black font-bold py-2 px-8 lg:py-4 lg:px-32 rounded-full focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LostOthers;
