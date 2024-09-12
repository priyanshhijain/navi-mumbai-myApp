"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const FrontPage: React.FC = () => {
  const router = useRouter();

  const navigateToDashboard = () => {
    router.push('/login-signup');
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center filter blur-sm">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <Image src="/police_img.png" alt="Police Image" className="object-cover w-full h-full" />
      </div>
      {/* Centered Logo with Border and Border Radius */}
      <div className="relative flex flex-col items-center justify-center h-full cursor-pointer" onClick={navigateToDashboard}>
        <Image src="/logo.jpeg" alt="" />


        <p className="md:hidden mt-4 text-center font-md text-lg sm:text-xl lg:text-xs text-white">Mobile app for Navi Mumbai Police</p>
        <p className="hidden md:block mt-4 text-center font-md text-sm sm:text-sm lg:text-xs text-white">Mobile app for Navi Mumbai Police (Desktop Version)</p>

      </div>
    </div>
  );
};

export default FrontPage;
