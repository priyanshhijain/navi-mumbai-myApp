"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import MobileMenu from "@/components/MobileMenu";
import Header2 from "@/components/Header2";
import Attachments from "./Attachments";
import Image from 'next/image';

const IndividialForm = () => {
    const router = useRouter();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [dob, setDob] = useState("");

    const handleNavigation = () => {
        router.push("/dashboard");
    };

    const onSubmit = (data: any) => {
        console.log(data);
        // Handle form submission
    };

    const is21YearsOld = (dateOfBirth: string) => {
        const today = new Date();
        const birthDate = new Date(dateOfBirth);
        const age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        return age > 21 || (age === 21 && m >= 0);
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
                <div className="mt-6">
                    <h2 className="font-bold text-center">
                        Application for an arms licence in Form II, III, and IV Form A-1
                    </h2>
                    <hr className="mt-4" />
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
                    <div>
                        <label htmlFor="fullName" className="block font-bold">Full Name</label>
                        <input
                            {...register("fullName", { required: "Full name is required" })}
                            type="text"
                            id="fullName"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message?.toString()}</p>}
                    </div>

                    <div>
                        <label htmlFor="parentSpouseName" className="block font-bold">Parent/Spouse Name</label>
                        <input
                            {...register("parentSpouseName", { required: "Parent/Spouse name is required" })}
                            type="text"
                            id="parentSpouseName"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.parentSpouseName && <p className="text-red-500 text-sm">{errors.parentSpouseName.message?.toString()}</p>}
                    </div>

                    <div>
                        <label className="block font-bold">Gender</label>
                        <div className="space-x-4">
                            <label>
                                <input {...register("gender", { required: "Gender is required" })} type="radio" value="Male" />
                                Male
                            </label>
                            <label>
                                <input {...register("gender", { required: "Gender is required" })} type="radio" value="Female" />
                                Female
                            </label>
                        </div>
                        {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message?.toString()}</p>}
                    </div>

                    <div>
                        <label htmlFor="dob" className="block font-bold">Date of Birth</label>
                        <input
                            {...register("dob", {
                                required: "Date of Birth is required",
                                validate: (value) => is21YearsOld(value) || "Must be 21 years of age on the date of application"
                            })}
                            type="date"
                            id="dob"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            onChange={(e) => setDob(e.target.value)}
                        />
                        {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message?.toString()}</p>}
                    </div>

                    <div>
                        <label htmlFor="placeOfBirth" className="block font-bold">Place of Birth</label>
                        <input
                            {...register("placeOfBirth", { required: "Place of Birth is required" })}
                            type="text"
                            id="placeOfBirth"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.placeOfBirth && <p className="text-red-500 text-sm">{errors.placeOfBirth.message?.toString()}</p>}
                    </div>

                    <div>
                        <label htmlFor="pan" className="block font-bold">Permanent Account Number (PAN)</label>
                        <input
                            {...register("pan", { required: "PAN is required" })}
                            type="text"
                            id="pan"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.pan && <p className="text-red-500 text-sm">{errors.pan.message?.toString()}</p>}
                    </div>

                    <div>
                        <label htmlFor="aadhar" className="block font-bold">Aadhar Card Number</label>
                        <input
                            {...register("aadhar", { required: "Aadhar Card Number is required" })}
                            type="text"
                            id="aadhar"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.aadhar && <p className="text-red-500 text-sm">{errors.aadhar.message?.toString()}</p>}
                    </div>

                    <div>
                        <label htmlFor="presentAddress" className="block font-bold">Present Address</label>
                        <input
                            {...register("presentAddress", { required: "Present Address is required" })}
                            type="text"
                            id="presentAddress"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.presentAddress && <p className="text-red-500 text-sm">{errors.presentAddress.message?.toString()}</p>}
                    </div>

                    <div>
                        <label htmlFor="periodOfResidence" className="block font-bold">Period of Residence at Present Address</label>
                        <input
                            {...register("periodOfResidence", { required: "Period of Residence is required" })}
                            type="text"
                            id="periodOfResidence"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.periodOfResidence && <p className="text-red-500 text-sm">{errors.periodOfResidence.message?.toString()}</p>}
                    </div>

                    <div>
                        <label htmlFor="telephone" className="block font-bold">Telephone Number</label>
                        <input
                            {...register("telephone", { required: "Telephone Number is required" })}
                            type="text"
                            id="telephone"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.telephone && <p className="text-red-500 text-sm">{errors.telephone.message?.toString()}</p>}
                    </div>

                    <div>
                        <label htmlFor="mobile" className="block font-bold">Mobile Number</label>
                        <input
                            {...register("mobile", { required: "Mobile Number is required" })}
                            type="text"
                            id="mobile"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message?.toString()}</p>}
                    </div>


                    <div>
                        <label htmlFor="nearestPoliceStation" className="block font-bold">
                            Nearest Police Station
                        </label>
                        <input
                            {...register("nearestPoliceStation", {
                                required: "Nearest Police Station is required",
                            })}
                            type="text"
                            id="nearestPoliceStation"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.nearestPoliceStation && (
                            <p className="text-red-500 text-sm">
                                {errors.nearestPoliceStation.message?.toString()}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="permanentAddress" className="block font-bold">
                            Permanent Address
                        </label>
                        <input
                            {...register("permanentAddress", {
                                required: "Permanent Address is required",
                            })}
                            type="text"
                            id="permanentAddress"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.permanentAddress && (
                            <p className="text-red-500 text-sm">
                                {errors.permanentAddress.message?.toString()}
                            </p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="nearestPoliceStation" className="block font-bold">
                            Nearest Police Station
                        </label>
                        <select
                            {...register("nearestPoliceStation", { required: "Please select the nearest police station" })}
                            id="nearestPoliceStation"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md"
                        >
                            <option value="" disabled>Select a Police Station</option>
                            <option value="Station 1">Station 1</option>
                            <option value="Station 2">Station 2</option>
                            <option value="Station 3">Station 3</option>
                            <option value="Station 4">Station 4</option>
                            {/* Add more options as needed */}
                        </select>
                        {errors.nearestPoliceStation && (
                            <p className="text-red-500 text-sm">
                                {errors.nearestPoliceStation.message?.toString()}
                            </p>
                        )}
                    </div>


                    <div>
                        <label htmlFor="occupation" className="block font-bold">
                            Occupation
                        </label>
                        <input
                            {...register("occupation", { required: "Occupation is required" })}
                            type="text"
                            id="occupation"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.occupation && (
                            <p className="text-red-500 text-sm">{errors.occupation.message?.toString()}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="officeBusinessAddress" className="block font-bold">
                            Office/Business Address
                        </label>
                        <input
                            {...register("officeBusinessAddress", {
                                required: "Office/Business Address is required",
                            })}
                            type="text"
                            id="officeBusinessAddress"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.officeBusinessAddress && (
                            <p className="text-red-500 text-sm">
                                {errors.officeBusinessAddress.message?.toString()}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="licenseForCropCultivation"
                            className="block font-bold"
                        >
                            Additional particulars if the license is required for crop cultivation
                        </label>
                        <input
                            {...register("licenseForCropCultivation")}
                            type="text"
                            id="licenseForCropCultivation"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block font-bold">
                            Whether the applicant has been convicted
                        </label>
                        <div className="space-x-4">
                            <label>
                                <input
                                    {...register("convicted", { required: "This field is required" })}
                                    type="radio"
                                    value="Yes"
                                />
                                Yes
                            </label>
                            <label>
                                <input
                                    {...register("convicted", { required: "This field is required" })}
                                    type="radio"
                                    value="No"
                                />
                                No
                            </label>
                        </div>
                        {errors.convicted && (
                            <p className="text-red-500 text-sm">{errors.convicted.message?.toString()}</p>
                        )}
                    </div>

                    {watch("convicted") === "Yes" && (
                        <div>
                            <label htmlFor="convictionDetails" className="block font-bold">
                                If yes, please specify
                            </label>
                            <input
                                {...register("convictionDetails", {
                                    required: "Please provide details of conviction",
                                })}
                                type="text"
                                id="convictionDetails"
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                            {errors.convictionDetails && (
                                <p className="text-red-500 text-sm">
                                    {errors.convictionDetails.message?.toString()}
                                </p>
                            )}
                        </div>
                    )}

                    <div>
                        <label className="block font-bold">
                            Whether the applicant has been ordered to execute a bond under Chapter
                            VIII of the Code of Criminal Procedure, 1973 (2 of 1974), for keeping the peace or for good behavior
                        </label>
                        <div className="space-x-4">
                            <label>
                                <input
                                    {...register("bondExecuted", { required: "This field is required" })}
                                    type="radio"
                                    value="Yes"
                                />
                                Yes
                            </label>
                            <label>
                                <input
                                    {...register("bondExecuted", { required: "This field is required" })}
                                    type="radio"
                                    value="No"
                                />
                                No
                            </label>
                        </div>
                        {errors.bondExecuted && (
                            <p className="text-red-500 text-sm">{errors.bondExecuted.message?.toString()}</p>
                        )}
                    </div>

                    {watch("bondExecuted") === "Yes" && (
                        <div>
                            <label htmlFor="bondDetails" className="block font-bold">
                                If yes, please specify
                            </label>
                            <input
                                {...register("bondDetails", { required: "Please provide details" })}
                                type="text"
                                id="bondDetails"
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                            {errors.bondDetails && (
                                <p className="text-red-500 text-sm">{errors.bondDetails.message?.toString()}</p>
                            )}
                        </div>
                    )}

                    <div>
                        <label className="block font-bold">
                            Whether the applicant has been prohibited under the Arms Act, 1959 or any
                            other law from having arms and ammunition
                        </label>
                        <div className="space-x-4">
                            <label>
                                <input
                                    {...register("prohibited", { required: "This field is required" })}
                                    type="radio"
                                    value="Yes"
                                />
                                Yes
                            </label>
                            <label>
                                <input
                                    {...register("prohibited", { required: "This field is required" })}
                                    type="radio"
                                    value="No"
                                />
                                No
                            </label>
                        </div>
                        {errors.prohibited && (
                            <p className="text-red-500 text-sm">{errors.prohibited.message?.toString()}</p>
                        )}
                    </div>

                    {watch("prohibited") === "Yes" && (
                        <div>
                            <label htmlFor="prohibitedDetails" className="block font-bold">
                                If yes, please specify
                            </label>
                            <input
                                {...register("prohibitedDetails", { required: "Please provide details" })}
                                type="text"
                                id="prohibitedDetails"
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                            {errors.prohibitedDetails && (
                                <p className="text-red-500 text-sm">
                                    {errors.prohibitedDetails.message?.toString()}
                                </p>
                            )}
                        </div>
                    )}
                    <div>
                        <label className="block font-bold">
                            Whether the applicant applied for a license before
                        </label>
                        <div className="space-x-4">
                            <label>
                                <input
                                    {...register("appliedBefore", { required: "This field is required" })}
                                    type="radio"
                                    value="Yes"
                                />
                                Yes
                            </label>
                            <label>
                                <input
                                    {...register("appliedBefore", { required: "This field is required" })}
                                    type="radio"
                                    value="No"
                                />
                                No
                            </label>
                        </div>
                        {errors.appliedBefore && (
                            <p className="text-red-500 text-sm">
                                {errors.appliedBefore.message?.toString()}
                            </p>
                        )}
                    </div>

                    {watch("appliedBefore") === "Yes" && (
                        <div>
                            <label htmlFor="appliedBeforeDetails" className="block font-bold">
                                If yes, when, to whom, and with what result
                            </label>
                            <input
                                {...register("appliedBeforeDetails", {
                                    required: "Please provide details",
                                })}
                                type="text"
                                id="appliedBeforeDetails"
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                            {errors.appliedBeforeDetails && (
                                <p className="text-red-500 text-sm">
                                    {errors.appliedBeforeDetails.message?.toString()}
                                </p>
                            )}
                        </div>
                    )}

                    <div>
                        <label className="block font-bold">
                            Whether any other member of the applicant&apos;s family is in possession of any arms license
                        </label>
                        <div className="space-x-4">
                            <label>
                                <input
                                    {...register("familyHasArms", { required: "This field is required" })}
                                    type="radio"
                                    value="Yes"
                                />
                                Yes
                            </label>
                            <label>
                                <input
                                    {...register("familyHasArms", { required: "This field is required" })}
                                    type="radio"
                                    value="No"
                                />
                                No
                            </label>
                        </div>
                        {errors.familyHasArms && (
                            <p className="text-red-500 text-sm">
                                {errors.familyHasArms.message?.toString()}
                            </p>
                        )}
                    </div>

                    {watch("familyHasArms") === "Yes" && (
                        <div>
                            <label htmlFor="familyHasArmsDetails" className="block font-bold">
                                If yes, provide particulars
                            </label>
                            <input
                                {...register("familyHasArmsDetails", {
                                    required: "Please provide details",
                                })}
                                type="text"
                                id="familyHasArmsDetails"
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                            {errors.familyHasArmsDetails && (
                                <p className="text-red-500 text-sm">
                                    {errors.familyHasArmsDetails.message?.toString()}
                                </p>
                            )}
                        </div>
                    )}

                    <div>
                        <label className="block font-bold">
                            Whether the applicant has a safe place to keep the arms and ammunition
                        </label>
                        <div className="space-x-4">
                            <label>
                                <input
                                    {...register("safePlace", { required: "This field is required" })}
                                    type="radio"
                                    value="Yes"
                                />
                                Yes
                            </label>
                            <label>
                                <input
                                    {...register("safePlace", { required: "This field is required" })}
                                    type="radio"
                                    value="No"
                                />
                                No
                            </label>
                        </div>
                        {errors.safePlace && (
                            <p className="text-red-500 text-sm">
                                {errors.safePlace.message?.toString()}
                            </p>
                        )}
                    </div>

                    {watch("safePlace") === "Yes" && (
                        <div>
                            <label htmlFor="safePlaceDetails" className="block font-bold">
                                If yes, please specify
                            </label>
                            <input
                                {...register("safePlaceDetails", {
                                    required: "Please provide details",
                                })}
                                type="text"
                                id="safePlaceDetails"
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                            {errors.safePlaceDetails && (
                                <p className="text-red-500 text-sm">
                                    {errors.safePlaceDetails.message?.toString()}
                                </p>
                            )}
                        </div>
                    )}

                    <div>
                        <label className="block font-bold">
                            Whether the applicant has undergone training as specified under rule 10
                        </label>
                        <div className="space-x-4">
                            <label>
                                <input
                                    {...register("training", { required: "This field is required" })}
                                    type="radio"
                                    value="Yes"
                                />
                                Yes
                            </label>
                            <label>
                                <input
                                    {...register("training", { required: "This field is required" })}
                                    type="radio"
                                    value="No"
                                />
                                No
                            </label>
                        </div>
                        {errors.training && (
                            <p className="text-red-500 text-sm">
                                {errors.training.message?.toString()}
                            </p>
                        )}
                    </div>

                    {watch("training") === "Yes" && (
                        <div>
                            <label htmlFor="trainingDetails" className="block font-bold">
                                If yes, please specify
                            </label>
                            <input
                                {...register("trainingDetails", {
                                    required: "Please provide details",
                                })}
                                type="text"
                                id="trainingDetails"
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                            {errors.trainingDetails && (
                                <p className="text-red-500 text-sm">
                                    {errors.trainingDetails.message?.toString()}
                                </p>
                            )}
                        </div>
                    )}

                    <div>
                        <label htmlFor="needForLicense" className="block font-bold">
                            Need for License
                        </label>
                        <input
                            {...register("needForLicense", { required: "This field is required" })}
                            type="text"
                            id="needForLicense"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.needForLicense && (
                            <p className="text-red-500 text-sm">
                                {errors.needForLicense.message?.toString()}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block font-bold mb-2">
                            Description of arms for which license is being sought
                        </label>
                        <div className="space-y-2 pl-4">
                            <label className="flex items-center space-x-2">
                                <input
                                    {...register("armsDescription", { required: "Please select an option" })}
                                    type="radio"
                                    value="Rifle"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <span className="text-gray-700">Rifle</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    {...register("armsDescription", { required: "Please select an option" })}
                                    type="radio"
                                    value="Shotgun"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <span className="text-gray-700">Shotgun</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    {...register("armsDescription", { required: "Please select an option" })}
                                    type="radio"
                                    value="Handgun (BL/ML)"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <span className="text-gray-700">Handgun (BL/ML)</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    {...register("armsDescription", { required: "Please select an option" })}
                                    type="radio"
                                    value="Other"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <span className="text-gray-700">Other</span>
                            </label>
                        </div>
                        {errors.armsDescription && (
                            <p className="text-red-500 text-sm mt-2">
                                {errors.armsDescription.message?.toString()}
                            </p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label className="block text-lg font-semibold mb-2">
                            Description of ammunition or ingredients of ammunition for which license is being sought
                        </label>
                        <textarea
                            {...register("ammunitionDescription", { required: "Please provide a description" })}
                            id="ammunitionDescription"
                            className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            rows={3}
                            placeholder="Enter description here..."
                        />
                        {errors.ammunitionDescription && (
                            <p className="text-red-500 text-sm mt-2">
                                {errors.ammunitionDescription.message?.toString()}
                            </p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label className="block text-lg font-semibold mb-2">
                            Area within which applicant wishes to carry arms
                        </label>
                        <div className="space-y-2">
                            <label className="flex items-center space-x-2">
                                <input
                                    {...register("areaToCarryArms", { required: "Please select an option" })}
                                    type="radio"
                                    value="Throughout India"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <span className="text-gray-700">Throughout India</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    {...register("areaToCarryArms", { required: "Please select an option" })}
                                    type="radio"
                                    value="State"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <span className="text-gray-700">State</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    {...register("areaToCarryArms", { required: "Please select an option" })}
                                    type="radio"
                                    value="District"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <span className="text-gray-700">District</span>
                            </label>
                            <h5 className="text-center text-xl font-bold mb-6">
                                Additional Information
                            </h5>
                            <h5 className="text-center text-xl font-bold mb-6">
                                Details for an Application for licence in Form IV
                            </h5>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="areaToCarryArms" className="text-gray-700 font-bold">
                                    Place or area for which the license is sought
                                </label>
                                <input
                                    {...register("areaToCarryArms", { required: "Please provide the place or area for which the license is sought" })}
                                    type="text"
                                    id="areaToCarryArms"
                                    className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md"
                                />
                            </div>

                        </div>
                        {errors.areaToCarryArms && (
                            <p className="text-red-500 text-sm mt-2">
                                {errors.areaToCarryArms.message?.toString()}
                            </p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label className="block text-lg font-semibold mb-2">
                            Specification of the wild beasts which are permitted to be destroyed
                        </label>
                        <textarea
                            {...register("wildBeastsSpecification", { required: "Please provide specification" })}
                            id="wildBeastsSpecification"
                            className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            rows={3}
                            placeholder="Enter specification here..."
                        />
                        {errors.wildBeastsSpecification && (
                            <p className="text-red-500 text-sm mt-2">
                                {errors.wildBeastsSpecification.message?.toString()}
                            </p>
                        )}
                    </div>
                    <Attachments />
                    <div className="flex items-center justify-center mt-8 mb-32">
                        <button
                            type="submit"
                            className="bg-yellow-400 text-black font-bold py-4 px-32 rounded-full focus:outline-none focus:shadow-outline mb-4 w-full sm:w-auto sm:mb-32 mb-20"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <div className="sm:hidden fixed bottom-0 w-full">
                <MobileMenu isLogin={false} />
            </div>
        </>
    );
};

export default IndividialForm;
