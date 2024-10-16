import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faTimes } from '@fortawesome/free-solid-svg-icons';

const Attachments: React.FC = () => {
    const [passportPhotos, setPassportPhotos] = useState<File[]>([]);
    const [proofOfBirth, setProofOfBirth] = useState<File[]>([]);
    const [identificationProof, setIdentificationProof] = useState<File[]>([]);
    const [residenceProof, setResidenceProof] = useState<File[]>([]);
    const [firearmTrainingCertificate, setFirearmTrainingCertificate] = useState<File[]>([]);
    const [safeStorageUndertaking, setSafeStorageUndertaking] = useState<File[]>([]);
    const [qualificationCertificate, setQualificationCertificate] = useState<File[]>([]);
    const [wildAnimalProtection, setWildAnimalProtection] = useState<File[]>([]);
    const [wildlifePermit, setWildlifePermit] = useState<File[]>([]);
    const [specialConsideration, setSpecialConsideration] = useState<File[]>([]);


    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        setFiles: React.Dispatch<React.SetStateAction<File[]>>
    ) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files);
            setFiles(selectedFiles);
        }
    };

    const removeFile = (
        index: number,
        setFiles: React.Dispatch<React.SetStateAction<File[]>>,
        files: File[]
    ) => {
        const updatedFiles = files.filter((_, i) => i !== index);
        setFiles(updatedFiles);
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="text-gray-900 dark:text-gray-100">
                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faPaperclip} className="text-gray-500 dark:text-gray-400 text-xl font-bold" />
                    <h3 className="text-xl font-bold">Assignment</h3>
                </div>
                <hr className="border-gray-500 dark:border-gray-400 mt-2" />
            </div>
            <div className="flex items-center mt-4">
                <input
                    type="file"
                    id="passport-upload"
                    className="hidden"
                    multiple
                    onChange={(e) => handleFileChange(e, setPassportPhotos)}
                />
                <FontAwesomeIcon
                    icon={faPaperclip}
                    className="text-gray-700 mr-2 cursor-pointer"
                    onClick={() => document.getElementById('passport-upload')?.click()}
                />
                <h5 className="text-lg text-gray-700">Passport-Sized Photo (White Background)</h5>
                <div className="flex ml-4 space-x-2">
                    {passportPhotos.map((file, index) => (
                        <div key={index} className="flex items-center">
                            <p className="text-sm text-gray-600">{file.name}</p>
                            <FontAwesomeIcon
                                icon={faTimes}
                                className="text-red-500 cursor-pointer ml-2"
                                onClick={() => removeFile(index, setPassportPhotos, passportPhotos)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Proof of Date of Birth */}
            <div className="flex items-center mt-4">
                <input
                    type="file"
                    id="birthproof-upload"
                    className="hidden"
                    multiple
                    onChange={(e) => handleFileChange(e, setProofOfBirth)}
                />
                <FontAwesomeIcon
                    icon={faPaperclip}
                    className="text-gray-700 mr-2 cursor-pointer"
                    onClick={() => document.getElementById('birthproof-upload')?.click()}
                />
                <h5 className="text-lg text-gray-700">Proof of Date of Birth</h5>
                <div className="flex ml-4 space-x-2">
                    {proofOfBirth.map((file, index) => (
                        <div key={index} className="flex items-center">
                            <p className="text-sm text-gray-600">{file.name}</p>
                            <FontAwesomeIcon
                                icon={faTimes}
                                className="text-red-500 cursor-pointer ml-2"
                                onClick={() => removeFile(index, setProofOfBirth, proofOfBirth)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Identification Proof */}
            <div className="flex items-center mt-4">
                <input
                    type="file"
                    id="idproof-upload"
                    className="hidden"
                    multiple
                    onChange={(e) => handleFileChange(e, setIdentificationProof)}
                />
                <FontAwesomeIcon
                    icon={faPaperclip}
                    className="text-gray-700 mr-2 cursor-pointer"
                    onClick={() => document.getElementById('idproof-upload')?.click()}
                />
                <h5 className="text-lg text-gray-700">Identification Proof (Aadhar Card or other ID)</h5>
                <div className="flex ml-4 space-x-2">
                    {identificationProof.map((file, index) => (
                        <div key={index} className="flex items-center">
                            <p className="text-sm text-gray-600">{file.name}</p>
                            <FontAwesomeIcon
                                icon={faTimes}
                                className="text-red-500 cursor-pointer ml-2"
                                onClick={() => removeFile(index, setIdentificationProof, identificationProof)}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* Residence Proof */}
            <div className="flex items-center mt-4">
                <input
                    type="file"
                    id="residence-proof-upload"
                    className="hidden"
                    multiple
                    onChange={(e) => handleFileChange(e, setResidenceProof)}
                />
                <FontAwesomeIcon
                    icon={faPaperclip}
                    className="text-gray-700 mr-2 cursor-pointer"
                    onClick={() => document.getElementById('residence-proof-upload')?.click()}
                />
                <h5 className="text-lg text-gray-700">
                    Residence Proof (Election Card, Electricity Bill, Rent Deed, etc.)
                </h5>
                <div className="flex ml-4 space-x-2">
                    {residenceProof.map((file, index) => (
                        <div key={index} className="flex items-center">
                            <p className="text-sm text-gray-600">{file.name}</p>
                            <FontAwesomeIcon
                                icon={faTimes}
                                className="text-red-500 cursor-pointer ml-2"
                                onClick={() => removeFile(index, setResidenceProof, residenceProof)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Firearm Training Certificate */}
            <div className="flex items-center mt-4">
                <input
                    type="file"
                    id="firearm-training-upload"
                    className="hidden"
                    multiple
                    onChange={(e) => handleFileChange(e, setFirearmTrainingCertificate)}
                />
                <FontAwesomeIcon
                    icon={faPaperclip}
                    className="text-gray-700 mr-2 cursor-pointer"
                    onClick={() => document.getElementById('firearm-training-upload')?.click()}
                />
                <h5 className="text-lg text-gray-700">Firearm Training Certificate (Form S-1)</h5>
                <div className="flex ml-4 space-x-2">
                    {firearmTrainingCertificate.map((file, index) => (
                        <div key={index} className="flex items-center">
                            <p className="text-sm text-gray-600">{file.name}</p>
                            <FontAwesomeIcon
                                icon={faTimes}
                                className="text-red-500 cursor-pointer ml-2"
                                onClick={() => removeFile(index, setFirearmTrainingCertificate, firearmTrainingCertificate)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Safe Use and Storage Undertaking */}
            <div className="flex items-center mt-4">
                <input
                    type="file"
                    id="safe-storage-upload"
                    className="hidden"
                    multiple
                    onChange={(e) => handleFileChange(e, setSafeStorageUndertaking)}
                />
                <FontAwesomeIcon
                    icon={faPaperclip}
                    className="text-gray-700 mr-2 cursor-pointer"
                    onClick={() => document.getElementById('safe-storage-upload')?.click()}
                />
                <h5 className="text-lg text-gray-700">Safe Use and Storage Undertaking (Form S-2)</h5>
                <div className="flex ml-4 space-x-2">
                    {safeStorageUndertaking.map((file, index) => (
                        <div key={index} className="flex items-center">
                            <p className="text-sm text-gray-600">{file.name}</p>
                            <FontAwesomeIcon
                                icon={faTimes}
                                className="text-red-500 cursor-pointer ml-2"
                                onClick={() => removeFile(index, setSafeStorageUndertaking, safeStorageUndertaking)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Educational and Professional Qualification Certificate */}
            <div className="flex items-center mt-4">
                <input
                    type="file"
                    id="qualification-upload"
                    className="hidden"
                    multiple
                    onChange={(e) => handleFileChange(e, setQualificationCertificate)}
                />
                <FontAwesomeIcon
                    icon={faPaperclip}
                    className="text-gray-700 mr-2 cursor-pointer"
                    onClick={() => document.getElementById('qualification-upload')?.click()}
                />
                <h5 className="text-lg text-gray-700">Educational and Professional Qualification Certificate</h5>
                <div className="flex ml-4 space-x-2">
                    {qualificationCertificate.map((file, index) => (
                        <div key={index} className="flex items-center">
                            <p className="text-sm text-gray-600">{file.name}</p>
                            <FontAwesomeIcon
                                icon={faTimes}
                                className="text-red-500 cursor-pointer ml-2"
                                onClick={() => removeFile(index, setQualificationCertificate, qualificationCertificate)}
                            />
                        </div>
                    ))}
                </div>
            </div>


            <div className="flex flex-col gap-6">
                {/* Existing fields */}
                {/* Passport Photo */}
                <div className="flex items-center mt-4">
                    <input
                        type="file"
                        id="passport-upload"
                        className="hidden"
                        multiple
                        onChange={(e) => handleFileChange(e, setPassportPhotos)}
                    />
                    <FontAwesomeIcon
                        icon={faPaperclip}
                        className="text-gray-700 mr-2 cursor-pointer"
                        onClick={() => document.getElementById('passport-upload')?.click()}
                    />
                    <h5 className="text-lg text-gray-700">Passport-Sized Photo (White Background)</h5>
                    <div className="flex ml-4 space-x-2">
                        {passportPhotos.map((file, index) => (
                            <div key={index} className="flex items-center">
                                <p className="text-sm text-gray-600">{file.name}</p>
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className="text-red-500 cursor-pointer ml-2"
                                    onClick={() => removeFile(index, setPassportPhotos, passportPhotos)}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* New Fields */}
                {/* Protection for Destruction of Wild Animal */}
                <div className="flex items-center mt-4">
                    <input
                        type="file"
                        id="wild-animal-protection-upload"
                        className="hidden"
                        multiple
                        onChange={(e) => handleFileChange(e, setWildAnimalProtection)}
                    />
                    <FontAwesomeIcon
                        icon={faPaperclip}
                        className="text-gray-700 mr-2 cursor-pointer"
                        onClick={() => document.getElementById('wild-animal-protection-upload')?.click()}
                    />
                    <h5 className="text-lg text-gray-700">Protection for Destruction of Wild Animal</h5>
                    <div className="flex ml-4 space-x-2">
                        {wildAnimalProtection.map((file, index) => (
                            <div key={index} className="flex items-center">
                                <p className="text-sm text-gray-600">{file.name}</p>
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className="text-red-500 cursor-pointer ml-2"
                                    onClick={() => removeFile(index, setWildAnimalProtection, wildAnimalProtection)}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Permit from the Authority */}
                <div className="flex items-center mt-4">
                    <input
                        type="file"
                        id="wildlife-permit-upload"
                        className="hidden"
                        multiple
                        onChange={(e) => handleFileChange(e, setWildlifePermit)}
                    />
                    <FontAwesomeIcon
                        icon={faPaperclip}
                        className="text-gray-700 mr-2 cursor-pointer"
                        onClick={() => document.getElementById('wildlife-permit-upload')?.click()}
                    />
                    <h5 className="text-lg text-gray-700">
                        Permit from the Authority under the Wildlife (Protection) Act, 1972
                    </h5>
                    <div className="flex ml-4 space-x-2">
                        {wildlifePermit.map((file, index) => (
                            <div key={index} className="flex items-center">
                                <p className="text-sm text-gray-600">{file.name}</p>
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className="text-red-500 cursor-pointer ml-2"
                                    onClick={() => removeFile(index, setWildlifePermit, wildlifePermit)}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Claims for Special Consideration */}
                <div className="flex items-center mt-4">
                    <input
                        type="file"
                        id="special-consideration-upload"
                        className="hidden"
                        multiple
                        onChange={(e) => handleFileChange(e, setSpecialConsideration)}
                    />
                    <FontAwesomeIcon
                        icon={faPaperclip}
                        className="text-gray-700 mr-2 cursor-pointer"
                        onClick={() => document.getElementById('special-consideration-upload')?.click()}
                    />
                    <h5 className="text-lg text-gray-700">Claims for Special Consideration for Obtaining the License</h5>
                    <div className="flex ml-4 space-x-2">
                        {specialConsideration.map((file, index) => (
                            <div key={index} className="flex items-center">
                                <p className="text-sm text-gray-600">{file.name}</p>
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className="text-red-500 cursor-pointer ml-2"
                                    onClick={() => removeFile(index, setSpecialConsideration, specialConsideration)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Attachments;
