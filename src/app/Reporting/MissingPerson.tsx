import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import MissingPersonAttachment from './MissingPersonAttachment';

interface MissingPersonFormData {
  fullName: string;
  mobileNumber: string;
  presentAddress: string;
  relationship: string;
  missingPersonName: string;
  missingPersonAge: number;
  missingPersonGender: string;
  height: string;
  weight: string;
  hairColor: string;
  skinTone: string;
  distinctiveMark: string;
  clothing: string;
  footwear: string;
}

const MissingPerson: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<MissingPersonFormData>();

  const onSubmit: SubmitHandler<MissingPersonFormData> = (data) => {
    console.log(data);
    alert('Form submitted successfully');
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Full Name */}
        <div>
          <label className="block font-semibold mt-6">Full Name</label>
          <input
            {...register('fullName', { required: "Full Name is required" })}
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"

          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
        </div>

        {/* Mobile Number */}
        <div className='mt-4'>
          <label className="block font-semibold mt-6">Mobile Number</label>
          <input
            {...register('mobileNumber', { required: "Mobile number is required" })}
            type="tel"
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"

          />
          {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber.message}</p>}
        </div>

        {/* Present Address */}
        <div className='mt-6'>
          <label className="block font-semibold mt-6">Present Address</label>
          <input
            {...register('presentAddress', { required: "Present address is required" })}
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"

          />
          {errors.presentAddress && <p className="text-red-500 text-sm">{errors.presentAddress.message}</p>}
        </div>

        {/* Relationship with Missing Person */}
        <div>
          <label className="block font-semibold">Relationship to Missing Person</label>
          <input
            {...register('relationship', { required: "Relationship is required" })}
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"

          />
          {errors.relationship && <p className="text-red-500 text-sm">{errors.relationship.message}</p>}
        </div>

        {/* Missing Person's Full Name */}
        <div>
          <label className="block font-semibold">Missing Person&apos;s Full Name</label>
          <input
            {...register('missingPersonName', { required: "Missing person's name is required" })}
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"

          />
          {errors.missingPersonName && <p className="text-red-500 text-sm">{errors.missingPersonName.message}</p>}
        </div>

        {/* Missing Person's Age */}
        <div>
          <label className="block font-semibold">Missing Person&apos;s Age</label>
          <input
            {...register('missingPersonAge', { required: "Missing person's age is required", valueAsNumber: true })}
            type="number"
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"

          />
          {errors.missingPersonAge && <p className="text-red-500 text-sm">{errors.missingPersonAge.message}</p>}
        </div>

        {/* Missing Person's Gender */}
        <div>
          <label className="block font-semibold">Missing Person&apos;s Gender</label>
          <select
            {...register('missingPersonGender', { required: "Gender is required" })}
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.missingPersonGender && <p className="text-red-500 text-sm">{errors.missingPersonGender.message}</p>}
        </div>

        {/* Height */}
        <div>
          <label className="block font-semibold">Height</label>
          <input
            {...register('height', { required: "Height is required" })}
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            placeholder="Height (e.g., 5'7\"
          />
          {errors.height && <p className="text-red-500 text-sm">{errors.height.message}</p>}
        </div>

        {/* Weight */}
        <div>
          <label className="block font-semibold">Weight</label>
          <input
            {...register('weight', { required: "Weight is required" })}
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            placeholder="Weight (e.g., 150 lbs)"
          />
          {errors.weight && <p className="text-red-500 text-sm">{errors.weight.message}</p>}
        </div>

        {/* Hair Color */}
        <div>
          <label className="block font-semibold">Hair Color</label>
          <input
            {...register('hairColor', { required: "Hair color is required" })}
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            placeholder="Hair color (e.g., Black)"
          />
          {errors.hairColor && <p className="text-red-500 text-sm">{errors.hairColor.message}</p>}
        </div>

        {/* Skin Tone */}
        <div>
          <label className="block font-semibold">Skin Tone</label>
          <input
            {...register('skinTone', { required: "Skin tone is required" })}
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"

          />
          {errors.skinTone && <p className="text-red-500 text-sm">{errors.skinTone.message}</p>}
        </div>

        {/* Distinctive Mark */}
        <div>
          <label className="block font-semibold">Distinctive Mark</label>
          <input
            {...register('distinctiveMark', { required: "Distinctive mark is required" })}
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"

          />
          {errors.distinctiveMark && <p className="text-red-500 text-sm">{errors.distinctiveMark.message}</p>}
        </div>

        {/* Clothing */}
        <div>
          <label className="block font-semibold">Clothing</label>
          <input
            {...register('clothing', { required: "Clothing description is required" })}
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"

          />
          {errors.clothing && <p className="text-red-500 text-sm">{errors.clothing.message}</p>}
        </div>

        {/* Footwear */}
        <div>
          <label className="block font-semibold">Footwear</label>
          <input
            {...register('footwear', { required: "Footwear description is required" })}
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"

          />
          {errors.footwear && <p className="text-red-500 text-sm">{errors.footwear.message}</p>}
        </div>
        <MissingPersonAttachment/>

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
    </div>
  );
};

export default MissingPerson;
