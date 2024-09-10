"use client";
import DynamicDropdown from "./DoubleDropdown";
import MobileMenu from "@/components/MobileMenu";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header2 from "@/components/Header2";
import { faAngleDown, faAngleLeft, faLocationDot, faUser, faShuffle, faBars, faHouse } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const router = useRouter();
  const handleNavigation = () => {
    router.push('/dashboard'); // Adjust the path according to your routing setup
  };


  return (
    <>
    <Header2/>s
      <div className="mx-auto max-w-screen-lg px-4 md:px-0">
        <div className="info flex items-center justify-between h-12 w-full bg-gray-100 rounded-3xl mt-8">
          <div className="flex items-center">
            <img
              src="https://cdn-icons-png.freepik.com/256/14380/14380643.png?semt=ais_hybrid"
              alt="logo"
              className="h-10 w-[43px] rounded-l-full"
            />
            <p className="text-lg text-purple-800 font-bold pl-2">Occasion Permission</p>
          </div>
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="text-gray-400 cursor-pointer ml-auto pr-4"
            onClick={() => handleNavigation()} // Replace '/previous-page' with your desired route
          />
        </div>

        <DynamicDropdown />

      </div>
      <div className="sm:hidden fixed bottom-0 w-full">
        <MobileMenu isLogin={false} />
      </div>
    </>

  );
}