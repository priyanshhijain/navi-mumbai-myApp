import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faTimes } from '@fortawesome/free-solid-svg-icons';

type FormValues = {
  make: string;
  model: string;
  photographs: File[];
};

const FoundOthers: React.FC = () => {
  const { handleSubmit, control, formState: { errors }, register, setValue } = useForm<FormValues>({
    defaultValues: {
      photographs: [],
    },
  });

  const [photographs, setPhotographs] = useState<File[]>([]);

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      setPhotographs(prevFiles => [...prevFiles, ...files]);
      setValue('photographs', [...photographs, ...files]); // Update react-hook-form state
    }
  };

  // Handle file removal
  const removeFile = (indexToRemove: number) => {
    const updatedFiles = photographs.filter((_, index) => index !== indexToRemove);
    setPhotographs(updatedFiles);
    setValue('photographs', updatedFiles); // Update react-hook-form state
  };

  const onSubmit = (data: FormValues) => {
    alert("Form is submitted");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-4">
      {/* Make & Manufacturer */}
      <div className="relative mb-4">
        <label htmlFor="make" className="block text-md font-bold leading-6 text-gray-900">
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
                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              />
            )}
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
          <Controller
            name="model"
            control={control}
            rules={{ required: 'Model is required' }}
            render={({ field }) => (
              <input
                {...field}
                id="model"
                type="text"
                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              />
            )}
          />
          {errors.model && <p className="text-red-500 text-sm">{errors.model.message}</p>}
        </div>
      </div>

      {/* Photographs of the Vehicle */}
      <div className="flex items-center mt-4">
        <input
          type="file"
          id="photographs-upload"
          className="hidden"
          multiple
          {...register('photographs', { required: 'At least one photograph is required' })}
          onChange={handleFileChange}
        />
        <FontAwesomeIcon
          icon={faCamera}
          className="text-gray-700 mr-2 cursor-pointer"
          onClick={() => document.getElementById('photographs-upload')?.click()}
        />
        <h5 className="text-md text-gray-700 font-bold">Photographs of the Vehicle</h5>
        {errors.photographs && <p className="text-red-500 ml-4">{errors.photographs.message}</p>}
        <div className="flex ml-4 space-x-2">
          {photographs.map((file, index) => (
            <div key={index} className="relative flex items-center">
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
};

export default FoundOthers;
