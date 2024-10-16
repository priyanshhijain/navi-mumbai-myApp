"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import MobileMenu from "@/components/MobileMenu";
import CommonCom from "./common";
import Header2 from "@/components/Header2";
import MissingPerson from "./MissingPerson";
import AccidentForm from "./AccidentForm"; // Import AccidentForm

const ReportingInfo = () => {
    const router = useRouter();
    const [category, setCategory] = useState(""); 
    const [subCategory, setSubCategory] = useState(""); 
    const [isCrimeSelected, setIsCrimeSelected] = useState(false);
    const [isMissingPersonSelected, setIsMissingPersonSelected] = useState(false);
    const [isAccidentSelected, setIsAccidentSelected] = useState(false); // New state for Accident Reporting

    const mainCategories = ["Crime Reporting", "Missing Person Reporting", "Accident Reporting"];
    const crimeSubCategories = ["Theft", "Assault/Harassment", "Drug Related", "Domestic"];

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        if (value === "Crime Reporting") {
            setIsCrimeSelected(true);
            setIsMissingPersonSelected(false);
            setIsAccidentSelected(false);
            setSubCategory("Theft");
        } else if (value === "Missing Person Reporting") {
            setIsMissingPersonSelected(true);
            setIsCrimeSelected(false);
            setIsAccidentSelected(false);
            setSubCategory("");
        } else if (value === "Accident Reporting") {
            setIsAccidentSelected(true);
            setIsCrimeSelected(false);
            setIsMissingPersonSelected(false);
            setSubCategory("");
        } else {
            setIsCrimeSelected(false);
            setIsMissingPersonSelected(false);
            setIsAccidentSelected(false);
            setSubCategory("");
        }
        setCategory(value);
    };

    return (
        <>
            <Header2 />
            <div className="mx-auto max-w-screen-lg px-4 md:px-0">
                <div className="info flex items-center justify-between h-12 bg-gray-100 rounded-3xl mt-8">
                    <div className="flex items-center">
                        <img
                            src="/reporting-img.png"
                            alt="logo"
                            className="h-10 w-[43px] rounded-l-full"
                        />
                        <p className="text-lg text-purple-800 font-bold pl-2">Reporting</p>
                    </div>
                    <FontAwesomeIcon
                        icon={faAngleLeft}
                        className="text-gray-400 cursor-pointer ml-auto pr-4"
                        onClick={() => router.push("/dashboard")}
                    />
                </div>

                <div className="relative mt-8">
                    <select
                        id="reportingDropdown"
                        className="appearance-none border w-full py-4 pl-3 pr-10 text-gray-700 focus:outline-none focus:border-blue-500 rounded-md"
                        value={category}
                        onChange={handleCategoryChange}
                    >
                        <option value="" disabled>Select Category</option>
                        {mainCategories.map((mainCategory) => (
                            <option key={mainCategory} value={mainCategory}>
                                {mainCategory}
                            </option>
                        ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <FontAwesomeIcon icon={faAngleDown} className="text-gray-600 h-4 w-8" />
                    </div>
                </div>

                {isCrimeSelected && (
                    <div className="relative mt-4">
                        <select
                            id="crimeSubCategoryDropdown"
                            className="appearance-none border w-full py-4 pl-3 pr-10 text-gray-700 focus:outline-none focus:border-blue-500 rounded-md"
                            value={subCategory}
                            onChange={(e) => setSubCategory(e.target.value)}
                        >
                            <option value="" disabled>Select Crime Type</option>
                            {crimeSubCategories.map((subCategory) => (
                                <option key={subCategory} value={subCategory}>
                                    {subCategory}
                                </option>
                            ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <FontAwesomeIcon icon={faAngleDown} className="text-gray-600 h-4 w-8" />
                        </div>
                    </div>
                )}

                {/* Conditionally render based on the selected category */}
                {isCrimeSelected && subCategory && <CommonCom title={subCategory} />}
                {isMissingPersonSelected && <MissingPerson />}
                {isAccidentSelected && <AccidentForm />} {/* Render AccidentForm */}
            </div>

            <div className="sm:hidden fixed bottom-0 w-full">
                <MobileMenu isLogin={false} />
            </div>
        </>
    );
};

export default ReportingInfo;
