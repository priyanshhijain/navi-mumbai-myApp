"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import ResidentialForm from './ResidentialForm';
import CommercialForm from './CommercialForm';
import MobileMenu from '@/components/MobileMenu';
import Header2 from '@/components/Header2';
import Image from 'next/image';



const InfoPanel = () => {
    const router = useRouter();
    const [propertyType, setPropertyType] = useState('');

    const handleNavigation = () => {
        router.push('/dashboard'); // Adjust the path according to your routing setup
    };
    const handlePropertyTypeChange = (event: any) => {
        setPropertyType(event.target.value);
    };

    return (
        <>
        <Header2/>
            <div className="mx-auto max-w-screen-lg px-4 md:px-0">
                <div className="info flex items-center justify-between h-12 w-semifull bg-gray-100 rounded-3xl mt-8">
                    <div className="flex items-center">
                    <Image
    src="/tenant.png"
    alt="logo"
    width={43}  // Specify the width of the image
    height={40} // Specify the height of the image (adjusted for aspect ratio)
    className="rounded-l-full" // Optional: Add rounded styling if desired
/>
                        <p className="text-lg text-purple-800 font-bold pl-2">Tenant Registration</p>
                    </div>
                    <FontAwesomeIcon
                        icon={faAngleLeft}
                        className="text-gray-400 cursor-pointer ml-auto pr-4"
                        onClick={handleNavigation}
                    />
                </div>
                <div className="relative mt-8">
                    <div className="relative mt-8">
                        <div className="relative">
                            <select
                                id="propertyType"
                                className="appearance-none border w-full py-4 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md select-arrow"
                                value={propertyType}
                                onChange={handlePropertyTypeChange}
                            >
                                <option value="" disabled className="py-2 pl-3 pr-10 text-lg">Select property</option>
                                <option value="Residential" className="py-2 pl-3 pr-10 text-lg">Residential</option>
                                <option value="Commercial" className="py-2 pl-3 pr-10 text-lg">Commercial</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <FontAwesomeIcon icon={faAngleDown} className="text-gray-600 h-4 w-8" />
                            </div>
                        </div>
                    </div>
                </div>
                {propertyType === 'Residential' && <ResidentialForm />}
                {propertyType === 'Commercial' && <CommercialForm />}
            </div>
            <div className="sm:hidden fixed bottom-0 w-full">
                <MobileMenu isLogin={false} />
            </div>
        </>
    );
};

export default InfoPanel;