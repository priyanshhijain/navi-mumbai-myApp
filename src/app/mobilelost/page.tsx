"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import MobileMenu from '@/components/MobileMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import LostForm from './LostMobileForm';
import Header2 from '@/components/Header2';
import Image from 'next/image';

const PhoneLost: React.FC = () => {
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
    src="/phone-lost.png"
    alt="logo"
    width={43} // Replace with the actual width of the image
    height={40} // Replace with the actual height of the image
    className="h-10 w-[43px] rounded-l-full"
/>
                        <p className="text-lg text-purple-800 font-bold pl-2">Phone Lost</p>
                    </div>
                    <FontAwesomeIcon
                        icon={faAngleLeft}
                        className="text-gray-400 cursor-pointer ml-auto pr-4"
                        onClick={handleNavigation}
                    />
                </div>

                <div className="flex items-center mt-8">

                </div>
                <LostForm />

            </div>
            <div className="sm:hidden fixed bottom-0 w-full">
                <MobileMenu isLogin={false} />
            </div>
        </>
    );
};

export default PhoneLost;
