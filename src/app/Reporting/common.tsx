import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form"; interface FormData {
  fullName: string;
  mobileNumber: string;
  presentAddress: string;
  anonymous: "yes" | "no";
  incidentDate: string;
  incidentTime: string;
  description: string;
  victim: "yes" | "no";
  victimName?: string;
  victimAge?: number;
  victimGender?: "male" | "female" | "other";
  requiresMedicalTreatment?: "yes" | "no";
  witnessName?: string;
  witnessMobile?: string;
  evidenceTypes?: string[]; // Add this line to include evidenceTypes in FormData
  evidenceDetails:any;
  otherEvidence:any;
}



const CommonCom = ({ title }: { title: string }) => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>();
  const [formData, setFormData] = useState<FormData | null>(null); // State to hold submitted data
  const [isVictim, setIsVictim] = useState(false);

  const [hasOtherEvidence, setHasOtherEvidence] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [requiresMedicalTreatment, setRequiresMedicalTreatment] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log(title)
    setFormData(data); // Store the form data in the state
    console.log(data);  // Optionally log the data to the console
  };

  const [identityProofs, setIdentityProofs] = useState<File[]>([]);
    const [medicalDocuments, setMedicalDocuments] = useState<File[]>([]);

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
          <div className="flex flex-wrap items-center ml-4">
              {files.map((file, index) => (
                  <div key={index} className="flex items-center mr-2">
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Full Name */}
      <div className="relative mb-4 mt-6">
        <label htmlFor="fullName" className="block text-md font-bold leading-6 text-gray-900">
          Full Name
        </label>
        <div className="mt-2">
          <input
            {...register('fullName', { required: "Full name is required" })}
            id="fullName"
            type="text"
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          />
          {errors.fullName?.message && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
        </div>
      </div>

      {/* Mobile Number */}
      <div className="relative mb-4">
        <label htmlFor="mobileNumber" className="block text-md font-bold leading-6 text-gray-900">
          Mobile Number
        </label>
        <div className="mt-2">
          <input
            {...register('mobileNumber', { required: "Mobile number is required" })}
            id="mobileNumber"
            type="tel"
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          />
          {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber.message}</p>}
        </div>
      </div>

      {/* Present Address */}
      <div className="relative mb-4">
        <label htmlFor="presentAddress" className="block text-md font-bold leading-6 text-gray-900">
          Present Address
        </label>
        <div className="mt-2">
          <input
            {...register('presentAddress', { required: "Present address is required" })}
            id="presentAddress"
            type="text"
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          />
          {errors.presentAddress && <p className="text-red-500 text-sm">{errors.presentAddress.message}</p>}
        </div>
      </div>

      {/* Would you like to be anonymous? */}
      <div className="relative mb-4">
        <label className="block text-md font-bold leading-6 text-gray-900">Would you like to be anonymous?</label>
        <div className="mt-2 flex space-x-4">
          <label className="inline-flex items-center">
            <input
              {...register('anonymous')}
              type="radio"
              value="yes"
              className="form-radio"
              onChange={() => setIsAnonymous(true)}
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center">
            <input
              {...register('anonymous')}
              type="radio"
              value="no"
              className="form-radio"
              onChange={() => setIsAnonymous(false)}
            />
            <span className="ml-2">No</span>
          </label>
        </div>
      </div>

      {/* Date of Incident */}
      <div className="relative mb-4">
        <label htmlFor="incidentDate" className="block text-md font-bold leading-6 text-gray-900">
          Date of Incident
        </label>
        <div className="mt-2">
          <input
            {...register('incidentDate', { required: "Date of incident is required" })}
            id="incidentDate"
            type="date"
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          />
          {errors.incidentDate && <p className="text-red-500 text-sm">{errors.incidentDate.message}</p>}
        </div>
      </div>

      {/* Time of Incident */}
      <div className="relative mb-4">
        <label htmlFor="incidentTime" className="block text-md font-bold leading-6 text-gray-900">
          Time of Incident
        </label>
        <div className="mt-2">
          <input
            {...register('incidentTime', { required: "Time of incident is required" })}
            id="incidentTime"
            type="time"
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          />
          {errors.incidentTime && <p className="text-red-500 text-sm">{errors.incidentTime.message}</p>}
        </div>
      </div>

      {/* Description */}
      <div className="relative mb-4">
        <label htmlFor="description" className="block text-md font-bold leading-6 text-gray-900">
          Description
        </label>
        <div className="mt-2">
          <textarea
            {...register('description', { required: "Description is required" })}
            id="description"
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>
      </div>

      {/* Were you the victim or witness? */}
      <div className="relative mb-4">
        <label className="block text-md font-bold leading-6 text-gray-900">Were you the victim or a witness?</label>
        <div className="mt-2 flex space-x-4">
          <label className="inline-flex items-center">
            <input
              {...register('victim')}
              type="radio"
              value="yes"
              className="form-radio"
              onChange={() => setIsVictim(true)}
            />
            <span className="ml-2">Victim</span>
          </label>
          <label className="inline-flex items-center">
            <input
              {...register('victim')}
              type="radio"
              value="no"
              className="form-radio"
              onChange={() => setIsVictim(false)}
            />
            <span className="ml-2">Witness</span>
          </label>
        </div>
      </div>

      {/* Victim Details */}
      {isVictim && (
        <>
          <div className="relative mb-4">
            <label htmlFor="victimName" className="block text-md font-bold leading-6 text-gray-900">
              Victim's Name
            </label>
            <div className="mt-2">
              <input
                {...register('victimName', { required: "Victim's name is required" })}
                id="victimName"
                type="text"
                className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              />
              {errors.victimName && <p className="text-red-500 text-sm">{errors.victimName.message}</p>}
            </div>
          </div>

          <div className="relative mb-4">
            <label htmlFor="victimAge" className="block text-md font-bold leading-6 text-gray-900">
              Victim's Age
            </label>
            <div className="mt-2">
              <input
                {...register('victimAge', { required: "Victim's age is required" })}
                id="victimAge"
                type="number"
                className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              />
              {errors.victimAge && <p className="text-red-500 text-sm">{errors.victimAge.message}</p>}
            </div>
          </div>

          <div className="relative mb-4">
            <label htmlFor="victimGender" className="block text-md font-bold leading-6 text-gray-900">
              Victim's Gender
            </label>
            <div className="mt-2">
              <select
                {...register('victimGender', { required: "Victim's gender is required" })}
                id="victimGender"
                className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.victimGender && <p className="text-red-500 text-sm">{errors.victimGender.message}</p>}
            </div>
          </div>

          <div className="relative mb-4">
            <label className="block text-md font-bold leading-6 text-gray-900">
              Did the victim require medical treatment?
            </label>
            <div className="mt-2 flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  {...register('requiresMedicalTreatment')}
                  type="radio"
                  value="yes"
                  className="form-radio"
                  onChange={() => setRequiresMedicalTreatment(true)}
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  {...register('requiresMedicalTreatment')}
                  type="radio"
                  value="no"
                  className="form-radio"
                  onChange={() => setRequiresMedicalTreatment(false)}
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
        </>
      )}

      {/* Witness Details */}
      {!isVictim && (
        <>
          <div className="relative mb-4">
            <label htmlFor="witnessName" className="block text-md font-bold leading-6 text-gray-900">
              Witness Name
            </label>
            <div className="mt-2">
              <input
                {...register('witnessName', { required: "Witness name is required" })}
                id="witnessName"
                type="text"
                className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              />
              {errors.witnessName && <p className="text-red-500 text-sm">{errors.witnessName.message}</p>}
            </div>
          </div>

          <div className="relative mb-4">
            <label htmlFor="witnessMobile" className="block text-md font-bold leading-6 text-gray-900">
              Witness Mobile Number
            </label>
            <div className="mt-2">
              <input
                {...register('witnessMobile', { required: "Witness mobile number is required" })}
                id="witnessMobile"
                type="tel"
                className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              />
              {errors.witnessMobile && <p className="text-red-500 text-sm">{errors.witnessMobile.message}</p>}
            </div>
          </div>
        </>
      )}

      {/* Evidence Type */}
      <div className="relative mb-4">
        <label className="block text-md font-bold leading-6 text-gray-900">
          Do you have evidence to submit?
        </label>
        <div className="mt-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register('evidenceTypes')}
              value="photo"
              className="form-checkbox"
            />
            <span className="ml-2">Photo</span>
          </label>
          <label className="inline-flex items-center ml-4">
            <input
              type="checkbox"
              {...register('evidenceTypes')}
              value="video"
              className="form-checkbox"
            />
            <span className="ml-2">Video</span>
          </label>
        </div>
      </div>

      {/* Other Evidence */}
      <div className="relative mb-4">
        <label className="block text-md font-bold leading-6 text-gray-900">
          Do you have any other evidence?
        </label>
        <div className="mt-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register('otherEvidence')}
              onChange={(e) => setHasOtherEvidence(e.target.checked)}
              className="form-checkbox"
            />
            <span className="ml-2">Yes</span>
          </label>
        </div>
      </div>

      {/* Conditional Field for Other Evidence Details */}
      {hasOtherEvidence && (
        <div className="relative mb-4">
          <label htmlFor="evidenceDetails" className="block text-md font-bold leading-6 text-gray-900">
            Please provide details about the other evidence
          </label>
          <div className="mt-2">
            <input
              {...register('evidenceDetails')}
              id="evidenceDetails"
              type="text"
              className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        
      )}
                 <div className="text-gray-900 dark:text-gray-100">
                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faPaperclip} className="text-gray-500 dark:text-gray-400 text-xl font-bold" />
                    <h3 className="text-xl font-bold">Attachments</h3>
                </div>
                <hr className="border-gray-500 dark:border-gray-400 mt-2" />
            </div>

            {renderFileSection(
                "Identity Proof (Aadhar Card, Driving Licence, etc.)",
                identityProofs,
                setIdentityProofs,
                "identity-proof-upload"
            )}

            {renderFileSection(
                "Medical Document (if case of injuries to the victim)",
                medicalDocuments,
                setMedicalDocuments,
                "medical-document-upload"
            )}
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

export default CommonCom;
