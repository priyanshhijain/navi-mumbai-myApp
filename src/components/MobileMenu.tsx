import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHouse, faShuffle, faBars } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

interface MobileMenuProps {
    isLogin: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isLogin }) => {
    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center sm:hidden mt-5">
        <div className="flex justify-around w-full p-4 rounded-md bg-blue-50">
            <div className="flex flex-col items-center cursor-pointer" onClick={() => handleNavigation('/dashboard')}>
                <div className="mb-2">
                    <FontAwesomeIcon icon={faHouse} />
                </div>
                <span className="text-gray-700 text-sm font-bold">Home</span>
            </div>
            
            <div className="flex flex-col items-center cursor-pointer" onClick={() => handleNavigation('/profile')}>
                <div className="mb-2">
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <span className="text-gray-700 text-sm font-bold">Profile</span>
            </div>
    
            <div className={`flex flex-col items-center ${!isLogin ? 'mr-4' : ''}`} onClick={() => handleNavigation('/trackrequest')}>
                <div className="mb-2 cursor-pointer">
                    <FontAwesomeIcon icon={faShuffle} />
                </div>
                <span className="text-gray-700 text-sm font-bold">Track Request</span>
            </div>
            
            <div className="flex flex-col items-center cursor-pointer">
                <div className="mb-2">
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <span className="text-gray-700 text-sm font-bold">Menu</span>
            </div>
        </div>
    </div>
    
    );
};

export default MobileMenu;
