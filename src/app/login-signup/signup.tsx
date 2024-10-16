"use client";
import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; // Eye Icon Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // FontAwesome Import
import { useState } from 'react';

type Inputs = {
    username: string;
    password: string;
    mobile: string;
    email?: string;
    resident?: boolean;
    nearestPoliceStation: string;
    terms: boolean;
    location: string;
};

const SignUp = () => {
    const { register, handleSubmit, control, formState: { errors }, watch } = useForm<Inputs>();
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log('Signup Data:', data);
        alert('Signup functionality will be implemented');
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    console.log(watch("username")); // watch input value by passing the name of it
    const locations = [
        "APMC", "CBD", "Kharghar", "Kopar Khairane", "Kalamboli", "Khandeshwar",
        // "Kamothe", "Mora Sagari", "Nhava Seva", "Nerul", "NRI", "Panvel City",
        // "Panvel Taluka", "Rabale", "Rabale MIDC", "Sanpada", "Turbhe MIDC",
        // "Taloja", "Uran", "Vashi"
    ];

    return (
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 w-full max-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-4xl mx-auto">
            <form className="space-y-4 sm:space-y-6 w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="relative mb-4">
                    <label
                        htmlFor="username"
                        className="block text-md font-bold leading-6 text-gray-900"
                    >
                        Username
                    </label>
                    <div className="mt-2">
                        <input
                            id="username"
                            type="text"
                            className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.username ? 'border-blue-500' : 'focus:border-blue-500'}`}
                            {...register('username', {
                                required: 'Username is required',
                                minLength: {
                                    value: 5,
                                    message: 'Username must be more than 4 characters long',
                                },
                            })}
                        />
                        {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
                    </div>
                </div>

                <div className="relative mb-4">
                    <div className="relative mb-4 mt-6">
                        <label htmlFor="password" className="block text-md font-bold leading-6 text-gray-900">
                            Password
                        </label>
                        <div className="mt-2 relative">
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"} // Toggle input type based on showPassword state
                                className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? "border-red-500" : "focus:border-blue-500"}`}
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 8, message: "Password must be at least 8 characters long" }
                                })}
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}

                            {/* Eye Icon for toggling password visibility */}
                            <div
                                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative mb-4">
                    <label
                        htmlFor="mobile"
                        className="block text-md font-bold leading-6 text-gray-900"
                    >
                        Mobile No
                    </label>
                    <div className="mt-2">
                        <input
                            id="mobile"
                            type="text"
                            className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.mobile ? 'border-blue-500' : 'focus:border-blue-500'}`}
                            {...register('mobile', {
                                required: 'Mobile No is required',
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: 'Mobile No must be 10 digits',
                                },
                            })}
                        />
                        {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>}
                    </div>
                </div>

                <div className="relative mb-4">
                    <label
                        htmlFor="email"
                        className="block text-md font-bold leading-6 text-gray-900"
                    >
                        Email Id
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            type="email"
                            className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-blue-500' : 'focus:border-blue-500'}`}
                            {...register('email')}
                        />
                    </div>
                </div>


                <div className="relative mb-4 custom-dropdown-container">
    <label
      htmlFor="location"
      className="block text-md font-bold leading-6 text-gray-900"
    >
      Location
    </label>
    <div className="mt-2">
      <Controller
        name="location"
        control={control}
        defaultValue={locations[0]}  // Set default value to the first location
        render={({ field }) => (
          <div className="custom-dropdown">
            <select
              id="location"
              className="shadow appearance-none border w-full py-4 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...field}
            >
              {locations.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
        )}
      />
      {errors.location && (
        <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
      )}
    </div>
  </div>

                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        id="resident-navimumbai"
                        className="form-checkbox h-4 w-4 text-indigo-600"
                        {...register('resident')}
                    />
                    <label
                        htmlFor="resident-navimumbai"
                        className="ml-2 text-sm text-gray-900"
                    >
                        <span className="font-bold ml-2">Location Selection</span> <br />
                        <span className='ml-2'>Resident of Navimumbai</span>
                    </label>
                </div>

                <div className="relative mb-4">
                    <label
                        htmlFor="nearestPoliceStation"
                        className="block text-md font-bold leading-6 text-gray-900"
                    >
                        Nearest Police Station
                    </label>
                    <div className="mt-2">
                        <Controller
                            name="nearestPoliceStation"
                            control={control}
                            defaultValue="APMC"
                            render={({ field }) => (
                                <select
                                    id="nearestPoliceStation"
                                    className="shadow appearance-none border w-full py-4 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    {...field}
                                >
                                    <option value="APMC">APMC</option>
                                    <option value="Vashi">Vashi</option>
                                    <option value="Nerul">Nerul</option>
                                    <option value="CBD Belapur">CBD Belapur</option>
                                </select>
                            )}
                        />
                    </div>
                </div>

                <div className="flex items-center mb-6">
                    <input
                        id="terms"
                        type="checkbox"
                        className="mr-2 h-4 w-4 text-indigo-600"
                        {...register('terms', { required: 'You must agree to the terms and conditions' })}
                    />
                    <label className="text-gray-700 text-sm font-medium" htmlFor="terms">
                        I agree to all the terms and conditions
                    </label>
                    {/* {errors.terms && <p className="text-red-500 text-sm ml-2">{errors.terms.message}</p>} */}
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default SignUp;
