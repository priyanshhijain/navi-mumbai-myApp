import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faLocationDot, faPaperclip, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import Dropdown from '@/components/Dropdown';

interface EventFormProps {
  eventType: string;
  onSubmit: (formData: any) => void;
}


const EventForm: React.FC<EventFormProps> = ({ eventType, onSubmit }) => {
  const { register, handleSubmit, watch, control, formState: { errors } } = useForm({
    defaultValues: {
      eventType: eventType,
      loudSpeakerPermission: false,
      nearestPoliceStation: 'APMC',
      associationName: '',
      contactPerson: '',
      contactNumber: '',
      numberOfPeopleExpected: '',
      location: '',
      startLocation: '',
      endLocation: '',
      street: '',
      date: '',
      startTime: '',
      endTime: '',
      vipOrCelebrityAttending: false,
      nameOfVIPCelebrity: ''
    }
  });

  const onSubmitHandler = (data: any) => {
    console.log('Event:', eventType); // Log the event itself
    console.log('Form State:', data);
    alert("submitted") // Log the current form state
    onSubmit(data); // Call onSubmit function with form data
  };

  // Separate states for each file upload input
  const [applicationFiles, setApplicationFiles] = useState<File[]>([]);
  const [policeNocFiles, setPoliceNocFiles] = useState<File[]>([]);
  const [municipalNocFiles, setMunicipalNocFiles] = useState<File[]>([]);

  // Handle file selection
  const handleFileChange = (event: any, setFileState: React.Dispatch<React.SetStateAction<File[]>>) => {
    const files = Array.from(event.target.files) as File[];
    setFileState((prevFiles) => [...prevFiles, ...files]);
  };
  // Remove individual files
  const removeFile = (indexToRemove: number, setFileState: React.Dispatch<React.SetStateAction<File[]>>, files: File[]) => {
    setFileState(files.filter((_, index) => index !== indexToRemove));
  };
  return (
    <div>
      <div className="mb-4">
        <p className="text-sm sm:text-lg">
          <FontAwesomeIcon icon={faBook} className="mr-2 text-lg" />
          <span className="font-bold">Event Form</span>
        </p>
        <hr className="mb-8 mt-2 border-gray-300" />
      </div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <input type="hidden" {...register('eventType')} value={eventType} />

        {/* Loud Speaker Permission */}
        <div className="flex items-center my-4 py-2 mx-auto sm:ml-4 md:ml-8 lg:ml-[300px]">
          <input
            type="checkbox"
            id="loudSpeakerPermission"
            className="form-checkbox h-4 w-4 text-indigo-600 ml-4 "
            {...register('loudSpeakerPermission')}
          />
          <label
            htmlFor="loudSpeakerPermission"
            className="ml-2 block text-sm sm:text-base text-gray-900"
            style={{ marginLeft: '20px' }}
          >
            <span className='font-bold'>Loud Speaker Permission</span> <br />
            <span>Select this checkbox in case you intend to use a</span><br />
            <span>loud speaker for this event</span>
          </label>
        </div>

        <Dropdown
          label="Nearest Police Station"
          options={["APMC", "Vashi", "Nerul", "Belapur"]}
          register={register}
          name="nearestPoliceStation"
          required={true}
          errors={errors}
        />
        <div className="relative mb-4 mt-6">
          <label htmlFor="associationName" className="block text-md font-bold leading-6 text-gray-900">
            Association/Company Name
          </label>
          <div className="mt-2">
            <input
              id="associationName"
              type="text"
              className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.associationName ? 'border-red-500' : 'focus:border-blue-500'}`}
              {...register('associationName', { required: 'Association/Company Name is required' })}
            />
            {errors.associationName && <p className="text-red-500 text-sm mt-1">{errors.associationName.message}</p>}
          </div>
        </div>



        <div className="relative mb-4 mt-6">
          <label htmlFor="contactPerson" className="block text-md font-bold leading-6 text-gray-900">
            Contact Person
          </label>
          <div className="mt-2">
            <input
              id="contactPerson"
              type="text"
              className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.contactPerson ? 'border-red-500' : 'focus:border-blue-500'}`}
              {...register('contactPerson', {
                required: 'Contact Person is required',
                minLength: { value: 2, message: 'Contact Person must be at least 2 characters long' }
              })}
            />
            {errors.contactPerson && <p className="text-red-500 text-sm mt-1">{errors.contactPerson.message}</p>}
          </div>
        </div>


        <div className="relative mb-4 mt-6">
          <label htmlFor="contactNumber" className="block text-md font-bold leading-6 text-gray-900">
            Contact Number
          </label>
          <div className="mt-2">
            <input
              id="contactNumber"
              type="text"
              className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.contactNumber ? 'border-red-500' : 'focus:border-blue-500'}`}
              {...register('contactNumber', {
                required: 'Contact Number is required',
                pattern: {
                  value: /^[0-9]{10}$/, // Adjust pattern as needed
                  message: 'Contact Number must be 10 digits'
                }
              })}
            />
            {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber.message}</p>}
          </div>
        </div>


        <div className="relative mb-4 mt-6">
          <label htmlFor="numberOfPeopleExpected" className="block text-md font-bold leading-6 text-gray-900">
            Number of People Expected
          </label>
          <div className="mt-2">
            <input
              id="numberOfPeopleExpected"
              type="text"
              className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.numberOfPeopleExpected ? 'border-red-500' : 'focus:border-blue-500'}`}
              {...register('numberOfPeopleExpected', {
                required: 'Number of People Expected is required',
                pattern: {
                  value: /^[0-9]+$/, // Allows only numbers
                  message: 'Number of People Expected must be a valid number'
                }
              })}
            />
            {errors.numberOfPeopleExpected && <p className="text-red-500 text-sm mt-1">{errors.numberOfPeopleExpected.message}</p>}
          </div>
        </div>


        <div className="relative mb-4 mt-6">
          <label htmlFor="location" className="block text-md font-bold leading-6 text-gray-900">
            Location
          </label>
          <div className="mt-2">
            <input
              id="location"
              type="text"
              className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.location ? 'border-red-500' : 'focus:border-blue-500'}`}
              {...register('location', {
                required: 'Location is required'
              })}
            />
            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
          </div>
        </div>


        <div className='mt-8 mb-8'>
          <h4 className='font-bold'>Specify Route (In case of event within a location)</h4>
        </div>

        {/* Start Location */}
        {/* Start Location */}
        <div className="relative mb-4 mt-6">
          <label htmlFor="startLocation" className="block text-md font-bold leading-6 text-gray-900">
            Start Location
          </label>
          <div className="mt-2">
            <input
              id="startLocation"
              type="text"
              className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.startLocation ? 'border-red-500' : 'focus:border-blue-500'}`}
              {...register('startLocation', {
                required: 'Start Location is required'
              })}
            />
            {errors.startLocation && <p className="text-red-500 text-sm mt-1">{errors.startLocation.message}</p>}
          </div>
        </div>

        {/* End Location */}
        <div className="relative mb-4 mt-6">
          <label htmlFor="endLocation" className="block text-md font-bold leading-6 text-gray-900">
            End Location
          </label>
          <div className="mt-2">
            <input
              id="endLocation"
              type="text"
              className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.endLocation ? 'border-red-500' : 'focus:border-blue-500'}`}
              {...register('endLocation', {
                required: 'End Location is required'
              })}
            />
            {errors.endLocation && <p className="text-red-500 text-sm mt-1">{errors.endLocation.message}</p>}
          </div>
        </div>

        {/* Street */}
        <div className="relative mb-4 mt-6">
          <label htmlFor="street" className="block text-md font-bold leading-6 text-gray-900">
            Street
          </label>
          <div className="mt-2">
            <input
              id="street"
              type="text"
              className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.street ? 'border-red-500' : 'focus:border-blue-500'}`}
              {...register('street', {
                required: 'Street is required'
              })}
            />
            {errors.street && <p className="text-red-500 text-sm mt-1">{errors.street.message}</p>}
          </div>
        </div>

        {/* Date */}
        <div className="relative mb-4 mt-6">
          <label htmlFor="date" className="block text-md font-bold leading-6 text-gray-900">
            Date
          </label>
          <div className="mt-2">
            <input
              id="date"
              type="date"
              className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.date ? 'border-red-500' : 'focus:border-blue-500'}`}
              {...register('date', {
                required: 'Date is required'
              })}
            />
            {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
          </div>
        </div>


        {/* Start Time */}
        <div className="relative mb-4 mt-6">
          <label htmlFor="startTime" className="block text-md font-bold leading-6 text-gray-900">
            Start Time
          </label>
          <div className="mt-2">
            <input
              id="startTime"
              type="time"
              className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.startTime ? 'border-red-500' : 'focus:border-blue-500'}`}
              {...register('startTime', {
                required: 'Start Time is required'
              })}
            />
            {errors.startTime && <p className="text-red-500 text-sm mt-1">{errors.startTime.message}</p>}
          </div>
        </div>

        {/* End Time */}
        <div className="relative mb-4 mt-6">
          <label htmlFor="endTime" className="block text-md font-bold leading-6 text-gray-900">
            End Time
          </label>
          <div className="mt-2">
            <input
              id="endTime"
              type="time"
              className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.endTime ? 'border-red-500' : 'focus:border-blue-500'}`}
              {...register('endTime', {
                required: 'End Time is required'
              })}
            />
            {errors.endTime && <p className="text-red-500 text-sm mt-1">{errors.endTime.message}</p>}
          </div>
        </div>

        <div className="flex items-center my-4 py-2 mx-auto sm:ml-4 md:ml-8 lg:ml-[300px]">
          <input
            type="checkbox"
            id="resident-navimumbai"
            className={`form-checkbox h-4 w-4 text-indigo-600 ml-4 ${errors.vipOrCelebrityAttending ? 'border-red-500' : 'focus:border-blue-500'}`}
            {...register('vipOrCelebrityAttending')}
          />
          <label
            htmlFor="resident-navimumbai"
            className="ml-2 block text-sm sm:text-base text-gray-900"
            style={{ marginLeft: '20px' }}
          >
            <span className='font-bold'>Vip or Celebrities attending (if any)</span> <br />
            <span>Select this checkbox in case of VIP or a </span><br />
            <span>celebrity attending this event</span>
          </label>
        </div>


        {/* Name of VIP or Celebrity */}
        {/* Name of VIP or Celebrity */}
        <div className="relative mb-4 mt-6">
          <label htmlFor="nameOfVIPCelebrity" className="block text-md font-bold leading-6 text-gray-900">
            Name of VIP or Celebrity
          </label>
          <div className="mt-2">
            <input
              id="nameOfVIPCelebrity"
              type="text"
              className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.nameOfVIPCelebrity ? 'border-red-500' : 'focus:border-blue-500'}`}
              {...register('nameOfVIPCelebrity', {
                required: 'Name of VIP or Celebrity is required',
                minLength: {
                  value: 2,
                  message: 'Name of VIP or Celebrity must be at least 2 characters long',
                },
              })}
            />
            {errors.nameOfVIPCelebrity && <p className="text-red-500 text-sm mt-1">{errors.nameOfVIPCelebrity.message}</p>}
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

            {/* Application Signed Copy */}
            <div className="flex items-center mt-4">
              <input
                type="file"
                id="application-upload"
                className="hidden"
                multiple
                onChange={(e) => handleFileChange(e, setApplicationFiles)}
              />
              <FontAwesomeIcon
                icon={faBook}
                className="text-gray-700 mr-2 cursor-pointer"
                onClick={() => document.getElementById('application-upload')?.click()}
              />
              <h5 className="text-lg text-gray-700">Application signed copy (on organization letter head)</h5>
              <div className="flex ml-4 space-x-2">
                {applicationFiles.map((file, index) => (
                  <div key={index} className="flex items-center">
                    <p className="text-sm text-gray-600">{file.name}</p>
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="text-red-500 cursor-pointer ml-2"
                      onClick={() => removeFile(index, setApplicationFiles, applicationFiles)}
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* NOC of Traffic Police */}
            <div className="flex items-center mt-4">
              <input
                type="file"
                id="police-noc-upload"
                className="hidden"
                multiple
                onChange={(e) => handleFileChange(e, setPoliceNocFiles)}
              />
              <FontAwesomeIcon
                icon={faBook}
                className="text-gray-700 mr-2 cursor-pointer"
                onClick={() => document.getElementById('police-noc-upload')?.click()}
              />
              <h5 className="text-lg text-gray-700">NOC of Traffic Police (In case of Mobile event)</h5>
              <div className="flex ml-4 space-x-2">
                {policeNocFiles.map((file, index) => (
                  <div key={index} className="flex items-center">
                    <p className="text-sm text-gray-600">{file.name}</p>
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="text-red-500 cursor-pointer ml-2"
                      onClick={() => removeFile(index, setPoliceNocFiles, policeNocFiles)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center mt-4">
              <input
                type="file"
                id="municipal-noc-upload"
                className="hidden"
                multiple
                onChange={(e) => handleFileChange(e, setMunicipalNocFiles)}
              />
              <FontAwesomeIcon
                icon={faBook}
                className="text-gray-700 mr-2 cursor-pointer"
                onClick={() => document.getElementById('municipal-noc-upload')?.click()}
              />
              <h5 className="text-lg text-gray-700">NOC of Navi Mumbai Municipal Corporation</h5>
              <div className="flex ml-4 space-x-2">
                {municipalNocFiles.map((file, index) => (
                  <div key={index} className="flex items-center">
                    <p className="text-sm text-gray-600">{file.name}</p>
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="text-red-500 cursor-pointer ml-2"
                      onClick={() => removeFile(index, setMunicipalNocFiles, municipalNocFiles)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8 mb-32">
          <button
            type="submit"
            className="bg-yellow-400 text-black font-bold py-4 px-32 rounded-full focus:outline-none focus:shadow-outline mb-4"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
