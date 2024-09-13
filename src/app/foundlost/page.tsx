"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import FoundComponent from './FoundComponent';
import LostComponent from './LostComponent';
import MobileMenu from '@/components/MobileMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Header2 from '@/components/Header2';
import Image from 'next/image';


const InfoPanel: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('Found');
  const router = useRouter();

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };
  const handleNavigation = () => {
    router.push('/dashboard'); // Adjust the path according to your routing setup
  };

  return (
    <>
    <Header2/>
      <div className="mx-auto max-w-screen-lg px-4 md:px-0">
        <div className="info flex items-center justify-between h-12 w-full bg-gray-100 rounded-3xl mt-8">
          <div className="flex items-center">
            <Image
              src="https://cdn-icons-png.freepik.com/256/1329/1329041.png?semt=ais_hybrid"
              alt="logo"
              className="h-10 w-[43px] rounded-l-full"
            />
            <p className="text-lg text-purple-800 font-bold pl-2">Lost & Found</p>
          </div>
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="text-gray-400 cursor-pointer ml-auto pr-4"
            onClick={handleNavigation}
          />
        </div>

        <div className="flex items-center mt-8">
          <div
            className={`flex items-center cursor-pointer ${selectedOption === 'Found' ? 'text-blue-600' : 'text-gray-600'
              }`}
            onClick={() => handleOptionClick('Found')}
          >
            <div className={`dot ${selectedOption === 'Found' ? 'bg-blue-500' : 'bg-gray-500'}`}></div>
            <p className="ml-2 font-bold">Found</p>
          </div>
          <div
            className={`flex items-center ml-4 cursor-pointer ${selectedOption === 'Lost' ? 'text-blue-600' : 'text-gray-600'
              }`}
            onClick={() => handleOptionClick('Lost')}
          >
            <div className={`dot ${selectedOption === 'Lost' ? 'bg-blue-500' : 'bg-gray-500'}`}></div>
            <p className="ml-2 font-bold">Lost</p>
          </div>
        </div>

        <div className="relative">
          <hr
            className={`mt-1 ${selectedOption === 'Found' ? 'border-blue-500' : 'border-transparent'
              } w-16 absolute left-0`}
          />
          <hr
            className={`mt-1 ${selectedOption === 'Lost' ? 'border-blue-500' : 'border-transparent'
              } w-16 absolute left-16`}
          />
        </div>

        {selectedOption === 'Found' && <FoundComponent />}
        {selectedOption === 'Lost' && <LostComponent />}

      </div>
      <div className="sm:hidden fixed bottom-0 w-full ">
        <MobileMenu isLogin={false} />
      </div>
    </>
  );
};

export default InfoPanel;
