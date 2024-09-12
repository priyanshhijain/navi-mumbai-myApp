"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import MobileMenu from '@/components/MobileMenu';
import Header from '@/components/Header';

const Dashboard: React.FC = () => {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Retrieve data from localStorage
        const authData = localStorage.getItem('username');
        if (authData) {
            setIsLogin(true);
            setUsername(authData);
        }
    }, []);

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    const handleTenantOccaionperClick = () => handleNavigation('/occasion-permission');
    const handlephcContactClick = () => handleNavigation('/phc-contact-info');
    const handlefoundlost = () => handleNavigation('/foundlost');
    const handleTenantRegistrationClick = () => handleNavigation('/tenant-registration');
    const handleMobilePhoneClick = () => handleNavigation('/mobilelost');

    const items = [
        { id: 1, imgSrc: "/phone-lost.png", text: "Phone Lost", onClick: handleMobilePhoneClick, bgColor: "bg-teal-100" },
        { id: 2, imgSrc: "/tenant.png", text: "Tenant Intimation", onClick: handleTenantRegistrationClick, bgColor: "bg-blue-100" },
        { id: 3, imgSrc: "/occassion-permission.png", text: "Occasion Permission", onClick: handleTenantOccaionperClick, bgColor: "bg-pink-100" },
        { id: 4, imgSrc: "/reporting.png", text: "Reporting", bgColor: "bg-yellow-100" },
        { id: 5, imgSrc: "/lost-found.png", text: "Lost and Found", onClick: handlefoundlost, bgColor: "bg-teal-100" },
        { id: 6, imgSrc: "/cyber-security.png", text: "Cyber Awareness", bgColor: "bg-red-100" },
        { id: 7, imgSrc: "/link.png", text: "Quick Links", bgColor: "bg-purple-200" },
        { id: 8, imgSrc: "/pnc-info.png", text: "Phc Contact Info", onClick: handlephcContactClick, bgColor: "bg-rose-100" },
        { id: 9, imgSrc: "/pcc-overseas.png", text: "Pcc Overseas Employment", bgColor: "bg-emerald-100" },
        { id: 10, imgSrc: "/pcc-domestic.png", text: "Pcc Domestic (General)", bgColor: "bg-sky-100" },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-100">
            <Header />

            {/* Main content, taking up all available space with bottom padding */}
            <div className="flex-1 mt-4 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 p-2 sm:p-4 lg:p-8 pb-20">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg p-3 sm:p-4 lg:p-6 flex items-center h-28 sm:h-36 cursor-pointer hover:bg-gray-50"
                        onClick={item.onClick || (() => console.log(`${item.text} clicked but no action assigned.`))}
                    >
                        <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${item.bgColor}`}>
                            <img
                                src={item.imgSrc}
                                alt="Icon"
                                className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                            />
                        </div>
                        <div className="ml-3 sm:ml-4 flex flex-col justify-center">
                            <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800">
                                {item.text}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

           
            {/* Mobile Menu Component */}
            <div className="sm:hidden fixed bottom-0 left-0 right-0">
                <MobileMenu isLogin={isLogin} />
            </div>
        </div>
    );
};

export default Dashboard;
