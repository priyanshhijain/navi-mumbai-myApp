"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter hook from Next.js
import { useForm, SubmitHandler } from 'react-hook-form';
import SignUp from './signup';
import Image from 'next/image';

interface FormData {
  username: string;
  password: string;
}

const LoginSignupPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isLogin, setIsLogin] = useState(true); // Default to Login view
  const [agreedTerms, setAgreedTerms] = useState(false);
  const router = useRouter(); // Initialize the useRouter hook

  const handleAgreeTermsChange = () => {
    setAgreedTerms(!agreedTerms);
  };

  const handleLogin: SubmitHandler<FormData> = (data) => {
    if (!agreedTerms) {
      alert('You must agree to the terms and conditions to log in.');
      return;
    }

    // Dummy authentication check (replace with real authentication logic)
    if (data.username === 'user' && data.password === 'password') {
      // Log the data to console
      console.log('Login Data:', data);

      // Store username in localStorage
      localStorage.setItem('username', data.username);

      // Redirect to dashboard
      alert('Login success');
      router.push(`/dashboard`);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8">
      {/* Background Image with Full Width */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover opacity-30"
        style={{ backgroundImage: `url('/police_img.png')`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: -1 }}
      ></div>

      <div className="relative bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg transition-all duration-300">
        <div className="mb-6">
        <div className="flex justify-center mb-6">
  <Image 
    src="/logo.jpeg" 
    alt="Logo" 
    width={64}  // Width in pixels (adjust as needed)
    height={64} // Height in pixels (adjust as needed)
    className="rounded-full"
  />
</div>

          <p className="text-base md:text-sm font-semibold">Please login or sign up to continue with the application</p>
        </div>
        <div className="mb-6 flex justify-center">
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 px-4 py-2 mr-2 rounded-full border-2 ${isLogin ? 'bg-blue-500 text-white border-transparent' : 'bg-white text-blue-500 border-blue-500'}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 px-4 py-2 rounded-full border-2 ${!isLogin ? 'bg-blue-500 text-white border-transparent' : 'bg-white text-blue-500 border-blue-500'}`}
          >
            Sign Up
          </button>
        </div>

        {isLogin ? (
          <form className="w-full transition-all duration-300" onSubmit={handleSubmit(handleLogin)}>
            <div className="relative mb-4 mt-6">
              <label htmlFor="username" className="block text-md font-bold leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  type="text"
                  className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.username ? 'border-red-500' : 'focus:border-blue-500'}`}
                  {...register('username', { required: 'Username is required' })}
                />
                {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
              </div>
            </div>

            <div className="relative mb-4 mt-6">
              <label htmlFor="password" className="block text-md font-bold leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : 'focus:border-blue-500'}`}
                  {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 characters long' } })}
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
              </div>
            </div>

            <div className="mb-4 flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="mr-2 leading-tight focus:outline-none"
                onChange={handleAgreeTermsChange}
                checked={agreedTerms}
              />
              <label className="block text-gray-700 text-sm font-bold" htmlFor="terms">
                I agree to all the terms and conditions
              </label>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full mt-6"
            >
              Login
            </button>
          </form>
        ) : (
          <SignUp />
        )}
      </div>
    </div>
  );
};

export default LoginSignupPage;
