"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import MobileMenu from '@/components/MobileMenu';
import Header2 from '@/components/Header2';
import Image from 'next/image';

const Licences = () => {
    const router = useRouter();
    const [propertyType, setPropertyType] = useState('');

    // Handle navigation back to the dashboard or other page
    const handleNavigation = () => {
        router.push('/dashboard'); // Adjust the path according to your routing setup
    };

    // Handle change in the property type dropdown
    const handlePropertyTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setPropertyType(selectedValue);

        // Navigate to the appropriate page based on the selection
        if (selectedValue === 'Arms Licences (Form A)') {
            router.push('/licenses/arms-licence'); // Navigate to Arms Licences page
        } else if (selectedValue === 'Supplementary Forms (Form B)') {
            router.push('/licenses/supplementary-forms'); // Navigate to Supplementary Forms page
        } else if (selectedValue === 'Training Form (Form S)') {
            router.push('/licenses/training'); // Navigate to Training Forms page
        }

        // You can add more conditions for other options if needed
    };

    return (
        <>
            <Header2 />
            <div className="mx-auto max-w-screen-lg px-4 md:px-0">
                <div className="info flex items-center justify-between h-12 w-semifull bg-gray-100 rounded-3xl mt-8">
                    <div className="flex items-center">
                    <Image
    src="/licences.jpg"
    alt="logo"
    width={43} // Replace with the actual width of the image
    height={40} // Replace with the actual height of the image
    className="h-10 w-[43px] rounded-l-full"
/>
                        <p className="text-lg text-purple-800 font-bold pl-2">Licenses</p>
                    </div>
                    <FontAwesomeIcon
                        icon={faAngleLeft}
                        className="text-gray-400 cursor-pointer ml-auto pr-4"
                        onClick={handleNavigation}
                    />
                </div>

                <div className="relative mt-8">
                    <select
                        id="propertyType"
                        className="appearance-none border w-full py-4 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md select-arrow"
                        value={propertyType}
                        onChange={handlePropertyTypeChange} // Handle change here
                    >
                        <option value="" disabled className="py-2 pl-3 pr-10 text-lg">Select a Category</option>
                        <option value="Arms Licences (Form A)" className="py-2 pl-3 pr-10 text-lg">Arms Licences (Form A)</option>
                        <option value="Supplementary Forms (Form B)" className="py-2 pl-3 pr-10 text-lg">Supplementary Forms (Form B)</option>
                        <option value="Training Form (Form S)" className="py-2 pl-3 pr-10 text-lg">Training Form (Form S)</option>
                        {/* Add more options here if needed */}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <FontAwesomeIcon icon={faAngleDown} className="text-gray-600 h-4 w-8" />
                    </div>
                </div>
            </div>

            <div className="sm:hidden fixed bottom-0 w-full">
                <MobileMenu isLogin={false} />
            </div>
        </>
    );
};

export default Licences;
