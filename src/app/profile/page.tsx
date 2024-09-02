"use client";
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import Header2 from '@/components/Header2';

type FormData = {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  contact: string;
  dropdown: string;
};

const ProfilePage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <>
    <Header2/>
    
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center">
      {/* Main Container */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-8xl flex flex-col lg:flex-row h-full">
        {/* Left Side: Large Profile Image */}
        <div className="w-full lg:w-1/3 flex flex-col items-center justify-center bg-gray-200 p-8">
          <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-300 mb-4 flex items-center justify-center">
            <img src="/profilepic.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
          {/* Change Photo Button for Mobile */}
          <div className="lg:hidden text-center">
            <button className="mt-2 text-blue-500 hover:text-blue-700">Change Photo</button>
          </div>
        </div>

        {/* Right Side: Form Section */}
        <div className="w-full lg:w-2/3 p-8 overflow-y-auto">
          {/* Small Profile Image and Change Photo Button */}
          <div className="hidden lg:flex items-center mb-8">
            <div className="relative rounded-full overflow-hidden w-20 h-20 mr-4 flex items-center justify-center bg-gray-200">
              <img src="/profilepic.jpg" alt="Profile" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 right-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faCamera} className="text-gray-700 w-4 h-4 cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Show Change Photo button only on larger screens */}
            <div>
              <h2 className="text-lg font-bold">Your Photo</h2>
              <button className="mt-2 text-blue-500 hover:text-blue-700">Change Photo</button>
            </div>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-sm font-bold text-gray-700 mb-1">Username</label>
              <input
                id="username"
                type="text"
                {...register('username', { required: 'Username is required' })}
                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              />
              {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-1">Password</label>
              <input
                id="password"
                type="password"
                {...register('password', { required: 'Password is required' })}
                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>

            {/* First Name Field */}
            <div>
              <label htmlFor="firstname" className="block text-sm font-bold text-gray-700 mb-1">First Name</label>
              <input
                id="firstname"
                type="text"
                {...register('firstname', { required: 'First Name is required' })}
             className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              />
              {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname.message}</p>}
            </div>

            {/* Last Name Field */}
            <div>
              <label htmlFor="lastname" className="block text-sm font-bold text-gray-700 mb-1">Last Name</label>
              <input
                id="lastname"
                type="text"
                {...register('lastname', { required: 'Last Name is required' })}
              className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              />
              {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname.message}</p>}
            </div>

            {/* Email Field */}
            <div className="col-span-1 lg:col-span-2">
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Email</label>
              <input
                id="email"
                type="email"
                {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' } })}
                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Contact Field */}
            <div className="col-span-1 lg:col-span-2">
              <label htmlFor="contact" className="block text-sm font-bold text-gray-700 mb-1">Contact</label>
              <input
                id="contact"
                type="text"
                {...register('contact', { required: 'Contact is required' })}
                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              />
              {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact.message}</p>}
            </div>

            {/* Dropdown Field */}
            <div className="col-span-1 lg:col-span-2">
              <label htmlFor="dropdown" className="block text-sm font-bold text-gray-700 mb-1">Nearest Police Station</label>
              <select
                id="dropdown"
                {...register('dropdown', { required: 'Selection is required' })}
               className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="APMC">APMC</option>
                <option value="Vashi">Vashi</option>
                <option value="Nerul">Nerul</option>
                <option value="Turbhe">Turbhe</option>
                <option value="Ghansoli">Ghansoli</option>
              </select>
              {errors.dropdown && <p className="text-red-500 text-sm mt-1">{errors.dropdown.message}</p>}
            </div>

            {/* Save Button */}
            <div className="col-span-1 lg:col-span-2 flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white px-8 py-3 rounded-full shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full lg:w-auto"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProfilePage;
