"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import MobileMenu from "@/components/MobileMenu";
import Header2 from "@/components/Header2";
import Attachments from "./Attachments";

const ForCompany = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [dob, setDob] = useState("");

    const handleNavigation = () => {
        router.push("/dashboard");
    };


    const onSubmit = (data: any) => {
        console.log(data);
        // Handle form submission
    };

    return (
        <>
            <Header2 />
            <div className="mx-auto max-w-screen-lg px-4 md:px-0">
                <div className="info flex items-center justify-between h-12 w-full bg-gray-100 rounded-3xl mt-8">
                    <div className="flex items-center">
                        <img
                            src="/licences.jpg"
                            alt="logo"
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
                        Application for an arms licence in Form II, III, and IV Form A-2
                    </h2>
                    <hr className="mt-4" />
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
                    {/* Name of Applicant Company */}
                    <div>
                        <label htmlFor="companyName" className="block font-bold">
                            Name of Applicant Company
                        </label>
                        <input
                            {...register("companyName", { required: "This field is required" })}
                            type="text"
                            id="companyName"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.companyName?.message && (
                            <p className="text-red-500 text-sm">{errors.companyName.message.toString()}</p>
                        )}
                    </div>

                    {/* Permanent Account Number (P.A.N) */}
                    <div>
                        <label htmlFor="pan" className="block font-bold">
                            Permanent Account Number (P.A.N)
                        </label>
                        <input
                            {...register("pan", { required: "This field is required" })}
                            type="text"
                            id="pan"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.pan?.message && (
                            <p className="text-red-500 text-sm">{errors.pan.message.toString()}</p>
                        )}
                    </div>

                    {/* Corporate Identification Number (CIN) */}
                    <div>
                        <label htmlFor="cin" className="block font-bold">
                            Corporate Identification Number (CIN)
                        </label>
                        <input
                            {...register("cin", { required: "This field is required" })}
                            type="text"
                            id="cin"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.cin?.message && (
                            <p className="text-red-500 text-sm">{errors.cin.message.toString()}</p>
                        )}
                    </div>

                    {/* Name of Applicant Branch or Representative Office */}
                    <div>
                        <label htmlFor="branchName" className="block font-bold">
                            Name of Applicant Branch or Representative Office
                        </label>
                        <input
                            {...register("branchName", { required: "This field is required" })}
                            type="text"
                            id="branchName"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.branchName?.message && (
                            <p className="text-red-500 text-sm">{errors.branchName.message.toString()}</p>
                        )}
                    </div>

                    {/* Constitution of the Applicant Company */}
                    <div>
                        <label htmlFor="constitution" className="block font-bold">
                            Constitution of the Applicant Company
                        </label>
                        <input
                            {...register("constitution", { required: "This field is required" })}
                            type="text"
                            id="constitution"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.constitution?.message && (
                            <p className="text-red-500 text-sm">{errors.constitution.message.toString()}</p>
                        )}
                    </div>

                    {/* Designation of the Responsible Person */}
                    <div>
                        <label htmlFor="responsiblePerson" className="block font-bold">
                            Designation of the Responsible Person
                        </label>
                        <input
                            {...register("responsiblePerson", { required: "This field is required" })}
                            type="text"
                            id="responsiblePerson"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.responsiblePerson?.message && (
                            <p className="text-red-500 text-sm">{errors.responsiblePerson.message.toString()}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="NameOfResponsiblePerson" className="block font-bold">
                            Name of the Responsible Person
                        </label>
                        <input
                            {...register("responsiblePerson", { required: "This field is required" })}
                            type="text"
                            id="NameOfResponsiblePerson"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.NameOfResponsiblePerson?.message && (
                            <p className="text-red-500 text-sm">{errors.NameOfResponsiblePerson.message.toString()}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="registeredOffice" className="block font-bold">
                            Registered Office Address of the Company
                        </label>
                        <input
                            {...register("registeredOffice", { required: "This field is required" })}
                            type="text"
                            id="registeredOffice"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.registeredOffice && (
                            <p className="text-red-500 text-sm">{errors.registeredOffice.message?.toString() ?? 'An error occurred'}</p>
                        )}
                    </div>

                    {/* Telephone No (Office) */}
                    <div>
                        <label htmlFor="officeTelephone" className="block font-bold">
                            Telephone No (Office)
                        </label>
                        <input
                            {...register("officeTelephone", { required: "This field is required" })}
                            type="tel"
                            id="officeTelephone"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.officeTelephone && (
                            <p className="text-red-500 text-sm">{errors.officeTelephone?.message?.toString()}</p>
                        )}
                    </div>

                    {/* Mobile No of Responsible Person */}
                    <div>
                        <label htmlFor="responsiblePersonMobile" className="block font-bold">
                            Mobile No of Responsible Person
                        </label>
                        <input
                            {...register("responsiblePersonMobile", { required: "This field is required" })}
                            type="tel"
                            id="responsiblePersonMobile"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.responsiblePersonMobile && (
                            <p className="text-red-500 text-sm">{errors.responsiblePersonMobile.message?.toString() ?? 'An error occurred'}</p>
                        )}
                    </div>

                    {/* Email Address */}
                    <div>
                        <label htmlFor="emailAddress" className="block font-bold">
                            Email Address
                        </label>
                        <input
                            {...register("emailAddress", { required: "This field is required" })}
                            type="email"
                            id="emailAddress"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.emailAddress && (
                            <p className="text-red-500 text-sm">{errors.emailAddress?.message?.toString()}</p>
                        )}                    </div>

                    {/* Nearest Police Station Dropdown */}
                    <div>
                        <label htmlFor="nearestPoliceStation" className="block font-bold">
                            Nearest Police Station
                        </label>
                        <select
                            {...register("nearestPoliceStation", { required: "This field is required" })}
                            id="nearestPoliceStation"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        >
                            <option value="">Select Police Station</option>
                            <option value="Station1">Police Station 1</option>
                            <option value="Station2">Police Station 2</option>
                            <option value="Station3">Police Station 3</option>
                            {/* Add more options as needed */}
                        </select>
                        {errors.nearestPoliceStation && (
                            <p className="text-red-500 text-sm">{errors.nearestPoliceStation?.message?.toString()}</p>
                        )}
                        <p className="text-red-500 text-sm mt-2">
                            Nearest police station means the police station under whose jurisdiction the place given in the address comes.
                        </p>
                    </div>

                    {/* Address of the Branch of the Representative Office */}
                    <div>
                        <label htmlFor="branchOfficeAddress" className="block font-bold">
                            Address of the Branch of the Representative Office
                        </label>
                        <input
                            {...register("branchOfficeAddress", { required: "This field is required" })}
                            type="text"
                            id="branchOfficeAddress"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.branchOfficeAddress && (
                            <p className="text-red-500 text-sm">{errors.branchOfficeAddress.message?.toString()}</p>
                        )}
                    </div>

                    {/* Telephone No */}
                    <div>
                        <label htmlFor="branchTelephone" className="block font-bold">
                            Telephone No
                        </label>
                        <input
                            {...register("branchTelephone", { required: "This field is required" })}
                            type="tel"
                            id="branchTelephone"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.branchTelephone && (
                            <p className="text-red-500 text-sm">{errors.branchTelephone.message?.toString()}</p>
                        )}
                    </div>

                    {/* Mobile No */}
                    <div>
                        <label htmlFor="branchMobile" className="block font-bold">
                            Mobile No
                        </label>
                        <input
                            {...register("branchMobile", { required: "This field is required" })}
                            type="tel"
                            id="branchMobile"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.branchMobile && (
                            <p className="text-red-500 text-sm">{errors.branchMobile?.message?.toString()}</p>
                        )}
                    </div>

                    {/* Email Address */}
                    <div>
                        <label htmlFor="branchEmailAddress" className="block font-bold">
                            Email Address
                        </label>
                        <input
                            {...register("branchEmailAddress", { required: "This field is required" })}
                            type="email"
                            id="branchEmailAddress"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.branchEmailAddress && (
                            <p className="text-red-500 text-sm">{errors.branchEmailAddress?.message?.toString()}</p>
                        )}
                    </div>

                    {/* Nearest Police Station Dropdown */}
                    <div>
                        <label htmlFor="branchNearestPoliceStation" className="block font-bold">
                            Nearest Police Station
                        </label>
                        <select
                            {...register("branchNearestPoliceStation", { required: "This field is required" })}
                            id="branchNearestPoliceStation"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        >
                            <option value="">Select Police Station</option>
                            <option value="Station1">Police Station 1</option>
                            <option value="Station2">Police Station 2</option>
                            <option value="Station3">Police Station 3</option>
                            {/* Add more options as needed */}
                        </select>
                        {errors.branchNearestPoliceStation?.message && (
                            <p className="text-red-500 text-sm">{errors.branchNearestPoliceStation.message.toString()}</p>
                        )}
                    </div>
                    <h2 className="text-center font-bold text-xl uppercase mt-6">Other Particulars of the Applicant</h2>

                    {/* Conviction Status */}
                    <div className="mt-6">
                        <label className="block font-bold">
                            Whether the applicant or its bearers or directors has/have ever been convicted
                        </label>
                        <div className="flex items-center mt-2">
                            <input
                                {...register("convictionStatus", { required: "This field is required" })}
                                type="radio"
                                id="convictionYes"
                                value="Yes"
                                className="mr-2"
                            />
                            <label htmlFor="convictionYes" className="mr-4">Yes</label>
                            <input
                                {...register("convictionStatus", { required: "This field is required" })}
                                type="radio"
                                id="convictionNo"
                                value="No"
                                className="mr-2"
                            />
                            <label htmlFor="convictionNo">No</label>
                        </div>
                        {typeof errors.convictionStatus?.message === 'string' ? (
                            <p className="text-red-500 text-sm">{errors.convictionStatus.message}</p>
                        ) : null}

                        {/* Additional Details if Yes */}
                        {watch("convictionStatus") === "Yes" && (
                            <div className="mt-4">
                                <label htmlFor="convictionDetails" className="block font-bold">
                                    If yes, please specify
                                </label>
                                <input
                                    {...register("convictionDetails", { required: "Please specify the details if Yes" })}
                                    type="text"
                                    id="convictionDetails"
                                    className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                                />
                                {errors.convictionDetails && (
                                    <p className="text-red-500 text-sm">
                                        {typeof errors.convictionDetails.message === 'string'
                                            ? errors.convictionDetails.message
                                            : 'An error occurred'}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Bond Execution Status */}
                    <div className="mt-6">
                        <label className="block font-bold">
                            Whether the applicant or its office bearers or directors has/have ever been ordered to execute a bond under Chapter VIII of the Code of Criminal Procedure, 1973 (2 of 1974) for keeping the peace and for good behavior
                        </label>
                        <div className="flex items-center mt-2">
                            <input
                                {...register("bondExecutionStatus", { required: "This field is required" })}
                                type="radio"
                                id="bondYes"
                                value="Yes"
                                className="mr-2"
                            />
                            <label htmlFor="bondYes" className="mr-4">Yes</label>
                            <input
                                {...register("bondExecutionStatus", { required: "This field is required" })}
                                type="radio"
                                id="bondNo"
                                value="No"
                                className="mr-2"
                            />
                            <label htmlFor="bondNo">No</label>
                        </div>
                        {errors.bondExecutionStatus && (
                            <p className="text-red-500 text-sm">
                                {errors.bondExecutionStatus.message ? errors.bondExecutionStatus.message.toString() : null}
                            </p>
                        )}
                        {/* Additional Details if Yes */}
                        {watch("bondExecutionStatus") === "Yes" && (
                            <div className="mt-4">
                                <label htmlFor="bondDetails" className="block font-bold">
                                    If yes, please specify
                                </label>
                                <input
                                    {...register("bondDetails", { required: "Please specify the details if Yes" })}
                                    type="text"
                                    id="bondDetails"
                                    className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                                />
                                {errors.bondDetails && (
                                    <p className="text-red-500 text-sm">{errors.bondDetails.message?.toString()}</p>
                                )}
                            </div>
                        )}
                    </div>
                    {/* Arms Act Prohibition */}
                    <div className="mt-6">
                        <label className="block font-bold">
                            Whether the applicant or its office or directors has/have ever been prohibited under the Arms Act, 1959 or any other law from having arms or ammunition
                        </label>
                        <div className="flex items-center mt-2">
                            <input
                                {...register("armsProhibitionStatus", { required: "This field is required" })}
                                type="radio"
                                id="armsProhibitionYes"
                                value="Yes"
                                className="mr-2"
                            />
                            <label htmlFor="armsProhibitionYes" className="mr-4">Yes</label>
                            <input
                                {...register("armsProhibitionStatus", { required: "This field is required" })}
                                type="radio"
                                id="armsProhibitionNo"
                                value="No"
                                className="mr-2"
                            />
                            <label htmlFor="armsProhibitionNo">No</label>
                        </div>
                        {watch("armsProhibitionStatus") === "Yes" && (
                            <div className="mt-4">
                                <label htmlFor="armsProhibitionDetails" className="block font-bold">
                                    If yes, please specify
                                </label>
                                <input
                                    {...register("armsProhibitionDetails", { required: "Please specify the details if Yes" })}
                                    type="text"
                                    id="armsProhibitionDetails"
                                    className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                                />
                            </div>
                        )}
                    </div>

                    {/* Previous Licence Application */}
                    <div className="mt-6">
                        <label className="block font-bold">
                            Whether the applicant applied for a licence before, if so when, to whom, with what result
                        </label>
                        <div className="flex items-center mt-2">
                            <input
                                {...register("previousLicenceApplicationStatus", { required: "This field is required" })}
                                type="radio"
                                id="previousLicenceYes"
                                value="Yes"
                                className="mr-2"
                            />
                            <label htmlFor="previousLicenceYes" className="mr-4">Yes</label>
                            <input
                                {...register("previousLicenceApplicationStatus", { required: "This field is required" })}
                                type="radio"
                                id="previousLicenceNo"
                                value="No"
                                className="mr-2"
                            />
                            <label htmlFor="previousLicenceNo">No</label>
                        </div>
                        {watch("previousLicenceApplicationStatus") === "Yes" && (
                            <div className="mt-4">
                                <label htmlFor="previousLicenceDetails" className="block font-bold">
                                    If yes, please specify
                                </label>
                                <input
                                    {...register("previousLicenceDetails", { required: "Please specify the details if Yes" })}
                                    type="text"
                                    id="previousLicenceDetails"
                                    className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                                />
                            </div>
                        )}
                    </div>

                    {/* Licence Suspension/Revocation */}
                    <div className="mt-6">
                        <label className="block font-bold">
                            Whether the applicant's licence was ever suspended, cancelled, or revoked
                        </label>
                        <div className="flex items-center mt-2">
                            <input
                                {...register("licenceSuspensionStatus", { required: "This field is required" })}
                                type="radio"
                                id="licenceSuspensionYes"
                                value="Yes"
                                className="mr-2"
                            />
                            <label htmlFor="licenceSuspensionYes" className="mr-4">Yes</label>
                            <input
                                {...register("licenceSuspensionStatus", { required: "This field is required" })}
                                type="radio"
                                id="licenceSuspensionNo"
                                value="No"
                                className="mr-2"
                            />
                            <label htmlFor="licenceSuspensionNo">No</label>
                        </div>
                        {watch("licenceSuspensionStatus") === "Yes" && (
                            <div className="mt-4">
                                <label htmlFor="licenceSuspensionDetails" className="block font-bold">
                                    If yes, please specify
                                </label>
                                <input
                                    {...register("licenceSuspensionDetails", { required: "Please specify the details if Yes" })}
                                    type="text"
                                    id="licenceSuspensionDetails"
                                    className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                                />
                            </div>
                        )}
                    </div>

                    {/* Other Arms Licence Held */}
                    <div className="mt-6">
                        <label className="block font-bold">
                            Whether any other arms licence is already held by the company or branch
                        </label>
                        <div className="flex items-center mt-2">
                            <input
                                {...register("otherArmsLicenceStatus", { required: "This field is required" })}
                                type="radio"
                                id="otherArmsLicenceYes"
                                value="Yes"
                                className="mr-2"
                            />
                            <label htmlFor="otherArmsLicenceYes" className="mr-4">Yes</label>
                            <input
                                {...register("otherArmsLicenceStatus", { required: "This field is required" })}
                                type="radio"
                                id="otherArmsLicenceNo"
                                value="No"
                                className="mr-2"
                            />
                            <label htmlFor="otherArmsLicenceNo">No</label>
                        </div>
                        {watch("otherArmsLicenceStatus") === "Yes" && (
                            <div className="mt-4">
                                <label htmlFor="otherArmsLicenceDetails" className="block font-bold">
                                    If yes, please specify
                                </label>
                                <input
                                    {...register("otherArmsLicenceDetails", { required: "Please specify the details if Yes" })}
                                    type="text"
                                    id="otherArmsLicenceDetails"
                                    className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                                />
                            </div>
                        )}
                    </div>

                    {/* Safe Place for Arms and Ammunition */}
                    <div className="mt-6">
                        <label className="block font-bold">
                            Whether the applicant has a safe place to keep the arms and ammunition
                        </label>
                        <div className="flex items-center mt-2">
                            <input
                                {...register("safePlaceStatus", { required: "This field is required" })}
                                type="radio"
                                id="safePlaceYes"
                                value="Yes"
                                className="mr-2"
                            />
                            <label htmlFor="safePlaceYes" className="mr-4">Yes</label>
                            <input
                                {...register("safePlaceStatus", { required: "This field is required" })}
                                type="radio"
                                id="safePlaceNo"
                                value="No"
                                className="mr-2"
                            />
                            <label htmlFor="safePlaceNo">No</label>
                        </div>
                        {watch("safePlaceStatus") === "Yes" && (
                            <div className="mt-4">
                                <label htmlFor="safePlaceDetails" className="block font-bold">
                                    If yes, please specify
                                </label>
                                <input
                                    {...register("safePlaceDetails", { required: "Please specify the details if Yes" })}
                                    type="text"
                                    id="safePlaceDetails"
                                    className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                                />
                            </div>
                        )}
                    </div>

                    {/* Retainers' Training Status */}
                    <div className="mt-6">
                        <label className="block font-bold">
                            Whether the retainer or retainers to be employed by the applicant have undergone training as specified in Rule 10
                        </label>
                        <div className="flex items-center mt-2">
                            <input
                                {...register("retainersTrainingStatus", { required: "This field is required" })}
                                type="radio"
                                id="retainersTrainingYes"
                                value="Yes"
                                className="mr-2"
                            />
                            <label htmlFor="retainersTrainingYes" className="mr-4">Yes</label>
                            <input
                                {...register("retainersTrainingStatus", { required: "This field is required" })}
                                type="radio"
                                id="retainersTrainingNo"
                                value="No"
                                className="mr-2"
                            />
                            <label htmlFor="retainersTrainingNo">No</label>
                        </div>
                        {watch("retainersTrainingStatus") === "Yes" && (
                            <div className="mt-4">
                                <label htmlFor="retainersTrainingDetails" className="block font-bold">
                                    If yes, please specify
                                </label>
                                <input
                                    {...register("retainersTrainingDetails", { required: "Please specify the details if Yes" })}
                                    type="text"
                                    id="retainersTrainingDetails"
                                    className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                                />
                            </div>
                        )}
                    </div>
                    <h2 className="font-bold text-center text-lg">Particular of Licence Being Applied For</h2>

                    {/* Need for License */}
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
                                {errors.needForLicense.message ? errors.needForLicense.message.toString() : 'No error message'}
                            </p>
                        )}
                    </div>

                    {/* Description of Arms Category */}
                    <div className="mt-6">
                        <p className="font-bold">Description of Arms for Which License is Being Sought</p>
                        <div className="flex flex-col space-y-2 mt-2">
                            <p>Category - restricted/permissible</p>
                        </div>
                        {errors.armsCategory && (
                            <p className="text-red-500 text-sm">{errors.armsCategory.message?.toString()}</p>
                        )}
                    </div>

                    <div className="mt-6">
                        <p className="font-bold">Type of Arms</p>
                        <div className="flex flex-col space-y-2 mt-2">
                            <label className="flex items-center">
                                <input
                                    {...register("armsType", { required: "This field is required" })}
                                    type="radio"
                                    value="Rifle"
                                    className="mr-2"
                                />
                                Rifle
                            </label>
                            <label className="flex items-center">
                                <input
                                    {...register("armsType", { required: "This field is required" })}
                                    type="radio"
                                    value="Shot Gun (BL/ML)"
                                    className="mr-2"
                                />
                                Shot Gun (BL/ML)
                            </label>
                            <label className="flex items-center">
                                <input
                                    {...register("armsType", { required: "This field is required" })}
                                    type="radio"
                                    value="Hand Gun (Revolver / Pistol)"
                                    className="mr-2"
                                />
                                Hand Gun (Revolver / Pistol)
                            </label>
                        </div>
                        {errors.armsType && (
                            <p className="text-red-500 text-sm">{errors.armsType?.message?.toString()}</p>
                        )}
                    </div>
                    {/* Description of Ammunition */}
                    <div className="mt-6">
                        <label htmlFor="ammunitionDescription" className="block font-bold">
                            Description of Ammunition or Ingredients of Ammunition for Which License is Being Sought
                        </label>
                        <input
                            {...register("ammunitionDescription", { required: "This field is required" })}
                            type="text"
                            id="ammunitionDescription"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.ammunitionDescription && (
                            <p className="text-red-500 text-sm">{errors.ammunitionDescription.message?.toString()}</p>
                        )}
                    </div>

                    {/* Number of Firearms */}
                    <div className="mt-6">
                        <label htmlFor="numberOfFirearms" className="block font-bold">
                            Number of Firearms Which Applicant Wishes to Apply For
                        </label>
                        <input
                            {...register("numberOfFirearms", { required: "This field is required" })}
                            type="number"
                            id="numberOfFirearms"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.numberOfFirearms && (
                            <p className="text-red-500 text-sm">{errors.numberOfFirearms?.message?.toString()}</p>
                        )}           </div>

                    {/* Area Within Which Applicant Wishes to Carry Arms */}
                    <div className="mt-6">
                        <p className="font-bold">Area Within Which Applicant Wishes to Carry Arms</p>
                        <div className="flex flex-col space-y-2 mt-2">
                            <label className="flex items-center">
                                <input
                                    {...register("carryArea", { required: "This field is required" })}
                                    type="radio"
                                    value="throughoutIndia"
                                    className="mr-2"
                                />
                                Throughout India
                            </label>
                            <label className="flex items-center">
                                <input
                                    {...register("carryArea", { required: "This field is required" })}
                                    type="radio"
                                    value="state"
                                    className="mr-2"
                                />
                                State
                            </label>
                            <label className="flex items-center">
                                <input
                                    {...register("carryArea", { required: "This field is required" })}
                                    type="radio"
                                    value="district"
                                    className="mr-2"
                                />
                                District
                            </label>
                        </div>
                        {errors.carryArea && (
                            <p className="text-red-500 text-sm">{errors.carryArea.message?.toString() ?? 'Error message not available'}</p>
                        )}
                    </div>
                    <Attachments/>

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

export default ForCompany;
