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
        { id: 1, imgSrc: "/Group.png", text: "Phone Lost", onClick: handleMobilePhoneClick, bgColor: "bg-teal-100" },
        { id: 2, imgSrc: "/Vector.png", text: "Tenant Intimation", onClick: handleTenantRegistrationClick, bgColor: "bg-blue-100" },
        { id: 3, imgSrc: "/call 1.png", text: "Occasion Permission", onClick: handleTenantOccaionperClick, bgColor: "bg-pink-100" },
        { id: 4, imgSrc: "/Vector (1).png", text: "Reporting", bgColor: "bg-yellow-100" },
        { id: 5, imgSrc: "/lostfound.png", text: "Lost and Found", onClick: handlefoundlost, bgColor: "bg-teal-100" },
        { id: 6, imgSrc: "/cyber-security 1 (1).png", text: "Cyber Awareness", bgColor: "bg-red-100" },
        { id: 7, imgSrc: "/chain 1.png", text: "Quick Links", bgColor: "bg-purple-200" },
        { id: 8, imgSrc: "/pnc.png", text: "Phc Contact Info", onClick: handlephcContactClick, bgColor: "bg-rose-100" },
        { id: 9, imgSrc: "/self-employed 1 (1).png", text: "Pcc Overseas Employment", bgColor: "bg-emerald-100" },
        { id: 10, imgSrc: "/Vector (3).png", text: "Pcc Domestic (General)", bgColor: "bg-sky-100" },
    ];

    return (
        <div className="min-h-screen bg-slate-100">
            <Header />
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 p-2 sm:p-4 lg:p-8">
            {items.map((item) => (
    <div
        key={item.id}
        className="bg-white rounded-lg p-3 sm:p-4 lg:p-6 flex items-center h-28 sm:h-36 cursor-pointer hover:bg-gray-50"
        // If no onClick is provided, fallback to a default behavior (like logging)
        onClick={item.onClick || (() => console.log(`${item.text} clicked but no action assigned.`))}
    >
        {/* Left side: Small circle with image/icon */}
        <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${item.bgColor}`}>
            <img
                src={item.imgSrc}
                alt="Icon"
                className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
            />
        </div>

        {/* Right side: Text content */}
        <div className="ml-3 sm:ml-4 flex flex-col justify-center">
            <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800">
                {item.text}
            </span>
        </div>
    </div>
))}

            </div>

            {/* Mobile Menu Component */}
            <div className="sm:hidden">
                <MobileMenu isLogin={isLogin} />
            </div>
        </div>
    );
};

export default Dashboard;
