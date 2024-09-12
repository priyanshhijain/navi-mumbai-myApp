/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

type FormValues = {
  make: string;
  model: string;
  color: string;
  imei: string;
  objectSeen: string;
  currentLocation: string;
  photographs: FileList;
};

const FoundVehicle: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    alert("form is submitted")
    console.log(data);
  };


  const [photographs, setPhotographs] = useState<File[]>([]);

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      setPhotographs((prevFiles) => [...prevFiles, ...files]);
    }
  };

  // Handle file removal
  const removeFile = (indexToRemove: number) => {
    setPhotographs((prevFiles) => prevFiles.filter((_, index) => index !== indexToRemove));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-4">
      {/* Make & Manufacturer */}
      <div className="relative mb-4">
        <label htmlFor="make" className="block text-md font-bold leading-6 text-gray-900">
          Make & Manufacturer
        </label>
        <div className="mt-2">
          <input
            {...register('make', { required: 'Make is required', minLength: { value: 2, message: 'Make must be at least 2 characters long' } })}
            id="make"
            type="text"
            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          />
          {errors.make && <p className="text-red-500 text-sm">{errors.make.message}</p>}
        </div>
      </div>

      {/* Model */}
      <div className="relative mb-4 mt-6">
        <label htmlFor="model" className="block text-md font-bold leading-6 text-gray-900">
          Model
        </label>
        <div className="mt-2">
          <input
            {...register('model', { required: 'Model is required', minLength: { value: 2, message: 'Model must be at least 2 characters long' } })}
            id="model"
            type="text"
            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          />
          {errors.model && <p className="text-red-500 text-sm">{errors.model.message}</p>}
        </div>
      </div>

      {/* Color */}
      <div className="relative mb-4 mt-6">
        <label htmlFor="color" className="block text-md font-bold leading-6 text-gray-900">
          Color
        </label>
        <div className="mt-2">
          <input
            {...register('color', { required: 'Color is required', minLength: { value: 3, message: 'Color must be at least 3 characters long' } })}
            id="color"
            type="text"
            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          />
          {errors.color && <p className="text-red-500 text-sm">{errors.color.message}</p>}
        </div>
      </div>

      {/* IMEI No */}
      <div className="relative mb-4 mt-6">
        <label htmlFor="imei" className="block text-md font-bold leading-6 text-gray-900">
          IMEI No
        </label>
        <div className="mt-2">
          <input
            {...register('imei', { required: 'IMEI No is required', pattern: { value: /^[0-9]{15}$/, message: 'IMEI must be 15 digits' } })}
            id="imei"
            type="text"
            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          />
          {errors.imei && <p className="text-red-500 text-sm">{errors.imei.message}</p>}
        </div>
      </div>

      {/* Object Seen in the Vehicle */}
      <div className="relative mb-4 mt-6">
        <label htmlFor="objectSeen" className="block text-md font-bold leading-6 text-gray-900">
          Object Seen in the Vehicle
        </label>
        <div className="mt-2">
          <input
            {...register('objectSeen', { required: 'Object seen is required', minLength: { value: 2, message: 'Object description must be at least 2 characters long' } })}
            id="objectSeen"
            type="text"
            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          />
          {errors.objectSeen && (
            <p className="text-red-500 text-sm">{errors.objectSeen.message}</p>
          )}
        </div>
      </div>

      {/* Vehicle's Current Location */}
      <div className="relative mb-4 mt-6">
        <label htmlFor="currentLocation" className="block text-md font-bold leading-6 text-gray-900">
          Vehicle's Current Location
        </label>
        <div className="mt-2">
          <input
            {...register('currentLocation', { required: 'Current location is required', minLength: { value: 2, message: 'Location must be at least 2 characters long' } })}
            id="currentLocation"
            type="text"
            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          />
          {errors.currentLocation && (
            <p className="text-red-500 text-sm">{errors.currentLocation.message}</p>
          )}
        </div>
      </div>

      <div className="flex items-center mt-4">
        {/* File Input */}
        <input
          type="file"
          id="photographs-upload"
          className="hidden"
          multiple
          {...register('photographs', { required: 'At least one photograph is required' })}
          onChange={handleFileChange}
        />

        {/* Camera Icon */}
        <FontAwesomeIcon
          icon={faCamera}
          className="text-gray-700 mr-2 cursor-pointer"
          onClick={() => document.getElementById('photographs-upload')?.click()}
        />

        {/* Label */}
        <h5 className="text-md text-gray-700 font-bold">Photographs of the Vehicle</h5>

        {/* Error Message */}
        {errors.photographs && (
          <p className="text-red-500 ml-4">{errors.photographs.message}</p>
        )}

        {/* Display selected files beside the input */}
        <div className="flex ml-4 space-x-2">
          {photographs.map((file, index) => (
            <div key={index} className="flex items-center">
              <p className="text-sm text-gray-600">{file.name}</p>
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 cursor-pointer ml-2"
                onClick={() => removeFile(index)}
              />
            </div>
          ))}
        </div>
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
  );
};

export default FoundVehicle;
