"use client";
import DynamicDropdown from "../occasion-permission/DoubleDropdown";
import MobileMenu from "@/components/MobileMenu";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header2 from "@/components/Header2";
import { faAngleDown, faAngleLeft, faLocationDot, faUser, faShuffle, faBars, faHouse } from '@fortawesome/free-solid-svg-icons';
import PCCForm from "./pccOverseasForm";
export default function PCCOverseas() {
  const router = useRouter();
  const handleNavigation = () => {
    router.push('/dashboard'); // Adjust the path according to your routing setup
  };

  return (
    <>
      <Header2/>
      <div className="mx-auto max-w-screen-lg px-4 md:px-0">
        <div className="info flex items-center justify-between h-12 w-full bg-gray-100 rounded-3xl mt-8">
          <div className="flex items-center">
            <img
              src="/pcc-overseas.png"  
              alt="PCC Overseas"
              className="h-8 w-[35px] rounded-l-full"
            />
            <p className="text-lg text-purple-800 font-bold pl-2">PCC Overseas</p> {/* Update the text */}
          </div>
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="text-gray-400 cursor-pointer ml-auto pr-4"
            onClick={() => handleNavigation()} // Replace '/dashboard' if needed
          />
        </div>
        <PCCForm/>

      

      </div>
      <div className="sm:hidden fixed bottom-0 w-full">
        <MobileMenu isLogin={false} />
      </div>
    </>
  );
}
