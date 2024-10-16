import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faTimes } from '@fortawesome/free-solid-svg-icons';

type AccidentFormData = {
  fullName: string;
  mobileNumber: string;
  accidentDate: string;
  accidentTime: string;
  accidentLocation: string;
  vehiclesInvolved: number;
  vehicleInformation: string;
  accidentDetails: string;
  injuriesDamage: string;
  ambulanceCalled: string;
  additionalInfo: string;
};

const AccidentForm: React.FC = () => {
  const [identityProofs, setIdentityProofs] = useState<File[]>([]);
  const [evidenceFiles, setEvidenceFiles] = useState<File[]>([]);

  const { register, handleSubmit, formState: { errors } } = useForm<AccidentFormData>();

  const onSubmit = (data: AccidentFormData) => {
    console.log(data); // Here you can handle the form data (send to API or display)
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFiles: React.Dispatch<React.SetStateAction<File[]>>
  ) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    }
  };

  const removeFile = (
    index: number,
    setFiles: React.Dispatch<React.SetStateAction<File[]>>,
    files: File[]
  ) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  const renderFileSection = (
    label: string,
    files: File[],
    setFiles: React.Dispatch<React.SetStateAction<File[]>>,
    inputId: string
  ) => (
    <div className="flex flex-col mt-4">
    <div className="flex items-center space-x-2">
      <input
        type="file"
        id={inputId}
        className="hidden"
        multiple
        onChange={(e) => handleFileChange(e, setFiles)}
      />
      <FontAwesomeIcon
        icon={faPaperclip}
        className="text-gray-700 cursor-pointer"
        onClick={() => document.getElementById(inputId)?.click()}
      />
      <h5 className="text-lg text-gray-700">{label}</h5>
      <div className="flex flex-wrap items-center ml-4 space-x-4">
        {files.map((file, index) => (
          <div key={index} className="flex items-center">
            <p className="text-sm text-gray-600">{file.name}</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="text-red-500 cursor-pointer ml-2"
              onClick={() => removeFile(index, setFiles, files)}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Full Name */}
      <div>
        <label className="block font-semibold mt-6">Full Name</label>
        <input
          {...register('fullName', { required: "Full name is required" })}
          className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
        />
        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
      </div>

      {/* Mobile Number */}
      <div>
        <label className="block font-semibold mt-4">Mobile Number</label>
        <input
          type="tel"
          {...register('mobileNumber', { required: "Mobile number is required", pattern: { value: /^[0-9]{10}$/, message: "Invalid mobile number" } })}
          className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
        />
        {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber.message}</p>}
      </div>

      {/* Date of Accident */}
      <div>
        <label className="block font-semibold  mt-4">Date of Accident</label>
        <input
          type="date"
          {...register('accidentDate', { required: "Accident date is required" })}
          className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
        />
        {errors.accidentDate && <p className="text-red-500 text-sm">{errors.accidentDate.message}</p>}
      </div>

      {/* Time of Accident */}
      <div>
        <label className="block font-semibold  mt-4">Time of Accident</label>
        <input
          type="time"
          {...register('accidentTime', { required: "Accident time is required" })}
          className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
        />
        {errors.accidentTime && <p className="text-red-500 text-sm">{errors.accidentTime.message}</p>}
      </div>

      {/* Location of Accident */}
      <div>
        <label className="block font-semibold  mt-4">Location of Accident</label>
        <input
          {...register('accidentLocation', { required: "Accident location is required" })}
          className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
        />
        {errors.accidentLocation && <p className="text-red-500 text-sm">{errors.accidentLocation.message}</p>}
      </div>

      {/* Number of Vehicles Involved */}
      <div>
        <label className="block font-semibold mt-4">Number of Vehicles Involved</label>
        <input
          type="number"
          {...register('vehiclesInvolved', { required: "Number of vehicles involved is required", min: { value: 1, message: "At least 1 vehicle is required" } })}
          className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
        />
        {errors.vehiclesInvolved && <p className="text-red-500 text-sm">{errors.vehiclesInvolved.message}</p>}
      </div>

      {/* Vehicle Information */}
      <div>
        <label className="block font-semibold mt-4">Vehicle Information</label>
        <textarea
          {...register('vehicleInformation', { required: "Vehicle information is required" })}
          className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
        />
        {errors.vehicleInformation && <p className="text-red-500 text-sm">{errors.vehicleInformation.message}</p>}
      </div>

      {/* Accident Details */}
      <div>
        <label className="block font-semibold mt-4">Detail Information of Accident</label>
        <textarea
          {...register('accidentDetails', { required: "Accident details are required" })}
          className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
        />
        {errors.accidentDetails && <p className="text-red-500 text-sm">{errors.accidentDetails.message}</p>}
      </div>

      {/* Injuries and Damage */}
      <div>
        <label className="block font-semibold mt-4">Injuries and Damage</label>
        <textarea
          {...register('injuriesDamage', { required: "Injuries and damage details are required" })}
          className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
        />
        {errors.injuriesDamage && <p className="text-red-500 text-sm">{errors.injuriesDamage.message}</p>}
      </div>

      {/* Was the ambulance called? */}
      <div>
        <label className="block font-semibold mt-4">Was the ambulance called?</label>
        <div className="flex space-x-4">
          <label>
            <input
              type="radio"
              value="yes"
              {...register('ambulanceCalled', { required: "This field is required" })}
              className="mr-2"
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="no"
              {...register('ambulanceCalled', { required: "This field is required" })}
              className="mr-2"
            />
            No
          </label>
        </div>
        {errors.ambulanceCalled && <p className="text-red-500 text-sm">{errors.ambulanceCalled.message}</p>}
      </div>

      {/* Additional Information */}
      <div>
        <label className="block font-semibold mt-6">Do you have any additional information that may help in the investigation?</label>
        <textarea
          {...register('additionalInfo')}
          className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
        />
      </div>
      {renderFileSection(
        "Identity Proof (Aadhar Card, Driving Licence, etc.)",
        identityProofs,
        setIdentityProofs,
        "identity-proof-upload"
      )}

      {renderFileSection(
        "Evidence (Photos, Videos, etc. related to disappearance)",
        evidenceFiles,
        setEvidenceFiles,
        "evidence-upload"
      )}


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

export default AccidentForm;
