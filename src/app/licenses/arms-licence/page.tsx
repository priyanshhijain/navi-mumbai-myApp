"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import MobileMenu from '@/components/MobileMenu';
import Header2 from '@/components/Header2';
import Image from 'next/image';


const Armslicences = () => {
    const router = useRouter();
    const [propertyType, setPropertyType] = useState('');
    const handleNavigation = () => {
        router.push('/dashboard'); // Adjust the path according to your routing setup
    };

    // Handle change in the property type dropdown
    // Handle change in the property type dropdown
    const handlePropertyTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setPropertyType(selectedValue);

        // Navigate to the appropriate page based on selection
        switch (selectedValue) {
            case "Application for arms licences":
                router.push('/licenses/arms-licence/arm-licence-application/innerDropdown');
                break;
            case "Application for Renewal":
                router.push('/licenses/arms&licences/renewal');
                break;
            // Add more cases for other dropdown options if needed
            default:
                break;
        }
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
                <div className='mt-6'>
                    <h2 className='font-bold'>Arms Licenses (Form A)</h2>
                    <hr className='mt-4' />
                </div>



                <div className="relative mt-8">
                    <select
                        id="propertyType"
                        className="appearance-none border w-full py-4 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md select-arrow"
                        value={propertyType}
                        onChange={handlePropertyTypeChange} // Handle change here
                    >
                        <option value="" disabled className="py-2 pl-3 pr-10 text-lg">Select a Category</option>
                        <option value="Application for arms licences" className="py-2 pl-3 pr-10 text-lg">Application for an Arms licence</option>
                        <option value="Application for Renewal" className="py-2 pl-3 pr-10 text-lg">Application for Renewal of Arms licence(s)</option>
                        <option value="Education" className="py-2 pl-3 pr-10 text-lg">Arms Lincense Application [Form VI] for temporary import and export of arms and ammunition</option>
                        <option value="" className="py-2 pl-3 pr-10 text-lg">Arms Lincense Application [Form VII] for manufacture and proof test</option>
                        <option value="" className="py-2 pl-3 pr-10 text-lg">Arms Lincense Application [Form VII-A,B,C] for manufacture OF category V arms,replica of firearms,air weapons</option>
                        <option value="" className="py-2 pl-3 pr-10 text-lg">Arms Lincense Application [Form VIII] for arms and ammunition dealer and Air Weapon Dealers</option>
                        <option value="" className="py-2 pl-3 pr-10 text-lg">Arms Lincense Application [Form IX,IX-A] for or accredited gunsmiths</option>
                        <option value="" className="py-2 pl-3 pr-10 text-lg">Arms Lincense Application [Form X] for import, export,export for re-import or import , transport and re-export</option>
                        <option value="" className="py-2 pl-3 pr-10 text-lg">Arms Lincense Application [Form XI] for Journey licence for carrying arms and ammunition</option>
                        <option value="" className="py-2 pl-3 pr-10 text-lg">Arms Lincense Application [Form XII] for Journey licence for carrying Transport licence</option>
                        <option value="" className="py-2 pl-3 pr-10 text-lg">Arms Lincense Application for firearm free zone</option>

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

export default Armslicences;
