"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import MobileMenu from '@/components/MobileMenu';
import Header2 from '@/components/Header2';

const InnerDropdown = () => {
    const router = useRouter();
    const [applicantType, setApplicantType] = useState('');

    // Handle navigation back to the previous page
    const handleNavigation = () => {
        router.push('/licenses/arms-licenses'); // Adjust the path according to your routing setup
    };

    // Handle change in the applicant type dropdown
    const handleApplicantTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setApplicantType(selectedValue);

        // Navigate to the appropriate page based on the selection
        if (selectedValue === 'Individual') {
            router.push('/licenses/arms-licence/arm-licence-application/innerDropdown/individual'); // Navigate to Individual page
        } else if (selectedValue === 'For Company') {
            router.push('/licenses/arms-licence/arm-licence-application/innerDropdown/for-company'); // Navigate to For Company page
        }

        // Add more conditions if there are other options
    };

    return (
        <>
            <Header2 />
            <div className="mx-auto max-w-screen-lg px-4 md:px-0">
                <div className="info flex items-center justify-between h-12 w-semifull bg-gray-100 rounded-3xl mt-8">
                    <div className="flex items-center">
                        <img
                            src="/licences.jpg"
                            alt="logo"
                            className="h-10 w-[43px] rounded-l-full"
                        />
                        <p className="text-lg text-purple-800 font-bold pl-2">Applicant Type</p>
                    </div>
                    <FontAwesomeIcon
                        icon={faAngleLeft}
                        className="text-gray-400 cursor-pointer ml-auto pr-4"
                        onClick={handleNavigation}
                    />
                </div>

                <div className="relative mt-8">
                    <select
                        id="applicantType"
                        className="appearance-none border w-full py-4 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md select-arrow"
                        value={applicantType}
                        onChange={handleApplicantTypeChange} // Handle change here
                    >
                        <option value="" disabled className="py-2 pl-3 pr-10 text-lg">Select Applicant Type</option>
                        <option value="Individual" className="py-2 pl-3 pr-10 text-lg">Individual</option>
                        <option value="For Company" className="py-2 pl-3 pr-10 text-lg">For Company</option>
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

export default InnerDropdown;
