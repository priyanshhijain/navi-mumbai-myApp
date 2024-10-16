"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import EmploymentForm from './EmployementForm';
import MobileMenu from '@/components/MobileMenu';
import Header2 from '@/components/Header2';
import EducationForm from './EducationalForm';
import AdoptionForm from './AdoptionForm';
import RentalForm from './RentalsForm';

const PccDomesticinfo = () => {
    const router = useRouter();
    const [propertyType, setPropertyType] = useState('');

    // Handle navigation back to the dashboard or other page
    const handleNavigation = () => {
        router.push('/dashboard'); // Adjust the path according to your routing setup
    };

    // Handle change in the property type dropdown
    const handlePropertyTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        console.log(selectedValue)
        setPropertyType(selectedValue);

        // Navigate to the appropriate page based on selection


        // You can add more conditions for other options if needed
    };

    return (
        <>
            <Header2 />
            <div className="mx-auto max-w-screen-lg px-4 md:px-0">
                <div className="info flex items-center justify-between h-12 w-semifull bg-gray-100 rounded-3xl mt-8">
                    <div className="flex items-center">
                        <img
                            src="/pcc-domestic.png"
                            alt="logo"
                            className="h-10 w-[43px] rounded-l-full"
                        />
                        <p className="text-lg text-purple-800 font-bold pl-2">Pcc Domestic</p>
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
                        <option value="Employment" className="py-2 pl-3 pr-10 text-lg">Employment</option>
                        <option value="Education" className="py-2 pl-3 pr-10 text-lg">Education</option>

                        <option value="Adoption" className="py-2 pl-3 pr-10 text-lg">Adoption</option>
                        <option value="Housing and Rentals" className="py-2 pl-3 pr-10 text-lg">Housing and Rentals</option>
                        {/* Add more options here if needed */}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <FontAwesomeIcon icon={faAngleDown} className="text-gray-600 h-4 w-8" />
                    </div>
                </div>

                {/* Conditionally render the forms based on the selected property type */}
                {propertyType === 'Employment' && <EmploymentForm />}
                {propertyType === 'Education' && <EducationForm />}
                {propertyType === 'Adoption' && <AdoptionForm />}
                {propertyType === 'Housing and Rentals' && <RentalForm />}

            </div>

            <div className="sm:hidden fixed bottom-0 w-full">
                <MobileMenu isLogin={false} />
            </div>
        </>
    );
};

export default PccDomesticinfo;
