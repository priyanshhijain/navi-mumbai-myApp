"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faLocationDot, faAngleLeft, faShareAlt, faUser, faMapMarkerAlt, faMobileAlt, faEnvelope, faAngleLeft as faAngleLeftSolid } from '@fortawesome/free-solid-svg-icons';
import MobileMenu from '@/components/MobileMenu';
import { useRouter } from 'next/navigation';
import Header2 from '@/components/Header2';
import Image from 'next/image';

const InfoPanel = () => {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState('Police Station');

    const handleNavigation = () => {
        router.push('/dashboard'); // Adjust the path according to your routing setup
    };

    const handleOptionClick = (option:any) => {
        setSelectedOption(option);
    };

    return (
        <>
        <Header2/>
            <div className="mx-auto max-w-screen-lg px-4 md:px-0">
                <div className="info flex items-center justify-between h-12 w-full bg-gray-100 rounded-3xl mt-8">
                    <div className="flex items-center">
                    <Image
    src="/pnc-info.png"
    alt="logo"
    width={43} // Set the actual width of the image
    height={40} // Set the actual height of the image
    className="h-10 w-[43px] rounded-l-full"
/>
                        <p className="text-lg text-purple-800 font-bold pl-2">Phc Contact Info</p>
                    </div>
                    <FontAwesomeIcon
                        icon={faAngleLeftSolid}
                        className="text-gray-400 cursor-pointer ml-auto pr-4"
                        onClick={handleNavigation}
                    />
                </div>

                {/* Selectable Options */}
                <div className="flex items-center justify-between mt-8">
                    {['Police Station', 'ACP', 'DCP', 'CP'].map(option => (
                        <div
                            key={option}
                            className={`flex items-center ml-4 cursor-pointer ${selectedOption === option ? 'text-blue-600' : 'text-gray-600'}`}
                            onClick={() => handleOptionClick(option)}
                        >
                            <div className={`dot ${selectedOption === option ? 'bg-blue-500' : 'bg-gray-500'}`}></div>
                            <p className="ml-2 font-bold">{option}</p>
                        </div>
                    ))}
                </div>

                <hr className='mt-4' />

                {/* Police Station Select */}
                <div className="mb-8 flex items-center relative mt-8">
                    <label className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
                        Select Police Station
                    </label>
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FontAwesomeIcon icon={faLocationDot} />
                    </span>
                    <select
                        id="nearestPoliceStation"
                        className="appearance-none border w-full py-2 pl-10 pr-3 py-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    >
                        <option value="APMC">Kalambolo</option>
                        <option value="Vashi">Belanpur</option>
                        <option value="Nerul">APOMC</option>
                        <option value="Belapur">LKHANDESHWAR</option>
                    </select>
                </div>

                {/* Contact Info */}
                <div className="bg-gray-100 p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-right font-semibold text-lg text-gray-800">Contact Info</span>
                        <FontAwesomeIcon icon={faShareAlt} className="text-gray-600" />
                    </div>
                    <div className="flex items-center mb-4">
                        <FontAwesomeIcon icon={faUser} className="text-gray-600 mr-3 text-xl" />
                        <span className="text-gray-800 text-lg">Rajendra Kadam</span>
                    </div>
                    <div className="flex items-start mb-4">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-600 mr-3 text-xl" />
                        <span className="text-gray-800 text-lg">Sector 02 near fire brigade, Mumbra Road, Kolomboli</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <FontAwesomeIcon icon={faMobileAlt} className="text-gray-600 mr-3 text-xl" />
                        <span className="text-gray-800 text-lg">27838963</span>
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 mr-3 text-xl" />
                        <span className="text-gray-800 text-lg">email@mahapolice.gov.in</span>
                    </div>
                </div>

                {/* Cyber Police Info */}
                <div className="bg-gray-100 p-6 rounded-lg mb-28">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-right font-semibold text-lg text-gray-800">Cyber Police</span>
                        <FontAwesomeIcon icon={faShareAlt} className="text-gray-600 text-xl" />
                    </div>
                    <div className="flex items-center mb-4">
                        <FontAwesomeIcon icon={faUser} className="text-gray-600 mr-3 text-xl" />
                        <span className="text-gray-800 text-lg">Gajanand Kadam</span>
                    </div>
                    <div className="flex items-start mb-4">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-600 mr-3 text-xl" />
                        <span className="text-gray-800 text-lg">Sawali Bldg 1st floor, sector 5, near Dy Patil Hospital, Navi Mumbai</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <FontAwesomeIcon icon={faMobileAlt} className="text-gray-600 mr-3 text-xl" />
                        <span className="text-gray-800 text-lg">27578309</span>
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 mr-3 text-xl" />
                        <span className="text-gray-800 text-lg">email@mahapolice.gov.in</span>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 w-full mt-12 sm:pt-6 sm:hidden">
                <MobileMenu isLogin={false} />
            </div>
        </>
    );
};

export default InfoPanel;
