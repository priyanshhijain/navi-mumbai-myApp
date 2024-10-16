"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Attachments from './Attachments';
import { faAngleDown, faLocationDot, faCar, faCheckCircle, faPaperclip, faTimes, faCamera, faBook, faFileContract } from '@fortawesome/free-solid-svg-icons';
const AdoptionForm = () => {
    const [attachments, setAttachments] = useState({});
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(attachments)
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-screen-lg px-4 md:px-0">
            <div className="mt-8">
                <p className="text-sm sm:text-lg mt-4">
                    <FontAwesomeIcon icon={faBook} className="mr-2 text-lg" />
                    <span className='font-bold'>Adoption Form</span>
                </p>
                <hr className='mt-4' />
            </div>
            <div className="relative mb-4 mt-6">
                <label htmlFor="fullName" className="block text-md font-bold leading-6 text-gray-900">
                    Full Name
                </label>
                <div className="mt-2">
                    <input
                        {...register('fullName', { required: 'Full name is required' })}
                        type="text"
                        id="fullName"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                    {errors.fullName?.message && (
                        <p className="text-red-500 text-sm">
                            {typeof errors.fullName.message === 'string' ? errors.fullName.message : ''}
                        </p>
                    )}

                </div>
            </div>

            <div className="relative mb-4">
                <label htmlFor="presentAddress" className="block text-md font-bold leading-6 text-gray-900">
                    Present Address
                </label>
                <div className="mt-2">
                    <input
                        {...register('presentAddress', { required: 'Present address is required' })}
                        type="text"
                        id="presentAddress"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                    {errors.presentAddress?.message && (
                        <p className="text-red-500 text-sm">
                            {typeof errors.presentAddress.message === 'string' ? errors.presentAddress.message : ''}
                        </p>
                    )}

                </div>
            </div>


            <div className="relative mb-4">
                <label htmlFor="MeritalStatus" className="block text-md font-bold leading-6 text-gray-900">
                    Marital Status
                </label>
                <div className="mt-2">
                    <select
                        {...register('MeritalStatus', { required: 'Marital Status is required' })}
                        id="MeritalStatus"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    >
                        <option value="">Select status</option>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                        <option value="divorced">Divorced</option>
                        <option value="widowed">Widowed</option>
                    </select>
                    {errors.MeritalStatus && errors.MeritalStatus.message && (
                        <p className="text-red-500 text-sm">
                            {typeof errors.MeritalStatus.message === 'string' ? errors.MeritalStatus.message : ''}
                        </p>
                    )}
                </div>
            </div>

            <div className="relative mb-4">
                <label htmlFor="SpouseName " className="block text-md font-bold leading-6 text-gray-900">
                    Spouse Name
                </label>
                <div className="mt-2">
                    <input
                        {...register('SpouseName', { required: 'This field is required' })}
                        id="SpouseName"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    ></input>
                    {errors.SpouseName?.message && (
                        <p className="text-red-500 text-sm">
                            {typeof errors.SpouseName.message === 'string' ? errors.SpouseName.message : ''}
                        </p>
                    )}

                </div>
            </div>

            <div className="relative mb-4">
                <label htmlFor="SpouseOccupation" className="block text-md font-bold leading-6 text-gray-900">
                    Spouse Occupation
                </label>
                <div className="mt-2">
                    <input
                        {...register('SpouseOccupation', { required: 'This field is required' })}
                        id="SpouseOccupation"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    ></input>
                    {errors.SpouseOccupation?.message && (
                        <p className="text-red-500 text-sm">
                            {typeof errors.SpouseOccupation.message === 'string' ? errors.SpouseOccupation.message : ''}
                        </p>
                    )}

                </div>
            </div>

            <div className="relative mb-4">
                <label htmlFor="CurrentOccupation" className="block text-md font-bold leading-6 text-gray-900">
                    Current Occupation
                </label>
                <div className="mt-2">
                    <input
                        {...register('closeAcquaintance', { required: 'Close acquaintance information is required' })}
                        type="text"
                        id="closeAcquaintance"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                    {errors.closeAcquaintance?.message && (
                        <p className="text-red-500 text-sm">
                            {typeof errors.closeAcquaintance.message === 'string' ? errors.closeAcquaintance.message : ''}
                        </p>
                    )}

                </div>
            </div>
            <div className="relative mb-4">
                <label htmlFor="Companyname" className="block text-md font-bold leading-6 text-gray-900">
                    Company name
                </label>
                <div className="mt-2">
                    <input
                        {...register('closeAcquaintance', { required: 'Companyname is required' })}
                        type="text"
                        id="Companyname"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                    {errors.Companyname?.message && (
                        <p className="text-red-500 text-sm">
                            {typeof errors.Companyname.message === 'string' ? errors.Companyname.message : ''}
                        </p>
                    )}

                </div>
            </div>

            <div className="relative mb-4">
                <label htmlFor="LengthofEmployment" className="block text-md font-bold leading-6 text-gray-900">
                    Length of Employment
                </label>
                <div className="mt-2">
                    <input
                        {...register('LengthofEmployment', { required: 'LengthofEmployment is required' })}
                        type="text"
                        id="LengthofEmployment"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                    {errors.LengthofEmployment?.message && (
                        <p className="text-red-500 text-sm">
                            {typeof errors.LengthofEmployment.message === 'string' ? errors.LengthofEmployment.message : ''}
                        </p>
                    )}

                </div>
            </div>
            <div className="relative mb-4">
                <label htmlFor="arrestDetails" className="block text-md font-bold leading-6 text-gray-900">
                    Have you ever been arrested/prosecuted/detained/fined/convicted? If yes, please provide details
                </label>
                <div className="mt-2">
                    <textarea
                        {...register('arrestDetails', { required: 'This field is required' })}
                        id="arrestDetails"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    ></textarea>
                    {errors.arrestDetails?.message && (
                        <p className="text-red-500 text-sm">
                            {typeof errors.arrestDetails.message === 'string' ? errors.arrestDetails.message : ''}
                        </p>
                    )}

                </div>
            </div>

            <div className="relative mb-4">
                <label htmlFor="politicsInvolvement" className="block text-md font-bold leading-6 text-gray-900">
                    Have you ever been involved in politics?
                </label>
                <div className="mt-2">
                    <textarea
                        {...register('politicsInvolvement', { required: 'This field is required' })}
                        id="politicsInvolvement"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    ></textarea>
                    {errors.politicsInvolvement?.message && (
                        <p className="text-red-500 text-sm">
                            {typeof errors.politicsInvolvement.message === 'string' ? errors.politicsInvolvement.message : ''}
                        </p>
                    )}

                </div>
            </div>

            <div className="relative mb-4">
                <label htmlFor="closeAcquaintance" className="block text-md font-bold leading-6 text-gray-900">
                    Information of Close Acquaintance
                </label>
                <div className="mt-2">
                    <input
                        {...register('closeAcquaintance', { required: 'Close acquaintance information is required' })}
                        type="text"
                        id="closeAcquaintance"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                    {errors.closeAcquaintance?.message && (
                        <p className="text-red-500 text-sm">
                            {typeof errors.closeAcquaintance.message === 'string' ? errors.closeAcquaintance.message : ''}
                        </p>
                    )}

                </div>
            </div>

            <div className="relative mb-4">
                <label htmlFor="contactNo" className="block text-md font-bold leading-6 text-gray-900">
                    Contact Number
                </label>
                <div className="mt-2">
                    <input
                        {...register('contactNo', {
                            required: 'Contact number is required',
                            pattern: {
                                value: /^[0-9]+$/,
                                message: 'Invalid contact number',
                            },
                        })}
                        type="tel"
                        id="contactNo"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                    {errors.contactNo?.message && (
                        <p className="text-red-500 text-sm">
                            {typeof errors.contactNo.message === 'string' ? errors.contactNo.message : ''}
                        </p>
                    )}

                </div>
            </div>

            <div className="relative mb-4">
                <label htmlFor="presentAddress2" className="block text-md font-bold leading-6 text-gray-900">
                    Present Address (Again)
                </label>
                <div className="mt-2">
                    <input
                        {...register('presentAddress2', { required: 'Present address is required' })}
                        type="text"
                        id="presentAddress2"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                    {errors.presentAddress2?.message && (
                        <p className="text-red-500 text-sm">
                            {typeof errors.presentAddress2.message === 'string' ? errors.presentAddress2.message : ''}
                        </p>
                    )}

                </div>
            </div>


            <div className="text-gray-900 dark:text-gray-100  mt-6 mb-4">
                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faPaperclip} className="text-gray-500 dark:text-gray-400 text-xl font-bold" />
                    <h3 className="text-xl font-bold">Assignment</h3>
                </div>
                <hr className="border-gray-500 dark:border-gray-400 mt-2" />
            </div>

            <Attachments setAttachments={setAttachments} attachmentType="passportPhotos" label="Passport Size Photos" />
            <Attachments setAttachments={setAttachments} attachmentType="passport" label="Passport" />
            <Attachments setAttachments={setAttachments} attachmentType="birthCertificate" label="Birth Certificate" />
            <Attachments setAttachments={setAttachments} attachmentType="addressProof" label="Address Proof" />
            <Attachments setAttachments={setAttachments} attachmentType="marksheet10" label="10th Marksheet" />
            <Attachments setAttachments={setAttachments} attachmentType="marksheet12" label="12th Marksheet" />
            <Attachments setAttachments={setAttachments} attachmentType="purpose" label="Purpose" />
            <Attachments setAttachments={setAttachments} attachmentType="schoolLeavingCertificate" label="School Leaving Certificate" />




            <div className="flex items-center justify-center mt-8 mb-32">
                <button
                    type="submit"
                    className="bg-yellow-400 text-black font-bold py-4 px-32 rounded-full focus:outline-none focus:shadow-outline mb-4 w-full sm:w-auto sm:mb-32 mb-20"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default AdoptionForm;



